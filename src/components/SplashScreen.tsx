
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // First show the icon
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Then show the full splash for a bit, then fade out
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-nelson-primary z-50 transition-opacity duration-500">
      <div className="flex items-center justify-center flex-col">
        <Heart 
          className="text-white animate-pulse-beat" 
          size={64}
          strokeWidth={1.5} 
        />
        
        <div className={`mt-6 transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-3xl font-bold text-white text-center">Nelson-GPT</h1>
          <p className="text-white/80 text-center mt-2">Powered by Nelson Textbook of Pediatrics</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
