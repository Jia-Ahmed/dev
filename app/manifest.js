// app/manifest.js
// Next.js generates /manifest.webmanifest from this file.
// Makes your site installable on mobile (PWA) and improves mobile SEO signals.
// ─────────────────────────────────────────────────────────────────────────────

import { siteConfig } from '@/lib/seo'

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: 'DevXoft',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#14b8a6',
    orientation: 'portrait',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}