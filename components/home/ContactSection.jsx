import ContactForm from '../contactform'
import Reveal from '@/components/animations/Reveal'

export default function ContactSection () {
  return (
    <section
      id='contact'
      className='py-16 md:py-24 px-4 sm:px-6 bg-[var(--background)]'
    >
      <div className='max-w-7xl mx-auto'>
        {/* ── Header ── */}
        <div className='text-center mb-12 md:mb-16'>
          <Reveal>
            <h4 className='text-teal-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3'>
              Get In Touch
            </h4>
            <h2 className='text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight'>
              Ready to Build Your{' '}
              <span className='text-teal-500'>Digital Future?</span>
            </h2>
          </Reveal>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
