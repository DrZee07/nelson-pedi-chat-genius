
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage, { MessageType } from './ChatMessage';
import ChatInput from './ChatInput';

interface Message {
  id: string;
  content: string;
  type: MessageType;
  timestamp: string;
}

interface ChatContainerProps {
  className?: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ className }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Nelson-GPT, your pediatric assistant powered by Nelson Textbook of Pediatrics. How can I help you today?",
      type: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      type: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      // In a real app, this would be a call to your backend API
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your question. This is a placeholder response. In the real implementation, this would use RAG with Nelson Textbook of Pediatrics content and the Mistral API to generate a helpful, accurate response for your pediatric question.",
        type: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            type={message.type}
            timestamp={message.timestamp}
          />
        ))}
        
        {isLoading && (
          <ChatMessage
            content=""
            type="bot"
            isLoading={true}
          />
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatContainer;
