/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Image optimisation (improves LCP) ─────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: false,
    remotePatterns: [
      // { protocol: 'https', hostname: 'res.cloudinary.com' },
    ]
  },

  // ── Compression (reduces transfer size) ───────────────────────────────────
  compress: true,

  // ── Security & canonical headers ──────────────────────────────────────────
  async headers () {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        source: '/(_next/static|fonts|icons)/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ]
  },

  // ── WWW → non-www redirect (canonical domain) ─────────────────────────────
  async redirects () {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.devxoft.com' }],
        destination: 'https://devxoft.com/:path*',
        permanent: true
      }
    ]
  },

  // ── Experimental performance features ─────────────────────────────────────
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  }

  // ── Bundle analyser (uncomment to debug bundle size) ──────────────────────
  // Run: ANALYZE=true npm run build
  // ...(process.env.ANALYZE === 'true' && {
  //   webpack(config) {
  //     const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
  //     config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }))
  //     return config
  //   },
  // }),
}

export default nextConfig
