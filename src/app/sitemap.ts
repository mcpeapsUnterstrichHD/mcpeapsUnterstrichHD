import { LanguagesNUM } from '@/lib/lang';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mcpeapsunterstrichhd.dev/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
      languages: LanguagesNUM
      }
    },
    {
      url: 'https://mcpeapsunterstrichhd.dev/aboutme',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: {
        languages: LanguagesNUM
        }
    },
    {
      url: 'https://mcpeapsunterstrichhd.dev/projects',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: {
        languages: LanguagesNUM
        }
    },
    {
      url: 'https://mcpeapsunterstrichhd.dev/cv',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: {
        languages: LanguagesNUM
        }
    },
    {
      url: 'https://mcpeapsunterstrichhd.dev/linkhub',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: {
        languages: LanguagesNUM
        }
    },
    {
      url: 'https://mcpeapsunterstrichhd.dev/imprint',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
      alternates: {
        languages: LanguagesNUM
        }
    },
    {
      url: 'https://mcpeapsunterstrichhd.dev/contact',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
      alternates: {
        languages: LanguagesNUM
        }
    },
  ];
}
