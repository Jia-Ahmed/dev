




"use client";
import ServiceCard from '@/components/cards/ServiceCard'
import { ServiceData } from '@/constants/ServiceData'


export default function ServicesSection() {
  return (
   
    <section className="relative py-12 md:py-20 bg-background transition-colors duration-500 overflow-hidden">
      {/* Dynamic Background Gradient (Subtle in light, deep in dark) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent pointer-events-none" />

      {/* Animated background elements - Adjusted opacity for light mode */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.05] dark:opacity-10 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.05] dark:opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.05] dark:opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in">
            Our{' '}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Services
            </span>
          </h2>
          <p className="text-base md:text-xl text-foreground/60 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We deliver cutting-edge solutions that help your business thrive in the digital world
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          {ServiceData.map((service, index) => (
            
            <ServiceCard
              key={index}
              index={index}
               id={service.id}
              title={service.title}
              description={service.description}
              shortDescription={service.shortDescription}
              Icon={service. Icon}
              gradient={service.gradient}
              features={service.features}
              image={service.image} 
            />
           
          ))}
        </div>
         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {ServiceData.map((service, index) => (
             <ServiceCard
              key={index}
              index={index}
               title={service.title}
               description={service.description}
               shortDescription={service.shortDescription}
              Icon={service.Icon}
             gradient={service.gradient}
              features={service.features}
               image={service.image} 
           />
         ))}
        </div> */}
      </div>

      {/* Keep your existing style jsx animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  
  );
}