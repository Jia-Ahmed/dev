// app/robots.js
// Next.js generates /robots.txt automatically from this file.
// ─────────────────────────────────────────────────────────────────────────────

import { siteConfig } from '@/lib/seo'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',       // never index API routes
          '/admin/',     // never index admin pages
          '/_next/',     // never index Next.js internals
          '/private/',
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}