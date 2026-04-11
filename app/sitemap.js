// app/sitemap.js
// Next.js generates /sitemap.xml automatically from this file.
// Submit this URL in Google Search Console: https://devxoft.com/sitemap.xml
// ─────────────────────────────────────────────────────────────────────────────

import { siteConfig } from '@/lib/seo'

export default function sitemap() {
  const now = new Date()

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,          // homepage = highest priority
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/service`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,          // services = high priority for client acquisition
    },
    {
      url: `${siteConfig.url}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]

  // ── Dynamic pages (add when you have blog/case studies) ───────────────────
  // const posts = await getPosts() // fetch from your CMS/DB
  // const dynamicPages = posts.map(post => ({
  //   url: `${siteConfig.url}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'weekly',
  //   priority: 0.6,
  // }))

  return [
    ...staticPages,
    // ...dynamicPages,
  ]
}