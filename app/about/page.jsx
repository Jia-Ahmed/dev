import Image from 'next/image'
import Link from 'next/link'
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaCode,
  FaSearch,
  FaDraftingCompass,
  FaShip
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

export default function AboutPage () {
  const values = [
    {
      icon: <FaRocket />,
      title: 'Future-Ready Innovation',
      desc: 'We leverage cutting-edge frameworks like Next.js and AI integration to ensure your project remains ahead of the curve.'
    },
    {
      icon: <FaUsers />,
      title: 'Client-Centric Partnership',
      desc: "Your success is our benchmark. We don't just act as vendors; we work as your dedicated technology partners."
    },
    {
      icon: <FaLightbulb />,
      title: 'Bespoke Solutions',
      desc: 'Every business is unique. We ditch templates to build custom digital experiences tailored to your specific goals.'
    }
  ]

  const steps = [
    {
      icon: <FaSearch />,
      title: 'Discovery',
      desc: 'Deep diving into your business goals, target audience, and market challenges.'
    },
    {
      icon: <FaDraftingCompass />,
      title: 'Strategy & UX',
      desc: 'Crafting a high-fidelity blueprint and intuitive user interfaces that convert.'
    },
    {
      icon: <FaCode />,
      title: 'Agile Development',
      desc: 'Building with clean, scalable code and high-performance architecture.'
    },
    {
      icon: <FaShip />,
      title: 'Launch & Beyond',
      desc: 'Rigorous testing followed by a seamless deployment and continuous support.'
    }
  ]

  const techStack = [
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Framer Motion', icon: <SiFramer /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Prisma', icon: <SiPrisma /> }
  ]

  return (
    <div className='bg-[var(--background)] min-h-screen pt-32 pb-20'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* --- Hero Section --- */}
        <Reveal>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32'>
            <div className='relative order-2 lg:order-1'>
              <h4 className='text-teal-500 font-bold tracking-[0.2em] uppercase text-sm mb-4'>
                Inside DevXoft
              </h4>
              <h1 className='text-4xl md:text-7xl font-extrabold text-[var(--foreground)] leading-[1.1] mb-6'>
                Engineering Digital{' '}
                <span className='text-teal-500'>Excellence.</span>
              </h1>
              <p className='text-[var(--foreground)] opacity-75 text-xl leading-relaxed max-w-xl'>
                DevXoft was founded with a clear mission: to bridge the gap
                between complex technology and business growth. We transform
                ideas into high-performance digital assets.
              </p>

              <div className='flex gap-10 mt-10'>
                <div>
                  <p className='text-4xl font-bold text-teal-500'>99%</p>
                  <p className='text-sm opacity-60 uppercase tracking-widest'>
                    Client Satisfaction
                  </p>
                </div>
                <div className='border-l border-slate-300 dark:border-slate-700 pl-10'>
                  <p className='text-4xl font-bold text-teal-500'>Clean Code</p>
                  <p className='text-sm opacity-60 uppercase tracking-widest'>
                    Our Standard
                  </p>
                </div>
              </div>
            </div>

            <div className='relative order-1 lg:order-2'>
              <div className='absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000'></div>
              <div className='relative bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800'>
                <Image
                  src='/about_img/aboutpic.gif'
                  alt='About DevXoft Animation'
                  priority
                  width={800} // GIF ki asli width dein
                  height={600} // GIF ki asli height dein
                  className='w-full h-auto object-cover block'
                  unoptimized // GIF ke liye ye property zaroori hoti hai Next.js mein
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* --- Tech Stack Section (New) --- */}
        <LazySection minHeight='200px'>
          <Reveal delay={0.2}>
            <div className='mb-32 text-center'>
              <p className='text-sm opacity-50 uppercase tracking-[0.3em] mb-8'>
                Our Premium Tech Stack
              </p>
              <div className='flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all'>
                {techStack.map((tech, i) => (
                  <div key={i} className='flex flex-col items-center gap-2'>
                    <span className='text-4xl'>{tech.icon}</span>
                    <span className='text-xs font-semibold'>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </LazySection>

        {/* --- Process Section --- */}
        <LazySection minHeight='600px'>
          <div className='mb-32'>
            <Reveal>
              <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                  How We <span className='text-teal-500'>Deliver Success</span>
                </h2>
                <p className='opacity-60 max-w-2xl mx-auto text-lg'>
                  Our streamlined workflow ensures transparency, speed, and
                  exceptional quality at every stage.
                </p>
              </div>
            </Reveal>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {steps.map((step, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div
                    key={i}
                    className='group relative p-10 bg-[var(--card-bg)] rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-teal-500 transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-teal-500/50'
                  >
                    <div className='absolute top-6 right-8 text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity'>
                      0{i + 1}
                    </div>
                    <div className='w-14 h-14 bg-gradient-to-br from-teal-500 via-emerald-400 to-teal-900 text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg shadow-teal-500/30'>
                      {step.icon}
                    </div>
                    <h3 className='text-2xl font-bold mb-4'>{step.title}</h3>
                    <p className='text-sm opacity-60 leading-relaxed'>
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </LazySection>
        {/* --- Philosophy Section --- */}
        <LazySection minHeight='500px'>
          <div className='py-24 bg-teal-500/5 rounded-[4rem] px-8 mb-32 border border-teal-500/10'>
            <Reveal>
              <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-5xl font-bold'>
                  The DevXoft <span className='text-teal-500'>Core</span>
                </h2>
              </div>
            </Reveal>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
              {values.map((v, i) => (
                <Reveal key={i} delay={i * 0.2}>
                  <div key={i} className='group px-4'>
                    <div className='w-16 h-16 bg-gradient-to-br from-teal-500 via-emerald-400 to-teal-900 text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-lg group-hover:rotate-6 transition-transform'>
                      {v.icon}
                    </div>
                    <h3 className='text-2xl font-bold mb-4'>{v.title}</h3>
                    <p className='opacity-70 text-lg leading-relaxed'>
                      {v.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </LazySection>
        {/* --- Final CTA --- */}
        <LazySection minHeight='400px'>
          <Reveal>
            <div className='bg-gradient-to-br from-teal-700 via-teal-800 to-gray-700 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden'>
              <div className='relative z-10 max-w-3xl mx-auto'>
                <h2 className='text-4xl md:text-6xl font-extrabold mb-8 leading-tight'>
                  Ready to build something{' '}
                  <span className='text-teal-500'>extraordinary?</span>
                </h2>
                <Link href='/contact' className='btn-primary'>
                  Start Your Project
                </Link>
              </div>
              <div className='absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -mr-40 -mt-40'></div>
            </div>
          </Reveal>
        </LazySection>
      </div>
    </div>
  )
}
