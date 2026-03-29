"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-teal-400">DEV</span>
                <span className="text-white">X</span>
                <span className="text-teal-400">OFT</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-teal-400 transition-colors duration-200">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-teal-400 transition-colors duration-200">
              Services
            </Link>
           
            <Link href="/about" className="text-white hover:text-teal-400 transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-teal-400 transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link 
              href="/contact" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-teal-400 focus:outline-none focus:text-teal-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link href="/" className="block text-white hover:text-teal-400 px-3 py-2 rounded-md transition-colors duration-200">
                Home
              </Link>
              <Link href="/services" className="block text-white hover:text-teal-400 px-3 py-2 rounded-md transition-colors duration-200">
                Services
              </Link>
              <Link href="/about" className="block text-white hover:text-teal-400 px-3 py-2 rounded-md transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="block text-white hover:text-teal-400 px-3 py-2 rounded-md transition-colors duration-200">
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="block bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-md font-medium transition-colors duration-200 mt-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
