'use client';

import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import Button from './Button';

interface PWAInstallButtonProps {
  isDark: boolean;
  variant?: 'header' | 'footer';
  className?: string;
}

export default function PWAInstallButton({ isDark, variant = 'header', className = '' }: PWAInstallButtonProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallButton(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowInstallButton(false);
    }
    
    setDeferredPrompt(null);
  };

  if (!showInstallButton) return null;

  if (variant === 'header') {
    return (
      <Button
        onClick={handleInstallClick}
        isDark={isDark}
        variant="icon"
        className={`w-8 h-8 sm:w-10 sm:h-10 ${className}`}
        title="Установить приложение"
      >
        <Download 
          size={18} 
          color={isDark ? "white" : undefined} 
          className="sm:w-5 sm:h-5" 
        />
      </Button>
    );
  }

  return (
    <button
      onClick={handleInstallClick}
      className={`inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        isDark
          ? 'bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
          : 'bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
      } ${className}`}
    >
      <Download size={18} />
      <span className="text-sm sm:text-base">Установить приложение</span>
    </button>
  );
}

