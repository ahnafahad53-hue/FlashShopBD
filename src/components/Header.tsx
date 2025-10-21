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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <nav className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                setActiveLink('HOME');
                const element = document.querySelector('#home');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="flex items-center -ml-6 sm:-ml-8 lg:-ml-10 cursor-pointer"
            >
              <Image
                src="/flashshop.png"
                alt="FlashShop Logo"
                width={120}
                height={40}
                className="h-5 sm:h-6 lg:h-7 xl:h-8 w-auto"
                priority
              />
            </a>

            {/* Desktop Navigation & Mobile Menu Button */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8 -mr-4 sm:-mr-6 lg:-mr-8">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {navLinks.map((link) => (
                  link.isPage ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-medium transition-all duration-300 relative py-4 cursor-pointer text-sm xl:text-base ${
                        activeLink === link.label
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {link.label}
                      {activeLink === link.label && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-900"></div>
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
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {link.label}
                      {activeLink === link.label && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-900"></div>
                      )}
                    </a>
                  )
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors p-1.5 sm:p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
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
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
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
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
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

