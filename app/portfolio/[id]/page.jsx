


// "use client";
// import React, { useEffect, useRef } from 'react';
// import { useParams } from 'next/navigation';
// import Link from 'next/link';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { SuccessStoriesData } from '@/constants/SuccessStoriesData';

// // ── Floating number decoration ──────────────────────────────
// const BigNumber = ({ n }) => (
//   <span
//     style={{
//       fontFamily: "'Georgia', serif",
//       fontSize: "clamp(120px, 18vw, 220px)",
//       lineHeight: 1,
//       color: "transparent",
//       WebkitTextStroke: "1px rgba(20,184,166,0.12)",
//       userSelect: "none",
//       pointerEvents: "none",
//     }}
//     aria-hidden
//   >
//     {String(n).padStart(2, "0")}
//   </span>
// );

// // ── Thin label ───────────────────────────────────────────────
// const EyebrowLabel = ({ children }) => (
//   <p
//     style={{
//       fontFamily: "'Georgia', serif",
//       fontSize: "10px",
//       letterSpacing: "0.35em",
//       textTransform: "uppercase",
//       color: "rgb(20,184,166)",
//       fontStyle: "italic",
//       marginBottom: "0.5rem",
//     }}
//   >
//     {children}
//   </p>
// );

// export default function StoryDetail() {
//   const { id } = useParams();
//   const story = SuccessStoriesData.find((s) => s.id === id);
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

//   if (!story) {
//     return (
//       <div className="py-40 text-center bg-background">
//         <h2 className="text-3xl font-bold mb-4 text-foreground">Project Not Found</h2>
//         <Link href="/" className="text-teal-500 underline">Go Back Home</Link>
//       </div>
//     );
//   }

//   return (
//     <main className="bg-background min-h-screen overflow-x-hidden">

//       {/* ════════════════════════════════════════════════════
//           HERO — full-bleed cinematic with parallax
//       ════════════════════════════════════════════════════ */}
//       <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
//         {/* Parallax image */}
//         <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
//           <img
//             src={story.img}
//             alt={story.title}
//             className="w-full h-full object-cover"
//             style={{ filter: "brightness(0.28) saturate(0.6)" }}
//           />
//         </motion.div>

//         {/* Teal gradient vignette */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(20,184,166,0.18) 0%, transparent 70%), linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
//           }}
//         />

//         {/* Thin horizontal rule top */}
//         <div className="absolute top-24 left-0 right-0 flex items-center gap-6 px-8 md:px-16">
//           <div className="h-px flex-1 bg-white/10" />
//           <span style={{ fontFamily: "'Georgia', serif", fontSize: "10px", letterSpacing: "0.4em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
//             Case Study
//           </span>
//           <div className="h-px flex-1 bg-white/10" />
//         </div>

//         {/* Hero text */}
//         <motion.div
//           style={{ y: textY, opacity }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="space-y-6 max-w-5xl"
//           >
//             {/* Category pill */}
//             <span
//               style={{ fontFamily: "'Georgia', serif", fontSize: "10px", letterSpacing: "0.35em", fontStyle: "italic" }}
//               className="inline-block text-teal-400 border border-teal-400/30 px-6 py-2 rounded-full bg-teal-400/5 backdrop-blur-sm uppercase"
//             >
//               {story.cat}
//             </span>

//             {/* Title */}
//             <h1
//               style={{
//                 fontFamily: "'Georgia', serif",
//                 fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
//                 fontWeight: 400,
//                 color: "#fff",
//                 lineHeight: 1.08,
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               {story.title}
//             </h1>

//             {/* Scroll cue */}
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="flex flex-col items-center gap-2 pt-8"
//             >
//               <div className="w-px h-16 bg-gradient-to-b from-teal-500 to-transparent" />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </section>


//       {/* ════════════════════════════════════════════════════
//           METRICS BAND — dark strip floating above white
//       ════════════════════════════════════════════════════ */}
//       <section className="relative z-20 -mt-1">
//         <div
//           className="max-w-7xl mx-auto px-6 md:px-12"
//           style={{ transform: "translateY(-50%)" }}
//         >
//           <div
//             className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl shadow-2xl"
//             style={{ background: "rgba(20,184,166,0.15)" }}
//           >
//             {story.businessImpact?.map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.08 }}
//                 className="flex flex-col items-center justify-center py-10 px-6 text-center"
//                 style={{ background: "var(--background, #fff)" }}
//               >
//                 <span
//                   style={{
//                     fontFamily: "'Georgia', serif",
//                     fontSize: "clamp(2rem, 4vw, 3.5rem)",
//                     fontWeight: 400,
//                     color: "rgb(20,184,166)",
//                     lineHeight: 1,
//                   }}
//                 >
//                   {stat.value}
//                 </span>
//                 <span
//                   style={{
//                     fontSize: "9px",
//                     letterSpacing: "0.25em",
//                     textTransform: "uppercase",
//                     color: "rgba(100,116,139,1)",
//                     marginTop: "0.5rem",
//                     fontWeight: 700,
//                   }}
//                 >
//                   {stat.label}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* ════════════════════════════════════════════════════
//           MAIN CONTENT
//       ════════════════════════════════════════════════════ */}
//       <section className="max-w-7xl mx-auto px-6 md:px-12 pb-40" style={{ marginTop: "-60px" }}>
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

//           {/* ── LEFT: long-form content ─────────────────── */}
//           <div className="lg:col-span-7 xl:col-span-8 space-y-36">

//             {/* EXECUTIVE SUMMARY */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="space-y-8"
//             >
//               <EyebrowLabel>Executive Summary</EyebrowLabel>
//               <p
//                 style={{
//                   fontFamily: "'Georgia', serif",
//                   fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
//                   lineHeight: 1.85,
//                   fontStyle: "italic",
//                   color: "var(--foreground)",
//                   opacity: 0.85,
//                   borderLeft: "3px solid rgb(20,184,166)",
//                   paddingLeft: "2rem",
//                 }}
//               >
//                 {story.overview}
//               </p>
//             </motion.div>


//             {/* THE CHALLENGE */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="relative"
//             >
//               {/* giant ghost number */}
//               <div className="absolute -top-8 -left-4 select-none pointer-events-none">
//                 <BigNumber n={1} />
//               </div>

//               <div className="relative space-y-8 pt-16">
//                 <EyebrowLabel>The Challenge</EyebrowLabel>

//                 <h2
//                   style={{
//                     fontFamily: "'Georgia', serif",
//                     fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
//                     fontWeight: 400,
//                     lineHeight: 1.2,
//                     letterSpacing: "-0.02em",
//                   }}
//                   className="text-foreground"
//                 >
//                   {story.problemStatement?.title}
//                 </h2>

//                 <p className="text-foreground/70 leading-relaxed text-lg">
//                   {story.problemStatement?.description}
//                 </p>

//                 {/* Pain points — horizontal card strip */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
//                   {story.problemStatement?.painPoints.map((point, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: -10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.06 }}
//                       className="flex items-start gap-4 p-5 rounded-2xl"
//                       style={{
//                         background: "rgba(239,68,68,0.04)",
//                         border: "1px solid rgba(239,68,68,0.1)",
//                       }}
//                     >
//                       <span style={{ color: "rgb(239,68,68)", marginTop: "2px", flexShrink: 0, fontSize: "12px", fontWeight: 700 }}>✕</span>
//                       <p className="text-sm text-foreground/70 leading-relaxed">{point}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>


//             {/* STRATEGIC APPROACH */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="relative"
//             >
//               <div className="absolute -top-8 -left-4 select-none pointer-events-none">
//                 <BigNumber n={2} />
//               </div>

//               <div className="relative space-y-8 pt-16">
//                 <EyebrowLabel>Strategic Approach</EyebrowLabel>

//                 <h2
//                   style={{
//                     fontFamily: "'Georgia', serif",
//                     fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
//                     fontWeight: 400,
//                     lineHeight: 1.2,
//                     letterSpacing: "-0.02em",
//                   }}
//                   className="text-foreground"
//                 >
//                   {story.solutionArch?.title}
//                 </h2>

//                 <p className="text-foreground/70 leading-relaxed text-lg">
//                   {story.solutionArch?.description}
//                 </p>

//                 {/* Timeline steps */}
//                 <div className="mt-10 space-y-0">
//                   {story.solutionArch?.steps.map((step, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.07 }}
//                       className="group relative flex gap-8"
//                     >
//                       {/* Vertical line */}
//                       <div className="flex flex-col items-center">
//                         <div
//                           className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-6 transition-colors duration-300 group-hover:bg-teal-500"
//                           style={{
//                             border: "1.5px solid rgb(20,184,166)",
//                             background: "var(--background)",
//                           }}
//                         >
//                           <span
//                             style={{ fontFamily: "'Georgia', serif", fontSize: "11px", color: "rgb(20,184,166)" }}
//                             className="group-hover:text-white transition-colors"
//                           >
//                             {i + 1}
//                           </span>
//                         </div>
//                         {i < story.solutionArch.steps.length - 1 && (
//                           <div className="w-px flex-1 mt-1" style={{ background: "rgba(20,184,166,0.15)", minHeight: "32px" }} />
//                         )}
//                       </div>

//                       {/* Step card */}
//                       <div
//                         className="flex-1 mb-4 p-7 rounded-2xl transition-all duration-300 group-hover:shadow-lg"
//                         style={{
//                           background: "var(--background)",
//                           border: "1px solid rgba(148,163,184,0.12)",
//                         }}
//                         onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(20,184,166,0.3)"}
//                         onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(148,163,184,0.12)"}
//                       >
//                         <span
//                           style={{
//                             display: "block",
//                             fontFamily: "'Georgia', serif",
//                             fontSize: "9px",
//                             letterSpacing: "0.3em",
//                             textTransform: "uppercase",
//                             color: "rgb(20,184,166)",
//                             fontStyle: "italic",
//                             marginBottom: "0.5rem",
//                           }}
//                         >
//                           Phase {String(i + 1).padStart(2, "0")}
//                         </span>
//                         <p className="text-foreground/75 leading-relaxed text-sm md:text-base">{step}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//           </div>


//           {/* ── RIGHT: sticky sidebar ───────────────────── */}
//           <aside className="lg:col-span-5 xl:col-span-4">
//             <div className="sticky top-28 space-y-6">

//               {/* Tech Stack Card */}
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="overflow-hidden rounded-[2rem]"
//                 style={{ border: "1px solid rgba(148,163,184,0.15)" }}
//               >
//                 {/* Card header strip */}
//                 <div
//                   style={{
//                     background: "linear-gradient(135deg, rgb(15,118,110), rgb(6,78,59))",
//                     padding: "1.5rem 2rem",
//                   }}
//                 >
//                   <p
//                     style={{
//                       fontFamily: "'Georgia', serif",
//                       fontSize: "9px",
//                       letterSpacing: "0.35em",
//                       textTransform: "uppercase",
//                       color: "rgba(255,255,255,0.6)",
//                       fontStyle: "italic",
//                     }}
//                   >
//                     Core Infrastructure
//                   </p>
//                 </div>

//                 {/* Tags */}
//                 <div
//                   className="p-8"
//                   style={{ background: "var(--background)" }}
//                 >
//                   <div className="flex flex-wrap gap-2 mb-10">
//                     {story.techStack?.map((tech, i) => (
//                       <motion.span
//                         key={tech}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: i * 0.04 }}
//                         className="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-default"
//                         style={{
//                           background: "rgba(20,184,166,0.06)",
//                           border: "1px solid rgba(20,184,166,0.2)",
//                           color: "rgb(20,184,166)",
//                         }}
//                         onMouseEnter={e => {
//                           e.currentTarget.style.background = "rgb(20,184,166)";
//                           e.currentTarget.style.color = "#fff";
//                         }}
//                         onMouseLeave={e => {
//                           e.currentTarget.style.background = "rgba(20,184,166,0.06)";
//                           e.currentTarget.style.color = "rgb(20,184,166)";
//                         }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>

//                   {/* CTA */}
//                   <div
//                     className="rounded-2xl p-6 space-y-4"
//                     style={{ background: "rgba(20,184,166,0.04)", border: "1px dashed rgba(20,184,166,0.25)" }}
//                   >
//                     <h4
//                       style={{
//                         fontFamily: "'Georgia', serif",
//                         fontSize: "1.2rem",
//                         fontWeight: 400,
//                         lineHeight: 1.3,
//                       }}
//                       className="text-foreground"
//                     >
//                       Ready to build your own success story?
//                     </h4>
//                     <p className="text-foreground/50 text-xs leading-relaxed">
//                       Our architects are ready to design your custom digital solution.
//                     </p>
//                     <Link
//                       href="/contact"
//                       className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white transition-all active:scale-95 group"
//                       style={{ background: "rgb(20,184,166)" }}
//                       onMouseEnter={e => e.currentTarget.style.background = "rgb(15,118,110)"}
//                       onMouseLeave={e => e.currentTarget.style.background = "rgb(20,184,166)"}
//                     >
//                       Consult Our Experts
//                       <span className="transition-transform group-hover:translate-x-1">→</span>
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Verified badge */}
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className="flex items-center gap-4 px-6 py-5 rounded-2xl"
//                 style={{
//                   border: "1px dashed rgba(20,184,166,0.2)",
//                   background: "rgba(20,184,166,0.03)",
//                 }}
//               >
//                 <div
//                   className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
//                   style={{ background: "rgba(20,184,166,0.1)" }}
//                 >
//                   <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700 }} className="text-teal-500">
//                     Verified Case Study
//                   </p>
//                   <p style={{ fontSize: "10px", fontStyle: "italic" }} className="text-foreground/40 mt-0.5">
//                     Last Updated: 2026
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Back link */}
//               <Link
//                 href="/portfolio"
//                 className="flex items-center gap-3 text-sm text-foreground/40 hover:text-teal-500 transition-colors"
//               >
//                 <span>←</span>
//                 <span style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", fontSize: "13px" }}>
//                   Back to all case studies
//                 </span>
//               </Link>

//             </div>
//           </aside>

//         </div>
//       </section>


//       {/* ════════════════════════════════════════════════════
//           BOTTOM CTA BAND
//       ════════════════════════════════════════════════════ */}
//       <section className="relative overflow-hidden py-32 px-6">
//         {/* background */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: "linear-gradient(135deg, rgb(6,78,59) 0%, rgb(15,118,110) 50%, rgb(6,78,59) 100%)",
//           }}
//         />
//         {/* ghost text */}
//         <div
//           className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
//           style={{
//             fontFamily: "'Georgia', serif",
//             fontSize: "clamp(80px, 15vw, 180px)",
//             fontWeight: 400,
//             color: "transparent",
//             WebkitTextStroke: "1px rgba(255,255,255,0.06)",
//             whiteSpace: "nowrap",
//           }}
//         >
//           Let's Build Together
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
//           <p style={{ fontFamily: "'Georgia', serif", fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>
//             Start Your Project
//           </p>
//           <h2
//             style={{
//               fontFamily: "'Georgia', serif",
//               fontSize: "clamp(2rem, 4vw, 3.5rem)",
//               fontWeight: 400,
//               color: "#fff",
//               lineHeight: 1.15,
//               letterSpacing: "-0.02em",
//             }}
//           >
//             Ready to become our next{" "}
//             <span style={{ color: "rgba(94,234,212,1)" }}>success story?</span>
//           </h2>
//           <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto" }}>
//             Our team of architects, designers, and engineers is ready to transform your vision into a scalable digital reality.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-sm transition-all active:scale-95 group"
//             style={{ background: "#fff", color: "rgb(6,78,59)" }}
//             onMouseEnter={e => e.currentTarget.style.background = "rgba(94,234,212,1)"}
//             onMouseLeave={e => e.currentTarget.style.background = "#fff"}
//           >
//             Start a Conversation
//             <span className="transition-transform group-hover:translate-x-1">→</span>
//           </Link>
//         </div>
//       </section>

//     </main>
//   );
// }


"use client";
import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SuccessStoriesData } from '@/constants/SuccessStoriesData';

// ── Floating number decoration ──────────────────────────────
const BigNumber = ({ n }) => (
  <span
    className="ghost-number"
    style={{
      fontFamily: "'Georgia', serif",
      fontSize: "clamp(120px, 18vw, 220px)",
      lineHeight: 1,
      color: "transparent",
      userSelect: "none",
      pointerEvents: "none",
    }}
    aria-hidden
  >
    {String(n).padStart(2, "0")}
  </span>
);

// ── Thin label ───────────────────────────────────────────────
const EyebrowLabel = ({ children }) => (
  <p
    style={{
      fontFamily: "'Georgia', serif",
      fontSize: "10px",
      letterSpacing: "0.35em",
      textTransform: "uppercase",
      color: "rgb(20,184,166)",
      fontStyle: "italic",
      marginBottom: "0.5rem",
    }}
  >
    {children}
  </p>
);

export default function StoryDetail() {
  const { id } = useParams();
  const story = SuccessStoriesData.find((s) => s.id === id);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  if (!story) {
    return (
      <div className="py-40 text-center bg-background">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Project Not Found</h2>
        <Link href="/" className="text-teal-500 underline">Go Back Home</Link>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen overflow-x-hidden">

      {/* ── Global dark-mode overrides ── */}
      <style>{`
        /* Ghost number — light mode: teal outline clearly visible */
        .ghost-number {
          -webkit-text-stroke: 1.5px rgba(20,184,166,0.45);
        }
        /* Ghost number — dark mode: brighter teal so it pops on dark bg */
        @media (prefers-color-scheme: dark) {
          .ghost-number { -webkit-text-stroke: 1.5px rgba(94,234,212,0.6) !important; }
        }
        :is(.dark, [data-theme="dark"]) .ghost-number {
          -webkit-text-stroke: 1.5px rgba(94,234,212,0.6) !important;
        }

        /* Phase card — light: subtle teal tint */
        .phase-card {
          background: rgba(20,184,166,0.04);
        }
        /* Phase card — hover */
        .phase-card:hover {
          border-color: rgba(20,184,166,0.55) !important;
          box-shadow: 0 8px 32px rgba(20,184,166,0.12);
        }
        /* Phase card — dark mode: visible elevated surface */
        @media (prefers-color-scheme: dark) {
          .phase-card {
            background: rgba(20,184,166,0.1) !important;
            border-color: rgba(20,184,166,0.28) !important;
          }
          .phase-card:hover {
            background: rgba(20,184,166,0.16) !important;
            border-color: rgba(94,234,212,0.55) !important;
          }
        }
        :is(.dark, [data-theme="dark"]) .phase-card {
          background: rgba(20,184,166,0.1) !important;
          border-color: rgba(20,184,166,0.28) !important;
        }
        :is(.dark, [data-theme="dark"]) .phase-card:hover {
          background: rgba(20,184,166,0.16) !important;
          border-color: rgba(94,234,212,0.55) !important;
        }
      `}</style>

      {/* ════════════════════════════════════════════════════
          HERO — full-bleed cinematic with parallax
      ════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Parallax image */}
        <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
          <img
            src={story.img}
            alt={story.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.28) saturate(0.6)" }}
          />
        </motion.div>

        {/* Teal gradient vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(20,184,166,0.18) 0%, transparent 70%), linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
          }}
        />

        {/* Thin horizontal rule top */}
        <div className="absolute top-24 left-0 right-0 flex items-center gap-6 px-8 md:px-16">
          <div className="h-px flex-1 bg-white/10" />
          <span style={{ fontFamily: "'Georgia', serif", fontSize: "10px", letterSpacing: "0.4em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
            Case Study
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Hero text */}
        <motion.div
          style={{ y: textY, opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-5xl"
          >
            {/* Category pill */}
            <span
              style={{ fontFamily: "'Georgia', serif", fontSize: "10px", letterSpacing: "0.35em", fontStyle: "italic" }}
              className="inline-block text-teal-400 border border-teal-400/30 px-6 py-2 rounded-full bg-teal-400/5 backdrop-blur-sm uppercase"
            >
              {story.cat}
            </span>

            {/* Title */}
            <h1
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              {story.title}
            </h1>

            {/* Scroll cue */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-2 pt-8"
            >
              <div className="w-px h-16 bg-gradient-to-b from-teal-500 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>


      {/* ════════════════════════════════════════════════════
          METRICS BAND — dark strip floating above white
      ════════════════════════════════════════════════════ */}
      <section className="relative z-20 -mt-1">
        <div
          className="max-w-7xl mx-auto px-6 md:px-12"
          style={{ transform: "translateY(-50%)" }}
        >
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl shadow-2xl"
            style={{ background: "rgba(20,184,166,0.15)" }}
          >
            {story.businessImpact?.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center justify-center py-10 px-6 text-center"
                style={{ background: "var(--background, #fff)" }}
              >
                <span
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 400,
                    color: "rgb(20,184,166)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(100,116,139,1)",
                    marginTop: "0.5rem",
                    fontWeight: 700,
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-40" style={{ marginTop: "-60px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* ── LEFT: long-form content ─────────────────── */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-36">

            {/* EXECUTIVE SUMMARY */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <EyebrowLabel>Executive Summary</EyebrowLabel>
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
                  lineHeight: 1.85,
                  fontStyle: "italic",
                  color: "var(--foreground)",
                  opacity: 0.85,
                  borderLeft: "3px solid rgb(20,184,166)",
                  paddingLeft: "2rem",
                }}
              >
                {story.overview}
              </p>
            </motion.div>


            {/* THE CHALLENGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* giant ghost number */}
              <div className="absolute -top-8 -left-4 select-none pointer-events-none">
                <BigNumber n={1} />
              </div>

              <div className="relative space-y-8 pt-16">
                <EyebrowLabel>The Challenge</EyebrowLabel>

                <h2
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                  className="text-foreground"
                >
                  {story.problemStatement?.title}
                </h2>

                <p className="text-foreground/70 leading-relaxed text-lg">
                  {story.problemStatement?.description}
                </p>

                {/* Pain points — horizontal card strip */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
                  {story.problemStatement?.painPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-4 p-5 rounded-2xl"
                      style={{
                        background: "rgba(239,68,68,0.04)",
                        border: "1px solid rgba(239,68,68,0.1)",
                      }}
                    >
                      <span style={{ color: "rgb(239,68,68)", marginTop: "2px", flexShrink: 0, fontSize: "12px", fontWeight: 700 }}>✕</span>
                      <p className="text-sm text-foreground/70 leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>


            {/* STRATEGIC APPROACH */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-8 -left-4 select-none pointer-events-none">
                <BigNumber n={2} />
              </div>

              <div className="relative space-y-8 pt-16">
                <EyebrowLabel>Strategic Approach</EyebrowLabel>

                <h2
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                  className="text-foreground"
                >
                  {story.solutionArch?.title}
                </h2>

                <p className="text-foreground/70 leading-relaxed text-lg">
                  {story.solutionArch?.description}
                </p>

                {/* Timeline steps */}
                <div className="mt-10 space-y-0">
                  {story.solutionArch?.steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="group relative flex gap-8"
                    >
                      {/* Vertical line */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-6 transition-colors duration-300 group-hover:bg-teal-500"
                          style={{
                            border: "1.5px solid rgb(20,184,166)",
                            background: "var(--background)",
                          }}
                        >
                          <span
                            style={{ fontFamily: "'Georgia', serif", fontSize: "11px", color: "rgb(20,184,166)" }}
                            className="group-hover:text-white transition-colors"
                          >
                            {i + 1}
                          </span>
                        </div>
                        {i < story.solutionArch.steps.length - 1 && (
                          <div className="w-px flex-1 mt-1" style={{ background: "rgba(20,184,166,0.15)", minHeight: "32px" }} />
                        )}
                      </div>

                      {/* Step card */}
                      <div
                        className="phase-card flex-1 mb-4 p-7 rounded-2xl transition-all duration-300"
                        style={{
                          border: "1px solid rgba(20,184,166,0.18)",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            fontFamily: "'Georgia', serif",
                            fontSize: "9px",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "rgb(20,184,166)",
                            fontStyle: "italic",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Phase {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>


          {/* ── RIGHT: sticky sidebar ───────────────────── */}
          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-28 space-y-6">

              {/* Tech Stack Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-[2rem]"
                style={{ border: "1px solid rgba(148,163,184,0.15)" }}
              >
                {/* Card header strip */}
                <div
                  style={{
                    background: "linear-gradient(135deg, rgb(15,118,110), rgb(6,78,59))",
                    padding: "1.5rem 2rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: "11px",
                      letterSpacing: "0.35em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)",
                      fontStyle: "italic",
                    }}
                  >
                    Core Infrastructure
                  </p>
                </div>

                {/* Tags */}
                <div
                  className="p-8"
                  style={{ background: "var(--background)" }}
                >
                  <div className="flex flex-wrap gap-2 mb-10">
                    {story.techStack?.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-default"
                        style={{
                          background: "rgba(20,184,166,0.06)",
                          border: "1px solid rgba(20,184,166,0.2)",
                          color: "rgb(20,184,166)",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "rgb(20,184,166)";
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "rgba(20,184,166,0.06)";
                          e.currentTarget.style.color = "rgb(20,184,166)";
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="rounded-2xl p-6 space-y-4"
                    style={{ background: "rgba(20,184,166,0.04)", border: "1px dashed rgba(20,184,166,0.25)" }}
                  >
                    <h4
                      style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        lineHeight: 1.3,
                      }}
                      className="text-foreground"
                    >
                      Ready to build your own success story?
                    </h4>
                    <p className="text-foreground/50 text-xs leading-relaxed">
                      Our architects are ready to design your custom digital solution.
                    </p>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white transition-all active:scale-95 group"
                      style={{ background: "rgb(20,184,166)" }}
                      onMouseEnter={e => e.currentTarget.style.background = "rgb(15,118,110)"}
                      onMouseLeave={e => e.currentTarget.style.background = "rgb(20,184,166)"}
                    >
                      Consult Our Experts
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Verified badge */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-4 px-6 py-5 rounded-2xl"
                style={{
                  border: "1px dashed rgba(20,184,166,0.2)",
                  background: "rgba(20,184,166,0.03)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(20,184,166,0.1)" }}
                >
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700 }} className="text-teal-600">
                    Showcase Project
                  </p>
                </div>
              </motion.div>

              {/* Back link */}
              <Link
                href="/portfolio"
                className="flex items-center gap-3 text-sm text-foreground/40 hover:text-teal-500 transition-colors"
              >
                <span>←</span>
                <span style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", fontSize: "15px" }}>
                  Back to all case studies
                </span>
              </Link>

            </div>
          </aside>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          BOTTOM CTA BAND
      ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-32 px-6">
        {/* background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgb(6,78,59) 0%, rgb(15,118,110) 50%, rgb(6,78,59) 100%)",
          }}
        />
        {/* ghost text */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(80px, 15vw, 180px)",
            fontWeight: 400,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            whiteSpace: "nowrap",
          }}
        >
          Let's Build Together
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <p style={{ fontFamily: "'Georgia', serif", fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>
            Start Your Project
          </p>
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to become our next{" "}
            <span style={{ color: "rgba(94,234,212,1)" }}>success story?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto" }}>
            Our team of architects, designers, and engineers is ready to transform your vision into a scalable digital reality.
          </p>
          <div className='pt-6'>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 rounded-full font-bold text-sm transition-all active:scale-95 group shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
            style={{ background: "#fff", color: "rgb(6,78,59)" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(94,234,212,1)"}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
          >
            Start a Conversation
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          </div>
        </div>
      </section>

    </main>
  );
}