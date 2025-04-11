
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading = false }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  const clearInput = () => {
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-border bg-background p-3 pb-safe">
      <div className="flex items-end w-full rounded-lg bg-muted border border-input shadow-sm">
        <textarea
          ref={textareaRef}
          className={cn(
            "flex-1 resize-none bg-transparent py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 max-h-32",
            message && "pr-10"
          )}
          placeholder="Message Nelson-GPT..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          rows={1}
        />
        {message && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute right-14 bottom-5 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <div className="flex px-3 py-2">
          <button
            type="button"
            className="mr-2 rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
            aria-label="Record voice"
          >
            <Mic className="h-5 w-5" />
          </button>
          <button
            type="submit"
            disabled={!message.trim() || isLoading}
            className={cn(
              "rounded-full p-2 transition-colors",
              message.trim() && !isLoading
                ? "bg-nelson-primary text-white hover:bg-nelson-primary/90"
                : "bg-muted-foreground/30 text-muted-foreground cursor-not-allowed"
            )}
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
