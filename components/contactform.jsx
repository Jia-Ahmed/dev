// 'use client'
// import { useState } from 'react'
// import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
// import Reveal from '@/components/animations/Reveal'

// export default function ContactForm () {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })
//   const [errors, setErrors] = useState({})
//   const [status, setStatus] = useState('idle')

//   const handleChange = e => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
//     if (errors[name]) setErrors({ ...errors, [name]: '' })
//   }

//   const validate = () => {
//     let tempErrors = {}
//     const nameRegex = /^[a-zA-Z\s]+$/
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//     if (!formData.name.trim()) tempErrors.name = 'Name is required'
//     else if (!nameRegex.test(formData.name))
//       tempErrors.name = 'Only alphabets are allowed'

//     if (!formData.email) tempErrors.email = 'Email is required'
//     else if (!emailRegex.test(formData.email))
//       tempErrors.email = 'Invalid email format'

//     if (!formData.message.trim()) tempErrors.message = 'Message cannot be empty'
//     else if (formData.message.length < 10)
//       tempErrors.message = 'Message too short (min 10 chars)'

//     setErrors(tempErrors)
//     return Object.keys(tempErrors).length === 0
//   }

//   const handleSubmit = async e => {
//     e.preventDefault()
//     if (!validate()) return

//     setStatus('loading')
//     try {
//       const response = await fetch('/api/send', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       })

//       if (response.ok) {
//         setStatus('success')
//         setFormData({ name: '', email: '', message: '' })
//       } else {
//         setStatus('error')
//       }
//     } catch (error) {
//       setStatus('error')
//     }
//   }

//   return (
//     <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
//       {/* LEFT SIDE: Contact Information */}
//       <Reveal delay={0.2}>
//         <div className='space-y-8'>
//           <div className='p-8 bg-[var(--card-bg)] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl'>
//             <h3 className='text-2xl font-bold mb-6 text-teal-500'>
//               Contact Information
//             </h3>
//             <p className='opacity-70 mb-8 text-lg text-[var(--foreground)]'>
//               Have a project in mind? Reach out to us and let's discuss how we
//               can help your business grow.
//             </p>

//             <div className='space-y-6'>
//               {/* Email Card */}
//               <div className='flex items-center gap-4 text-[var(--foreground)]'>
//                 <div className='w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500 font-bold'>
//                   <FaEnvelope size={20} />
//                 </div>
//                 <div>
//                   <p className='text-xs opacity-50 uppercase tracking-widest'>
//                     Email Us
//                   </p>
//                   <p className='font-semibold text-lg'>contact@devxoft.com</p>
//                 </div>
//               </div>

//               {/* WhatsApp Card */}
//               <a
//                 href='https://wa.me/447514452141'
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 className='flex items-center gap-4 group cursor-pointer text-[var(--foreground)]'
//               >
//                 <div className='w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all'>
//                   <FaWhatsapp size={20} />
//                 </div>
//                 <div>
//                   <p className='text-xs opacity-50 uppercase tracking-widest'>
//                     WhatsApp
//                   </p>
//                   <p className='font-semibold text-lg'>+44 7514 452141</p>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </Reveal>

//       {/* RIGHT SIDE: The Form */}
//       <Reveal delay={0.4}>
//         {status === 'success' ? (
//           <div className='p-12 bg-teal-500/5 border border-teal-500/20 rounded-3xl text-center animate-in zoom-in duration-500'>
//             <div className='w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
//               <svg
//                 className='w-10 h-10 text-black'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth='3'
//                   d='M5 13l4 4L19 7'
//                 />
//               </svg>
//             </div>
//             <h3 className='text-3xl font-bold mb-2 text-[var(--foreground)]'>
//               Message Sent!
//             </h3>
//             <p className='opacity-70 text-[var(--foreground)]'>
//               Thank you. We'll get back to you within 24 hours.
//             </p>
//             <button
//               onClick={() => setStatus('idle')}
//               className='mt-6 text-teal-500 font-bold hover:underline'
//             >
//               Send another message
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className='space-y-6'>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//               <div className='flex flex-col'>
//                 <input
//                   name='name'
//                   suppressHydrationWarning
//                   value={formData.name}
//                   onChange={handleChange}
//                   type='text'
//                   placeholder='Your Name'
//                   className={`w-full p-4 rounded-xl bg-[var(--card-bg)] border ${
//                     errors.name
//                       ? 'border-red-500'
//                       : 'border-slate-200 dark:border-slate-800'
//                   } focus:border-teal-500 outline-none transition text-[var(--foreground)]`}
//                 />
//                 {errors.name && (
//                   <span className='text-red-500 text-xs mt-1 ml-1'>
//                     {errors.name}
//                   </span>
//                 )}
//               </div>

//               <div className='flex flex-col'>
//                 <input
//                   name='email'
//                   suppressHydrationWarning
//                   value={formData.email}
//                   onChange={handleChange}
//                   type='email'
//                   placeholder='Email Address'
//                   className={`w-full p-4 rounded-xl bg-[var(--card-bg)] border ${
//                     errors.email
//                       ? 'border-red-500'
//                       : 'border-slate-200 dark:border-slate-800'
//                   } focus:border-teal-500 outline-none transition text-[var(--foreground)]`}
//                 />
//                 {errors.email && (
//                   <span className='text-red-500 text-xs mt-1 ml-1'>
//                     {errors.email}
//                   </span>
//                 )}
//               </div>
//             </div>

//             <div className='flex flex-col'>
//               <textarea
//                 name='message'
//                 suppressHydrationWarning
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder='Your Message'
//                 rows='6'
//                 className={`w-full p-4 rounded-xl bg-[var(--card-bg)] border ${
//                   errors.message
//                     ? 'border-red-500'
//                     : 'border-slate-200 dark:border-slate-800'
//                 } focus:border-teal-500 outline-none transition text-[var(--foreground)]`}
//               ></textarea>
//               {errors.message && (
//                 <span className='text-red-500 text-xs mt-1 ml-1'>
//                   {errors.message}
//                 </span>
//               )}
//             </div>

//             <button
//               type='submit'
//               disabled={status === 'loading'}
//               className='w-full btn-primary'
//             >
//               {status === 'loading' ? 'Sending Details...' : 'Send Message'}
//             </button>
//             {status === 'error' && (
//               <p className='text-red-500 text-sm text-center'>
//                 Ops! Please try again.
//               </p>
//             )}
//           </form>
//         )}
//       </Reveal>
//     </div>
//   )
// }

'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import Reveal from '@/components/animations/Reveal'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  const validate = () => {
    const tempErrors = {}
    const nameRegex = /^[a-zA-Z\s]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name.trim())
      tempErrors.name = 'Name is required'
    else if (!nameRegex.test(formData.name))
      tempErrors.name = 'Only alphabets are allowed'

    if (!formData.email)
      tempErrors.email = 'Email is required'
    else if (!emailRegex.test(formData.email))
      tempErrors.email = 'Invalid email format'

    if (!formData.message.trim())
      tempErrors.message = 'Message cannot be empty'
    else if (formData.message.length < 10)
      tempErrors.message = 'Message too short (min 10 chars)'

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  /* ── Shared input class builder ── */
  const inputClass = (field) =>
    [
      'w-full p-4 rounded-xl bg-[var(--card-bg)] border transition-all duration-200',
      'text-[var(--foreground)] placeholder:text-[var(--foreground)] placeholder:opacity-40',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
      errors[field]
        ? 'border-red-500 focus:border-red-500'
        : 'border-slate-200 dark:border-slate-800 focus:border-teal-500',
    ].join(' ')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

      {/* ── LEFT: Contact Info ── */}
      <Reveal delay={0.1}>
        <div className="p-6 md:p-8 bg-[var(--card-bg)] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-teal-500">
            Contact Information
          </h3>
          <p className="text-sm md:text-base opacity-70 mb-8 text-[var(--foreground)] leading-relaxed">
            Have a project in mind? Reach out to us and let&apos;s discuss how
            we can help your business grow.
          </p>

          <div className="space-y-5">
            {/* Email — not a link, so no global hover conflict */}
            <div className="flex items-center gap-4 text-[var(--foreground)]">
              <div className="w-11 h-11 md:w-12 md:h-12 flex-shrink-0 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs opacity-50 uppercase tracking-widest mb-0.5">
                  Email Us
                </p>
                <p className="font-semibold text-base md:text-lg">
                  contact@devxoft.com
                </p>
              </div>
            </div>

            {/* WhatsApp — excluded from global link hover via nav-link workaround */}
            <a
              href="https://wa.me/447514452141"
              target="_blank"
              rel="noopener noreferrer"
              className="view-project-link flex items-center gap-4 group"
              /* view-project-link is excluded from global <a> hover rule in global.css */
            >
              <div className="w-11 h-11 md:w-12 md:h-12 flex-shrink-0 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                <FaWhatsapp size={20} />
              </div>
              <div>
                <p className="text-xs opacity-50 uppercase tracking-widest mb-0.5 text-[var(--foreground)]">
                  WhatsApp
                </p>
                <p className="font-semibold text-base md:text-lg text-[var(--foreground)] group-hover:text-green-500 transition-colors duration-200">
                  +44 7514 452141
                </p>
              </div>
            </a>
          </div>
        </div>
      </Reveal>

      {/* ── RIGHT: Form / Success ── */}
      <Reveal delay={0.2}>
        <AnimatePresence mode="wait">

          {/* Success state */}
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="p-10 md:p-12 bg-teal-500/5 border border-teal-500/20 rounded-3xl text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 text-[var(--foreground)]">
                Message Sent!
              </h3>
              <p className="opacity-60 text-[var(--foreground)] text-sm md:text-base">
                Thank you. We&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-bold text-teal-500 hover:text-teal-400 transition-colors underline underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>

          ) : (

            /* Form state */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              noValidate
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className={inputClass('name')}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs ml-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className={inputClass('email')}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs ml-1">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className={inputClass('message')}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs ml-1">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12" cy="12" r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* API error */}
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </Reveal>
    </div>
  )
}