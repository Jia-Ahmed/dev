import { buildMetadata, breadcrumbSchema, localBusinessSchema } from '@/lib/seo'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import TechStack from '@/components/home/TechStack'
import LazySection from '@/components/animations/Lazysection'
import Reveal from '@/components/animations/Reveal'
import ContactSection from '@/components/home/ContactSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import Features from '@/components/home/Features'
import FAQ from '@/components/home/FAQ'

// ── 1. SEO Metadata — Next.js automatically puts this in <head> ──────────────
export const metadata = buildMetadata({
  description:
    'DevXoft builds high-performance web applications using Next.js, TypeScript, and AI. Based in Pakistan, serving clients worldwide. Get a free project quote today.',
  path: '/',
  keywords: [
    'hire web developer',
    'web development company',
    'Next.js agency Pakistan',
  ],
})
 
// ── 2. JSON-LD Structured Data for homepage ───────────────────────────────────
const homepageSchemas = [
  localBusinessSchema,
  breadcrumbSchema([{ name: 'Home', path: '/' }]),
]
export default function HomePage () {
  return (
    <main className='min-h-screen'>
      {/* JSON-LD scripts — hidden from UI, only Google reads them */}
      {homepageSchemas.map((schema, i) => (
        <script
          key={i}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HeroSection />

      {/* 2. About: Lazy + Reveal */}
      <LazySection minHeight='500px'>
        <Reveal delay={0.2}>
          <AboutSection />
        </Reveal>
      </LazySection>

      {/* 3. Services: Lazy + Reveal */}
      <LazySection>
        <Reveal delay={0.2}>
          <ServicesSection />
        </Reveal>
      </LazySection>
      <LazySection>
        <Reveal delay={0.2}>
          <CaseStudiesSection/>
        </Reveal>
      </LazySection>
      <LazySection>
        <Reveal delay={0.2}>
          <Features/>
        </Reveal>
      </LazySection>
      <LazySection>
        <Reveal delay={0.2}>
          <TechStack />
        </Reveal>
      </LazySection>
      <LazySection>
        <Reveal delay={0.2}>
          <TestimonialsSection/>
        </Reveal>
      </LazySection>
      <LazySection>
        <Reveal delay={0.2}>
          <FAQ />
        </Reveal>
      </LazySection>
      <LazySection>
        <Reveal delay={0.2}>
          <ContactSection />
        </Reveal>
      </LazySection>
    </main>
  )
}
