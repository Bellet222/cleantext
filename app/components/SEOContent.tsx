'use client';

import React from 'react';
import { SEOData } from '@/app/utils/seoData';
import { processText } from '@/app/utils/textProcessor';
import { TextMode } from '@/app/types';

interface SEOContentProps {
  seoData: SEOData;
  mode: TextMode;
  isDark: boolean;
}

export default function SEOContent({ seoData, mode, isDark }: SEOContentProps) {
  const bgClass = isDark
    ? 'bg-gray-900 text-gray-100'
    : 'bg-gray-50 text-gray-900';

  const cardClass = isDark
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';

  const textClass = isDark
    ? 'text-gray-300'
    : 'text-gray-700';

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 ${bgClass}`}>
      <div className="space-y-8 sm:space-y-12">
        {/* Описание */}
        <div className={`rounded-lg border-2 p-6 sm:p-8 ${cardClass}`}>
          <p className={`text-base sm:text-lg leading-relaxed ${textClass}`}>
            {seoData.descriptionText}
          </p>
        </div>

        {/* Примеры до/после */}
        <section>
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Примеры обработки
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {seoData.examples.map((example, index) => (
              <div key={index} className={`rounded-lg border-2 p-4 sm:p-6 ${cardClass}`}>
                <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  {example.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      До:
                    </p>
                    <div className={`p-3 sm:p-4 rounded border ${isDark ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-800'}`}>
                      <pre className="whitespace-pre-wrap font-mono text-sm sm:text-base">{example.before}</pre>
                    </div>
                  </div>
                  <div>
                    <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      После:
                    </p>
                    <div className={`p-3 sm:p-4 rounded border ${isDark ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-800'}`}>
                      <pre className="whitespace-pre-wrap font-mono text-sm sm:text-base">
                        {processText(example.before, mode)}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {seoData.faq.map((item, index) => (
              <div key={index} className={`rounded-lg border-2 p-4 sm:p-6 ${cardClass}`}>
                <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  {item.question}
                </h3>
                <p className={`text-base sm:text-lg leading-relaxed ${textClass}`}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Блок о безопасности */}
        <div className={`rounded-lg border-2 p-6 sm:p-8 ${isDark ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-blue-500/10 border-blue-500/30'}`}>
          <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>
            🔒 Безопасность и конфиденциальность
          </h3>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-cyan-200' : 'text-blue-800'}`}>
            Весь текст обрабатывается локально в вашем браузере. Данные не отправляются на сервер, не сохраняются и не передаются третьим лицам. Вы можете быть уверены в полной конфиденциальности ваших данных.
          </p>
        </div>
      </div>
    </div>
  );
}

