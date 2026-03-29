import Link from 'next/link'

export const AboutSection = () => {
  return (
 
    <section id='about' className='py-12 md:py-20 px-4 sm:px-6 bg-[var(--background)]'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
        {/* Left Side: Image/Visual */}
       
        <div className='relative group'>
          <div className='absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000'></div>
          <div className='relative bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800'>
            
            <img
              src='/about_img/aboutpic.gif'
              alt='About DevXoft Animation'
              className='w-full h-auto object-cover block'
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div>
          <h4 className='text-teal-500 font-bold tracking-widest uppercase text-sm mb-2'>
            Who We Are
          </h4>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[var(--foreground)]'>
            We are a team of{' '}
            <span className='text-teal-500'>passionate developers</span>{' '}
            dedicated to your success.
          </h2>
          <p className='text-[var(--foreground)] opacity-80 text-base md:text-lg mb-6 md:mb-8 leading-relaxed'>
            At DevXoft, we don't just write code; we build digital experiences.
            We specialize in creating high-performance web applications using
            Next.js and Tailwind CSS, ensuring your business stays ahead in the
            digital age.
          </p>

          {/* Key Points */}
          <ul className='space-y-4'>
            {[
              'Expert Frontend Development',
              'Fast & SEO Friendly Solutions',
              'Modern User Interfaces'
            ].map((item, index) => (
              <li
                key={index}
                className='flex items-center gap-3 text-[var(--foreground)]'
              >
                <span className='flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500'>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

         <Link href="/about" className="btn-primary mt-6 md:mt-10 inline-block" >Learn More About Us</Link>
        </div>
      </div>
    </section>
   
  )
}
export default AboutSection
