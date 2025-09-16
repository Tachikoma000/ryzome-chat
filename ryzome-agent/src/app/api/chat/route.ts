import { NextRequest, NextResponse } from 'next/server';
import { generateStreamingResponse, countTokens } from '@/lib/gemini';
import { getRyzomeContext, formatConversationHistory } from '@/lib/ryzome-context';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { message, conversationId, history } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Create conversation if it doesn't exist
    let currentConversationId = conversationId;
    if (!currentConversationId) {
      const { data, error } = await supabase
        .from('conversations')
        .insert({ 
          title: message.substring(0, 50) + (message.length > 50 ? '...' : '')
        })
        .select()
        .single();
      
      if (error) {
        console.error('Error creating conversation:', error);
        return NextResponse.json({ error: 'Failed to create conversation' }, { status: 500 });
      }
      
      currentConversationId = data.id;
    }

    // Save user message to database
    const { error: userMessageError } = await supabase
      .from('messages')
      .insert({
        conversation_id: currentConversationId,
        content: message,
        role: 'user'
      });

    if (userMessageError) {
      console.error('Error saving user message:', userMessageError);
    }

    // Format conversation history
    const conversationHistory = history ? formatConversationHistory(history) : '';
    
    // Get full context for AI
    const fullPrompt = getRyzomeContext(message, conversationHistory);
    
    // Count tokens for monitoring
    const tokenCount = await countTokens(fullPrompt);
    console.log(`Prompt token count: ${tokenCount}`);

    // Generate streaming response
    const stream = await generateStreamingResponse(fullPrompt);
    
    // Create a readable stream to send back to client
    const encoder = new TextEncoder();
    let fullResponse = '';
    
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.text();
            fullResponse += text;
            controller.enqueue(encoder.encode(text));
          }
          
          // Save assistant response to database
          await supabase
            .from('messages')
            .insert({
              conversation_id: currentConversationId,
              content: fullResponse,
              role: 'assistant',
              tokens_used: tokenCount
            });
          
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        }
      }
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Conversation-Id': currentConversationId,
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}
