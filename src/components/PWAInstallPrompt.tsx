
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt: React.FC = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      // Store the event for later use
      setInstallPrompt(e as BeforeInstallPromptEvent);
      // Show the install prompt banner if not previously dismissed
      const promptDismissed = localStorage.getItem('pwaPromptDismissed');
      if (!promptDismissed) {
        setShowPrompt(true);
      }
    };
    
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', handler);
    
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('App is already installed and running as standalone');
    }
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);
  
  const handleInstallClick = () => {
    if (!installPrompt) return;
    
    // Show the install prompt
    installPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        toast({
          title: "Installation Started",
          description: "Nelson-GPT is being installed on your device.",
        });
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      // Reset the install prompt variable
      setInstallPrompt(null);
      setShowPrompt(false);
    });
  };
  
  const dismissPrompt = () => {
    setShowPrompt(false);
    // Store the user's preference
    localStorage.setItem('pwaPromptDismissed', 'true');
  };
  
  if (!showPrompt) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-nelson-primary bg-opacity-95 text-white flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm md:text-base">
          Install Nelson-GPT on your device for faster access and offline use
        </p>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={handleInstallClick}>
          Install
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-1" onClick={dismissPrompt}>
          <X size={18} />
        </Button>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
