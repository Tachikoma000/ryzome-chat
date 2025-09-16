import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data: conversations, error } = await supabase
      .from('conversations')
      .select(`
        id,
        title,
        created_at,
        updated_at,
        messages!inner(content, role, created_at)
      `)
      .order('updated_at', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Error fetching conversations:', error);
      return NextResponse.json({ error: 'Failed to fetch conversations' }, { status: 500 });
    }

    // Format conversations with preview and message count
    const formattedConversations = conversations?.map(conv => {
      const messages = conv.messages || [];
      const lastMessage = messages[messages.length - 1];
      const messageCount = messages.length;
      
      return {
        id: conv.id,
        title: conv.title,
        created_at: conv.created_at,
        updated_at: conv.updated_at,
        preview: lastMessage?.content?.substring(0, 100) + (lastMessage?.content?.length > 100 ? '...' : '') || 'No messages yet',
        messageCount,
        lastMessageRole: lastMessage?.role || 'user'
      };
    }) || [];

    return NextResponse.json({ conversations: formattedConversations });
  } catch (error) {
    console.error('Conversations API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}
