
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart, Bot } from 'lucide-react';

export type MessageType = 'user' | 'bot';

interface ChatMessageProps {
  content: string;
  type: MessageType;
  timestamp?: string;
  isLoading?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ 
  content, 
  type, 
  timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  isLoading = false
}) => {
  const isUser = type === 'user';
  
  return (
    <div 
      className={cn(
        "flex w-full mb-4 animate-fade-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <div className="flex-shrink-0 mr-2">
          <div className="w-8 h-8 rounded-full bg-nelson-secondary flex items-center justify-center text-white">
            <Heart className="h-4 w-4" />
          </div>
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[80%] p-3 rounded-lg",
          isUser 
            ? "bg-nelson-primary text-white rounded-tr-none" 
            : "bg-muted text-foreground rounded-tl-none"
        )}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "200ms" }}></div>
            <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "400ms" }}></div>
          </div>
        ) : (
          <div>
            <p className="whitespace-pre-wrap">{content}</p>
            <div className={cn(
              "text-xs mt-1", 
              isUser ? "text-nelson-primary-foreground/70" : "text-muted-foreground"
            )}>
              {timestamp}
            </div>
          </div>
        )}
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 ml-2">
          <div className="w-8 h-8 rounded-full bg-nelson-dark flex items-center justify-center text-white">
            <User className="h-4 w-4" />
          </div>
        </div>
      )}
    </div>
  );
};

const User = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
    <path d="M3 21v-2c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v2" />
  </svg>
);

export default ChatMessage;
