'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';
import { ConversationCard } from './ConversationCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, MessageCircle, Plus, ArrowLeft, Send } from 'lucide-react';
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ConversationSummary {
  id: string;
  title: string;
  preview: string;
  messageCount: number;
  updatedAt: string;
}

export function ChatContainer() {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [streamingMessage, setStreamingMessage] = useState('');
  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [showHistory, setShowHistory] = useState(true);
  const [loadingConversations, setLoadingConversations] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Load conversation history on component mount
  useEffect(() => {
    loadConversations();
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, streamingMessage]);

  // Hide history when there are messages
  useEffect(() => {
    setShowHistory(messages.length === 0 && !streamingMessage);
  }, [messages.length, streamingMessage]);

  const loadConversations = async () => {
    setLoadingConversations(true);
    try {
      const response = await fetch('/api/conversations');
      if (response.ok) {
        const data = await response.json();
        setConversations(data.conversations || []);
      }
    } catch (error) {
      console.error('Error loading conversations:', error);
    } finally {
      setLoadingConversations(false);
    }
  };

  const loadConversation = async (convId: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/conversations/${convId}`);
      if (response.ok) {
        const data = await response.json();
        
        // Convert messages to our format
        const formattedMessages: Message[] = data.messages.map((msg: any) => ({
          id: msg.id,
          content: msg.content,
          role: msg.role,
          timestamp: new Date(msg.created_at)
        }));
        
        setMessages(formattedMessages);
        setConversationId(convId);
        setShowHistory(false);
      }
    } catch (error) {
      console.error('Error loading conversation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const startNewConversation = () => {
    setMessages([]);
    setConversationId(null);
    setStreamingMessage('');
    setShowHistory(false);
  };

  const deleteConversation = async (convId: string) => {
    try {
      const response = await fetch(`/api/conversations/${convId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setConversations(prev => prev.filter(conv => conv.id !== convId));
        
        // If we're currently viewing the deleted conversation, reset
        if (conversationId === convId) {
          setMessages([]);
          setConversationId(null);
          setShowHistory(true);
        }
      }
    } catch (error) {
      console.error('Error deleting conversation:', error);
    }
  };

  const handleSendMessage = async (userMessage: string) => {
    if (isLoading) return;

    // Add user message immediately
    const userMsg: Message = {
      id: Date.now().toString(),
      content: userMessage,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);
    setStreamingMessage('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationId,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      // Get conversation ID from response headers
      const newConversationId = response.headers.get('X-Conversation-Id');
      if (newConversationId && !conversationId) {
        setConversationId(newConversationId);
        // Refresh conversation list when a new conversation is created
        loadConversations();
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          fullResponse += chunk;
          setStreamingMessage(fullResponse);
        }

        // Add complete assistant message
        const assistantMsg: Message = {
          id: (Date.now() + 1).toString(),
          content: fullResponse,
          role: 'assistant',
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, assistantMsg]);
        setStreamingMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Fixed Header */}
      <div className={`flex-shrink-0 border-b ${theme === 'dark' ? 'border-gray-800 bg-black/95' : 'border-gray-200 bg-white/95'} backdrop-blur-md supports-[backdrop-filter]:${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} sticky top-0 z-10 shadow-lg`}>
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/images/icons/ryzome_logo.svg"
                  alt="Ryzome"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h1 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Ryzome Agent
                </h1>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Your AI assistant for all things Ryzome
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Messages Area - Scrollable Container */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="container max-w-4xl mx-auto px-4 py-6">
            {showHistory ? (
              <div className="space-y-6">
                {/* Welcome Header */}
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-2">
                    <div className="w-80 h-80">
                      <DotLottieReact
                        src="https://lottie.host/dfa54129-edbc-4f87-b4d6-4f8a044aed66/6nfNBiG88d.lottie"
                        loop
                        autoplay
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  
                  {/* Prominent Input Field */}
                  <div className="max-w-2xl mx-auto mb-6">
                    <div className="relative">
                      <Input
                        placeholder="Let's talk about Ryzome..."
                        className={`w-full h-14 rounded-2xl transition-all duration-200 px-6 text-base shadow-lg ${
                          theme === 'dark'
                            ? 'border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-400 focus:bg-gray-800/50'
                            : 'border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:bg-white'
                        } focus:border-[#9AE064] focus:ring-2 focus:ring-[#9AE064]/20`}
                        onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                          if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                            handleSendMessage(e.currentTarget.value.trim());
                            e.currentTarget.value = '';
                          }
                        }}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-[#9AE064] flex items-center justify-center">
                          <Send className="w-4 h-4 text-black" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick suggestions */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendMessage("What is Ryzome?")}
                        className={`text-xs rounded-full px-4 py-2 h-auto backdrop-blur-sm transition-colors duration-200 ${
                          theme === 'dark'
                            ? 'border-gray-700 bg-black/50 hover:bg-gray-800/50 text-gray-300 hover:text-white'
                            : 'border-gray-300 bg-white/80 hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        What is Ryzome?
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendMessage("How do I get started?")}
                        className={`text-xs rounded-full px-4 py-2 h-auto backdrop-blur-sm transition-colors duration-200 ${
                          theme === 'dark'
                            ? 'border-gray-700 bg-black/50 hover:bg-gray-800/50 text-gray-300 hover:text-white'
                            : 'border-gray-300 bg-white/80 hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        Getting started
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendMessage("How do I add images?")}
                        className={`text-xs rounded-full px-4 py-2 h-auto backdrop-blur-sm transition-colors duration-200 ${
                          theme === 'dark'
                            ? 'border-gray-700 bg-black/50 hover:bg-gray-800/50 text-gray-300 hover:text-white'
                            : 'border-gray-300 bg-white/80 hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        Adding images
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendMessage("What are keyboard shortcuts?")}
                        className={`text-xs rounded-full px-4 py-2 h-auto backdrop-blur-sm transition-colors duration-200 ${
                          theme === 'dark'
                            ? 'border-gray-700 bg-black/50 hover:bg-gray-800/50 text-gray-300 hover:text-white'
                            : 'border-gray-300 bg-white/80 hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        Keyboard shortcuts
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Conversation History */}
                {conversations.length > 0 && (
                  <div>
                    <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <MessageCircle className="w-5 h-5" />
                      Recent Conversations
                    </h3>
                    
                    <div className="grid gap-3">
                      {conversations.map((conversation) => (
                        <ConversationCard
                          key={conversation.id}
                          id={conversation.id}
                          title={conversation.title}
                          preview={conversation.preview}
                          messageCount={conversation.messageCount}
                          updatedAt={conversation.updatedAt}
                          onClick={() => loadConversation(conversation.id)}
                          onDelete={() => deleteConversation(conversation.id)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Empty State */}
                {conversations.length === 0 && !loadingConversations && (
                  <div className="text-center py-12">
                    <div className="text-gray-500 mb-4">No previous conversations yet</div>
                    <div className="bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-800 shadow-sm inline-block">
                      <div className="text-sm text-gray-300 font-medium">
                        Try asking: &quot;What is Ryzome?&quot; or &quot;How do I get started?&quot;
                      </div>
                    </div>
                  </div>
                )}

                {/* Loading State */}
                {loadingConversations && (
                  <div className="text-center py-12">
                    <div className="text-gray-400">Loading conversations...</div>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Back to History Button */}
                {conversationId && (
                  <div className="mb-4">
                    <Button
                      onClick={() => setShowHistory(true)}
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white hover:bg-gray-800/50"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Conversations
                    </Button>
                  </div>
                )}

                {/* Messages */}
                {messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message.content}
                    isUser={message.role === 'user'}
                    timestamp={message.timestamp}
                  />
                ))}

                {/* Streaming message */}
                {streamingMessage && (
                  <MessageBubble
                    message={streamingMessage}
                    isUser={false}
                    timestamp={new Date()}
                    isStreaming={true}
                  />
                )}
              </>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Fixed Input Area - Only show when not on history page */}
      {!showHistory && (
        <div className="flex-shrink-0 sticky bottom-0 z-10">
          <MessageInput
            onSend={handleSendMessage}
            disabled={isLoading}
          />
        </div>
      )}
    </div>
  );
}
