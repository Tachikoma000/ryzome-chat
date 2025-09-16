import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Clock, Trash2 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ConversationCardProps {
  id: string;
  title: string;
  preview: string;
  messageCount: number;
  updatedAt: string;
  onClick: () => void;
  onDelete?: () => void;
}

export function ConversationCard({ 
  title, 
  preview, 
  messageCount, 
  updatedAt, 
  onClick, 
  onDelete 
}: ConversationCardProps) {
  const { theme } = useTheme();
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else if (diffInHours < 168) { // 7 days
      return `${Math.floor(diffInHours / 24)}d ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <Card 
      className={`transition-all duration-200 cursor-pointer group ${
        theme === 'dark' 
          ? 'bg-black border border-gray-800 hover:border-gray-700' 
          : 'bg-white border border-gray-200 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <CardContent className="px-4 py-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {/* Conversation Title */}
            <h3 className={`text-sm font-medium truncate mb-1 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h3>
            
            {/* Preview Text */}
            <p className={`text-xs line-clamp-1 mb-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {preview}
            </p>
            
            {/* Metadata */}
            <div className={`flex items-center gap-3 text-xs ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                <span>{messageCount} messages</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{formatDate(updatedAt)}</span>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {onDelete && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDelete}
                className="h-6 w-6 p-0 text-gray-400 hover:text-red-400 hover:bg-red-400/10"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            )}
          </div>
        </div>
        
        {/* Hover indicator */}
        <div className="absolute inset-0 rounded-lg bg-[#9AE064]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </CardContent>
    </Card>
  );
}
