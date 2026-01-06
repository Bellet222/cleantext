'use client';

import Link from 'next/link';
import { TextMode } from '@/app/types';
import { textModes } from '@/app/utils/textProcessor';

interface OperationsListProps {
  isDark: boolean;
}

const mainModes: TextMode[] = [
  'remove-extra-spaces',
  'trim-lines',
  'remove-empty-lines',
  'replace-newlines-with-spaces',
  'remove-all-newlines',
  'remove-all-spaces-and-newlines',
];

const additionalModes: TextMode[] = [
  'remove-all-spaces',
  'remove-double-spaces',
  'replace-spaces-with-newlines',
  'remove-empty-and-whitespace-lines',
  'remove-large-spaces',
  'replace-large-spaces-with-small',
];

export default function OperationsList({ isDark }: OperationsListProps) {
  const bgClass = isDark
    ? 'bg-gray-900 text-gray-100'
    : 'bg-gray-50 text-gray-900';

  const cardClass = isDark
    ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
    : 'bg-white border-gray-200 hover:bg-gray-50';

  const textClass = isDark
    ? 'text-gray-300'
    : 'text-gray-700';

  const linkClass = isDark
    ? 'text-cyan-400 hover:text-cyan-300'
    : 'text-blue-600 hover:text-blue-700';

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 ${bgClass}`}>
      <div className="space-y-8 sm:space-y-12">
        <div>
          <h2 className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Все инструменты обработки текста
          </h2>
          <p className={`text-base sm:text-lg mb-8 ${textClass}`}>
            Выберите нужный инструмент для обработки текста. Каждый инструмент имеет отдельную страницу с примерами и подробным описанием.
          </p>
        </div>

        <section>
          <h3 className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            Основные инструменты
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mainModes.map((mode) => (
              <Link
                key={mode}
                href={`/${mode}`}
                className={`block p-4 sm:p-6 rounded-lg border-2 transition-all duration-200 ${cardClass}`}
              >
                <h4 className={`text-lg sm:text-xl font-semibold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                  {textModes[mode]}
                </h4>
                <p className={`text-sm sm:text-base ${linkClass} font-medium`}>
                  Открыть инструмент →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h3 className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            Дополнительные инструменты
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {additionalModes.map((mode) => (
              <Link
                key={mode}
                href={`/${mode}`}
                className={`block p-4 sm:p-6 rounded-lg border-2 transition-all duration-200 ${cardClass}`}
              >
                <h4 className={`text-lg sm:text-xl font-semibold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                  {textModes[mode]}
                </h4>
                <p className={`text-sm sm:text-base ${linkClass} font-medium`}>
                  Открыть инструмент →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

