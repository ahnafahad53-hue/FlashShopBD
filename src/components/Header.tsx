'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'HOME', isPage: false },
    { href: '#about', label: 'ABOUT', isPage: false },
    { href: '#reviews', label: 'REVIEWS', isPage: false },
    { href: '#products', label: 'PRODUCTS', isPage: false },
    { href: '#faq', label: 'FAQS', isPage: false },
    { href: '/contact', label: 'CONTACT', isPage: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-white/20">
      <nav className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center -ml-9 sm:-ml-10 lg:-ml-11">
              <Image
                src="/flashshop.png"
                alt="FlashShop Logo"
                width={150}
                height={50}
                className="h-6 sm:h-7 lg:h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation & Mobile Menu Button */}
            <div className="flex items-center space-x-4 lg:space-x-8 -mr-6 sm:-mr-7 lg:-mr-8">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {navLinks.map((link) => (
                  link.isPage ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-medium transition-all duration-300 relative py-4 cursor-pointer text-sm xl:text-base ${
                        activeLink === link.label
                          ? 'text-blue-600'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      {link.label}
                      {activeLink === link.label && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                      )}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveLink(link.label);
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }}
                      className={`font-medium transition-all duration-300 relative py-4 cursor-pointer text-sm xl:text-base ${
                        activeLink === link.label
                          ? 'text-blue-600'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      {link.label}
                      {activeLink === link.label && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                      )}
                    </a>
                  )
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-slate-700 hover:text-slate-900 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
              <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-4">
                {navLinks.map((link) => (
                  link.isPage ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setActiveLink(link.label);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block font-medium transition-all duration-300 cursor-pointer py-2 text-sm sm:text-base ${
                        activeLink === link.label
                          ? 'text-blue-600'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveLink(link.label);
                        setIsMobileMenuOpen(false);
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }}
                      className={`block font-medium transition-all duration-300 cursor-pointer py-2 text-sm sm:text-base ${
                        activeLink === link.label
                          ? 'text-blue-600'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

