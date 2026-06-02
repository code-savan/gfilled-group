import type {MetadataRoute} from 'next';

const siteUrl = process.env.APP_URL || 'https://GfilledGroup.com';

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
