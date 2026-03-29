// import HeroSection from '@/components/home/HeroSection'
// import ServicesSection from '@/components/home/ServicesSection'
// import Portfolio from '@/components/home/Portfolio'
// import TechStack from '@/components/home/TechStack'
// import AboutSection from '@/components/home/AboutSection'
// import ContactSection from '@/components/home/ContactSection'

// export default function HomePage () {
//   return (
//    <main className='min-h-screen'>

//       {/* Ab background color aapke individual sections handle karenge */}
//       <HeroSection />
//        <AboutSection />
//       <ServicesSection />
//       <Portfolio />
//       <TechStack />
//       <ContactSection />
//     </main>
//   )
// }

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

export default function HomePage () {
  return (
    <main className='min-h-screen'>
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
