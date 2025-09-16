'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ConversationCard } from './ConversationCard';
import { useTheme } from '@/contexts/ThemeContext';
import { Plus, MessageCircle, Menu, ChevronLeft } from 'lucide-react';

interface ConversationSummary {
  id: string;
  title: string;
  preview: string;
  messageCount: number;
  updatedAt: string;
}

interface SidebarProps {
  conversations: ConversationSummary[];
  onNewChat: () => void;
  onSelectConversation: (id: string) => void;
  onDeleteConversation: (id: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({
  conversations,
  onNewChat,
  onSelectConversation,
  onDeleteConversation,
  isCollapsed,
  onToggleCollapse
}: SidebarProps) {
  const { theme } = useTheme();

  return (
    <>
      {/* Sidebar */}
      <div className={`${
        isCollapsed ? 'w-0' : 'w-80'
      } transition-all duration-300 ease-in-out overflow-hidden flex-shrink-0`}>
        <div className={`w-80 h-full ${
          theme === 'dark' 
            ? 'bg-black border-r border-gray-800' 
            : 'bg-gray-50 border-r border-gray-200'
        } flex flex-col`}>
          {/* Sidebar Header */}
          <div className={`p-6 ${theme === 'dark' ? 'border-b border-gray-800' : 'border-b border-gray-200'}`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1"></div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleCollapse}
                className={`p-2 ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </div>
            
            {/* New Chat Button */}
            <Button
              onClick={onNewChat}
              className="w-full bg-[#9AE064] hover:bg-[#8BC653] text-black font-medium rounded-lg transition-colors duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Chat
            </Button>
          </div>

          {/* Fixed Recent Conversations Header */}
          <div className={`px-6 py-4 ${theme === 'dark' ? 'border-b border-gray-800' : 'border-b border-gray-200'}`}>
            <h3 className={`text-sm font-medium flex items-center gap-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <MessageCircle className="w-4 h-4" />
              Recent Conversations
            </h3>
          </div>

          {/* Scrollable Conversations List */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="px-6 py-4 space-y-3">
                {conversations.map((conversation) => (
                  <ConversationCard
                    key={conversation.id}
                    id={conversation.id}
                    title={conversation.title}
                    preview={conversation.preview}
                    messageCount={conversation.messageCount}
                    updatedAt={conversation.updatedAt}
                    onClick={() => onSelectConversation(conversation.id)}
                    onDelete={() => onDeleteConversation(conversation.id)}
                  />
                ))}
                
                {conversations.length === 0 && (
                  <div className={`text-center py-8 text-sm ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    No conversations yet
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* Collapse Toggle Button - Shows when sidebar is collapsed */}
      {isCollapsed && (
        <div className="absolute top-4 left-4 z-20">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
            className={`p-2 ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-white hover:bg-gray-800/50 bg-gray-900/80' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50 bg-white/80'
            } backdrop-blur-sm rounded-lg shadow-lg`}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      )}
    </>
  );
}
