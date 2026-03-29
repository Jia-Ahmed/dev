// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Monitor, Cpu, ShieldCheck, Headset } from 'lucide-react';
// import LazySection from '../animations/Lazysection';
// import Reveal from '../animations/Reveal';

// const Features = () => {
//   const features = [
//     {
//       title: "Eco-Friendly IT",
//       description: "We optimize code and server efficiency to reduce the carbon footprint of your digital infrastructure.",
//       icon: <Monitor className="w-6 h-6 text-teal-500" />,
//     },
//     {
//       title: "Smart Technology",
//       description: "Harnessing AI and automated workflows to streamline your business operations and increase ROI.",
//       icon: <Cpu className="w-6 h-6 text-teal-500" />,
//     },
//     {
//       title: "Certified Experts",
//       description: "Our team consists of industry-certified developers ensuring high-standard architecture and security.",
//       icon: <ShieldCheck className="w-6 h-6 text-teal-500" />,
//     },
//     {
//       title: "24/7 Premium Support",
//       description: "DevXoft provides around-the-clock monitoring and support to keep your services running smoothly.",
//       icon: <Headset className="w-6 h-6 text-teal-500" />,
//     }
//   ];

//   return (
//     <LazySection minHeight="70vh">
//       <section className="py-20 md:py-32 bg-background transition-colors duration-300 overflow-hidden">
//         <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
            
//             {/* LEFT SIDE: Heading & Illustration */}
//             <div className="lg:col-span-5 flex flex-col space-y-8 md:space-y-10">
//               <Reveal>
//                 <div className="space-y-4">
//                   <h4 className="text-teal-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px]">
//                     Why Choose Us
//                   </h4>
//                   <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground leading-[1.15] tracking-tight">
//                     Innovate Green, <br />
//                     Build Smart, <br />
//                     <span className="text-teal-500 font-bold">Think DevXoft.</span>
//                   </h2>
//                   <p className="text-foreground/60 text-sm md:text-base leading-relaxed max-w-md font-light">
//                     We bridge the gap between complex engineering and sustainable business growth. Professional solutions for the modern era.
//                   </p>
//                 </div>
//               </Reveal>

//               {/* Illustration - Optimized Animation */}
//               <Reveal delay={0.2}>
//                 <motion.div 
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   whileInView={{ 
//                     opacity: 1, 
//                     scale: 1,
//                     y: [0, -15, 0] // Floating only when in view
//                   }}
//                   viewport={{ once: true }}
//                   transition={{ 
//                     opacity: { duration: 0.8 },
//                     y: { repeat: Infinity, duration: 4, ease: "easeInOut" } // Smoother loop
//                   }}
//                   className="relative w-full max-w-[280px] sm:max-w-md mx-auto lg:mx-0 pt-6"
//                 >
//                   <Image 
//                     src="/feature.svg" 
//                     alt="DevXoft Engineering Solutions Illustration"
//                     width={500}
//                     height={400}
//                     className="object-contain"
//                     // priority={false} // Only use if this is at the top of the homepage
//                   />
//                 </motion.div>
//               </Reveal>
//             </div>

//             {/* RIGHT SIDE: Feature Cards */}
//             <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
//               {features.map((feature, index) => (
//                 <Reveal key={index} delay={0.1 * index}>
//                   <div
//                     className="group relative p-8 md:p-10 bg-card rounded-[30px] md:rounded-[40px] border border-foreground/5 
//                                transition-all duration-500 ease-out h-full
//                                hover:border-teal-500/30 
//                                hover:shadow-[0_20px_50px_rgba(20,184,166,0.12)] 
//                                hover:-translate-y-2 active:scale-[0.98]"
//                   >
//                     {/* Icon Background */}
//                     <div className="mb-6 md:mb-8 inline-flex items-center justify-center p-4 bg-teal-500/5 rounded-2xl group-hover:bg-teal-500/10 transition-colors duration-300">
//                       {feature.icon}
//                     </div>
                    
//                     <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 tracking-tight group-hover:text-teal-500 transition-colors">
//                       {feature.title}
//                     </h3>
                    
//                     <p className="text-foreground/50 leading-relaxed text-sm md:text-[15px] font-normal group-hover:text-foreground/70 transition-colors">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>
//     </LazySection>
//   );
// };

// export default Features;




"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Monitor, Cpu, ShieldCheck, Headset } from 'lucide-react';
import LazySection from '../animations/Lazysection';
import Reveal from '../animations/Reveal';

// Independent Card Component for State Management
const FeatureCard = ({ feature, index }) => {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <Reveal delay={0.1 * index}>
      <div
        // Mobile tap events + Desktop hover support
        onTouchStart={() => setIsTapped(true)}
        onTouchEnd={() => setTimeout(() => setIsTapped(false), 2000)} // 2 sec baad reset
        onMouseEnter={() => setIsTapped(true)}
        onMouseLeave={() => setIsTapped(false)}
        className={`group relative p-8 md:p-10 bg-card rounded-[30px] md:rounded-[40px] border transition-all duration-500 ease-out h-full
          ${isTapped 
            ? 'border-teal-500/30 shadow-[0_20px_50px_rgba(20,184,166,0.15)] -translate-y-2' 
            : 'border-foreground/5 shadow-none translate-y-0'}
        `}
      >
        {/* Icon Background */}
        <div className={`mb-6 md:mb-8 inline-flex items-center justify-center p-4 rounded-2xl transition-colors duration-300
          ${isTapped ? 'bg-teal-500/15' : 'bg-teal-500/5'}
        `}>
          {feature.icon}
        </div>
        
        {/* Title - Color changes on tap/hover */}
        <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-tight transition-colors duration-300
          ${isTapped ? 'text-teal-500' : 'text-foreground'}
        `}>
          {feature.title}
        </h3>
        
        {/* Description */}
        <p className={`leading-relaxed text-sm md:text-[15px] font-normal transition-colors duration-300
          ${isTapped ? 'text-foreground/70' : 'text-foreground/50'}
        `}>
          {feature.description}
        </p>
      </div>
    </Reveal>
  );
};

const Features = () => {
  const features = [
    {
      title: "Eco-Friendly IT",
      description: "We optimize code and server efficiency to reduce the carbon footprint of your digital infrastructure.",
      icon: <Monitor className="w-6 h-6 text-teal-500" />,
    },
    {
      title: "Smart Technology",
      description: "Harnessing AI and automated workflows to streamline your business operations and increase ROI.",
      icon: <Cpu className="w-6 h-6 text-teal-500" />,
    },
    {
      title: "Certified Experts",
      description: "Our team consists of industry-certified developers ensuring high-standard architecture and security.",
      icon: <ShieldCheck className="w-6 h-6 text-teal-500" />,
    },
    {
      title: "24/7 Premium Support",
      description: "DevXoft provides around-the-clock monitoring and support to keep your services running smoothly.",
      icon: <Headset className="w-6 h-6 text-teal-500" />,
    }
  ];

  return (
    <LazySection minHeight="70vh">
      <section className="py-20 md:py-32 bg-background transition-colors duration-300 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
            
            {/* LEFT SIDE */}
            <div className="lg:col-span-5 flex flex-col space-y-8 md:space-y-10">
              <Reveal>
                <div className="space-y-4 text-center lg:text-left">
                  <h4 className="text-teal-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px]">
                    Why Choose Us
                  </h4>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground leading-[1.15] tracking-tight">
                    Innovate Green, <br />
                    Build Smart, <br />
                    <span className="text-teal-500 font-bold">Think DevXoft.</span>
                  </h2>
                  <p className="text-foreground/60 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
                    We bridge the gap between complex engineering and sustainable business growth. Professional solutions for the modern era.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                  viewport={{ once: true }}
                  transition={{ 
                    opacity: { duration: 0.8 },
                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" } 
                  }}
                  className="relative w-full max-w-[250px] sm:max-w-sm md:max-w-md mx-auto lg:mx-0 pt-6"
                >
                  <Image 
                    src="/feature.svg" 
                    alt="DevXoft Illustration"
                    width={500}
                    height={400}
                    className="object-contain"
                  />
                </motion.div>
              </Reveal>
            </div>

            {/* RIGHT SIDE - Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </LazySection>
  );
};

export default Features;