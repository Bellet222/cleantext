import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TextMode } from '@/app/types';
import { seoData } from '@/app/utils/seoData';
import ModePageClient from './ModePageClient';

interface PageProps {
  params: Promise<{ mode: string }>;
}

export async function generateStaticParams() {
  const modes: TextMode[] = [
    'remove-extra-spaces',
    'trim-lines',
    'remove-empty-lines',
    'replace-newlines-with-spaces',
    'remove-all-newlines',
    'remove-all-spaces-and-newlines',
    'remove-all-spaces',
    'remove-double-spaces',
    'replace-spaces-with-newlines',
    'remove-empty-and-whitespace-lines',
    'remove-large-spaces',
    'replace-large-spaces-with-small',
  ];

  return modes.map((mode) => ({
    mode,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { mode } = await params;
  
  if (!isValidMode(mode)) {
    return {
      title: 'Страница не найдена - CleanText',
    };
  }

  const data = seoData[mode as TextMode];

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: data.title,
      description: data.description,
    },
  };
}

function isValidMode(mode: string): mode is TextMode {
  return mode in seoData;
}

export default async function ModePage({ params }: PageProps) {
  const { mode } = await params;

  if (!isValidMode(mode)) {
    notFound();
  }

  const data = seoData[mode as TextMode];

  return <ModePageClient mode={mode as TextMode} seoData={data} />;
}

