'use client'
import ServiceCard from '@/components/cards/ServiceCard'
import { ServiceData } from '@/constants/ServiceData'
import Link from 'next/link'
import LazySection from '@/components/animations/Lazysection'
import Reveal from '@/components/animations/Reveal'
import { buildMetadata, breadcrumbSchema, localBusinessSchema } from '@/lib/seo'
// ══════════════════════════════════════════════════════════════════════════════
// app/services/page.jsx  (Services — most important for client acquisition)
// ══════════════════════════════════════════════════════════════════════════════
export const metadataServices = buildMetadata({
  title: 'Services',
  description:
    'DevXoft offers full-stack web development, Next.js development, UI/UX design, API integration, and AI-powered solutions. Scalable, fast, and SEO-first.',
  path: '/services',
  keywords: [
    'web development services',
    'Next.js development service',
    'hire React developer',
    'UI UX design service',
    'API development',
    'AI web integration',
  ],
})
 
// JSON-LD for services page (FAQ schema = rich results in Google)
const servicesFaqSchema = faqSchema([
  {
    question: 'What web development services does DevXoft offer?',
    answer:
      'DevXoft offers full-stack web development, Next.js & React development, UI/UX design, REST & GraphQL API development, database architecture, and AI-powered feature integration.',
  },
  {
    question: 'How long does a typical web project take?',
    answer:
      'A typical project takes 4–8 weeks depending on scope. We follow agile sprints with weekly updates so you always know the progress.',
  },
  {
    question: 'Do you work with clients outside Pakistan?',
    answer:
      'Yes. DevXoft works with clients worldwide. All communication is in English and we adapt to your time zone for meetings.',
  },
  {
    question: 'What technologies does DevXoft specialise in?',
    answer:
      'Our core stack is Next.js, React, TypeScript, Tailwind CSS, Node.js, MongoDB, and Prisma. We also integrate AI tools like OpenAI and Langchain.',
  },
])
 
const servicesSchemas = [
  servicesFaqSchema,
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]),
]

export default function Services () {
  return (
    <div className='min-h-screen bg-background'>
      {/* 1. Hero Section - Trust building start yahan se hota hai */}
      <section className='relative pt-32 pb-20 overflow-hidden'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none'>
          <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500 blur-[120px] rounded-full' />
          <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 blur-[120px] rounded-full' />
        </div>

        <div className='max-w-7xl mx-auto px-6 text-center relative z-10'>
          <Reveal>
            <h2 className='text-teal-500 font-bold tracking-widest uppercase text-sm mb-4'>
              What We Do Best
            </h2>
            <h1 className='text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight'>
              Solutions tailored to <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500'>
                Your Business Growth.
              </span>
            </h1>
            <p className='max-w-2xl mx-auto text-foreground/70 text-lg md:text-xl leading-relaxed'>
              We don't just write code; we solve business problems with
              high-performance digital assets and scalable infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Stats Section - Numbers create immediate trust */}
      <LazySection minHeight='150px'>
        <section className='py-10 border-y border-border/50 bg-card/30 backdrop-blur-sm'>
          <div className='max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              { label: 'Client Satisfaction', value: '99%' },
              { label: 'Projects Delivered', value: '150+' },
              { label: 'Expert Developers', value: '25+' },
              { label: 'Uptime Guarantee', value: '99.9%' }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div key={i} className='text-center'>
                  <div className='text-3xl font-bold text-teal-500'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-foreground/50 uppercase tracking-tighter'>
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </LazySection>
      {/* 3. Main Services Grid */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-6'>
          <LazySection minHeight='100px'>
            <Reveal>
              <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
                <div>
                  <h2 className='text-4xl font-bold mb-4'>
                    Our Core Expertise
                  </h2>
                  <p className='text-foreground/60 max-w-md'>
                    Explore our wide range of software development services
                    designed for modern enterprises.
                  </p>
                </div>
                <div className='hidden md:block h-1 w-1/3 bg-gradient-to-r from-teal-500 to-transparent rounded-full mb-4' />
              </div>
            </Reveal>
          </LazySection>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {ServiceData.map((service, index) => (
              <LazySection key={index} minHeight='400px'>
                {/* Yahan har card ke liye alag delay hai taake wo bari bari load hon */}
                <Reveal delay={(index % 3) * 0.15}>
                 <ServiceCard key={service.id || index} index={index} {...service} />
                </Reveal>
              </LazySection>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FAQ Section - Professional Approach */}
      <LazySection minHeight='500px'>
        <section className='py-24 bg-card/20'>
          <div className='max-w-4xl mx-auto px-6'>
            <Reveal>
              <h2 className='text-4xl font-bold text-center mb-16'>
                Common Questions
              </h2>
            </Reveal>
            <div className='space-y-6'>
              {[
                {
                  q: 'How do we start a project?',
                  a: 'We begin with a discovery call to understand your requirements, followed by planning and development.'
                },
                {
                  q: 'Do you offer custom pricing?',
                  a: 'Yes, every business is unique. We provide tailored quotes based on your specific project scope.'
                },
                {
                  q: 'Do you provide maintenance after launch?',
                  a: 'Absolutely! We provide dedicated support and maintenance to ensure your system stays updated.'
                }
              ].map((faq, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div
                    key={i}
                    className='p-6 rounded-2xl border border-border bg-card/50'
                  >
                    <h3 className='text-lg font-semibold text-teal-500 mb-2'>
                      {faq.q}
                    </h3>
                    <p className='text-foreground/70'>{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* 4. Final CTA Section - Conversion ke liye zaroori hai */}
      <LazySection minHeight='300px'>
        <Reveal>
          <section className='py-20 px-6'>
            <div className='max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-white/10 p-12 rounded-[3rem] text-center relative overflow-hidden group'>
              <div className='absolute inset-0 bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
              <h2 className='text-4xl font-bold text-white mb-6'>
                Ready to start your next project?
              </h2>
              <p className='text-gray-400 mb-10 max-w-xl mx-auto'>
                Contact us today for a free consultation and let's turn your
                idea into a digital reality.
              </p>
              <Link href='/contact' className='btn-primary inline-block'>
                Get Started Now
              </Link>
            </div>
          </section>
        </Reveal>
      </LazySection>
    </div>
  )
}
