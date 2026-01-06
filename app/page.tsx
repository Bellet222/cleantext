'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextProcessor from './components/TextProcessor';
import OperationsList from './components/OperationsList';
import ServiceWorker from './components/ServiceWorker';

const THEME_STORAGE_KEY = 'cleantext-theme';

export default function Page() {
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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            CleanText - Очистка и обработка текста
          </h1>
          <p className={`text-center text-lg sm:text-xl mb-8 sm:mb-12 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Бесплатные онлайн инструменты для обработки и очистки текста
          </p>
        </div>
        
        <TextProcessor isDark={isDark} />
        
        <OperationsList isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
      <ServiceWorker />
    </div>
  );
}
