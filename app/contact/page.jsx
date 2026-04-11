// "use client";
// import { useState } from 'react';
// import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
// import Reveal from '@/components/animations/Reveal';

// export default function ContactPage() {
//   const [status, setStatus] = useState("idle"); // idle, loading, success, error

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");

//     const formData = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       message: e.target.message.value,
//     };

//     try {
//       const response = await fetch('/api/send', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("success");
//         e.target.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="bg-[var(--background)] min-h-screen pt-32 pb-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <Reveal>
//             <h4 className="text-teal-500 font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h4>
//             <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--foreground)] mb-6">
//               Ready to Build Your <span className="text-teal-500">Digital Future?</span>
//             </h1>
//           </Reveal>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

//           {/* Left Side: Contact Info */}
//           <Reveal delay={0.2}>
//             <div className="space-y-8">
//               <div className="p-8 bg-[var(--card-bg)] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
//                 <h3 className="text-2xl font-bold mb-6 text-teal-500">Contact Information</h3>
//                 <p className="opacity-70 mb-8 text-lg">Have a project in mind? Reach out to us and let's discuss how we can help your business grow.</p>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500">
//                       <FaEnvelope size={20} />
//                     </div>
//                     <div>
//                       <p className="text-sm opacity-50 uppercase tracking-tighter">Email Us</p>
//                       <p className="font-semibold text-lg">contact@devxoft.com</p>
//                     </div>
//                   </div>

//                   <a href="https://wa.me/447514452141" target="_blank"rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
//                     <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
//                       <FaWhatsapp size={20} />
//                     </div>
//                     <div>
//                       <p className="text-sm opacity-50 uppercase tracking-tighter">WhatsApp</p>
//                       <p className="font-semibold text-lg">+44 7514 452141</p>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//           {/* Right Side: Contact Form */}
//           <Reveal delay={0.4}>
//             {status === "success" ? (
//               <div className="p-12 bg-teal-500/5 border border-teal-500/20 rounded-3xl text-center animate-in zoom-in duration-500">
//                 <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
//                    <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
//                    </svg>
//                 </div>
//                 <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
//                 <p className="opacity-70">Thank you for reaching out. We'll get back to you within 24 hours.</p>
//                 <button onClick={() => setStatus("idle")} className="mt-6 text-teal-500 font-bold hover:underline">Send another message</button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <input type="text" name="name" placeholder="Your Name" required
//                     className="w-full p-4 bg-[var(--card-bg)] border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-teal-500 outline-none transition-all" />
//                   <input type="email" name="email" placeholder="Email Address" required
//                     className="w-full p-4 bg-[var(--card-bg)] border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-teal-500 outline-none transition-all" />
//                 </div>
//                 <textarea name="message" placeholder="Your Message" rows="6" required
//                   className="w-full p-4 bg-[var(--card-bg)] border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-teal-500 outline-none transition-all"></textarea>

//                 <button
//                   type="submit"
//                   disabled={status === "loading"}
//                   className="w-full bg-teal-500 hover:bg-teal-400 text-black font-bold py-5 rounded-2xl transition-all shadow-lg shadow-teal-500/20 disabled:opacity-50"
//                 >
//                   {status === "loading" ? "Sending Details..." : "Send Message"}
//                 </button>

//                 {status === "error" && <p className="text-red-500 text-center font-medium">Ops! Please try again.</p>}
//               </form>
//             )}
//           </Reveal>

//         </div>
//       </div>
//     </div>
//   );
// }

import ContactForm from '@/components/contactform'
import Reveal from '@/components/animations/Reveal'
import { buildMetadata, breadcrumbSchema, localBusinessSchema } from '@/lib/seo'
export const metadataContact = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with DevXoft. Tell us about your project and we\'ll respond within 24 hours with a clear plan and honest pricing.',
  path: '/contact',
  keywords: ['contact DevXoft', 'hire web developer', 'web development quote', 'get project estimate'],
})
 
const contactSchemas = [
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]),
]

export default function ContactPage () {
  return (
    <div className='bg-[var(--background)] min-h-screen pt-32 pb-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <Reveal>
            <h4 className='text-teal-500 font-bold tracking-widest uppercase text-sm mb-4 text-center'>
              Get In Touch
            </h4>
            <h1 className='text-4xl md:text-6xl font-extrabold text-[var(--foreground)] mb-6 text-center'>
              Ready to Build Your{' '}
              <span className='text-teal-500'>Digital Future?</span>
            </h1>
          </Reveal>
        </div>

        {/* Sirf Component Call Karein */}
        <ContactForm />
      </div>
    </div>
  )
}
