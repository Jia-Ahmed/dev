// "use client";
// import { useParams } from 'next/navigation';
// import { ServiceData } from '@/constants/ServiceData';
// import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

// export default function ServiceDetail() {
//   const params = useParams();
//   // URL se ID nikal kar data dhoondna
//   const service = ServiceData.find(s => s.id === params.id) || ServiceData[0];

//   return (
//     <div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* --- Hero Section --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
//           <div>
//             <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-xl`}>
//                <service.icon className="w-10 h-10 text-white" />
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
//               {service.title}
//             </h1>
//             <p className="text-xl text-teal-500 font-bold mb-6 italic">
//               {service.detailContent?.subtitle}
//             </p>
//             <p className="text-lg opacity-70 leading-relaxed mb-8">
//               {service.detailContent?.longDesc}
//             </p>
//           </div>
          
//           <div className="relative">
//             <div className="bg-card border border-border rounded-[3rem] p-8 shadow-2xl relative z-10">
//                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
//                <div className="space-y-4">
//                  {service.detailContent?.benefits.map((benefit, i) => (
//                    <div key={i} className="flex items-center gap-4 p-4 bg-teal-500/5 rounded-2xl border border-teal-500/10">
//                      <FaCheckCircle className="text-teal-500 text-xl shrink-0" />
//                      <span className="font-medium">{benefit}</span>
//                    </div>
//                  ))}
//                </div>
//             </div>
//             <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} opacity-20 blur-3xl -z-10 animate-pulse`} />
//           </div>
//         </div>

//         {/* --- Process Section (Trust Builder) --- */}
//         <div className="py-20 border-t border-border">
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">How We <span className="text-teal-500">Do It</span></h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {service.detailContent?.process.map((step, i) => (
//               <div key={i} className="relative text-center group">
//                 <div className="w-12 h-12 rounded-full bg-card border-2 border-teal-500 flex items-center justify-center mx-auto mb-6 text-xl font-bold z-10 relative">
//                   {i + 1}
//                 </div>
//                 <h4 className="text-lg font-bold mb-2">{step}</h4>
//                 {i < 3 && (
//                   <FaArrowRight className="hidden md:block absolute top-6 -right-4 text-teal-500/30 text-2xl" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* --- CTA Section --- */}
//         <div className={`rounded-[3rem] p-12 text-center text-white bg-gradient-to-br ${service.gradient}`}>
//           <h2 className="text-3xl md:text-5xl font-black mb-8">Let's build your {service.title} together.</h2>
//           <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
//             Start a Conversation
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }




// "use client";

// import { useParams } from "next/navigation";
// import { ServiceData } from "@/constants/ServiceData";

// export default function ServiceDetail() {
//   const params = useParams();
//   const service =
//     ServiceData.find((s) => s.id === params.id) || ServiceData[0];

//   return (
//     <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= HERO / OVERVIEW ================= */}
//         <section className="pt-32 pb-24">
//           <h1 className="text-5xl md:text-7xl font-black mb-8">
//             {service.title}
//           </h1>

//           <h2 className="text-2xl font-bold text-teal-500 mb-6">
//             {service.overview.heading}
//           </h2>

//           <p className="text-lg leading-relaxed opacity-80 whitespace-pre-line max-w-5xl">
//             {service.overview.description}
//           </p>
//         </section>

//         {/* ================= SOLUTION CARDS ================= */}
//         <div className="grid md:grid-cols-3 gap-8 my-20">
//   {service.solutionCards.map((card, i) => (
//     <div
//       key={i}
//       className="group relative rounded-3xl overflow-hidden shadow-xl"
//     >
//       <img
//         src={card.image}
//         alt={card.title}
//         className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-20"
//       />

//       <div className="relative z-10 p-8 h-full bg-black/60 text-white flex flex-col justify-end">
//         <h3 className="text-xl font-bold mb-3">{card.title}</h3>
//         <p className="text-sm opacity-90">{card.description}</p>
//       </div>
//     </div>
//   ))}
// </div>


//         {/* ================= PROCESS SECTION ================= */}
//        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
//   <img
//     src={service.process.image}
//     alt="Agile Process"
//     className="rounded-3xl shadow-xl"
//   />

//   <div>
//     <h2 className="text-3xl font-bold mb-6">
//       {service.process.title}
//     </h2>

//     <ul className="space-y-4">
//       {service.process.steps.map((step, i) => (
//         <li key={i} className="flex gap-3 items-start">
//           <span className="text-teal-500 font-bold">{i + 1}.</span>
//           <span>{step}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// </div>


//         {/* ================= INDUSTRIES WE SERVE ================= */}
//        <div className="grid md:grid-cols-3 gap-8 py-20">
//   {service.industries.map((industry, i) => (
//     <div
//       key={i}
//       className="bg-card p-8 rounded-3xl shadow-lg border border-border"
//     >
//       <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
//       <p className="opacity-80 text-sm leading-relaxed">
//         {industry.description}
//       </p>
//     </div>
//   ))}
// </div>

//         {/* ================= CTA ================= */}
//         <section
//           className={`rounded-[3rem] p-16 text-center text-white
//           bg-gradient-to-br ${service.gradient} mb-24`}
//         >
//           <h2 className="text-4xl md:text-5xl font-black mb-8">
//             Let’s build your {service.title} together
//           </h2>

//           <button suppressHydrationWarning className="btn-primary">
//             Get in Touch
//           </button>
//         </section>

//       </div>
//     </div>
//   );
// }


"use client";
import { useParams } from "next/navigation";
import { ServiceData } from "@/constants/ServiceData";
import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import LazySection from "@/components/animations/Lazysection";
import ProCard from "@/components/cards/ProCard";
import Link from 'next/link'


export default function ServiceDetail() {
  const params = useParams();
  const service = ServiceData.find((s) => s.id === params.id) || ServiceData[0];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* 1. HERO SECTION - Big Background Title Style */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="relative z-10 text-center px-6">
          <Reveal transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">
              {service.title}
            </h1>
            <div className="w-24 h-2 bg-teal-500 mx-auto mt-6 rounded-full" />
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 2. OVERVIEW - 2 Column Layout (Devsinc Style) */}
        {/* <LazySection>
          <section className="py-24 grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-2">Overview</h2>
                  <h3 className="text-4xl font-bold leading-tight">
                    {service.overview.heading}
                  </h3>
                </div>
                
                <p className="text-xl text-foreground/70 leading-relaxed whitespace-pre-line font-medium">
                  Every project we build is engineered to drive measurable business outcomes. We transform bold ideas into dynamic digital experiences.
                </p>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold">What we are good at:</h4>
                  <ul className="grid gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 group">
                        <span className="w-2 h-2 bg-teal-500 rounded-full group-hover:scale-150 transition-transform" />
                        <span className="text-lg font-semibold opacity-80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image src={service.image} fill className="object-cover" alt="Service Detail" />
              </div>
            </Reveal>
          </section>
        </LazySection> */}
        {/* 2. OVERVIEW - Dynamic Points Fix */}
<LazySection>
  <section className="py-24 grid lg:grid-cols-2 gap-16 items-start">
    <Reveal>
      <div className="space-y-8">
        <div>
          <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-2">Overview</h2>
          <h3 className="text-4xl font-bold leading-tight text-foreground">
            {service.overview.heading}
          </h3>
        </div>
        
        <p className="text-xl text-foreground/70 leading-relaxed font-medium">
          {service.overview.description}
        </p>

        {/* Check if points exist in ServiceData */}
        {service.overview.points && service.overview.points.length > 0 && (
          <div className="space-y-8 pt-4">
            <h4 className="text-xl font-bold border-l-4 border-teal-500 pl-4">
              What we are good at:
            </h4>
            
            <div className="grid gap-8">
              {service.overview.points.map((point, i) => (
                <div key={i} className="flex gap-4 group">
                  {/* Bullet / Icon */}
                  <div className="mt-1.5 w-2 h-2 bg-teal-500 rounded-full shrink-0 group-hover:scale-150 transition-transform" />
                  
                  <div>
                    {/* Yahan point.title aur point.text call ho raha hai */}
                    <h5 className="text-lg font-bold text-foreground mb-1">
                      {point.title}:
                    </h5>
                    <p className="text-foreground/60 leading-relaxed text-sm">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Reveal>

    <Reveal delay={0.2}>
      <div className="relative h-[550px] rounded-[3rem] overflow-hidden shadow-2xl lg:sticky lg:top-32">
        <Image 
          src={service.image} 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover" 
          alt={service.title} 
        />
      </div>
    </Reveal>
  </section>
</LazySection>

        {/* 3. SOLUTION CARDS - Using Reusable ProCard */}
        <section className="py-24">
          <Reveal>
            <h2 className="text-4xl font-bold mb-16 text-center">Specific Solutions</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {service.solutionCards.map((card, i) => (
              <LazySection key={i}>
                <Reveal delay={i * 0.1}>
                  <ProCard 
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    gradient={service.gradient}
                    tags={card.tags || []}
                  />
                </Reveal>
              </LazySection>
            ))}
          </div>
        </section>

       
       
        {/* 4. PROCESS SECTION - Auto-Adjusting Layout */}

{/* <LazySection>
  <div className="py-24 max-w-5xl mx-auto px-6">
    <Reveal>
      <div className="text-center mb-20">
        <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-4">How We Work</h2>
        <h3 className="text-4xl md:text-5xl font-black">{service.process.title}</h3>
      </div>
    </Reveal>

    <div className="relative">
     
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500/50 via-border to-transparent" />

      <div className="space-y-20">
        {service.process.steps.map((step, i) => (
          <Reveal key={i} y={20} delay={i * 0.1}>
            <div className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
              
          
              <div className="flex-1 w-full lg:text-right text-left">
                <div className={`${i % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                  <h4 className="text-2xl font-bold text-teal-500 mb-3">{step.split(':')[0]}</h4>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    {step.split(':')[1] || step}
                  </p>
                </div>
              </div>

           
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-background border-4 border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.4)] font-black text-xl">
                {i + 1}
              </div>

             
              <div className="flex-1 hidden lg:block" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
</LazySection> */}

<LazySection>
  <div className="py-24 bg-card/20 rounded-[4rem] border border-border/50 mx-6">
    <div className="max-w-7xl mx-auto px-10">
      <h2 className="text-4xl font-black mb-16 text-center">{service.process.title}</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.process.steps.map((step, i) => (
          <Reveal key={i} delay={i * 0.1} className="h-full">
            <div className="p-8 rounded-[2rem] bg-background/50 border border-border hover:border-teal-500/50 transition-all h-full group">
              <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-500 font-bold text-xs mb-6 group-hover:bg-teal-500 group-hover:text-black transition-colors">
                PHASE 0{i + 1}
              </span>
              <h4 className="text-xl font-bold mb-4">{step.split(':')[0]}</h4>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {step.split(':')[1] || step}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
</LazySection>

        
{/* ================= INDUSTRIES SECTION ================= */}
<section className="py-32 relative"> {/* Spacing barha di gayi hai taake oopar wala section overlap na kare */}
  <div className="max-w-7xl mx-auto px-6">
    
    <Reveal>
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-teal-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">
          Market Expertise
        </h2>
        <h3 className="text-4xl md:text-6xl font-black leading-tight">
          Industries we serve with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            {service.title}
          </span>
        </h3>
      </div>
    </Reveal>

    {/* items-stretch ensure karta hai ke saari rows ki height barabar ho */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-12">
      {service.industries.map((industry, i) => (
        /* h-full yahan Reveal aur inner div dono par hona zaroori hai */
        <Reveal key={i} delay={i * 0.1} className="h-full">
          <div className="group relative p-10 rounded-[2.5rem] bg-card/40  border border-border hover:border-teal-500/50 transition-all duration-500 flex flex-col items-start shadow-sm hover:shadow-teal-500/10 hover:-translate-y-2 h-full">
            
            {/* Icon Section */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
                {industry.icon || '🚀'}
              </div>
            </div>

            {/* Text Content */}
            <h4 className="text-2xl font-bold mb-4 group-hover:text-teal-400 inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 will-change-[background-position]">
              {industry.name}
            </h4>
            
            {/* flex-grow ensures this area fills the gap, pushing the bottom line down */}
            <p className="text-foreground/70 leading-relaxed text-sm flex-grow">
              {industry.description}
            </p>

            {/* Bottom Line */}
            <div className="mt-8 w-0 group-hover:w-full h-1 bg-gradient-to-r from-teal-500 to-transparent transition-all duration-700 rounded-full shrink-0" />
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
        
        

        {/* 5. CTA SECTION */}
      <Reveal>
  <section className="relative overflow-hidden mb-24 p-16 text-center text-white rounded-[3rem] bg-slate-900 border border-white/5 shadow-2xl">
    
    {/* 1. Subtle Background Glow - Brand consistency ke liye */}
    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-500/20 blur-[120px] -z-0" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[120px] -z-0" />

    {/* 2. Grid Pattern (Jo aapne variables mein define kiya hai) */}
    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

    <div className="relative z-10">
      <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
        Let’s build your <br/> 
        <span className="text-teal-400">{service.title}</span> together
      </h2>
      
      {/* 3. Button with your brand teal */}
      <Link href='/contact'
        suppressHydrationWarning 
        className="px-12 py-5 btn-primary"
      >
        Get in Touch Now
      </Link>
    </div>
  </section>
</Reveal>

      </div>
    </div>
  );
}
