// export default function HeroSection(){
//    return(  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
//         {/* Background Video Container - IMPROVED CLARITY */}
//         <div className="absolute inset-0 z-0">
//           {/* Video Element with enhanced clarity */}
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="auto"
//             className="absolute inset-0 w-full h-full object-cover"
//             poster="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
//             style={{
//               filter: 'brightness(0.9) contrast(1.15) saturate(1.1)' // Enhanced video appearance with better brightness
//             }}
//           >
//             <source src="/video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           {/* Lighter gradient overlay for better video visibility */}
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-900/30 to-teal-900/25" />

//           {/* Focused dark overlay only at bottom for text contrast */}
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

//           {/* Additional subtle vignette effect */}
//           <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-gray-900/30" />
//         </div>

//         {/* Hero Content with Enhanced Readability */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="mb-8">
//             {/* Badge with stronger background */}
//             <div className="inline-block px-6 py-3 rounded-full bg-gray-900/70 backdrop-blur-md border border-teal-400/40 mb-8 shadow-2xl">
//               <span className="text-teal-300 font-semibold text-sm tracking-wide uppercase">Innovative Solutions</span>
//             </div>

//             {/* Main Heading - KEPT ORIGINAL STYLING */}
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//               Welcome to <span className="bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">DevXoft</span>
//             </h1>

//             {/* Subheading with enhanced readability */}
//             <div className="backdrop-blur-sm bg-gray-900/20 rounded-2xl p-6 mb-10 border border-gray-700/30">
//               <p
//                 className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto leading-relaxed"
//                 style={{
//                   textShadow: '1px 2px 8px rgba(0,0,0,0.9)'
//                 }}
//               >
//                 Your trusted partner for <span className="text-teal-300 font-semibold">innovative web development</span> solutions that drive business growth
//               </p>
//             </div>
//           </div>

//           {/* CTA Buttons with enhanced styling */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//             <button className="group relative bg-gradient-to-r from-teal-500 to-teal-400 text-white px-12 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg">
//               <span className="relative z-10">Get Started Today</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
//             <button className="group border-2 border-teal-400/80 text-teal-300 hover:bg-teal-400/15 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md bg-gray-900/30 shadow-lg">
//               <span className="flex items-center gap-2">
//                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//                 View Our Work
//               </span>
//             </button>
//           </div>

//           {/* Stats Section with enhanced backgrounds */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <div className="text-center p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-600/40 hover:border-teal-400/60 hover:bg-gray-900/70 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
//               <div
//                 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent mb-3"
//                 style={{
//                   textShadow: '0 0 20px rgba(45, 212, 191, 0.5)'
//                 }}
//               >
//                 150+
//               </div>
//               <div className="text-gray-200 font-semibold text-sm tracking-wide">Projects Completed</div>
//             </div>
//             <div className="text-center p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-600/40 hover:border-teal-400/60 hover:bg-gray-900/70 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
//               <div
//                 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent mb-3"
//                 style={{
//                   textShadow: '0 0 20px rgba(45, 212, 191, 0.5)'
//                 }}
//               >
//                 50+
//               </div>
//               <div className="text-gray-200 font-semibold text-sm tracking-wide">Happy Clients</div>
//             </div>
//             <div className="text-center p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-600/40 hover:border-teal-400/60 hover:bg-gray-900/70 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
//               <div
//                 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent mb-3"
//                 style={{
//                   textShadow: '0 0 20px rgba(45, 212, 191, 0.5)'
//                 }}
//               >
//                 5+
//               </div>
//               <div className="text-gray-200 font-semibold text-sm tracking-wide">Years Experience</div>
//             </div>
//             <div className="text-center p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-600/40 hover:border-teal-400/60 hover:bg-gray-900/70 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
//               <div
//                 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent mb-3"
//                 style={{
//                   textShadow: '0 0 20px rgba(45, 212, 191, 0.5)'
//                 }}
//               >
//                 99%
//               </div>
//               <div className="text-gray-200 font-semibold text-sm tracking-wide">Client Satisfaction</div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
//           <div className="w-6 h-10 border-2 border-teal-400/60 rounded-full flex justify-center backdrop-blur-md bg-gray-900/20 shadow-lg">
//             <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse" />
//           </div>
//         </div>
//       </section>)
// }

'use client'
import Link from "next/link"
export default function HeroSection () {
  return (
   
    <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950'>
      {/* Background Video Container */}
      <div className='absolute inset-0 z-0'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-full object-cover opacity-100'
          style={{ filter: 'brightness(0.9) contrast(1.1)' }}
        >
          <source src='/video.mp4' type='video/mp4' />
        </video>

        {/* FIXED OVERLAY: Yeh dark hi rahega chahe light mode ho ya dark */}
        <div className='absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60' />
      </div>

      {/* Content: Isme text colors ko "white" par fix kar diya hai */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center pt-28 lg:pt-0'>
        <div className='mb-8'>
          {/* Badge */}
          <div className='inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6'>
            <span className='text-teal-400 font-bold text-xs tracking-widest uppercase'>
              Innovative Solutions
            </span>
          </div>

          {/* Welcome Text: Isko hamesha White rakha hai */}
          {/* here i apply changing for mobile font size  */}
          <h1
className='text-3xl sm:text-5xl md:text-8xl font-black mb-6 leading-tight text-white tracking-tighter'
            style={{ textShadow: '0 4px 15px rgba(0,0,0,0.6)' }}
          >
            Welcome to <span className='text-teal-400'>DevXoft</span>
          </h1>

          {/* Subheading: Iska background hamesha dark glass rahega */}
          <div className='backdrop-blur-md bg-black/30 rounded-2xl p-4 md:p-6 mb-10 border border-white/10 shadow-2xl'>
          {/* here i apply changing for mobile sub headingfont size  */}
            <p className='text-sm sm:text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-medium'>
              Your trusted partner for{' '}
              <span className='text-teal-400 font-bold'>
                innovative web development
              </span>{' '}
              solutions
            </p>
          </div>
        </div>

        {/* Buttons: Fixed colors */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          {/* Primary Button */}
          <Link href="/contact" className='btn-primary w-full sm:w-auto'suppressHydrationWarning={true}>Get Started Today</Link>

          {/* Secondary Button */}
          <button  suppressHydrationWarning className='btn-secondary w-full sm:w-auto flex items-center justify-center gap-2'>
            View Our Work
            <svg
              className='w-5 h-5'
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
          </button>
        </div>

        {/* Stats: Glass effect with fixed white text */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-16'>
          {[
            { label: 'Projects', value: '150+' },
            { label: 'Clients', value: '50+' },
            { label: 'Experience', value: '5+' },
            { label: 'Satisfaction', value: '99%' }
          ].map((stat, i) => (
            <div
              key={i}
              className='bg-white/5 backdrop-blur-md border border-white/10 p-3 sm:p-6 rounded-2xl'
            >
              <div className='text-3xl font-black text-teal-400 mb-1'>
                {stat.value}
              </div>
              <div className='text-gray-400 text-xs font-bold uppercase tracking-widest'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}
