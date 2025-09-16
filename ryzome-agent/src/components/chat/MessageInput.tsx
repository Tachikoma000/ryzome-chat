import { useState, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Loader2 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface MessageInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
  showSuggestions?: boolean;
}

export function MessageInput({ 
  onSend, 
  disabled = false, 
  placeholder = "Ask me anything about Ryzome...",
  showSuggestions = false
}: MessageInputProps) {
  const { theme } = useTheme();
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`border-t ${theme === 'dark' ? 'border-gray-800 bg-black/95' : 'border-gray-200 bg-white/95'} backdrop-blur supports-[backdrop-filter]:${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} shadow-lg`}>
      <div className="container max-w-4xl mx-auto p-4">
        {/* Input Field with Integrated Send Button */}
        <div className="mb-4">
          <div className="relative">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              disabled={disabled}
              className={`w-full h-14 rounded-2xl transition-all duration-200 px-6 text-base shadow-lg ${
                theme === 'dark'
                  ? 'border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-400 focus:bg-gray-800/50'
                  : 'border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:bg-white'
              } focus:border-[#9AE064] focus:ring-2 focus:ring-[#9AE064]/20`}
              autoFocus
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <button
                onClick={handleSend}
                disabled={!message.trim() || disabled}
                className="w-8 h-8 rounded-full bg-[#9AE064] hover:bg-[#8BC653] disabled:bg-gray-600 transition-colors duration-200 flex items-center justify-center"
              >
                {disabled ? (
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                ) : (
                  <Send className="w-4 h-4 text-black" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Quick action buttons - Only show when showSuggestions is true */}
        {showSuggestions && (
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSend("What is Ryzome?")}
              disabled={disabled}
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
              onClick={() => onSend("How do I get started?")}
              disabled={disabled}
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
              onClick={() => onSend("How do I add images?")}
              disabled={disabled}
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
              onClick={() => onSend("What are keyboard shortcuts?")}
              disabled={disabled}
              className={`text-xs rounded-full px-4 py-2 h-auto backdrop-blur-sm transition-colors duration-200 ${
                theme === 'dark'
                  ? 'border-gray-700 bg-black/50 hover:bg-gray-800/50 text-gray-300 hover:text-white'
                  : 'border-gray-300 bg-white/80 hover:bg-gray-50 text-gray-700 hover:text-gray-900'
              }`}
            >
              Keyboard shortcuts
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
