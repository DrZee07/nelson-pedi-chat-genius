
import React from 'react';
import { ChevronLeft, BookOpen, User, Settings, HelpCircle, LogOut, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarMenuProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: <BookOpen className="h-5 w-5" />, label: 'Chats', href: '/' },
    { icon: <User className="h-5 w-5" />, label: 'Profile', href: '/profile' },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', href: '/settings' },
    { icon: <HelpCircle className="h-5 w-5" />, label: 'Help', href: '/help' },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-full w-64 bg-sidebar flex flex-col transition-transform duration-300 ease-in-out shadow-lg",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-nelson-primary mr-2 animate-pulse-beat" />
          <h1 className="text-xl font-bold text-nelson-primary">Nelson-GPT</h1>
        </div>
        <button onClick={toggleSidebar} className="p-1 rounded-full hover:bg-sidebar-accent">
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex items-center p-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="border-t border-sidebar-border p-4">
        <button className="flex w-full items-center p-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
          <LogOut className="h-5 w-5" />
          <span className="ml-3">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default SidebarMenu;
