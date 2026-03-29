// "use client";
// import React from 'react';
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Reveal from "@/components/animations/Reveal";

// const insights = [
//   // Column 1 (Left - 1 Card)
//   { id: 1, col: 1, cat: "Case Study", title: "Scalable E-Commerce for Global Retail", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800", height: "h-[250px]" },
  
//   // Column 2 (Middle - 2 Cards)
//   { id: 2, col: 2, cat: "Fintech", title: "AI-Driven Financial Modeling", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", height: "h-[250px]" },
//   { id: 3, col: 2, cat: "Cloud", title: "Seamless Enterprise Cloud Migration", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", height: "h-[250px]" },
  
//   // Column 3 (Right - 3 Cards)
//   { id: 4, col: 3, cat: "Success Story", title: "Shopify Speed Optimization (55% Growth)", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800", height: "h-[180px]" },
//   { id: 5, col: 3, cat: "Development", title: "Modern Tech Stack Implementation", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800", height: "h-[180px]" },
//   { id: 6, col: 3, cat: "Mobile", title: "Next-Gen UX for Healthcare Apps", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", height: "h-[180px]" },
// ];

// export default function FeaturedInsights() {
//   const renderColumn = (colNum) => (
//     <div className="flex flex-col gap-4 flex-1">
//       {insights
//         .filter((item) => item.col === colNum)
//         .map((item, index) => (
//           <Reveal key={item.id} delay={index * 0.1}>
//             <motion.div
//               className={`group relative w-full ${item.height} rounded-2xl overflow-hidden cursor-pointer shadow-xl bg-card border border-slate-200/50 dark:border-white/5`}
//             >
//               {/* Image */}
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:blur-[4px] brightness-[0.9] dark:brightness-75 group-hover:brightness-[0.5]"
//               />
              
//               {/* Content */}
//               <div className="absolute inset-0 p-6 flex flex-col justify-start z-10">
//                 <span className="text-white/90 font-bold text-[9px] uppercase tracking-[0.2em] mb-1">
//                   {item.cat}
//                 </span>
//                 <h4 className="text-white font-medium text-sm leading-snug group-hover:text-teal-400 transition-colors duration-300">
//                   {item.title}
//                 </h4>
                
//                 {/* Explore Arrow */}
//                 <div className="mt-auto self-end opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
//                   <div className="w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-lg">
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Overlay for Readability */}
//               <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-80" />
//             </motion.div>
//           </Reveal>
//         ))}
//     </div>
//   );

//   return (
//     <section className="py-32 bg-background transition-colors duration-500">
//       <div className="max-w-[1400px] mx-auto px-6 md:px-10">
//         <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-start">
          
//           {/* LEFT SIDE: Heading updated for DevXoft */}
//           <div className="lg:w-[40%] lg:sticky lg:top-32">
//             <Reveal>
//               <p className="text-teal-500 font-bold uppercase tracking-[0.4em] text-[11px] mb-2">
//                 Our Success Stories
//               </p>
//               <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-[1.2] mb-6 tracking-tight">
//                 Turning complex ideas into 
//                 <span className="text-teal-500 italic font-light">scalable digital realities.</span>
//               </h2>
//               <p className="text-base text-foreground/60 font-light leading-relaxed mb-8 max-w-sm">
//                 At DevXoft, we don't just build software; we engineer growth through innovation.
//               </p>
//               <Link href="/portfolio">
//                 <button className="btn-primary ">
//                   Explore More
//                 </button>
//               </Link>
//             </Reveal>
//           </div>

//           {/* RIGHT SIDE: Staircase Layout (1, 2, 3 cards) */}
//           <div className="lg:w-[70%] flex flex-col md:flex-row gap-4 w-full">
//             {renderColumn(1)}
//             {renderColumn(2)}
//             {renderColumn(3)}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




/////// new section with categories
// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import Reveal from "@/components/animations/Reveal";

// // ID ko maine string (slug) bana diya hai taake URL clean rahe
// const insights = [
//   { id: "ecommerce-global", col: 1, cat: "E-Commerce", title: "Scalable E-Commerce for Global Retail", challenge: "Legacy system crashes during high traffic.", result: "99.9% uptime & 40% faster checkout.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800", height: "h-[250px]" },
//   { id: "fintech-ai", col: 2, cat: "AI & Machine Learning", title: "AI-Driven Financial Modeling", challenge: "Manual errors in financial predictions.", result: "95% accuracy in real-time modeling.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", height: "h-[250px]" },
//   { id: "cloud-migration", col: 2, cat: "Cloud & DevOps", title: "Seamless Enterprise Cloud Migration", challenge: "High on-premise server costs.", result: "30% cost reduction & zero data loss.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", height: "h-[250px]" },
//   { id: "shopify-optimization", col: 3, cat: "Web Development", title: "Shopify Speed Optimization (55% Growth)", challenge: "Slow page load affecting sales.", result: "Page speed improved by 2.5 seconds.", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800", height: "h-[180px]" },
//   { id: "modern-tech-stack", col: 3, cat: "UI/UX Design", title: "Modern Tech Stack Implementation", challenge: "Poor user engagement due to UI.", result: "Engagement rate boosted by 65%.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800", height: "h-[180px]" },
//   { id: "healthcare-app", col: 3, cat: "Mobile App Development", title: "Next-Gen UX for Healthcare Apps", challenge: "Difficult appointment booking.", result: "70% increase in app-based bookings.", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", height: "h-[180px]" },
// ];

// const categories = ["All", "Web Development", "Mobile App Development", "AI & Machine Learning", "UI/UX Design", "Cloud & DevOps", "E-Commerce"];

// export default function FeaturedInsights() {
//   const [activeTab, setActiveTab] = useState("All");

//   const filteredInsights = insights.filter(item => 
//     activeTab === "All" ? true : item.cat === activeTab
//   );

//   const renderColumn = (colNum) => (
//     <div className="flex flex-col gap-4 flex-1">
//       <AnimatePresence mode="popLayout">
//         {filteredInsights
//           .filter((item) => item.col === colNum)
//           .map((item, index) => (
//             <motion.div
//               layout
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               key={item.id}
//             >
//               <Reveal delay={index * 0.1}>
//                 {/* Yahan Link wrap kiya hai taake pura card clickable ho jaye */}
//                 <Link href={`/portfolio/${item.id}`}>
//                   <div className={`group relative w-full ${item.height} rounded-2xl overflow-hidden cursor-pointer shadow-xl bg-card border border-slate-200/50 dark:border-white/5`}>
//                     <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:blur-[4px] brightness-[0.9] dark:brightness-75 group-hover:brightness-[0.5]" />
                    
//                     <div className="absolute inset-0 p-6 flex flex-col justify-start z-10">
//                       <span className="text-white/90 font-bold text-[9px] uppercase tracking-[0.2em] mb-1">{item.cat}</span>
//                       <h4 className="text-white font-medium text-sm leading-snug group-hover:text-teal-400 transition-colors duration-300">{item.title}</h4>
                      
//                       <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
//                         <p className="text-[10px] text-white/70 line-clamp-2"><span className="text-teal-400 font-bold">Challenge:</span> {item.challenge}</p>
//                         <p className="text-[10px] text-teal-400 font-bold mt-1 italic">Result: {item.result}</p>
//                       </div>

//                       <div className="mt-auto self-end opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
//                         <div className="w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-lg">
//                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-80" />
//                   </div>
//                 </Link>
//               </Reveal>
//             </motion.div>
//           ))}
//       </AnimatePresence>
//     </div>
//   );

//   return (
//     <section className="py-32 bg-background transition-colors duration-500">
//       <div className="max-w-[1400px] mx-auto px-6 md:px-10">
//         <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-start">
          
//           <div className="lg:w-[40%] lg:sticky lg:top-32">
//             <Reveal>
//               <p className="text-teal-500 font-bold uppercase tracking-[0.4em] text-[11px] mb-2">Our Success Stories</p>
//               <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-[1.2] mb-6 tracking-tight">
//                 Turning complex ideas into <span className="text-teal-500 italic font-light">scalable digital realities.</span>
//               </h2>
//               <p className="text-base text-foreground/60 font-light leading-relaxed mb-8 max-w-sm">
//                 At DevXoft, we don't just build software; we engineer growth through innovation.
//               </p>

//               <div className="flex flex-wrap gap-2 mb-8 max-w-md">
//                 {categories.slice(0, 6).map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setActiveTab(cat)}
//                     className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all ${
//                       activeTab === cat 
//                       ? "bg-teal-500 text-white shadow-lg" 
//                       : "bg-slate-100 dark:bg-white/5 text-foreground/40 hover:text-teal-500"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>

//               <Link href="/portfolio">
//                 <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-bold text-sm hover:bg-teal-600 transition-all shadow-xl shadow-teal-500/20">
//                   Explore More
//                 </button>
//               </Link>
//             </Reveal>
//           </div>

//           <div className="lg:w-[70%] flex flex-col md:flex-row gap-4 w-full">
//             {renderColumn(1)}
//             {renderColumn(2)}
//             {renderColumn(3)}
//           </div>
//         </div>

//         <Reveal delay={0.4}>
//           <div className="mt-32 p-10 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-dashed border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
//               <div className="text-center md:text-left">
//                   <h3 className="text-2xl font-medium text-foreground mb-2">Aap bhi aisi success chahte hain?</h3>
//                   <p className="text-foreground/60">Humaray experts aapki vision ko reality mein badalne ke liye tayyar hain.</p>
//               </div>
//               <Link href="/contact">
//                   <button className="px-10 py-4 bg-foreground text-background dark:bg-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform">
//                       Humse baat karen!
//                   </button>
//               </Link>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }



"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { SuccessStoriesData, SuccessCategories } from '@/constants/SuccessStoriesData';

export default function FeaturedInsights() {
  const [activeTab, setActiveTab] = useState("All");

  
 const filteredInsights = SuccessStoriesData.filter(item => {
    if (activeTab === "All") return item.col !== undefined;
    return item.cat.toLowerCase().trim() === activeTab.toLowerCase().trim();
  });
  
  

  // const renderCard = (item, index) => (
  //   <motion.div
  //     layout
  //     initial={{ opacity: 0, scale: 0.9 }}
  //     animate={{ opacity: 1, scale: 1 }}
  //     exit={{ opacity: 0, scale: 0.9 }}
  //     key={item.id}
  //     className="w-full"
  //   >
  //     <Reveal delay={index * 0.1}>
  //       <Link href={`/portfolio/${item.id}`}>
  //         <div className={`group relative w-full ${item.height || 'h-[250px]'} rounded-2xl overflow-hidden cursor-pointer shadow-xl  bg-slate-900 border border-white/10`}>
  //           <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:blur-[4px] brightness-[0.9] dark:brightness-75 group-hover:brightness-[0.5]" />
  //           <div className="absolute inset-0 p-6 flex flex-col justify-start ">
  //             <span className="text-white/90 font-bold text-[8px] uppercase tracking-[0.2em] mb-1">{item.cat}</span>
  //             <h4 className="text-white font-medium text-sm  leading-snug group-hover:text-teal-400 transition-colors duration-300">{item.title}</h4>
  //             <div className="mt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0">
  //               <p className="text-[11px] text-white/70 line-clamp-2"><span className="text-teal-400 font-bold">Challenge:</span> {item.challenge}</p>
  //               <p className="text-[11px] text-teal-400 font-bold mt-1 italic">Result: {item.result}</p>
  //             </div>
  //           </div>
  //           <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-80 " />
  //         </div>
  //       </Link>
  //     </Reveal>
  //   </motion.div>
  // );
// const renderCard = (item, index) => {
//   const [tapped, setTapped] = useState(false);
 

//   const handleCardClick = (e) => {
//     // Agar screen width 1024px se kam hai (Tablets included)
//     if (window.innerWidth < 1024) {
//       if (!tapped) {
//         e.preventDefault();
//         e.stopPropagation();
//         setTapped(true);
//       }
//     }
//   };

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       key={item.id}
//       className="w-full"
//     >
//       <Reveal delay={index * 0.1}>
//         <div
//           className={`group relative w-full ${item.height || 'h-[250px]'} rounded-2xl overflow-hidden cursor-pointer shadow-xl bg-slate-900 
//             border transition-all duration-500
//             ${tapped ? 'border-teal-500/60 shadow-[0_0_20px_rgba(20,184,166,0.2)]' : 'border-white/10'}
//             md:hover:border-teal-500/60 md:hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]`}
//           onMouseLeave={() => setTapped(false)} onClick={handleCardClick}
//         >
//           {/* Image */}
//           <img
//             src={item.img}
//             alt={item.title}
//             className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 
//               ${tapped ? 'scale-105 brightness-[0.35]' : 'brightness-[0.8] dark:brightness-[0.7]'}
//               md:group-hover:scale-105 md:group-hover:brightness-[0.35]`}
//           />

//           {/* Bottom gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

//           {/* Top-left category badge */}
//           <div className="absolute top-4 left-4">
//             <span className="px-2.5 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 backdrop-blur-sm text-teal-300 font-bold text-[8px] uppercase tracking-[0.15em]">
//               {item.cat}
//             </span>
//           </div>

//           {/* Bottom title + teal accent line */}
//           <div className="absolute bottom-0 left-0 right-0 p-4">
//             <div className={`h-0.5 bg-teal-500 mb-2 transition-all duration-500 ${tapped ? 'w-16' : 'w-8'} md:group-hover:w-16`} />
//             <h4 className="text-white font-bold text-sm leading-snug drop-shadow-lg">
//               {item.title}
//             </h4>
//           </div>

//           {/* View Project pill — ab yeh khud click handle karega */}
//           <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300
//             ${tapped ? 'opacity-100' : 'opacity-0'}
//             md:opacity-0 md:group-hover:opacity-100`}
//             onClick={handleCardClick}  // ← outer div pe click handler
//           >
//             <Link href={`/portfolio/${item.id}`}>
//               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/50 backdrop-blur-sm">
//                 <span className="text-teal-300 text-xs font-semibold tracking-wide">
//                   View Project
//                 </span>
//                 <svg className="w-3.5 h-3.5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </div>
//             </Link>
//           </div>

//         </div>
//       </Reveal>
//     </motion.div>
//   );
// };

const renderCard = (item, index) => {
  const [tapped, setTapped] = useState(false);

  const handleCardClick = (e) => {
    // SSR safe check
    if (typeof window === "undefined") return;
   const isTouch = window.matchMedia("(hover: none)").matches || window.innerWidth <= 1024;

    if (isTouch && !tapped) {
      // Pehla tap: Sirf reveal karo, navigation ko roko
      e.preventDefault(); 
      e.stopPropagation();
      setTapped(true);
    }
    // Agar tapped true hai, toh Link automatically kaam karega
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      key={item.id}
      className="w-full"
    >
      <Reveal delay={index * 0.1}>
        <div
          className={`group relative w-full ${item.height || 'h-[250px]'} rounded-2xl overflow-hidden cursor-pointer shadow-xl bg-slate-900 
            border transition-all duration-500
            ${tapped ? 'border-teal-500/60 shadow-[0_0_20px_rgba(20,184,166,0.2)]' : 'border-white/10'}
            lg:hover:border-teal-500/60 lg:hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]`}
          onMouseLeave={() => setTapped(false)}
          onClick={handleCardClick} // Handle click on the whole card
        >
          {/* Image */}
          <img
            src={item.img}
            alt={`${item.title} - Success Story`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 
              ${tapped ? 'scale-105 brightness-[0.35]' : 'brightness-[0.8] dark:brightness-[0.7]'}
              lg:group-hover:scale-105 lg:group-hover:brightness-[0.35]`}
          />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 backdrop-blur-sm text-teal-300 font-bold text-[8px] uppercase tracking-[0.15em]">
              {item.cat}
            </span>
          </div>

          {/* Title & Line */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className={`h-0.5 bg-teal-500 mb-2 transition-all duration-500 ${tapped ? 'w-16' : 'w-8'} group-hover:w-16`} />
            <h4 className="text-white font-bold text-sm leading-snug drop-shadow-lg">
              {item.title}
            </h4>
          </div>

         <div className="absolute inset-0  to-transparent pointer-events-none" />

          {/* View Project Pill */}
<div className={`absolute inset-0 flex items-center justify-center transition-all duration-300
  ${tapped ? 'opacity-100 visible' : 'opacity-0 invisible lg:visible lg:group-hover:opacity-100'}`}
>
  <Link 
    href={`/portfolio/${item.id}`}
    className="view-project-link" // Custom class yahan lagayi
    aria-label={`View details of ${item.title}`}
    onClick={(e) => {
      if (typeof window !== "undefined" && window.innerWidth <= 1024 && !tapped) {
        e.preventDefault();
      }
    }}
  >
    <div className="view-project-content flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/50 backdrop-blur-sm">
      <span className="view-project-text text-teal-300 text-xs font-semibold tracking-wide">
        View Project
      </span>
      <svg className="view-project-arrow w-3.5 h-3.5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </Link>
</div>        </div>
      </Reveal>
    </motion.div>
  );
};
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-start">
          
          <div className="lg:w-[35%] lg:sticky lg:top-24">
            <Reveal>
              <p className="text-teal-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-2">Our Success Stories</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.2] mb-4 md:mb-6 tracking-tight">
                Turning complex ideas into <span className="text-teal-500 italic font-light">scalable digital realities.</span>
              </h2>
              
              <div className="flex flex-wrap gap-2 mb-8 max-w-md">
                {SuccessCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-3 py-1.5 rounded-full  text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all border ${
                      activeTab === cat 
                      ? "bg-teal-500 text-white border-teal-500 shadow-lg" 
                      : "bg-transparent text-foreground/40 border-slate-200 dark:border-white/10 hover:text-teal-500"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <Link href="/portfolio">
                <button className="px-5 py-2 btn-primary">
                  Explore More
                </button>
              </Link>
            </Reveal>
          </div>
          {/* Right Content Area */}
          <div className="lg:w-[65%] w-full min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "All" ? (
                /* STAIRCASE VIEW */
                <motion.div 
                  key="staircase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col sm:flex-row gap-4 w-full"
                >
                  {[1, 2, 3].map((colNum) => (
                    <div key={colNum} className="flex flex-col gap-4 flex-1">
                      {filteredInsights
                        .filter((item) => item.col === colNum)
                        .map((item, index) => renderCard(item, index))}
                    </div>
                  ))}
                </motion.div>
              ) : (
                /* FILTERED GRID VIEW */
                <motion.div 
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                >
                  {filteredInsights.map((item, index) => (
                    <div key={item.id} className="w-full">
                       {renderCard({...item, height: 'h-[350px]'}, index)}
                    </div>
                  ))}
                  {filteredInsights.length === 0 && (
                    <div className="col-span-full py-20 text-center text-foreground/40 italic border border-dashed border-white/10 rounded-3xl">
                      Coming Soon: Projects for {activeTab}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <Reveal delay={0.4}>
  <div className="mt-16 md:mt-24 lg:mt-32 p-6 md:p-8 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-teal-800 to-transparent dark:from-teal-600 dark:to-slate-900/50 border border-dashed border-teal-500/20 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group">
    
    {/* Background Glow Effect */}
    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-teal-500/10 blur-[100px] group-hover:bg-teal-500/20 transition-all duration-700" />
    
    <div className="text-center md:text-left relative z-10">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-2 md:mb-3 tracking-tight">
        Ready to build your own <span className="text-teal-500 italic">success story?</span>
      </h3>
      <p className="text-foreground/60 text-sm md:text-base max-w-lg leading-relaxed">
        Our team of experts is dedicated to transforming your vision into a scalable digital reality. Let's collaborate.
      </p>
    </div>

    <Link href="/contact" className="relative z-10">
      <button className=" px-10 py-4 btn-primary">
        Start a Conversation
      </button>
    </Link>
  </div>
</Reveal>
      </div>
    </section>
  );
}



// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import Reveal from "@/components/animations/Reveal";
// import { SuccessStoriesData, SuccessCategories } from '@/constants/SuccessStoriesData';

// export default function FeaturedInsights() {
//   const [activeTab, setActiveTab] = useState("All");

//   const filteredInsights = SuccessStoriesData.filter(item => {
//     if (activeTab === "All") return item.col !== undefined;
//     return item.cat.toLowerCase().trim() === activeTab.toLowerCase().trim();
//   });

//   // Debugging (Aapne jo console lagaya tha)
//   useEffect(() => {
//     console.log(`Tab: ${activeTab} | Found: ${filteredInsights.length} cards`);
//   }, [activeTab, filteredInsights]);

//   const renderCard = (item, index) => (
//     <motion.div
//       key={item.id}
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.4 }}
//       className="w-full relative group"
//     >
//       <Link href={`/portfolio/${item.id}`}>
//         <div className={`relative w-full ${item.height || 'h-[300px]'} rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-white/10`}>
//           {/* Image */}
//           <img 
//             src={item.img} 
//             alt={item.title} 
//             className="absolute inset-0 w-full h-full object-cover brightness-[0.6] group-hover:scale-105 transition-transform duration-700" 
//           />
          
//           {/* Gradient Overlay - Taake text hamesha nazar aaye */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

//           {/* Text Content */}
//           <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
//             <span className="text-teal-400 font-bold text-[10px] uppercase tracking-widest mb-2 block">
//               {item.cat}
//             </span>
//             <h4 className="text-white font-bold text-lg md:text-xl leading-tight group-hover:text-teal-300 transition-colors">
//               {item.title}
//             </h4>
//             <div className="mt-3 overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out">
//               <p className="text-[11px] text-gray-300 line-clamp-2">
//                 <span className="text-teal-400 font-semibold">Challenge:</span> {item.challenge}
//               </p>
//               <p className="text-[11px] text-teal-300 font-medium italic mt-1">
//                 Result: {item.result}
//               </p>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );

//   return (
//     <section className="py-32 bg-background overflow-hidden">
//       <div className="max-w-[1400px] mx-auto px-6 md:px-10">
//         <div className="flex flex-col lg:flex-row gap-16 items-start">
          
//           {/* Left Sidebar */}
//           <div className="lg:w-[35%] lg:sticky lg:top-32 space-y-8">
//             <Reveal>
//               <p className="text-teal-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-2">Success Stories</p>
//               <h2 className="text-4xl md:text-5xl font-medium text-foreground leading-tight tracking-tight">
//                 Turning complex ideas into <span className="text-teal-500 italic font-light text-nowrap">scalable realities.</span>
//               </h2>
              
//               <div className="flex flex-wrap gap-2 mt-8">
//                 {SuccessCategories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setActiveTab(cat)}
//                     className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border ${
//                       activeTab === cat 
//                       ? "bg-teal-500 text-white border-teal-500 shadow-xl" 
//                       : "bg-transparent text-foreground/50 border-white/10 hover:border-teal-500/50"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </Reveal>
//           </div>

//           {/* Right Content Area */}
//           <div className="lg:w-[65%] w-full min-h-[400px]">
//             <AnimatePresence mode="wait">
//               {activeTab === "All" ? (
//                 /* STAIRCASE VIEW */
//                 <motion.div 
//                   key="staircase"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="flex flex-col md:flex-row gap-4 w-full"
//                 >
//                   {[1, 2, 3].map((colNum) => (
//                     <div key={colNum} className="flex flex-col gap-4 flex-1">
//                       {filteredInsights
//                         .filter((item) => item.col === colNum)
//                         .map((item, index) => renderCard(item, index))}
//                     </div>
//                   ))}
//                 </motion.div>
//               ) : (
//                 /* FILTERED GRID VIEW */
//                 <motion.div 
//                   key="grid"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
//                 >
//                   {filteredInsights.map((item, index) => (
//                     <div key={item.id} className="w-full">
//                        {renderCard({...item, height: 'h-[350px]'}, index)}
//                     </div>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }