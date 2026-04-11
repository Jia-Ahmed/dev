// app/layout.jsx
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/animations/PageTransition'
import { siteConfig, organizationSchema, websiteSchema } from '@/lib/seo'

// ── Your original fonts (unchanged) ──────────────────────────────────────────
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap'
}) 
// ///

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
})

// ── Full SEO metadata (replaces the old 2-line metadata) ─────────────────────
export const metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.baseKeywords,

  metadataBase: new URL(siteConfig.url),

  verification: {
    google: 'PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#14b8a6' }],
  },

  manifest: '/manifest.webmanifest',

  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: `@${siteConfig.social.twitter}`,
    creator: `@${siteConfig.social.twitter}`,
  },

  robots: {
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
}

// ── Root layout (your original structure, unchanged) ─────────────────────────
export default function RootLayout ({ children }) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <head>
        {/* Viewport — kept exactly as yours */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=5.0'
        />

        {/* Theme color for mobile browser chrome */}
        <meta name='theme-color' content='#14b8a6' />
        <meta name='msapplication-TileColor' content='#14b8a6' />

        {/* Preconnect — speeds up Google Fonts (LCP improvement) */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

        {/* Global JSON-LD structured data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Header />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}