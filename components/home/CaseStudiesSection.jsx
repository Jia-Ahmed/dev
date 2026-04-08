'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Reveal from '@/components/animations/Reveal'
import {
  SuccessStoriesData,
  SuccessCategories
} from '@/constants/SuccessStoriesData'
// ✅ 1. renderCard ko alag "SuccessCard" component bana diya
const SuccessCard = ({ item, index, customHeight }) => {
  const [tapped, setTapped] = useState(false)

  const handleCardClick = e => {
    if (typeof window === 'undefined') return
    const isTouch =
      window.matchMedia('(hover: none)').matches || window.innerWidth <= 1024

    if (isTouch && !tapped) {
      e.preventDefault()
      e.stopPropagation()
      setTapped(true)
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className='w-full'
    >
      <Reveal delay={index * 0.1}>
        <div
          className={`group relative w-full ${
            customHeight || item.height || 'h-[250px]'
          } rounded-2xl overflow-hidden cursor-pointer shadow-xl bg-slate-900 
          border transition-all duration-500
          ${
            tapped
              ? 'border-teal-500/60 shadow-[0_0_20px_rgba(20,184,166,0.2)]'
              : 'border-white/10'
          }
          lg:hover:border-teal-500/60 lg:hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]`}
          onMouseLeave={() => setTapped(false)}
          onClick={handleCardClick}
        >
          <img
            src={item.img}
            alt={`${item.title} - Success Story`}
            loading='lazy'
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 
            ${
              tapped
                ? 'scale-105 brightness-[0.35]'
                : 'brightness-[0.8] dark:brightness-[0.7]'
            }
            lg:group-hover:scale-105 lg:group-hover:brightness-[0.35]`}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none' />

          <div className='absolute top-4 left-4'>
            <span className='px-2.5 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 backdrop-blur-sm text-teal-300 font-bold text-[8px] uppercase tracking-[0.15em]'>
              {item.cat}
            </span>
          </div>

          <div className='absolute bottom-0 left-0 right-0 p-4'>
            <div
              className={`h-0.5 bg-teal-500 mb-2 transition-all duration-500 ${
                tapped ? 'w-16' : 'w-8'
              } group-hover:w-16`}
            />
            <h4 className='text-white font-bold text-sm leading-snug drop-shadow-lg'>
              {item.title}
            </h4>
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300
            ${
              tapped
                ? 'opacity-100 visible'
                : 'opacity-0 invisible lg:visible lg:group-hover:opacity-100'
            }`}
          >
            <Link
              href={`/portfolio/${item.id}`}
              className='view-project-link'
              aria-label={`View details of ${item.title}`}
              onClick={e => {
                if (
                  typeof window !== 'undefined' &&
                  window.innerWidth <= 1024 &&
                  !tapped
                ) {
                  e.preventDefault()
                }
              }}
            >
              <div className='view-project-content flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/50 backdrop-blur-sm'>
                <span className='view-project-text text-teal-300 text-xs font-semibold tracking-wide'>
                  View Project
                </span>
                <svg
                  className='view-project-arrow w-3.5 h-3.5 text-teal-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </Reveal>
    </motion.div>
  )
}

export default function FeaturedInsights () {
  const [activeTab, setActiveTab] = useState('All')

  const filteredInsights = SuccessStoriesData.filter(item => {
    if (activeTab === 'All') return item.col !== undefined
    return item.cat.toLowerCase().trim() === activeTab.toLowerCase().trim()
  })

  return (
    <section className='py-16 md:py-24 lg:py-32 bg-background'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10'>
        <div className='flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-start'>
          <div className='lg:w-[35%] lg:sticky lg:top-24'>
            <Reveal>
              <p className='text-teal-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-2'>
                Our Success Stories
              </p>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.2] mb-4 md:mb-6 tracking-tight'>
                Turning complex ideas into{' '}
                <span className='text-teal-500 italic font-light'>
                  scalable digital realities.
                </span>
              </h2>

              <div className='flex flex-wrap gap-2 mb-8 max-w-md'>
                {SuccessCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-3 py-1.5 rounded-full  text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all border ${
                      activeTab === cat
                        ? 'bg-teal-500 text-white border-teal-500 shadow-lg'
                        : 'bg-transparent text-foreground/40 border-slate-200 dark:border-white/10 hover:text-teal-500'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <Link href='/portfolio'>
                <button className='px-5 py-2 btn-primary'>Explore More</button>
              </Link>
            </Reveal>
          </div>
          {/* Right Content Area */}
          <div className='lg:w-[65%] w-full min-h-[400px]'>
            <AnimatePresence mode='wait'>
              {activeTab === 'All' ? (
                /* STAIRCASE VIEW */
                <motion.div
                  key='staircase'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='flex flex-col sm:flex-row gap-4 w-full'
                >
                  {[1, 2, 3].map(colNum => (
                    <div key={colNum} className='flex flex-col gap-4 flex-1'>
                      {filteredInsights
                        .filter(item => item.col === colNum)
                        .map((item, index) => (
                          <SuccessCard
                            key={item.id}
                            item={item}
                            index={index}
                          />
                        ))}
                    </div>
                  ))}
                </motion.div>
              ) : (
                /* FILTERED GRID VIEW */
                <motion.div
                  key='grid'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'
                >
                  {filteredInsights.map((item, index) => (
                    <div key={item.id} className='w-full'>
                      <SuccessCard
                        key={item.id}
                        item={item}
                        index={index}
                        customHeight='h-[350px]'
                      />
                    </div>
                  ))}
                  {filteredInsights.length === 0 && (
                    <div className='col-span-full py-20 text-center text-foreground/40 italic border border-dashed border-white/10 rounded-3xl'>
                      Coming Soon: Projects for {activeTab}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <Reveal delay={0.4}>
          <div className='mt-16 md:mt-24 lg:mt-32 p-6 md:p-8 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-teal-800 to-transparent dark:from-teal-600 dark:to-slate-900/50 border border-dashed border-teal-500/20 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group'>
            {/* Background Glow Effect */}
            <div className='absolute -right-20 -bottom-20 w-64 h-64 bg-teal-500/10 blur-[100px] group-hover:bg-teal-500/20 transition-all duration-700' />

            <div className='text-center md:text-left relative z-10'>
              <h3 className='text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-2 md:mb-3 tracking-tight'>
                Ready to build your own{' '}
                <span className='text-teal-500 italic'>success story?</span>
              </h3>
              <p className='text-foreground/60 text-sm md:text-base max-w-lg leading-relaxed'>
                Our team of experts is dedicated to transforming your vision
                into a scalable digital reality. Let's collaborate.
              </p>
            </div>

            <Link href='/contact' className='relative z-10'>
              <button className=' px-10 py-4 btn-primary'>
                Start a Conversation
              </button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
