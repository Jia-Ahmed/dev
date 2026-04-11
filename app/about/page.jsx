import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaCode,
  FaSearch,
  FaDraftingCompass,
  FaShip,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiMongodb,
  SiPrisma
} from 'react-icons/si'
import LazySection from '@/components/animations/Lazysection'
import Reveal from '@/components/animations/Reveal'
export const metadataAbout = buildMetadata({
  title: 'About',
  description:
    'Learn about DevXoft — a full-stack web development agency on a mission to bridge complex technology and business growth. Meet our team and values.',
  path: '/about',
  keywords: ['about DevXoft', 'web development team', 'agency story'],
})
 
// JSON-LD for about page
const aboutSchemas = [
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]),
]
// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata = {
  title: 'About DevXoft | Engineering Digital Excellence',
  description:
    'DevXoft is a full-stack web development agency specialising in Next.js, TypeScript, and AI-powered digital solutions. Learn about our mission, process, and values.',
  keywords: [
    'DevXoft',
    'web development agency',
    'Next.js development',
    'TypeScript agency',
    'full-stack development',
    'digital transformation',
    'custom web applications',
    'React development',
  ],
  openGraph: {
    title: 'About DevXoft | Engineering Digital Excellence',
    description:
      'We bridge the gap between complex technology and business growth. Discover how DevXoft transforms ideas into high-performance digital assets.',
    url: 'https://devxoft.com/about',
    siteName: 'DevXoft',
    images: [
      {
        url: '/og/about-og.png',
        width: 1200,
        height: 630,
        alt: 'DevXoft – Engineering Digital Excellence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About DevXoft | Engineering Digital Excellence',
    description:
      'Full-stack web development agency specialising in Next.js, TypeScript, and AI-powered solutions.',
    images: ['/og/about-og.png'],
  },
  alternates: {
    canonical: 'https://devxoft.com/about',
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

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DevXoft',
  url: 'https://devxoft.com',
  logo: 'https://devxoft.com/logo.png',
  description:
    'DevXoft is a full-stack web development agency specialising in Next.js, TypeScript, and AI-powered digital solutions.',
  foundingDate: '2022',
  sameAs: [
    'https://linkedin.com/company/devxoft',
    'https://github.com/devxoft',
    'https://twitter.com/devxoft',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: 'https://devxoft.com/contact',
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const values = [
  {
    icon: <FaRocket aria-hidden="true" />,
    title: 'Future-Ready Innovation',
    desc: 'We leverage cutting-edge frameworks like Next.js and AI integration to ensure your project remains ahead of the curve.',
  },
  {
    icon: <FaUsers aria-hidden="true" />,
    title: 'Client-Centric Partnership',
    desc: "Your success is our benchmark. We don't just act as vendors; we work as your dedicated technology partners.",
  },
  {
    icon: <FaLightbulb aria-hidden="true" />,
    title: 'Bespoke Solutions',
    desc: 'Every business is unique. We ditch templates to build custom digital experiences tailored to your specific goals.',
  },
]

const steps = [
  {
    icon: <FaSearch aria-hidden="true" />,
    title: 'Discovery',
    desc: 'Deep diving into your business goals, target audience, and market challenges.',
  },
  {
    icon: <FaDraftingCompass aria-hidden="true" />,
    title: 'Strategy & UX',
    desc: 'Crafting a high-fidelity blueprint and intuitive user interfaces that convert.',
  },
  {
    icon: <FaCode aria-hidden="true" />,
    title: 'Agile Development',
    desc: 'Building with clean, scalable code and high-performance architecture.',
  },
  {
    icon: <FaShip aria-hidden="true" />,
    title: 'Launch & Beyond',
    desc: 'Rigorous testing followed by a seamless deployment and continuous support.',
  },
]

const techStack = [
  { name: 'Next.js', icon: <SiNextdotjs aria-hidden="true" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss aria-hidden="true" /> },
  { name: 'TypeScript', icon: <SiTypescript aria-hidden="true" /> },
  { name: 'Framer Motion', icon: <SiFramer aria-hidden="true" /> },
  { name: 'MongoDB', icon: <SiMongodb aria-hidden="true" /> },
  { name: 'Prisma', icon: <SiPrisma aria-hidden="true" /> },
]

const highlights = [
  '50+ Projects Delivered',
  'Full-Stack Expertise',
  'AI-Powered Builds',
  'Agile & Transparent',
]

const stats = [
  { value: '99%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '3+', label: 'Years of Excellence' },
  { value: '24/7', label: 'Post-Launch Support' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        className="bg-[var(--background)] min-h-screen pt-24 sm:pt-32 pb-20"
        aria-label="About DevXoft"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <Reveal>
            <section
              aria-labelledby="hero-heading"
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 sm:mb-32"
            >
              {/* Text */}
              <div className="relative order-2 lg:order-1">
                <p className="text-teal-500 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                  Inside DevXoft
                </p>
                <h1
                  id="hero-heading"
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--foreground)] leading-[1.1] mb-4 sm:mb-6"
                >
                  Engineering Digital{' '}
                  <span className="text-teal-500">Excellence.</span>
                </h1>
                <p className="text-[var(--foreground)] opacity-75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mb-6 sm:mb-8">
                  DevXoft was founded with a clear mission: to bridge the gap
                  between complex technology and business growth. We transform
                  ideas into high-performance digital assets.
                </p>

                {/* Credibility pills */}
                <ul
                  aria-label="Key highlights"
                  className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10"
                >
                  {highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20"
                    >
                      <FaCheckCircle className="shrink-0" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 active:scale-95 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                  aria-label="Start your project with DevXoft"
                >
                  Start Your Project
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>

              {/* Image */}
              <div className="relative order-1 lg:order-2">
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-25"
                  aria-hidden="true"
                />
                <div className="relative bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                  <Image
                    src="/about_img/aboutpic.gif"
                    alt="DevXoft team engineering digital solutions – animated illustration"
                    priority
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover block"
                    unoptimized
                  />
                </div>
              </div>
            </section>
          </Reveal>

          {/* ── Stats Bar ────────────────────────────────────────────────── */}
          <LazySection minHeight="120px">
            <Reveal delay={0.1}>
              <section
                aria-label="Company statistics"
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-20 sm:mb-32"
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="text-center p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 transition-colors"
                  >
                    <p className="text-2xl sm:text-4xl font-extrabold text-teal-500 mb-1">
                      {s.value}
                    </p>
                    <p className="text-xs sm:text-sm opacity-60 uppercase tracking-widest">
                      {s.label}
                    </p>
                  </div>
                ))}
              </section>
            </Reveal>
          </LazySection>

          {/* ── Tech Stack ───────────────────────────────────────────────── */}
          <LazySection minHeight="160px">
            <Reveal delay={0.2}>
              <section aria-labelledby="stack-heading" className="mb-20 sm:mb-32 text-center">
                <p
                  id="stack-heading"
                  className="text-xs sm:text-sm opacity-50 uppercase tracking-[0.3em] mb-8"
                >
                  Our Premium Tech Stack
                </p>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center gap-2 group">
                      <span
                        className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-200"
                        aria-hidden="true"
                      >
                        {tech.icon}
                      </span>
                      <span className="text-xs font-semibold">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </LazySection>

          {/* ── Process ──────────────────────────────────────────────────── */}
          <LazySection minHeight="500px">
            <section aria-labelledby="process-heading" className="mb-20 sm:mb-32">
              <Reveal>
                <div className="text-center mb-12 sm:mb-16">
                  <h2
                    id="process-heading"
                    className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4"
                  >
                    How We{' '}
                    <span className="text-teal-500">Deliver Success</span>
                  </h2>
                  <p className="opacity-60 max-w-2xl mx-auto text-base sm:text-lg">
                    Our streamlined workflow ensures transparency, speed, and
                    exceptional quality at every stage.
                  </p>
                </div>
              </Reveal>

              <div className="relative">
                {/* Connector line on large screens */}
                <div
                  className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {steps.map((step, i) => (
                    <Reveal key={step.title} delay={i * 0.1}>
                      <article className="group relative p-6 sm:p-8 lg:p-10 bg-[var(--card-bg)] rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-teal-500 transition-all duration-500 hover:-translate-y-3 sm:hover:-translate-y-4 shadow-lg hover:shadow-teal-500/30">
                        <div
                          className="absolute top-4 right-6 text-5xl sm:text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity select-none"
                          aria-hidden="true"
                        >
                          0{i + 1}
                        </div>
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 via-emerald-400 to-teal-900 text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-6 sm:mb-8 shadow-lg shadow-teal-500/30"
                          aria-hidden="true"
                        >
                          {step.icon}
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
                          {step.title}
                        </h3>
                        <p className="text-sm opacity-60 leading-relaxed">{step.desc}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          </LazySection>

          {/* ── Values ───────────────────────────────────────────────────── */}
          <LazySection minHeight="400px">
            <section
              aria-labelledby="values-heading"
              className="py-16 sm:py-24 bg-teal-500/5 rounded-[2.5rem] sm:rounded-[4rem] px-6 sm:px-8 mb-20 sm:mb-32 border border-teal-500/10"
            >
              <Reveal>
                <div className="text-center mb-12 sm:mb-16">
                  <h2
                    id="values-heading"
                    className="text-2xl sm:text-3xl md:text-5xl font-bold"
                  >
                    The DevXoft <span className="text-teal-500">Core</span>
                  </h2>
                  <p className="opacity-60 mt-4 max-w-xl mx-auto text-base sm:text-lg">
                    The principles that drive every decision, line of code, and
                    client relationship we build.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-center">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 0.2}>
                    <article className="group px-2 sm:px-4">
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 via-emerald-400 to-teal-900 text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-5 sm:mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300"
                        aria-hidden="true"
                      >
                        {v.icon}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">{v.title}</h3>
                      <p className="opacity-70 text-sm sm:text-lg leading-relaxed">{v.desc}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          </LazySection>

          {/* ── Why DevXoft (new) ─────────────────────────────────────────── */}
          <LazySection minHeight="320px">
            <Reveal>
              <section
                aria-labelledby="why-heading"
                className="mb-20 sm:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div>
                  <p className="text-teal-500 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3">
                    Why DevXoft?
                  </p>
                  <h2
                    id="why-heading"
                    className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight"
                  >
                    More Than a Dev Agency —{' '}
                    <span className="text-teal-500">Your Digital Partner</span>
                  </h2>
                  <p className="opacity-70 text-base sm:text-lg leading-relaxed mb-8">
                    From initial concept to post-launch growth, we stay with
                    you. Our team combines design thinking, engineering rigour,
                    and business strategy to deliver products that perform — not
                    just look great.
                  </p>
                  <ul className="space-y-4" aria-label="DevXoft advantages">
                    {[
                      'Transparent communication at every milestone',
                      'Performance-first architecture (Core Web Vitals focused)',
                      'SEO & accessibility built in from day one',
                      'Scalable codebase you can maintain long-term',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm sm:text-base opacity-80"
                      >
                        <FaCheckCircle
                          className="text-teal-500 mt-1 shrink-0"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      title: 'Clean Code',
                      desc: 'Readable, maintainable, and standards-compliant across every project.',
                    },
                    {
                      title: 'Fast Delivery',
                      desc: 'Agile sprints keep projects on schedule without sacrificing quality.',
                    },
                    {
                      title: 'SEO-First',
                      desc: 'Every build ships with structured data, meta tags, and semantic HTML.',
                    },
                    {
                      title: 'Post-Launch',
                      desc: '24/7 monitoring and iterative improvements after go-live.',
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 transition-colors"
                    >
                      <h3 className="font-bold text-sm sm:text-base mb-2 text-teal-500">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm opacity-60 leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </LazySection>

          {/* ── Testimonial (new) ────────────────────────────────────────── */}
          <LazySection minHeight="200px">
            <Reveal>
              <section
                aria-labelledby="testimonial-heading"
                className="mb-20 sm:mb-32 text-center px-4"
              >
                <h2 id="testimonial-heading" className="sr-only">
                  Client testimonial
                </h2>
                <figure className="max-w-3xl mx-auto">
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-[var(--foreground)] opacity-90 mb-6">
                    &ldquo;DevXoft turned our outdated platform into a
                    high-conversion product in under 8 weeks. Their attention
                    to detail is unmatched.&rdquo;
                  </blockquote>
                  <figcaption className="text-sm opacity-50 uppercase tracking-widest">
                    — Satisfied Client, SaaS Startup Founder
                  </figcaption>
                </figure>
              </section>
            </Reveal>
          </LazySection>

          {/* ── Final CTA ────────────────────────────────────────────────── */}
          <LazySection minHeight="300px">
            <Reveal>
              <section aria-labelledby="cta-heading">
                <div className="bg-gradient-to-br from-teal-700 via-teal-800 to-gray-700 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 md:p-24 text-center text-white relative overflow-hidden">
                  <div className="relative z-10 max-w-3xl mx-auto">
                    <p className="text-teal-300 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-4">
                      Let&apos;s Build Together
                    </p>
                    <h2
                      id="cta-heading"
                      className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight"
                    >
                      Ready to build something{' '}
                      <span className="text-teal-400">extraordinary?</span>
                    </h2>
                    <p className="text-white/70 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                      Tell us about your project. We&apos;ll get back to you
                      within 24 hours with a clear plan and honest pricing.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 active:scale-95 text-teal-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                      aria-label="Contact DevXoft to start your project"
                    >
                      Start Your Project
                      <FaArrowRight aria-hidden="true" />
                    </Link>
                  </div>

                  <div
                    className="absolute top-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-teal-500/10 rounded-full blur-3xl -mr-20 sm:-mr-40 -mt-20 sm:-mt-40 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/10 rounded-full blur-3xl -ml-20 sm:-ml-32 -mb-20 sm:-mb-32 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </section>
            </Reveal>
          </LazySection>

        </div>
      </main>
    </>
  )
}