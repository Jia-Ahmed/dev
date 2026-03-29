// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'


// export default function ProCard({ title, description, image, gradient = "from-teal-500 to-blue-500", tags = [] }) {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   return (
//     <div 
//       className="relative group h-[400px] w-full rounded-3xl overflow-hidden border border-border/50"
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect()
//         setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
//       }}
//     >
//       {/* Background Glowing Gradient Layer */}
//       <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition duration-700 blur-xl z-0`} />

//       <div className="relative  h-full w-full bg-card overflow-hidden z-10 rounded-3xl">
//         {/* Layer 1: Image & Dark Overlay */}
//         <Image
//           src={image}
//           alt={title}
//           fill
          
//           className="object-cover  transition-transform duration-700 group-hover:scale-110 brightness-[0.7] group-hover:brightness-[0.2]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//         {/* Layer 2: Content */}
//         <div className="relative z-20 h-full p-8 flex flex-col justify-end">
//           <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
//             {title}
//           </h3>

//           <div className="max-h-0 opacity-0 group-hover:max-h-[1000px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
//             <p className="text-gray-300 text-sm mb-4 leading-relaxed">
//               {description}
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag, i) => (
//                 <span key={i} className="text-[10px] px-2 py-1 bg-white/10 border border-white/20 rounded-full text-white uppercase tracking-wider">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Shine/Spotlight Effect */}
//         <div 
//           className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
//           style={{
//             background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.4), transparent 40%)`
//           }}
//         />
//       </div>
//     </div>
//   )
// }




// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'

// export default function ProCard({ title, description, image, gradient = "from-teal-500 to-blue-500", tags = [] }) {
//   return (
//     <div className="group relative h-[450px] w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl">
      
//       {/* 1. Image Section (Upper Half) */}
//       <div className="relative h-1/2 w-full overflow-hidden">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         {/* Top Accent Line */}
//         <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`} />
//       </div>

//       {/* 2. Content Section (Lower Half) */}
//       <div className="relative h-1/2 p-6 flex flex-col justify-between transition-all duration-500 group-hover:h-full group-hover:justify-start">
        
//         <div className="z-10">
//           <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-white transition-colors duration-300">
//             {title}
//           </h3>
          
//           {/* Default State: Summary or Short Text */}
//           <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 group-hover:hidden transition-all duration-300">
//             {description}
//           </p>

//           {/* Hover State: Full Description & Tags */}
//           <div className="hidden group-hover:block animate-fadeIn">
//             <p className="text-white/90 text-sm leading-relaxed mb-6">
//               {description}
//             </p>
//             <div className="flex flex-wrap gap-2 mb-8">
//               {tags.map((tag, i) => (
//                 <div key={i} className="flex items-center gap-2 text-white/80 text-xs">
//                   <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
//                   {tag}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* 3. Footer Link (Hover to explore) */}
//         <div className="flex items-center text-blue-500 dark:text-teal-400 text-sm font-bold group-hover:text-white mt-auto">
//           <span className="group-hover:hidden">Hover to explore</span>
//           <span className="hidden group-hover:inline">Click to learn more</span>
//           <svg 
//             className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" 
//             fill="none" viewBox="0 0 24 24" stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//           </svg>
//         </div>

//         {/* 4. Full Card Gradient Overlay (Appears on Hover) */}
//         <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`} />
//       </div>
//     </div>
//   )
// }



// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function ProCard({ title, description, image, gradient = "from-teal-500 to-blue-500", tags = [] }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       layout
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="relative w-full h-[400px] bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-border/50 cursor-pointer"
//     >
//       {/* Top Accent Line (Always Visible) */}
//       <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${gradient} z-30`} />

//       <AnimatePresence mode="wait">
//         {!isHovered ? (
//           // --- 1. DEFAULT STATE (Image + Title + Line Clamp) ---
//           <motion.div
//             key="preview"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="flex flex-col h-full"
//           >
//             {/* Image Section */}
//             <div className="relative h-[220px] w-full overflow-hidden">
//               <Image
//                 src={image}
//                 alt={title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Content Section */}
//             <div className="p-6 flex flex-col justify-between flex-grow">
//               <div>
//                 <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 line-clamp-1">
//                   {title}
//                 </h3>
//                 <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
//                   {description}
//                 </p>
//               </div>

//               {/* Hover to explore link */}
//               <div className="flex items-center text-teal-500 text-sm font-bold mt-4">
//                 <span className="mr-2">Hover to explore</span>
//                 <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
//                   →
//                 </motion.span>
//               </div>
//             </div>
//           </motion.div>
//         ) : (
//           // --- 2. HOVER STATE (Public Sector Style Expansion) ---
//           <motion.div
//             key="expanded"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             className={`absolute inset-0 z-20 p-8 flex flex-col bg-gradient-to-br ${gradient} text-white`}
//           >
//             {/* Header */}
//             <h3 className="text-2xl font-black mb-2 tracking-tight">{title}</h3>
//             <div className="w-12 h-1 bg-white/40 rounded-full mb-6" />

//             {/* Full Description */}
//             <p className="text-sm leading-relaxed mb-8 text-white/90 overflow-y-auto">
//               {description}
//             </p>

//             {/* Key Features (Tags) */}
//             <div className="space-y-4">
//               <p className="text-xs font-bold uppercase tracking-widest opacity-70">Key Features:</p>
//               <ul className="space-y-3">
//                 {tags.map((tag, i) => (
//                   <motion.li 
//                     key={i}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.05 }}
//                     className="flex items-center gap-3 text-xs font-medium"
//                   >
//                     <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
//                       <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </span>
//                     {tag}
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>


//             {/* Decorative Background Circles */}
//             <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl -z-10" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }


// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function ProCard({ title, description, image, tags = [] }) {
//   const [isHovered, setIsHovered] = useState(false);

 
//   const brandGradient = "from-teal-600 via-teal-500 to-teal-400";

//   return (
//     <motion.div
//       layout
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
//       className="relative w-[370px] bg-white dark:bg-slate-900 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-slate-100 dark:border-slate-800 cursor-pointer"
//     >
//       {/* Top Brand Line */}
//       <div className="absolute top-0 left-0 w-full h-1.5 bg-teal-500 z-30" />

//       <AnimatePresence mode="wait">
//         {!isHovered ? (
//           <motion.div
//             key="preview"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="flex flex-col"
//           >
//             <div className="relative h-[220px] w-full overflow-hidden">
//               <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
//               {/* Subtle Overlay on image for depth */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//             </div>

//             <div className="p-6">
//               <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 line-clamp-1 group-hover:text-teal-600">
//                 {title}
//               </h3>
//               <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
//                 {description}
//               </p>
//               <div className="flex items-center text-teal-600 dark:text-teal-400 text-[10px] font-black uppercase tracking-widest mt-5">
//                 <span className="mr-2">Hover to explore</span>
//                 <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
//                   →
//                 </motion.span>
//               </div>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="expanded"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className={`p-8 flex flex-col bg-gradient-to-br ${brandGradient} text-white min-h-[400px] relative`}
//           >
//             <h3 className="text-2xl font-black mb-2 tracking-tight">{title}</h3>
//             <div className="w-10 h-1 bg-white/30 rounded-full mb-6" />

//             <p className="text-[13px] leading-relaxed mb-8 text-teal-50/90 font-medium">
//               {description}
//             </p>

//             <div className="space-y-4">
//               <p className="text-[10px] font-black uppercase tracking-widest text-white/70">Key Capabilities</p>
//               <ul className="grid grid-cols-1 gap-3">
//                 {tags.map((tag, i) => (
//                   <motion.li 
//                     key={i}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.05 }}
//                     className="flex items-center gap-3 text-xs font-semibold bg-white/10 p-2 rounded-xl border border-white/10"
//                   >
//                     <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
//                       <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </span>
//                     {tag}
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>

//             {/* Premium Decorative Glow */}
//             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }



'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProCard({ title, description, image, tags = [] }) {
  const [isHovered, setIsHovered] = useState(false);

  // DevXoft Teal Gradient - Adjusted for more depth
  const brandGradient = "from-teal-700 via-teal-500 to-teal-400";

  return (
    <motion.div
      layout
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
      className="relative w-[370px] bg-white dark:bg-slate-900 rounded-t-[3rem] rounded-bl-[3rem] shadow-xl hover:shadow-teal-500/30 transition-all duration-500 overflow-hidden border border-slate-100 dark:border-slate-800 cursor-pointer group"
    >
      {/* Top Branding Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-teal-500 z-30" />

      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col h-full"
          >
            <div className="relative h-[240px] w-full overflow-hidden rounded-t-[3rem] rounded-bl-[3rem]">
              <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            <div className="p-7 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-extrabold text-slate-800 dark:text-white mb-3 line-clamp-1 group-hover:text-teal-500 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-widest">
                  <span>Hover to explore</span>
                  <motion.span 
                    animate={{ x: [0, 5, 0] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </div>
                <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                   </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`p-9 flex flex-col bg-gradient-to-br ${brandGradient} text-white min-h-[420px] relative overflow-hidden`}
          >
            {/* --- PREMIUIM BLURRY LIGHTS (GLOW EFFECT) --- */}
            {/* Top Right Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-44 h-44 bg-teal-200/40 rounded-full blur-[60px] pointer-events-none" 
            />
            
            {/* Center Floating Glow */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                x: [0, 20, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-[70px] pointer-events-none" 
            />

            {/* Bottom Left Glow */}
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-100/30 rounded-full blur-[80px] pointer-events-none" 
            />
            {/* -------------------------------------------- */}

            <h3 className="relative z-10 text-2xl font-black mb-1 tracking-tight">{title}</h3>
            <div className="relative z-10 w-12 h-1.5 bg-white/40 rounded-full mb-8" />

            <p className="relative z-10 text-[14px] leading-relaxed mb-8 text-teal-50 font-medium italic">
              {description}
            </p>
            
            <div className="relative z-10 mb-4">
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
      Key Capabilities
    </p>
  </div>

          <ul className="grid grid-cols-1 gap-3">
                {tags.map((tag, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, type: "spring", stiffness: 150 }}
                    whileHover={{ 
                      scale: 1.03, 
                      x: 8,
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center gap-4 text-xs font-bold bg-white/15 backdrop-blur-xl p-3.5 rounded-2xl border border-white/25 hover:border-white/50 transition-all shadow-lg"
                  >
                    <span className="w-6 h-6 rounded-lg bg-white/30 flex items-center justify-center flex-shrink-0 shadow-lg backdrop-blur-sm group-hover:bg-white/40 transition-all">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="flex-1">{tag}</span>
                  </motion.li>
                ))}
              </ul>
          {/* Enhanced Decorative Elements */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/25 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-300/30 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/30 to-transparent rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-400/30 to-transparent rounded-tr-3xl" />
            
            {/* Light Streaks */}
            <div className="absolute top-1/3 left-0 w-2 h-20 bg-white/30 rounded-full blur-md rotate-45" />
            <div className="absolute bottom-1/4 right-0 w-2 h-32 bg-teal-300/40 rounded-full blur-md -rotate-12" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}