'use client';

import React from 'react';
import PWAInstallButton from './PWAInstallButton';

interface FooterProps {
  isDark?: boolean;
}

export default function Footer({ isDark = true }: FooterProps) {
  return (
    <footer className={`w-full border-t ${isDark ? 'border-gray-700' : 'border-gray-300'} px-4 sm:px-6 py-4 sm:py-6 mt-auto`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="text-center sm:text-left">
            <p className={`text-xs sm:text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>CleanText</span> © 2026 Все права защищены
            </p>
            <p className={`text-xs italic ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              "Чистый текст — чистая мысль!"
            </p>
          </div>
          <PWAInstallButton isDark={isDark} variant="footer" />
        </div>
      </div>
    </footer>
  );
}

