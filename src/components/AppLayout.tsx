
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import SidebarMenu from './SidebarMenu';
import ChatContainer from './ChatContainer';
import SplashScreen from './SplashScreen';

const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isSidebarOpen && !target.closest('aside')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-background">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-border">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center justify-center flex-1">
          <h1 className="text-xl font-bold text-nelson-primary flex items-center">
            Nelson-GPT
          </h1>
        </div>
        <div className="w-10" /> {/* Empty div for alignment */}
      </header>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative">
        <SidebarMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        {/* Backdrop when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30"
            onClick={toggleSidebar}
          />
        )}
        
        {children || <ChatContainer />}
      </div>
    </div>
  );
};

export default AppLayout;
