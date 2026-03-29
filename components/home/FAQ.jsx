'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus } from 'react-icons/hi'
import Reveal from '@/components/animations/Reveal'

const faqs = [
  {
    question: 'What core digital solutions does DevXoft offer?',
    answer:
      'DevXoft specializes in delivering enterprise-grade custom web applications, high-conversion UI/UX designs, and scalable mobile solutions. Our focus is on driving digital transformation through bespoke strategies that align with your business objectives.'
  },
  {
    question: 'What is the projected timeline for a typical engagement?',
    answer:
      "Timelines are strategic and depend on the project's complexity. A high-performance business platform typically reaches deployment in 2–4 weeks, while complex, feature-rich web ecosystems may span 2–3 months."
  },
  {
    question: 'What is your pricing and investment model?',
    answer:
      'Our pricing is value-driven and transparent, tailored to the specific scope and complexity of your project. We offer flexible structures designed to maximize your Return on Investment (ROI) while maintaining the premium quality and long-term reliability DevXoft is known for.'
  },
  {
    question: 'What technology standards do you follow for development?',
    answer:
      "We utilize a diverse stack of industry-leading, modern technologies optimized for speed, security, and scalability. Whether it's high-performance web platforms or cross-platform mobile applications, we choose the most robust tools to ensure your product is future-proof and maintains a competitive edge."
  },
  {
    question: 'How does DevXoft approach quality assurance and security?',
    answer:
      'Quality is embedded in our DNA. We implement clean-code architecture, multi-tier testing, and industry-standard encryption protocols (SSL, secure data handling) to ensure your digital assets are robust, secure, and future-proof.'
  },
  {
    question: 'Does DevXoft assist with legacy system modernization?',
    answer:
      'Absolutely. We specialize in refactoring and redesigning existing platforms. We enhance performance and responsiveness while preserving your brand equity and ensuring a seamless transition from legacy to modern tech stacks.'
  },
  {
    question: 'How can we initiate a collaboration with DevXoft?',
    answer:
      'The process is seamless. Simply book a consultation through our contact portal. Our strategists will review your requirements, provide a comprehensive roadmap, and guide you from the discovery phase to a successful project kickoff.'
  }
]

export default function FAQ () {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='py-16 md:py-24 bg-[var(--background)]'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6'>
        {/* ── Header ── */}
        <div className='text-center mb-12 md:mb-16'>
          <Reveal>
            <h4 className='text-teal-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3'>
              Questions
            </h4>
            <h2 className='text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight'>
              Frequently Asked <span className='text-teal-500'>Questions</span>
            </h2>
            <p className='mt-4 text-base md:text-lg text-[var(--foreground)] opacity-60 max-w-xl mx-auto'>
              Everything you need to know about our process and services.
            </p>
          </Reveal>
        </div>

        {/* ── FAQ List ── */}
        <div className='space-y-3 md:space-y-4'>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <Reveal key={index} delay={index * 0.05}>
                <div
                  className={[
                    'rounded-2xl border transition-all duration-300',
                    isOpen
                      ? 'border-teal-500/60 bg-teal-500/5 shadow-md shadow-teal-500/10'
                      : 'border-slate-200 dark:border-slate-800 bg-[var(--card-bg)] hover:border-teal-500/30 hover:shadow-sm'
                  ].join(' ')}
                >
                  {/* Question button */}
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className='w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-2xl'
                  >
                    <span
                      className={[
                        'text-base md:text-lg font-bold leading-snug transition-colors duration-200',
                        isOpen ? 'text-teal-500' : 'text-[var(--foreground)]'
                      ].join(' ')}
                    >
                      {faq.question}
                    </span>

                    {/* Icon — rotates smoothly via CSS transform */}
                    <span
                      className={[
                        'flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full transition-all duration-300',
                        isOpen
                          ? 'bg-teal-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      ].join(' ')}
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
                      }}
                      aria-hidden='true'
                    >
                      <HiPlus size={18} />
                    </span>
                  </button>

                  {/* Answer — animated expand/collapse */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key='answer'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                        className='overflow-hidden'
                      >
                        <div className='px-5 pb-5 md:px-6 md:pb-6 pt-1 border-t border-slate-100 dark:border-slate-800'>
                          <p className='text-sm md:text-base text-[var(--foreground)] opacity-70 leading-relaxed pt-3'>
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
