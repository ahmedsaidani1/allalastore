import React, { useEffect, useState } from 'react';
import { Gamepad2, Zap } from 'lucide-react';

interface LoadingSpinnerProps {
  onLoadingComplete: () => void;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const loadingTexts = [
      'Initializing...',
      'Loading Games...',
      'Preparing Experience...',
      'Almost Ready...',
      'Welcome to Allala Store!'
    ];

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update loading text based on progress
        if (newProgress < 25) {
          setLoadingText(loadingTexts[0]);
        } else if (newProgress < 50) {
          setLoadingText(loadingTexts[1]);
        } else if (newProgress < 75) {
          setLoadingText(loadingTexts[2]);
        } else if (newProgress < 95) {
          setLoadingText(loadingTexts[3]);
        } else {
          setLoadingText(loadingTexts[4]);
        }

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-[#0B0C10] via-[#1a1a2e] to-[#0B0C10] flex items-center justify-center">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Main Spinner Container */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="w-32 h-32 rounded-full border-4 border-gray-800 relative">
            {/* Spinning Gradient Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#8B5CF6] animate-spin"
                 style={{ 
                   mask: 'conic-gradient(transparent 270deg, white 270deg)',
                   WebkitMask: 'conic-gradient(transparent 270deg, white 270deg)'
                 }}>
            </div>
            
            {/* Inner Pulsing Circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#8B5CF6]/20 to-[#3B82F6]/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-pulse">
              <div className="relative">
                <Gamepad2 className="h-8 w-8 text-white animate-bounce" />
                <div className="absolute -top-1 -right-1">
                  <Zap className="h-4 w-4 text-yellow-400 animate-ping" />
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting Elements */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-full shadow-lg shadow-purple-500/50"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full shadow-lg shadow-blue-500/50"></div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent mb-2 animate-pulse">
            Allala Store
          </h1>
          <p className="text-gray-400 text-lg">Your Gaming Universe Awaits</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">{loadingText}</span>
            <span className="text-purple-400 font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/5 via-transparent to-[#3B82F6]/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;