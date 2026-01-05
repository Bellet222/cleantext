export type TextMode =
  | 'remove-extra-spaces'
  | 'trim-lines'
  | 'remove-empty-lines'
  | 'replace-newlines-with-spaces'
  | 'remove-all-newlines'
  | 'remove-all-spaces-and-newlines'
  | 'remove-all-spaces'
  | 'remove-double-spaces'
  | 'replace-spaces-with-newlines'
  | 'remove-empty-and-whitespace-lines'
  | 'remove-large-spaces'
  | 'replace-large-spaces-with-small';

export interface TextModeConfig {
  id: TextMode;
  label: string;
  category: 'main' | 'additional';
}

