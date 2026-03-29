// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Reveal from "@/components/animations/Reveal";
// import { 
//   SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, 
//   SiNodedotjs, SiExpress, SiPython, SiMongodb, 
//   SiPostgresql, SiFigma, SiGithub, SiDocker,
//   SiTypescript, SiVuedotjs, SiAngular, SiMysql,
//   SiFirebase, SiLaravel, SiKotlin, SiFlutter,
// } from "react-icons/si";
// import { VscCode } from "react-icons/vsc";

// // Color strings ko clean rakha hai taake Framer Motion unhe read kar sake
// const techs = [
//   { name: "Next.js", icon: <SiNextdotjs />, color: "#14b8a6" },
//   { name: "React", icon: <SiReact />, color: "#61DAFB" },
//   { name: "Vue.js", icon: <SiVuedotjs />, color: "#42b883" },
//   { name: "Angular", icon: <SiAngular />, color: "#dd0031" },
//   { name: "Express", icon: <SiExpress />, color: "#9ca3af" },
//   { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
//   { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
//   { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
//   { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
//   { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
//   { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },
//   { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
//   { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
//   { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
//   { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
//   { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
//   { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
//   { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
//   { name: "GitHub", icon: <SiGithub />, color: "#14b8a6" },
//   { name: "VS Code", icon: <VscCode />, color: "#007ACC" },
//   { name: "Python", icon: <SiPython />, color: "#3776AB" },
// ];

// export default function TechStack() {
//   return (
//     <section className="py-16 md:py-24 bg-[var(--background)]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
//         {/* Header Section */}
//         <div className="text-center mb-16 md:mb-20">
//           <Reveal>
//             <h4 className="text-teal-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Our Expertise</h4>
//             <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight">
//               Modern <span className="text-teal-500">Tech Stack</span>
//             </h2>
//             <p className="mt-4 opacity-60 max-w-2xl mx-auto text-sm md:text-lg">
//               Equipped with the latest tools, our teams deliver impactful solutions designed to grow your business.
//             </p>
//           </Reveal>
//         </div>

//         {/* Tech Container: Flex-wrap ensures centering of the last row */}
//         <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-20">
//           {techs.map((tech, index) => (
//             <Reveal key={index} delay={index * 0.05}>
//               <motion.div
//                 whileHover="active"
//                 whileTap="active"
//                 initial="initial"
//                 // rounded-none se boxes bilkul straight ho jayenge
//                 className="flex flex-col items-center justify-center w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-4xl bg-[var(--card-bg)] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
//               >
//                 {/* Icon: Color change via Framer Motion Variants */}
//                 <motion.div 
//                   variants={{
//                     initial: { color: "currentColor", scale: 1 },
//                     active: { color: tech.color, scale: 1.1 }
//                   }}
//                   className="text-4xl md:text-5xl mb-3"
//                 >
//                   {tech.icon}
//                 </motion.div>
                
//                 {/* Label: Color change sync with icon */}
//                 <motion.span 
//                   variants={{
//                     initial: { opacity: 0.5, color: "currentColor" },
//                     active: { opacity: 1, color: tech.color }
//                   }}
//                   className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-center block w-full px-2 break-words leading-tight"
//                 >
//                   {tech.name}
//                 </motion.span>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="w-full flex justify-center">
//           <Reveal delay={0.4}>
//             <div className="flex flex-col items-center px-4">
//               <p className="text-center mb-8 opacity-70 italic text-sm md:text-base">
//                 Ready to build something extraordinary with these technologies?
//               </p>
              
//               <Link href="/contact" className="relative group inline-block">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
//                 <button className="btn-primary relative min-w-[160px] md:min-w-[200px]">
//                   Get In Touch
//                 </button>
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Reveal from "@/components/animations/Reveal";
// import { 
//   SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, 
//   SiNodedotjs, SiExpress, SiPython, SiMongodb, 
//   SiPostgresql, SiFigma, SiGithub, SiDocker,
//   SiTypescript, SiVuedotjs, SiAngular, SiMysql,
//   SiFirebase, SiLaravel, SiKotlin, SiFlutter,
// } from "react-icons/si";
// import { VscCode } from "react-icons/vsc";

// const techs = [
//   { name: "Next.js", icon: <SiNextdotjs />, color: "#14b8a6" },
//   { name: "React", icon: <SiReact />, color: "#61DAFB" },
//   { name: "Vue.js", icon: <SiVuedotjs />, color: "#42b883" },
//   { name: "Angular", icon: <SiAngular />, color: "#dd0031" },
//   { name: "Express", icon: <SiExpress />, color: "#9ca3af" },
//   { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
//   { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
//   { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
//   { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
//   { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
//   { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },
//   { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
//   { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
//   { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
//   { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
//   { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
//   { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
//   { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
//   { name: "GitHub", icon: <SiGithub />, color: "#14b8a6" },
//   { name: "VS Code", icon: <VscCode />, color: "#007ACC" },
//   { name: "Python", icon: <SiPython />, color: "#3776AB" },
// ];

// export default function TechStack() {
//   return (
//     <section className="py-16 md:py-24 bg-[var(--background)] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
//         {/* Header Section */}
//         <div className="text-center mb-16 md:mb-20">
//           <Reveal>
//             <h4 className="text-teal-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Our Expertise</h4>
//             <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight">
//               Modern <span className="text-teal-500">Tech Stack</span>
//             </h2>
//             <p className="mt-4 opacity-60 max-w-2xl mx-auto text-sm md:text-lg">
//               Equipped with the latest tools, our teams deliver impactful solutions designed to grow your business.
//             </p>
//           </Reveal>
//         </div>

//         {/* Tech Container - Exact same design but responsive */}
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-16 md:mb-20">
//           {techs.map((tech, index) => (
//             <Reveal key={index} delay={index * 0.05}>
//               <motion.div
//                 whileHover="active"
//                 whileTap="active"
//                 initial="initial"
//                 // Responsive card sizes - exact same design but scales on mobile
//                 className="flex flex-col items-center justify-center w-[100px] h-[100px] xs:w-[120px] xs:h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-2xl sm:rounded-3xl bg-[var(--card-bg)] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
//               >
//                 {/* Icon - Responsive sizing */}
//                 <motion.div 
//                   variants={{
//                     initial: { color: "currentColor", scale: 1 },
//                     active: { color: tech.color, scale: 1.1 }
//                   }}
//                   className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 md:mb-3"
//                 >
//                   {tech.icon}
//                 </motion.div>
                
//                 {/* Label - Responsive text */}
//                 <motion.span 
//                   variants={{
//                     initial: { opacity: 0.5, color: "currentColor" },
//                     active: { opacity: 1, color: tech.color }
//                   }}
//                   className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-center block w-full px-1 break-words leading-tight"
//                 >
//                   {tech.name}
//                 </motion.span>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="w-full flex justify-center">
//           <Reveal delay={0.4}>
//             <div className="flex flex-col items-center px-4">
//               <p className="text-center mb-8 opacity-70 italic text-sm md:text-base">
//                 Ready to build something extraordinary with these technologies?
//               </p>
              
//               <Link href="/contact" className="relative group inline-block">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
//                 <button className="relative px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-colors duration-300 text-sm sm:text-base min-w-[160px] sm:min-w-[180px] md:min-w-[200px]">
//                   Get In Touch
//                 </button>
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </div>
      
//       {/* Add custom breakpoint for xs devices */}
//       <style jsx global>{`
//         @media (min-width: 400px) {
//           .xs\\:w-\\[120px\\] {
//             width: 120px;
//           }
//           .xs\\:h-\\[120px\\] {
//             height: 120px;
//           }
//           .xs\\:text-\\[9px\\] {
//             font-size: 9px;
//           }
//           .xs\\:text-3xl {
//             font-size: 1.875rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiExpress, SiPython, SiMongodb,
  SiPostgresql, SiFigma, SiGithub, SiDocker,
  SiTypescript, SiVuedotjs, SiAngular, SiMysql,
  SiFirebase, SiLaravel, SiKotlin, SiFlutter,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const techs = [
  { name: "Next.js",    icon: <SiNextdotjs />,  color: "#14b8a6" },
  { name: "React",      icon: <SiReact />,       color: "#61DAFB" },
  { name: "Vue.js",     icon: <SiVuedotjs />,    color: "#42b883" },
  { name: "Angular",    icon: <SiAngular />,     color: "#dd0031" },
  { name: "Express",    icon: <SiExpress />,     color: "#9ca3af" },
  { name: "TypeScript", icon: <SiTypescript />,  color: "#3178C6" },
  { name: "JavaScript", icon: <SiJavascript />,  color: "#F7DF1E" },
  { name: "Docker",     icon: <SiDocker />,      color: "#2496ED" },
  { name: "Laravel",    icon: <SiLaravel />,     color: "#FF2D20" },
  { name: "Tailwind",   icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Kotlin",     icon: <SiKotlin />,      color: "#7F52FF" },
  { name: "Flutter",    icon: <SiFlutter />,     color: "#02569B" },
  { name: "Node.js",    icon: <SiNodedotjs />,   color: "#339933" },
  { name: "MySQL",      icon: <SiMysql />,       color: "#4479A1" },
  { name: "MongoDB",    icon: <SiMongodb />,     color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql />,  color: "#4169E1" },
  { name: "Firebase",   icon: <SiFirebase />,    color: "#FFCA28" },
  { name: "Figma",      icon: <SiFigma />,       color: "#F24E1E" },
  { name: "GitHub",     icon: <SiGithub />,      color: "#14b8a6" },
  { name: "VS Code",    icon: <VscCode />,       color: "#007ACC" },
  { name: "Python",     icon: <SiPython />,      color: "#3776AB" },
];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <Reveal>
            <h4 className="text-teal-500 font-bold tracking-widest uppercase text-[10px] sm:text-xs md:text-sm mb-3">
              Our Expertise
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] leading-tight">
              Modern <span className="text-teal-500">Tech Stack</span>
            </h2>
            <p className="mt-4 text-[var(--foreground)] opacity-60 max-w-xl sm:max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg">
              Equipped with the latest tools, our teams deliver impactful solutions designed to grow your business.
            </p>
          </Reveal>
        </div>

        {/* ── Tech Grid ──
            Card sizing uses CSS clamp() via inline style — fluid scaling
            across ALL screen widths with no xs breakpoint needed in config:
              min  100px  (very small phones ~320px)
              mid  14vw   (fluid scaling)
              max  180px  (large desktops)
        ── */}
        <ul
          role="list"
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-16 md:mb-20"
        >
          {techs.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 0.05}>
              <motion.li
                role="listitem"
                aria-label={tech.name}
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                style={{
                  width:  "clamp(100px, 14vw, 180px)",
                  height: "clamp(100px, 14vw, 180px)",
                }}
                className="
                  flex flex-col items-center justify-center
                  rounded-2xl sm:rounded-3xl
                  bg-[var(--card-bg)]
                  border border-slate-200 dark:border-slate-800
                  shadow-sm hover:shadow-xl
                  transition-shadow duration-300
                  cursor-pointer select-none
                "
              >
                {/* Icon — fluid size matching card scale */}
                <motion.div
                  variants={{
                    rest:  { color: "currentColor", scale: 1 },
                    hover: { color: tech.color,      scale: 1.15 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
                  className="mb-2 sm:mb-3"
                >
                  {tech.icon}
                </motion.div>

                {/* Label — fluid size matching card scale */}
                <motion.span
                  variants={{
                    rest:  { opacity: 0.5, color: "currentColor" },
                    hover: { opacity: 1,   color: tech.color },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ fontSize: "clamp(7px, 1.1vw, 12px)" }}
                  className="font-bold uppercase tracking-wider text-center w-full px-2 break-words leading-tight"
                >
                  {tech.name}
                </motion.span>
              </motion.li>
            </Reveal>
          ))}
        </ul>

        {/* ── CTA ── */}
        <div className="w-full flex justify-center">
          <Reveal delay={0.4}>
            <div className="flex flex-col items-center px-4">
              <p className="text-center mb-6 sm:mb-8 text-[var(--foreground)] opacity-70 italic text-xs sm:text-sm md:text-base">
                Ready to build something extraordinary with these technologies?
              </p>

              <Link href="/contact" className="relative group inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-1000" />
                <button
                  type="button"
                  className="btn-primary relative min-w-[140px] sm:min-w-[160px] md:min-w-[200px]"
                >
                  Get In Touch
                </button>
              </Link>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}