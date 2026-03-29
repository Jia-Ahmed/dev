'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us',  href: '/about'     },
      { label: 'Services',  href: '/service'   },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact',   href: '/contact'   },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development',   href: '/service#web'    },
      { label: 'UI/UX Design',      href: '/service#uiux'   },
      { label: 'Next.js Solutions', href: '/service#nextjs' },
      { label: 'SEO',               href: '/service#seo'    },
    ],
  },
]

const socialLinks = [
  { icon: <FaLinkedinIn size={16} />, url: 'https://linkedin.com/company/devxoft',                             label: 'LinkedIn'  },
  { icon: <FaGithub     size={16} />, url: 'https://github.com/devxoft',                                       label: 'GitHub'    },
  { icon: <FaTwitter    size={16} />, url: 'https://twitter.com/devxoft',                                      label: 'Twitter'   },
  { icon: <FaInstagram  size={16} />, url: 'https://www.instagram.com/devxoftofficial?igsh=OTdteW84aGwwOHN5', label: 'Instagram' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail]         = useState('')
  const [subStatus, setSubStatus] = useState('idle') // idle | loading | success | error

  const handleSubscribe = async (e) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) { setSubStatus('error'); return }

    setSubStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setSubStatus('success')
        setEmail('')
      } else {
        setSubStatus('error')
      }
    } catch {
      setSubStatus('error')
    }
  }

  return (
    <footer className="relative bg-[var(--background)] border-t border-slate-200 dark:border-slate-800 overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 md:pt-20 pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="logo-link inline-block">
              <h3 className="text-2xl font-extrabold text-[var(--foreground)] tracking-tight">
                Dev<span className="text-teal-500">Xoft</span>
              </h3>
            </Link>
            <p className="text-sm text-[var(--foreground)] opacity-60 leading-relaxed max-w-xs">
              Transforming ideas into high-performance digital experiences with modern web technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer-social-icon">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--foreground)]">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-nav-link">
                      <span className="footer-nav-arrow" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--foreground)]">
              Stay Updated
            </h4>
            <p className="text-sm text-[var(--foreground)] opacity-60 leading-relaxed">
              Subscribe for the latest updates and insights.
            </p>

            {subStatus === 'success' ? (
              /* Success state */
              <div className="flex items-center gap-2 text-teal-500 text-sm font-semibold">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Subscribed! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3" noValidate>
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (subStatus === 'error') setSubStatus('idle')
                    }}
                    placeholder="Enter your email"
                    suppressHydrationWarning
                    disabled={subStatus === 'loading'}
                    className={[
                      'footer-newsletter-input',
                      subStatus === 'error' ? 'footer-newsletter-input--error' : '',
                      subStatus === 'loading' ? 'opacity-60 cursor-not-allowed' : '',
                    ].filter(Boolean).join(' ')}
                  />
                  {subStatus === 'error' && (
                    <span className="text-red-500 text-xs ml-1">
                      Please enter a valid email.
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={subStatus === 'loading'}
                  className="btn-primary text-sm px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {subStatus === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--foreground)] opacity-50 text-center sm:text-left">
            © {currentYear} DevXoft. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-[var(--foreground)] opacity-50">
            <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
            <a href="/terms"   className="footer-legal-link">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}