// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaQuoteLeft, FaStar } from "react-icons/fa";
// import Reveal from "@/components/animations/Reveal";

// const testimonials = [
//   {
//     name: "Alex Thompson",
//     role: "CEO, TechFlow",
//     content: "DevXoft transformed our vision into a high-performing reality. Their attention to detail in clean code is unmatched.",
//     rating: 5,
//   },
//   {
//     name: "Sarah Jenkins",
//     role: "Marketing Director",
//     content: "The best development partner we've worked with. The responsive design and smooth animations truly set our site apart.",
//     rating: 5,
//   },
//   {
//     name: "James Wilson",
//     role: "Founder, Startup Hub",
//     content: "Professional, timely, and technically brilliant. Our user engagement increased by 40% after the new launch.",
//     rating: 5,
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Product Manager",
//     content: "Incredible experience! The team is highly skilled and delivered the project ahead of schedule with top-notch quality.",
//     rating: 5,
//   },
//     {
//     name: "Arslan Ali",
//     role: "HR Manager",
//     content:
//       "The team demonstrated strong technical skills along with excellent professionalism. The project was delivered on time with outstanding quality.",
//     rating: 5,
//   },
//   {
//     name: "Daniel Carter",
//     role: "Operations Lead",
//     content:
//       "Clear communication, structured workflow, and impressive results. DevXoft is a partner we can confidently recommend for any digital project.",
//     rating: 5,
//   },
//   {
//     name: "Michael Anderson",
//     role: "CTO, CloudNova",
//     content:
//       "Strong technical expertise and excellent problem-solving skills. The architecture decisions made by the team significantly improved our system performance.",
//     rating: 5,
//   },
//   {
//     name: "Ayesha Khan",
//     role: "Business Consultant",
//     content:
//       "DevXoft understood our business requirements clearly and translated them into a functional, elegant digital solution. A very trustworthy team.",
//     rating: 5,
//   },
//   {
//     name: "Robert Miller",
//     role: "E-Commerce Manager",
//     content:
//       "The project was handled professionally from start to finish. Code quality, speed, and post-launch support were all outstanding.",
//     rating: 5,
//   },
//   {
//     name: "Usman Farooq",
//     role: "Startup Advisor",
//     content:
//       "What impressed us most was their commitment to quality and long-term scalability. A dependable partner for growing businesses.",
//     rating: 5,
//   },
// ];

// const duplicatedTestimonials = [...testimonials, ...testimonials];

// export default function TestimonialsSection() {
//   const [isPaused, setIsPaused] = useState(false);

//   return (
//   <section className="py-16 md:py-24 bg-[var(--background)] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16 text-center">
//         <Reveal>
//           <h4 className="text-teal-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
//             Testimonials
//           </h4>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight">
//             Trusted by <span className="text-teal-500">Industry Leaders</span>
//           </h2>
//         </Reveal>
//       </div>

//       <div className="relative">
//         {/* Soft Fading Edges - Mobile par w-16, Desktop par w-32 */}
//         <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
//         <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

//         <div className="flex overflow-hidden group">
//           <div
//             className={`flex gap-6 md:gap-8 py-10 animate-marquee ${isPaused ? 'pause-animation' : ''}`}
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//             // Mobile touch support ke liye
//             onTouchStart={() => setIsPaused(true)}
//             onTouchEnd={() => setIsPaused(false)}
//           >
//             {duplicatedTestimonials.map((item, index) => (
//               <motion.div
//                 key={index}
//                 // Mobile par scale kam rakha hai taake jitter na ho
//                 whileHover={{ y: -12, scale: 1.02 }}
//                 className="w-[280px] sm:w-[350px] md:w-[450px] shrink-0 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between group/card transition-all duration-300"
//               >
//                 <div>
//                   <div className="flex justify-between items-center mb-6 md:mb-8">
//                     <div className="p-3 md:p-4 bg-teal-500/10 rounded-xl md:rounded-2xl text-teal-500 transition-all duration-300 group-hover/card:bg-teal-500 group-hover/card:text-white">
//                       <FaQuoteLeft className="text-lg md:text-2xl" />
//                     </div>
//                     <div className="flex gap-0.5 md:gap-1">
//                       {[...Array(item.rating)].map((_, i) => (
//                         <FaStar key={i} className="text-yellow-500 text-[10px] md:text-sm" />
//                       ))}
//                     </div>
//                   </div>
                  
//                   <p className="text-[var(--foreground)] opacity-80 leading-relaxed italic text-base md:text-lg mb-4">
//                     "{item.content}"
//                   </p>
//                 </div>

//                 <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-100 dark:border-slate-800">
//                   <h5 className="font-bold text-[var(--foreground)] text-lg md:text-xl group-hover/card:text-teal-500 transition-colors">
//                     {item.name}
//                   </h5>
//                   <p className="text-[10px] md:text-sm text-teal-500 font-semibold uppercase tracking-widest mt-1">
//                     {item.role}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           display: flex;
//           width: max-content;
//           /* Mobile par speed thori fast (30s) aur Desktop par slow (50s) */
//           animation: marquee 50s linear infinite;
//         }
        
//         @media (max-width: 768px) {
//           .animate-marquee {
//             animation: marquee 30s linear infinite;
//           }
//         }

//         .pause-animation {
//           animation-play-state: paused !important;
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";
// import { useRef, useState, useCallback } from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { FaQuoteLeft, FaStar } from "react-icons/fa";
// import Reveal from "@/components/animations/Reveal";

// const testimonials = [
//   {
//     name: "Alex Thompson",
//     role: "CEO, TechFlow",
//     content:
//       "DevXoft transformed our vision into a high-performing reality. Their attention to detail in clean code is unmatched.",
//     rating: 5,
//   },
//   {
//     name: "Sarah Jenkins",
//     role: "Marketing Director",
//     content:
//       "The best development partner we've worked with. The responsive design and smooth animations truly set our site apart.",
//     rating: 5,
//   },
//   {
//     name: "James Wilson",
//     role: "Founder, Startup Hub",
//     content:
//       "Professional, timely, and technically brilliant. Our user engagement increased by 40% after the new launch.",
//     rating: 5,
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Product Manager",
//     content:
//       "Incredible experience! The team is highly skilled and delivered the project ahead of schedule with top-notch quality.",
//     rating: 5,
//   },
//   {
//     name: "Arslan Ali",
//     role: "HR Manager",
//     content:
//       "The team demonstrated strong technical skills along with excellent professionalism. The project was delivered on time with outstanding quality.",
//     rating: 5,
//   },
//   {
//     name: "Daniel Carter",
//     role: "Operations Lead",
//     content:
//       "Clear communication, structured workflow, and impressive results. DevXoft is a partner we can confidently recommend for any digital project.",
//     rating: 5,
//   },
//   {
//     name: "Michael Anderson",
//     role: "CTO, CloudNova",
//     content:
//       "Strong technical expertise and excellent problem-solving skills. The architecture decisions made by the team significantly improved our system performance.",
//     rating: 5,
//   },
//   {
//     name: "Ayesha Khan",
//     role: "Business Consultant",
//     content:
//       "DevXoft understood our business requirements clearly and translated them into a functional, elegant digital solution. A very trustworthy team.",
//     rating: 5,
//   },
//   {
//     name: "Robert Miller",
//     role: "E-Commerce Manager",
//     content:
//       "The project was handled professionally from start to finish. Code quality, speed, and post-launch support were all outstanding.",
//     rating: 5,
//   },
//   {
//     name: "Usman Farooq",
//     role: "Startup Advisor",
//     content:
//       "What impressed us most was their commitment to quality and long-term scalability. A dependable partner for growing businesses.",
//     rating: 5,
//   },
// ];

// const duplicatedTestimonials = [...testimonials, ...testimonials];

// function TestimonialCard({ item }) {
//   return (
//     <motion.div
//       className="testimonial-card group/card flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] p-6 shadow-xl transition-all duration-300 dark:border-slate-800 md:rounded-[2.5rem] md:p-8"
//       whileHover={{ y: -10, scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//     >
//       <div>
//         <div className="mb-6 flex items-center justify-between md:mb-8">
//           <div className="rounded-xl bg-teal-500/10 p-3 text-teal-500 transition-all duration-300 group-hover/card:bg-teal-500 group-hover/card:text-white md:rounded-2xl md:p-4">
//             <FaQuoteLeft className="text-lg md:text-2xl" />
//           </div>
//           <div className="flex gap-0.5 md:gap-1">
//             {Array.from({ length: item.rating }).map((_, i) => (
//               <FaStar key={i} className="text-[10px] text-yellow-500 md:text-sm" />
//             ))}
//           </div>
//         </div>

//         <p className="mb-4 italic leading-relaxed text-[var(--foreground)] opacity-80 md:text-lg">
//           &ldquo;{item.content}&rdquo;
//         </p>
//       </div>

//       <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800 md:mt-6 md:pt-6">
//         <h5 className="text-lg font-bold text-[var(--foreground)] transition-colors group-hover/card:text-teal-500 md:text-xl">
//           {item.name}
//         </h5>
//         <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-teal-500 md:text-sm">
//           {item.role}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// export default function TestimonialsSection() {
//   // Desktop: mouse hover se pause
//   const [hoverPaused, setHoverPaused] = useState(false);
//   // Mobile/tablet: tap se toggle pause — ek tap pause, doosra tap resume
//   const [tapPaused, setTapPaused] = useState(false);

//   const shouldReduceMotion = useReducedMotion();
//   const trackRef = useRef(null);

//   // Touch device check
//   const isTouchDevice = () =>
//     window.matchMedia("(hover: none) and (pointer: coarse)").matches;

//   // Desktop only: hover handlers
//   const handleMouseEnter = () => {
//     if (!isTouchDevice()) setHoverPaused(true);
//   };
//   const handleMouseLeave = () => {
//     if (!isTouchDevice()) setHoverPaused(false);
//   };

//   // Mobile/tablet: tap to toggle
//   const handleTouchEnd = (e) => {
//     e.preventDefault(); // ghost click rokne ke liye
//     setTapPaused((prev) => !prev);
//   };

//   const isPaused = hoverPaused || tapPaused || shouldReduceMotion;

//   return (
//     <section className="py-16 md:py-24 bg-[var(--background)] overflow-hidden">
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16 text-center">
//         <Reveal>
//           <h4 className="text-teal-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
//             Testimonials
//           </h4>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight">
//             Trusted by{" "}
//             <span className="text-teal-500">Industry Leaders</span>
//           </h2>
//         </Reveal>
//       </div>

//       {/* Marquee */}
//       <div className="relative">
//         {/* Fade edges */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--background)] to-transparent sm:w-20 md:w-32" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--background)] to-transparent sm:w-20 md:w-32" />

//         {/* Mobile hint — sirf touch devices pe dikhega */}
//         <div className="touch-hint-wrapper">
//           <p className={`touch-hint ${tapPaused ? "hidden-hint" : ""}`}>
            
//           </p>
//           <p className={`touch-hint resume-hint ${tapPaused ? "" : "hidden-hint"}`}>
          
//           </p>
//         </div>

//         <div className="flex overflow-hidden">
//           <div
//             ref={trackRef}
//             className={["testimonials-track", isPaused ? "paused" : ""]
//               .filter(Boolean)
//               .join(" ")}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             onTouchEnd={handleTouchEnd}
//           >
//             {duplicatedTestimonials.map((item, index) => (
//               <TestimonialCard key={index} item={item} />
//             ))}
//           </div>
//         </div>
//       </div>


//     </section>
//   );
// }


//// new cde wuth mobile criusel/////

"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Reveal from "@/components/animations/Reveal";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO, TechFlow",
    content:
      "DevXoft transformed our vision into a high-performing reality. Their attention to detail in clean code is unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director",
    content:
      "The best development partner we've worked with. The responsive design and smooth animations truly set our site apart.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Founder, Startup Hub",
    content:
      "Professional, timely, and technically brilliant. Our user engagement increased by 40% after the new launch.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    content:
      "Incredible experience! The team is highly skilled and delivered the project ahead of schedule with top-notch quality.",
    rating: 5,
  },
  {
    name: "Arslan Ali",
    role: "HR Manager",
    content:
      "The team demonstrated strong technical skills along with excellent professionalism. The project was delivered on time with outstanding quality.",
    rating: 5,
  },
  {
    name: "Daniel Carter",
    role: "Operations Lead",
    content:
      "Clear communication, structured workflow, and impressive results. DevXoft is a partner we can confidently recommend for any digital project.",
    rating: 5,
  },
  {
    name: "Michael Anderson",
    role: "CTO, CloudNova",
    content:
      "Strong technical expertise and excellent problem-solving skills. The architecture decisions made by the team significantly improved our system performance.",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    role: "Business Consultant",
    content:
      "DevXoft understood our business requirements clearly and translated them into a functional, elegant digital solution. A very trustworthy team.",
    rating: 5,
  },
  {
    name: "Robert Miller",
    role: "E-Commerce Manager",
    content:
      "The project was handled professionally from start to finish. Code quality, speed, and post-launch support were all outstanding.",
    rating: 5,
  },
  {
    name: "Usman Farooq",
    role: "Startup Advisor",
    content:
      "What impressed us most was their commitment to quality and long-term scalability. A dependable partner for growing businesses.",
    rating: 5,
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

/* ─────────────────────────────────────────
   Shared card UI
───────────────────────────────────────── */
function TestimonialCard({ item }) {
  return (
    <div className="group/card flex h-full flex-col justify-between rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] p-6 shadow-xl transition-all duration-300 dark:border-slate-800 md:rounded-[2.5rem] md:p-8">
      <div>
        <div className="mb-6 flex items-center justify-between md:mb-8">
          <div className="rounded-xl bg-teal-500/10 p-3 text-teal-500 transition-all duration-300 group-hover/card:bg-teal-500 group-hover/card:text-white md:rounded-2xl md:p-4">
            <FaQuoteLeft className="text-lg md:text-2xl" />
          </div>
          <div className="flex gap-0.5 md:gap-1">
            {Array.from({ length: item.rating }).map((_, i) => (
              <FaStar key={i} className="text-[10px] text-yellow-500 md:text-sm" />
            ))}
          </div>
        </div>
        <p className="mb-4 italic leading-relaxed text-[var(--foreground)] opacity-80 md:text-lg">
          &ldquo;{item.content}&rdquo;
        </p>
      </div>
      <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800 md:mt-6 md:pt-6">
        <h5 className="text-lg font-bold text-[var(--foreground)] transition-colors group-hover/card:text-teal-500 md:text-xl">
          {item.name}
        </h5>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-teal-500 md:text-sm">
          {item.role}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Desktop + Tablet: infinite marquee
   - Mouse hover  → pause (desktop)
   - Tap toggle   → pause/resume (tablet)
───────────────────────────────────────── */
function DesktopMarquee() {
  const shouldReduceMotion = useReducedMotion();

  // true = touch device (tablet/mobile), false = real mouse device
  const [isTouch, setIsTouch] = useState(false);

  // Desktop: hover state
  const [hoverPaused, setHoverPaused] = useState(false);

  // Tablet: tap-toggle state
  const [tapPaused, setTapPaused] = useState(false);

  // Detect touch capability once on mount
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  const isPaused = hoverPaused || tapPaused || shouldReduceMotion;

  // Desktop mouse handlers — ignored on touch devices
  const handleMouseEnter = () => {
    if (!isTouch) setHoverPaused(true);
  };
  const handleMouseLeave = () => {
    if (!isTouch) setHoverPaused(false);
  };

  // Tablet tap-to-toggle
  const handleTouchEnd = (e) => {
    e.preventDefault();
    setTapPaused((prev) => !prev);
  };

  return (
    <div className="relative hidden md:block">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--background)] to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--background)] to-transparent md:w-32" />

      {/* Tablet hint — only visible on touch+md screens */}
      {isTouch && (
        <p className="mb-1 text-center text-[0.65rem] font-bold uppercase tracking-widest text-teal-500 transition-opacity duration-300">
          {tapPaused ? "✓ Paused — tap again to resume" : "Tap to pause & read"}
        </p>
      )}

      <div className="flex overflow-hidden">
        <div
          className={["testimonials-track", isPaused ? "paused" : ""]
            .filter(Boolean)
            .join(" ")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchEnd={isTouch ? handleTouchEnd : undefined}
          style={{ cursor: isTouch ? "pointer" : "default" }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <TestimonialCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Mobile: swipe carousel (below md)
───────────────────────────────────────── */
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 280 : -280, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -280 : 280, opacity: 0 }),
};

function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (index, dir) => {
      setDirection(dir);
      setCurrent((index + total) % total);
    },
    [total]
  );

  const prev = () => goTo(current - 1, -1);
  const next = () => goTo(current + 1, 1);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className="md:hidden px-5">
      {/* Swipeable card */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: "300px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <TestimonialCard item={testimonials[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls: prev — dots — next */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-[var(--card-bg)] text-[var(--foreground)] shadow-sm transition-all duration-200 hover:border-teal-500 hover:text-teal-500 dark:border-slate-700 active:scale-95"
        >
          <FaChevronLeft className="text-xs" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Testimonial ${i + 1}`}
              className={[
                "rounded-full transition-all duration-300",
                i === current
                  ? "h-2.5 w-6 bg-teal-500"
                  : "h-2.5 w-2.5 bg-slate-300 dark:bg-slate-600",
              ].join(" ")}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-[var(--card-bg)] text-[var(--foreground)] shadow-sm transition-all duration-200 hover:border-teal-500 hover:text-teal-500 dark:border-slate-700 active:scale-95"
        >
          <FaChevronRight className="text-xs" />
        </button>
      </div>

      {/* Counter */}
      <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-teal-500">
        {current + 1} / {total}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main export
───────────────────────────────────────── */
export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16 text-center">
        <Reveal>
          <h4 className="text-teal-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight">
            Trusted by{" "}
            <span className="text-teal-500">Industry Leaders</span>
          </h2>
        </Reveal>
      </div>

      {/* md aur upar: marquee */}
      <DesktopMarquee />

      {/* md se neeche: swipe carousel */}
      <MobileCarousel />
    </section>
  );
}