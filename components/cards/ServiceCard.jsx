//// card design////
//  'use client'
// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// export default function ServiceCard({
//   id,
//   title,
//   shortDescription,
//   gradient,
//   features,
//   index,
//   image
// }) {
//   return (
//     <div
//       className='relative group w-full h-full  flex transition-all duration-500'
//       style={{ animationDelay: `${index * 150}ms` }}
//     >
//       {/* Dynamic Glow behind card */}
//       <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-40 rounded-tl-[50px] rounded-br-[50px] blur transition duration-500`} />

//       {/* Main Card Body */}
//       <div className='relative flex flex-col w-full  bg-[#0f1115] border border-white/10 rounded-tl-[50px] rounded-br-[50px] overflow-hidden transition-all duration-500 ease-in-out hover:translate-x-2 hover:border-teal-500/40 shadow-xl flex-1 '>

//         {/* Image Section */}
//         <div className='relative w-full  aspect-[16/9] overflow-hidden'>
//           {image ? (
//             <Image
//               src={image}
//               alt={title}
//               fill
//               className='object-cover transition-transform duration-700 group-hover:scale-110'
//             />
//           ) : (
//             <div className={`w-full h-full bg-gradient-to-br ${gradient} opacity-20`} />
//           )}
//           <div className='absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent' />
//         </div>

//         {/* Content Section */}
//         <div className='p-5 flex flex-col gap-3 flex-1'>
//           {/* Title */}
//           <h3 className='text-lg font-bold text-white leading-tight group-hover:text-teal-400 transition-colors'>
//             {title}
//           </h3>

//           {/* Short Description (Always visible, 2 lines max) */}
//           <p className='text-gray-400 text-[12px] leading-relaxed line-clamp-2'>
//             {shortDescription}
//           </p>

//           {/* Feature Badges (Span tags) */}
//           <div className='flex flex-wrap gap-2 mt-1'>
//             {features?.slice(0, 3).map((feature, idx) => (
//               <span
//                 key={idx}
//                 className="px-2 py-0.5 bg-white/5 border border-white/10 text-teal-500 text-[10px] font-medium rounded-md group-hover:bg-teal-500/10 transition-colors"
//               >
//                 {feature}
//               </span>
//             ))}
//           </div>

//           {/* Explore Button (Bottom) */}
//           <Link href={`/service/${id}`} className="mt-auto pt-2">
//             <div className='w-full py-2.5 bg-teal-500 hover:bg-teal-600 text-black text-[11px] font-black uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95'>
//               <span>Explore</span>
//               <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                 <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M14 5l7 7m0 0l-7 7m7-7H3' />
//               </svg>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }






///////dark mode cards with exact alignment//////
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export default function ServiceCard({
  id,
  title,
  shortDescription,
  gradient,
  features,
  index,
  image
}) {
  
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  
  return (
    <div
      className='relative group w-full h-full flex transition-all duration-500'
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onTouchStart={() => setIsHovered(true)}
  onTouchEnd={() => setTimeout(() => setIsHovered(false), 600)}
    >
      {/* 1. Dynamic Glow (Positioned absolute to not interfere with card shape) */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-900 rounded-tl-[50px] rounded-br-[50px] blur transition duration-500 z-0 opacity-10 md:opacity-0 ${isHovered ? 'md:opacity-40' : ''}`}/>

      {/* 2. Main Card Body */}
      <div className={`relative flex flex-col w-full bg-[var(--card-bg)] text-[var(--foreground)] shadow-lg dark:shadow-2xl border rounded-tl-[50px] rounded-br-[50px] overflow-hidden transition-all duration-500 ease-in-out shadow-xl flex-1 z-10 border-teal-500/10 md:border-white/10 ${isHovered ? 'md:translate-x-2 md:shadow-teal-500/10 md:border-teal-500/40' : ''}`}>

        {/* 3. Image Section with Internal Clipping */}
       {/* Image Section */}
{/* <div className='relative w-full  aspect-[16/9] p-[1.5px]'>

  <div className='relative w-full h-full rounded-tl-[48px] overflow-hidden'>
    {image ? (
      <Image
        src={image}
        alt={title}
        fill
        className='object-cover transition-transform duration-700 group-hover:scale-110'
      />
    ) : (
      <div className={`w-full h-full bg-gradient-to-br ${gradient} opacity-20`} />
    )}
    <div className='absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent pointer-events-none' />
  </div>
  </div> */}
<div className='relative w-full  bg-gray-100 dark:bg-gray-900 aspect-[16/9] p-[1.5px]'>
    <div className='relative w-full h-full  rounded-tl-[48px] overflow-hidden'>
      {image ? (
        <Image src={image} alt={title} fill className='object-cover transition-transform duration-700 group-hover:scale-110' />
      ) : (
        /* Yahan `${gradient}` ki jagah fixed color/gradient de diya */
        <div className="w-full h-full bg-gradient-to-br from-teal-900 to-[#465990]" />
      )}
      <div className='absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent pointer-events-none' />
    </div>
  </div>

        {/* 4. Content Section */}
        <div className='p-4 md:p-5 flex flex-col gap-2 md:gap-3 flex-1'>
          <h3 className={`text-base md:text-lg font-bold leading-tight transition-colors text-teal-500 md:text-[var(--foreground)] ${isHovered ? 'md:text-teal-500' : ''}`}>
            {title}
          </h3>

          <p className='text-xs sm:text-[13px] leading-relaxed line-clamp-3 opacity-70'>
            {shortDescription}
          </p>

          {/* <div className='flex flex-wrap gap-2 mt-1'>
            {features?.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-white/5 border border-white/10 text-teal-500 text-[10px] font-medium rounded-md group-hover:bg-teal-500/10 transition-colors"
              >
                {feature}
              </span>
            ))}
          </div> */}
          <ul className={`space-y-1  text-xs opacity-80 overflow-hidden transition-all duration-500 ${
              expanded ? "max-h-40" : "max-h-[38px]"
            }`}
          >
            {features?.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {features?.length > 2 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-teal-500 text-[10px] font-bold hover:underline cursor-pointer w-fit"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          )}

          {/* 5. Explore Button (Bottom) */}
    {/* <div className="mt-auto pt-4">
            <Link href={`/service/${id}`}>
              <div className='inline-flex px-5 py-2 bg-teal-500 text-white text-[11px] font-bold uppercase rounded-lg  transition-all cursor-pointer'>
                Explore More
              </div>
            </Link>
          </div> */}
          <div className="mt-auto pt-4">
  <Link href={`/service/${id}`}>
    <div className='inline-flex px-6 py-2.5 bg-teal-500 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer shadow-md shadow-teal-500/20 border-2 border-transparent hover:bg-white hover:text-slate-900 hover:border-slate-900 hover:shadow-lg hover:-translate-y-0.5 dark:hover:bg-white dark:hover:text-teal-600 dark:hover:border-teal-400 dark:hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] active:scale-95'>
      Explore More
    </div>
  </Link>
</div>
        </div>
      </div>
    </div>
  )
}






//////with light csrd
// 'use client'
// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// export default function ServiceCard ({
//   id,
//   title,
//   shortDescription,
//   features,
//   index,
//   image
// }) {
//   const [expanded, setExpanded] = useState(false)

//   return (
//     <div
//       className='relative group w-full transition-all duration-500'
//       style={{ animationDelay: `${index * 150}ms` }}
//     >
      
//       <div
//         className='relative flex flex-col w-[280px] mx-auto
//         bg-[var(--card-bg)] 
//         text-[var(--foreground)]
//         shadow-lg dark:shadow-2xl
//         rounded-tl-[60px] rounded-br-[60px] 
//         overflow-hidden border border-gray-200 dark:border-gray-800
//         transition-all duration-500 ease-in-out 
//         hover:translate-y-[-5px] hover:shadow-teal-500/10 hover:border-teal-500'
//       >
//         {/* Image Section */}
//         <div className='relative w-full h-36 overflow-hidden bg-gray-100 dark:bg-gray-800'>
//           {image ? (
//             <Image
//               src={image}
//               alt={title}
//               fill
//               className='object-cover rounded-tl-[60px]'
//             />
//           ) : (
//             <div className='w-full h-full bg-slate-200' />
//           )}
//         </div>

//         {/* Content Section */}
//         <div className='p-6 flex flex-col gap-3 min-h-[240px]'>
//           <h3 className='text-lg font-bold leading-tight group-hover:text-teal-500 transition-colors'>
//             {title}
//           </h3>

//           <p className='text-gray-400  text-[12px] leading-relaxed line-clamp-2'>
//             {shortDescription}
//           </p>

//           <ul
//             className={`space-y-1 text-[12px] opacity-80 overflow-hidden transition-all duration-500 ${
//               expanded ? 'max-h-40' : 'max-h-[38px]'
//             }`}
//           >
//             {features?.map((item, i) => (
//               <li key={i} className='flex items-start gap-2'>
//                 <span className='mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0' />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>

//           {features?.length > 2 && (
//             <button
//               onClick={() => setExpanded(!expanded)}
//               className='text-teal-500 text-[10px] font-bold hover:underline cursor-pointer w-fit'
//             >
//               {expanded ? 'Show Less' : 'Read More'}
//             </button>
//           )}

//           <div className='mt-auto pt-4'>
//             <Link href={`/service/${id}`}>
//               <div className='inline-flex px-5 py-2 bg-teal-500 text-white text-[11px] font-bold uppercase rounded-lg hover:bg-teal-800 transition-all cursor-pointer'>
//                 Explore More
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

//// icons /////
// "use client";

// import { useState } from 'react';

// export default function ServiceCard({ title, shortDescription, Icon, gradient, features, index }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top
//     });
//   };

//   return (
//     <div
//       className="relative group h-full"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onMouseMove={handleMouseMove}
//       style={{ animationDelay: `${index * 150}ms` }}
//     >
//       {/* Animated gradient border */}
//       <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-3xl blur transition duration-500 group-hover:duration-200 animate-pulse"
//            style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
//       />

//       {/* Spotlight effect */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl overflow-hidden"
//         style={{
//           background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
//         }}
//       />

//       {/* Main card */}
//       <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:border-transparent group-hover:scale-[1.02]">

//         {/* Animated background pattern */}
//         <div className="absolute top-0 right-0 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
//           <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-full blur-3xl animate-pulse`} />
//         </div>

//         {/* Floating particles */}
//         <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
//         <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.3s' }} />

//         {/* Icon container with 3D effect */}
//         <div className="relative mb-6">
//           <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl group-hover:shadow-2xl`}>
//             <Icon className="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" />

//             {/* Shine effect */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
//           </div>

//           {/* Number badge */}
//           <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-0`}>
//             {index + 1}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10">
//           <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
//             {title}
//           </h3>

//           <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
//             {shortDescription}
//           </p>

//           {/* Feature tags */}
//           <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
//             {features.map((feature, idx) => (
//               <span
//                 key={idx}
//                 className={`px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${gradient} rounded-full opacity-80`}
//                 style={{ transitionDelay: `${idx * 100}ms` }}
//               >
//                 {feature}
//               </span>
//             ))}
//           </div>

//           {/* CTA Button with enhanced animation */}
//           <button className="relative inline-flex items-center gap-2 text-teal-400 font-medium group/btn overflow-hidden">
//             <span className="relative z-10 transition-all duration-300 group-hover:text-white">
//               Learn more
//             </span>
//             <svg
//               className="w-4 h-4 relative z-10 transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>

//             {/* Button hover background */}
//             <div className={`absolute inset-0 -left-full w-full h-full bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-500 rounded-lg -z-0`} />
//           </button>
//         </div>

//         {/* Corner accent */}
//         <div className="absolute bottom-0 right-0 w-32 h-32 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
//           <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${gradient} opacity-10 rounded-tl-full`} />
//         </div>
//       </div>
//     </div>
//   );
// }
