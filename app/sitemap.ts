import { MetadataRoute } from 'next';
import { TextMode } from '@/app/types';
import { seoData } from '@/app/utils/seoData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cleantext.com';
  
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

  const modePages = modes.map((mode) => ({
    url: `${baseUrl}/${mode}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...modePages,
  ];
}

