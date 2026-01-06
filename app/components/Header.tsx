'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, BotMessageSquare } from 'lucide-react';
import Button from './Button';
import AppIcon from '@/public/appLogo.svg'
import Image from 'next/image'

interface HeaderProps {
  onSupportClick: () => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Header({ onSupportClick, isDark, onThemeToggle }: HeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full border-b border-gray-700 px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
        <Image src={AppIcon} alt="App icon" width={32} height={32} />
        <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            CleanText
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            onClick={onThemeToggle}
            isDark={isDark}
            variant="icon"
            className="w-8 h-8 sm:w-10 sm:h-10"
          >
            {!mounted ? (
              <div className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
            ) : isDark ? (
              <Sun size={18} color='white' className="sm:w-5 sm:h-5" />
            ) : (
              <Moon size={18} className="sm:w-5 sm:h-5" />
            )}
          </Button>
          <Button
            onClick={onSupportClick}
            variant="gradient"
            className="px-3 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base"
          >
                        <span className="hidden sm:inline">Поддержка</span>

            <BotMessageSquare size={22} className="sm:hidden" />
          </Button>
        </div>
      </div>
    </header>
  );
}

