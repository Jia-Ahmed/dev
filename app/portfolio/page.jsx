"use client";
import React from 'react';
import FeaturedInsights from '@/components/home/CaseStudiesSection'; // Path check kar len agar component folder mein hai
import Reveal from "@/components/animations/Reveal";
import { buildMetadata, breadcrumbSchema, localBusinessSchema } from '@/lib/seo'
// ══════════════════════════════════════════════════════════════════════════════
// app/portfolio/page.jsx  (Portfolio)
// ══════════════════════════════════════════════════════════════════════════════
export const metadataPortfolio = buildMetadata({
  title: 'Portfolio',
  description:
    'Browse DevXoft\'s portfolio of high-performance web applications, SaaS platforms, and e-commerce solutions built with Next.js and React.',
  path: '/portfolio',
  keywords: [
    'web development portfolio',
    'Next.js projects',
    'React portfolio',
    'SaaS development examples',
  ],
})
 
const portfolioSchemas = [
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
  ]),
]

export default function PortfolioMainPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section for Portfolio Page */}
      <section className="pt-40 pb-20 border-b border-slate-200/50 dark:border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-medium text-foreground tracking-tighter mb-6">
              Our <span className="text-teal-500 italic font-light">Portfolio</span>
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl font-light leading-relaxed">
              Explore how DevXoft has helped businesses across the globe scale their 
              digital presence through innovation and strategic engineering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reusing your Success Stories Component */}
      {/* Isme hum padding thori kam kar denge taake hero ke sath fit lage */}
      <div className="-mt-20"> 
        <FeaturedInsights />
      </div>
    </main>
  );
}