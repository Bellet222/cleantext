'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { TextMode } from '@/app/types';
import { textModes, processText } from '@/app/utils/textProcessor';
import Button from './Button';

interface TextProcessorProps {
  isDark: boolean;
  initialMode?: TextMode;
  hideModeSelector?: boolean;
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

export default function TextProcessor({ isDark, initialMode, hideModeSelector = false }: TextProcessorProps) {
  const [inputText, setInputText] = useState('');
  const [selectedMode, setSelectedMode] = useState<TextMode>(initialMode || 'remove-extra-spaces');
  const [showAdditional, setShowAdditional] = useState(false);

  const processedText = useMemo(() => {
    if (!inputText) return '';
    return processText(inputText, selectedMode);
  }, [inputText, selectedMode]);

  const bgClass = isDark
    ? 'bg-gray-900 text-gray-100'
    : 'bg-gray-50 text-gray-900';

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8 ${bgClass}`}>
      <div className="space-y-4 sm:space-y-6">
        {/* Режимы обработки */}
        {!hideModeSelector && (
        <div className="space-y-4 sm:space-y-6">
          <h2 className={`text-base sm:text-lg font-semibold text-center ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            Основные функции:
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {mainModes.map((mode) => (
              <Button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                isDark={isDark}
                variant={selectedMode === mode ? 'active' : 'default'}
                className="min-w-0 w-full sm:w-auto sm:min-w-[200px] text-sm sm:text-base px-3 sm:px-5 py-2 sm:py-3"
              >
                {textModes[mode]}
              </Button>
            ))}
          </div>

          {/* Разделитель */}
          <Button
            onClick={() => setShowAdditional(!showAdditional)}
            isDark={isDark}
            variant="divider"
          >
            <div className={`absolute inset-0 flex items-center ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
              <div className={`w-full border-t transition-colors duration-300 ${isDark ? 'border-gray-700 group-hover:border-gray-600' : 'border-gray-300 group-hover:border-gray-400'}`}></div>
            </div>
            <div className={`relative px-4 flex items-center gap-2 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
              {showAdditional ? (
                <ChevronDown size={16} className={isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-600'} />
              ) : (
                <ChevronRight size={16} className={isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-600'} />
              )}
              <span className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-600'}`}>
                Дополнительные функции
              </span>
            </div>
          </Button>

          {/* Дополнительные функции */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${showAdditional
                ? 'max-h-[500px] opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-2'
              }
            `}
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
              {additionalModes.map((mode) => (
                <Button
                  key={mode}
                  onClick={() => setSelectedMode(mode)}
                  isDark={isDark}
                  variant={selectedMode === mode ? 'active' : 'default'}
                  className="min-w-0 w-full sm:w-auto sm:min-w-[200px] text-sm sm:text-base px-3 sm:px-5 py-2 sm:py-3"
                >
                  {textModes[mode]}
                </Button>
              ))}
            </div>
          </div>
        </div>
        )}

 
        {/* Входной текст */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Исходный текст:
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Введите текст для обработки..."
            className={`
              w-full h-40 sm:h-48 p-3 sm:p-4 rounded-lg border-2 resize-none text-sm sm:text-base
              ${isDark
                ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }
              transition-all duration-200
            `}
          />
        </div>

       {/* Выбранный режим */}
       {!hideModeSelector && (
       <div className={`
          p-3 sm:p-4 rounded-lg border-2
          ${isDark
            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
            : 'bg-blue-500/10 border-blue-500/30 text-blue-700'
          }
        `}>
          <p className="text-xs sm:text-sm font-medium mb-1">Выбранный режим:</p>
          <p className="text-sm sm:text-base font-semibold">{textModes[selectedMode]}</p>
        </div>
       )}

        {/* Результат */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Результат:
          </label>
          <textarea
            value={processedText}
            readOnly
            placeholder="Обработанный текст появится здесь..."
            className={`
              w-full h-40 sm:h-48 p-3 sm:p-4 rounded-lg border-2 resize-none text-sm sm:text-base
              ${isDark
                ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
              }
            `}
          />
          <Button
            onClick={() => {
              navigator.clipboard.writeText(processedText);
            }}
            disabled={!processedText}
            isDark={isDark}
            variant="default"
            className="mt-2 min-w-0 w-full sm:w-auto text-sm sm:text-base px-4 py-2"
          >
            Копировать результат
          </Button>
        </div>
      </div>
    </div>
  );
}

