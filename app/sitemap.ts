import type {MetadataRoute} from 'next';

const rawUrl = process.env.APP_URL;
const siteUrl = rawUrl && rawUrl !== 'https://Gfilled.com' ? rawUrl : 'https://Gfilled.com';

const pages = [
  {
    url: '',
    priority: 1.0,
    changefreq: 'daily' as const,
    lastmod: '2026-06-02',
  },
  {
    url: '/privacy',
    priority: 0.6,
    changefreq: 'monthly' as const,
    lastmod: '2026-06-02',
  },
  {
    url: '/terms',
    priority: 0.6,
    changefreq: 'monthly' as const,
    lastmod: '2026-06-02',
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteUrl}${page.url}`,
    lastModified: page.lastmod,
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
