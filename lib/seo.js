// lib/seo.js
// ─────────────────────────────────────────────────────────────────────────────
// CENTRAL SEO CONFIG — edit THIS file only.
// Every page imports from here, so one change updates the whole site.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'DevXoft',
  tagline: 'Engineering Digital Excellence',
  description:
    'DevXoft is a full-stack web development agency specialising in Next.js, TypeScript, and AI-powered digital solutions. We transform ideas into high-performance web applications.',
  url: 'https://devxoft.vercel.app', // ← change to your real domain( now for testing only)
  locale: 'en_US',
  foundingYear: '2023',

  // Social handles (no @ symbol)
  social: {
    twitter: 'devxoft',
    linkedin: 'company/devxoft',
    github: 'devxoft',
  },

  // OG image (1200×630px) — place this file in /public/og/
  ogImage: '/og/og-default.png',

  // Contact
  email: 'hello@devxoft.com',
  phone: '+92-000-0000000', // update with real number

  // Keywords that apply to every page
  baseKeywords: [
    'DevXoft',
    'web development agency',
    'Next.js development',
    'React development',
    'full-stack web development',
    'custom web applications',
    'TypeScript agency',
    'UI/UX design',
    'digital transformation',
    'web development Pakistan',
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper: builds a full metadata object for any page
// Usage: export const metadata = buildMetadata({ title, description, path, keywords, ogImage })
// ─────────────────────────────────────────────────────────────────────────────
export function buildMetadata({
  title,
  description,
  path = '',
  keywords = [],
  ogImage,
  noIndex = false,
}) {
  const url = `${siteConfig.url}${path}`
  const image = ogImage || siteConfig.ogImage
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`

  return {
    title: fullTitle,
    description: description || siteConfig.description,
    keywords: [...siteConfig.baseKeywords, ...keywords],

    // ── Canonical & Robots ───────────────────────────────────────────────────
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },

    // ── Open Graph (Facebook, LinkedIn, WhatsApp previews) ───────────────────
    openGraph: {
      title: fullTitle,
      description: description || siteConfig.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },

    // ── Twitter / X Card ─────────────────────────────────────────────────────
    twitter: {
      card: 'summary_large_image',
      site: `@${siteConfig.social.twitter}`,
      creator: `@${siteConfig.social.twitter}`,
      title: fullTitle,
      description: description || siteConfig.description,
      images: [`${siteConfig.url}${image}`],
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD Schemas — import the one you need per page
// ─────────────────────────────────────────────────────────────────────────────

// Organization schema (use in layout.jsx — appears on every page)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/logo.png`,
    width: 200,
    height: 60,
  },
  description: siteConfig.description,
  foundingDate: siteConfig.foundingYear,
  email: siteConfig.email,
  sameAs: [
    `https://linkedin.com/${siteConfig.social.linkedin}`,
    `https://github.com/${siteConfig.social.github}`,
    `https://twitter.com/${siteConfig.social.twitter}`,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: siteConfig.email,
    url: `${siteConfig.url}/contact`,
    availableLanguage: 'English',
  },
}

// WebSite schema — enables Google sitelinks search box
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// LocalBusiness schema — helps rank in local "near me" searches
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  email: siteConfig.email,
  foundingDate: siteConfig.foundingYear,
  priceRange: '$$',
  serviceArea: {
    '@type': 'AdministrativeArea',
    name: 'Worldwide',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full-Stack Web Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next.js Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Integration' } },
    ],
  },
}

// BreadcrumbList schema — shows path in Google results e.g. devxoft.com > About
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  }
}

// FAQ schema — FAQ answers expand directly in Google search results
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}