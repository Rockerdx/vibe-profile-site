import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: 'https://rockerdx.github.io/vibe-profile-site/sitemap.xml',
    host: 'rockerdx.github.io',
  }
}
