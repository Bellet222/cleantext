import { TextMode } from '@/app/types';

export const textModes: Record<TextMode, string> = {
  'remove-extra-spaces': 'Убрать лишние пробелы',
  'trim-lines': 'Убрать пробелы в начале и в конце строки',
  'remove-empty-lines': 'Убрать пустые строки',
  'replace-newlines-with-spaces': 'Заменить переносы строк на пробелы',
  'remove-all-newlines': 'Убрать все переносы строк',
  'remove-all-spaces-and-newlines': 'Убрать все пробелы и переносы строк',
  'remove-all-spaces': 'Убрать все пробелы',
  'remove-double-spaces': 'Убрать двойные пробелы',
  'replace-spaces-with-newlines': 'Заменить пробелы на переносы строк',
  'remove-empty-and-whitespace-lines': 'Убрать пустые строки и строки с пробелами',
  'remove-large-spaces': 'Убрать только большие пробелы',
  'replace-large-spaces-with-small': 'Заменить большие пробелы на маленькие',
};

export function processText(text: string, mode: TextMode): string {
  switch (mode) {
    case 'remove-extra-spaces':
      return text.replace(/[ \t]+/g, ' ').trim();

    case 'trim-lines':
      return text
        .split('\n')
        .map((line) => line.trim())
        .join('\n');

    case 'remove-empty-lines':
      return text
        .split('\n')
        .filter((line) => line.trim() !== '')
        .join('\n');

    case 'replace-newlines-with-spaces':
      return text.replace(/\n/g, ' ').replace(/\r/g, '');

    case 'remove-all-newlines':
      return text.replace(/[\n\r]/g, '');

    case 'remove-all-spaces-and-newlines':
      return text.replace(/[\s\n\r]/g, '');

    case 'remove-all-spaces':
      return text.replace(/[ \t]/g, '');

    case 'remove-double-spaces':
      return text.replace(/[ \t]{2,}/g, ' ');

    case 'replace-spaces-with-newlines':
      return text.replace(/[ \t]/g, '\n');

    case 'remove-empty-and-whitespace-lines':
      return text
        .split('\n')
        .filter((line) => line.trim().length > 0)
        .join('\n');

    case 'remove-large-spaces':
      return text.replace(/[ \t]{3,}/g, '');

    case 'replace-large-spaces-with-small':
      return text.replace(/[ \t]{2,}/g, ' ');

    default:
      return text;
  }
}

