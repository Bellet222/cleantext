import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CleanText - Очистка и обработка текста',
  description: 'Мощный инструмент для очистки и обработки текста',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CleanText',
  },
  formatDetection: {
    telephone: false,
  },
  // Icons are optional - will be added when PNG files are generated
  // icons: {
  //   icon: [
  //     { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
  //     { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
  //   ],
  //   apple: [
  //     { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
  //   ],
  // },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#06b6d4',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

