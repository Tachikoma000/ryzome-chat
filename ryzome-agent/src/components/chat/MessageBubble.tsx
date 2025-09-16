import { cn } from '@/lib/utils';
import { Copy, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { useTheme } from '@/contexts/ThemeContext';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
  isStreaming?: boolean;
}

export function MessageBubble({ message, isUser, timestamp, isStreaming = false }: MessageBubbleProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(
      "flex gap-3 mb-4 w-full group",
      isUser ? "justify-end" : "justify-start"
    )}>
      {/* Avatar - Only show for assistant */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9AE064] flex items-center justify-center shadow-sm">
          <Bot className="w-4 h-4 text-black" />
        </div>
      )}

      {/* Message Content */}
      <div className={cn(
        "flex flex-col gap-1 max-w-[75%] min-w-0",
        isUser ? "items-end" : "items-start"
      )}>
        {/* Message Bubble */}
        <div className={cn(
          "rounded-2xl px-4 py-3 shadow-sm",
          isUser 
            ? "bg-[#9AE064] text-black rounded-br-md" 
            : theme === 'dark' 
              ? "bg-black border border-gray-800 rounded-bl-md text-white"
              : "bg-white border border-gray-200 rounded-bl-md text-gray-900"
        )}>
          <div className={cn(
            "prose prose-sm max-w-none",
            isUser 
              ? "prose-invert text-black [&>*]:text-black [&_strong]:text-black [&_code]:text-black [&_pre]:bg-black/10 [&_pre]:text-black" 
              : "prose-invert [&_pre]:bg-gray-900 [&_code]:bg-gray-700 [&_code]:text-gray-200 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded"
          )}>
          {isUser ? (
            // For user messages, render as plain text
            <div className="text-sm leading-relaxed">
              {message}
            </div>
          ) : (
            // For AI messages, render as markdown
            <div className="text-sm leading-relaxed">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  // Custom styling for different markdown elements
                  h1: ({ children }) => <h1 className="text-lg font-bold mb-2 mt-0">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-base font-bold mb-2 mt-3 first:mt-0">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-sm font-bold mb-1 mt-2 first:mt-0">{children}</h3>,
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  ul: ({ children }) => <ul className="mb-2 pl-4 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="mb-2 pl-4 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="text-sm">{children}</li>,
                  code: ({ children, ...props }) => {
                    const isInline = !props.className?.includes('language-');
                    return isInline ? (
                      <code className="text-xs font-mono">{children}</code>
                    ) : (
                      <code className="block text-xs font-mono p-2 rounded overflow-x-auto" {...props}>{children}</code>
                    );
                  },
                  pre: ({ children }) => <pre className="mb-2 rounded overflow-x-auto">{children}</pre>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-2 border-gray-300 pl-3 italic mb-2">{children}</blockquote>
                  ),
                  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                }}
              >
                {message}
              </ReactMarkdown>
            </div>
          )}
          {isStreaming && (
            <span className="inline-block w-2 h-4 bg-current ml-1 animate-pulse rounded-sm" />
          )}
          </div>
        </div>

        {/* Message Meta */}
        <div className={cn(
          "flex items-center gap-2 px-1",
          isUser ? "flex-row-reverse" : "flex-row"
        )}>
          <span className="text-xs text-gray-500">
            {timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
          
          {!isUser && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-6 px-2 text-xs text-gray-400 hover:text-[#9AE064] hover:bg-gray-700/50 opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <Copy className="w-3 h-3 mr-1" />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          )}
        </div>
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-sm">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
}
