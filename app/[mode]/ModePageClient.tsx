'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SEOContent from '@/app/components/SEOContent';
import TextProcessor from '@/app/components/TextProcessor';
import { SEOData } from '@/app/utils/seoData';
import { TextMode } from '@/app/types';
import { processText } from '@/app/utils/textProcessor';

interface ModePageClientProps {
  mode: TextMode;
  seoData: SEOData;
}

const THEME_STORAGE_KEY = 'cleantext-theme';

export default function ModePageClient({ mode, seoData }: ModePageClientProps) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme !== null) {
      setIsDark(savedTheme === 'dark');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
    }
  }, [isDark, mounted]);

  const handleSupportClick = () => {
    alert('Спасибо за интерес к CleanText! Если у вас есть вопросы или предложения, свяжитесь с нами через email: support@cleantext.com');
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <Header 
        onSupportClick={handleSupportClick} 
        isDark={isDark}
        onThemeToggle={handleThemeToggle}
      />
      
      <main className="flex-1 w-full">
        <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <Link
            href="/"
            className={`inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-lg transition-all duration-200 ${
              isDark
                ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-800'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft size={20} />
            <span className="text-sm sm:text-base font-medium">Вернуться на главную</span>
          </Link>
          
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {seoData.h1}
          </h1>
          
          <div className="mb-8 sm:mb-12">
            <TextProcessor isDark={isDark} initialMode={mode} hideModeSelector={true} />
          </div>
        </div>

        <SEOContent seoData={seoData} mode={mode} isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}

