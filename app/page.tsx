'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextProcessor from './components/TextProcessor';
import ServiceWorker from './components/ServiceWorker';
import PWAInstaller from './components/PWAInstaller';

export default function Page() {
  const [isDark, setIsDark] = useState(true);

  const handleSupportClick = () => {
    alert('Спасибо за интерес к CleanText! Если у вас есть вопросы или предложения, свяжитесь с нами через email: support@cleantext.com');
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <Header 
        onSupportClick={handleSupportClick} 
        isDark={isDark}
        onThemeToggle={() => setIsDark(!isDark)}
      />
      
      <main className="flex-1 w-full py-8">
        <TextProcessor isDark={isDark} />
      </main>

      <Footer />
      <ServiceWorker />
      <PWAInstaller />
    </div>
  );
}
