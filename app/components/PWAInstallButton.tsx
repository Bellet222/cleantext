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
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || 
                            (window.navigator as any).standalone === true;

    setIsIOS(isIOSDevice);
    setIsStandalone(isStandaloneMode);

    if (isStandaloneMode) {
      setShowInstallButton(false);
      return;
    }

    if (isIOSDevice) {
      setShowInstallButton(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      alert('Для установки приложения на iPhone:\n\n1. Нажмите кнопку "Поделиться" (квадрат со стрелкой вверх)\n2. Прокрутите вниз и выберите "На экран Домой"\n3. Нажмите "Добавить"');
      return;
    }

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
        title={isIOS ? "Инструкция по установке на iPhone" : "Установить приложение"}
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
      <span className="text-sm sm:text-base">
        {isIOS ? 'Как установить на iPhone' : 'Установить приложение'}
      </span>
    </button>
  );
}