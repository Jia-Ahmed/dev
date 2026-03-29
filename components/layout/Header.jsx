'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { HiMenuAlt3, HiX } from 'react-icons/hi' // Icons install karein: npm install react-icons

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/service' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Portfolio', href: '/portfolio' }
]

export default function Header () {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // Mobile state
  const pathname = usePathname()

  const isHomePage = pathname === '/'

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }
    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getHeaderClasses = () => {
    if (!isHomePage) {
      return isDarkMode
        ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-md py-3'
        : 'bg-white/95 backdrop-blur-md shadow-md py-3'
    }
    if (!isScrolled) return 'bg-transparent py-5'
    return isDarkMode
      ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-md py-3'
      : 'bg-white/95 backdrop-blur-md shadow-md py-3'
  }

  const getTextColor = () => {
    if (!isHomePage || isScrolled)
      return isDarkMode ? 'text-white' : 'text-slate-900'
    return 'text-white'
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${getHeaderClasses()}`}
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between  '>
          {/* Logo */}
          <Link
            href='/'
            className=' logo-link flex items-center space-x-2 group cursor-pointer'
          >
            <div className='w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform'>
              <span className='text-white font-bold text-xl'>D</span>
            </div>
            <span
              className={`text-xl lg:text-2xl font-bold transition-colors ${getTextColor()}`}
            >
              DevXoft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-4 lg:space-x-8'>
            {navLinks.map(item => {
              // Check karein ke kya current path link ke href se match karta hai
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link font-medium transition-colors duration-200 ${
                    isActive ? 'text-teal-500 active' : getTextColor()
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div className='flex items-center space-x-4 md:space-x-6'>
            <ThemeToggle />

            {/* CTA Button - Hidden on small mobile */}
            <Link
              href='/contact'
              className=' header-cta hidden md:block bg-teal-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-teal-600 transition-all'
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              suppressHydrationWarning
              className={`md:hidden p-2 rounded-lg transition-colors ${getTextColor()}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`md:hidden fixed inset-0 z-[90] bg-black/70 transition-opacity duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Drawer */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-[280px] z-[100] transition-transform duration-300 ease-in-out flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } ${isDarkMode ? 'bg-[#0f172a]' : 'bg-white'}`}
          style={{ boxShadow: '-8px 0 30px rgba(0,0,0,0.5)' }}
        >
          {/* Drawer Header */}
          <div
            className={`flex items-center justify-between px-5 py-4 ${
              isDarkMode
                ? 'border-b border-slate-700'
                : 'border-b border-slate-200'
            }`}
          >
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>D</span>
              </div>
              <span
                className={`font-bold text-lg ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                DevXoft
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <HiX size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <div className='flex flex-col gap-1 px-3 py-5 flex-1'>
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-base transition-all ${
                    isActive
                      ? 'bg-teal-500 text-white'
                      : isDarkMode
                      ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className='w-2 h-2 rounded-full bg-white' />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className={`px-4 py-5 ${
              isDarkMode
                ? 'border-t border-slate-700'
                : 'border-t border-slate-200'
            }`}
          >
            <Link
              href='/contact'
              onClick={() => setIsMobileMenuOpen(false)}
              className='block w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl text-center font-bold transition-colors'
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
