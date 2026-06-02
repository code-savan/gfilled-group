import type {MetadataRoute} from 'next';

const rawUrl = process.env.APP_URL;
const siteUrl = rawUrl && rawUrl !== 'https://Gfilled.com' ? rawUrl : 'https://Gfilled.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/login/', '/signup/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
