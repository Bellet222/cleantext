'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700 px-4 sm:px-6 py-4 sm:py-6 mt-auto">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 text-xs sm:text-sm mb-2">
          <span className="font-semibold text-cyan-400">CleanText</span> © 2026 Все права защищены
        </p>
        <p className="text-gray-500 text-xs italic">
          "Чистый текст — чистая мысль!"
        </p>
      </div>
    </footer>
  );
}

