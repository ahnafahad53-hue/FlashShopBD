'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

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

  // Handle hash navigation from other pages
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash && window.location.pathname !== '/') {
        // If we're on a different page but have a hash, redirect to home with hash
        window.location.href = `/${hash}`;
      } else if (hash && window.location.pathname === '/') {
        // If we're on home page with hash, scroll to section
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    handleHashNavigation();
  }, []);

  const navLinks = [
    { href: '#home', label: 'HOME', isPage: false },
    { href: '#about', label: 'ABOUT', isPage: false },
    { href: '#reviews', label: 'REVIEWS', isPage: false },
    { href: '/products', label: 'PRODUCTS', isPage: true },
    { href: '#faq', label: 'FAQS', isPage: false },
    { href: '/contact', label: 'CONTACT', isPage: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <nav className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16 relative">
            {/* Mobile: Hamburger Menu Button (Left) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors p-1.5 sm:p-2 absolute left-0 z-10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>

            {/* Mobile: Logo (Centered) */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                setActiveLink('HOME');
                
                // Check if we're on the home page
                if (window.location.pathname === '/') {
                  // If on home page, just scroll to home section
                  const element = document.querySelector('#home');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                } else {
                  // If on other pages, navigate to home page
                  window.location.href = '/';
                }
              }}
              className="lg:hidden absolute left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
            >
              <Image
                src="/flashshop-mobile.png"
                alt="FlashShop Logo"
                width={100}
                height={40}
                className="h-6 sm:h-8 w-auto"
                priority
              />
            </a>

            {/* Desktop: Logo */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                setActiveLink('HOME');
                
                // Check if we're on the home page
                if (window.location.pathname === '/') {
                  // If on home page, just scroll to home section
                  const element = document.querySelector('#home');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                } else {
                  // If on other pages, navigate to home page
                  window.location.href = '/';
                }
              }}
              className="hidden lg:flex items-center cursor-pointer"
            >
              <Image
                src="/flashshop-mobile.png"
                alt="FlashShop Logo"
                width={180}
                height={40}
                className="h-7 xl:h-8 w-auto"
                priority
              />
            </a>

            {/* Mobile: Right Side Icons (Search & Cart) */}
            <div className="lg:hidden absolute right-0 flex items-center space-x-2 sm:space-x-3 z-10">
              <button
                className="text-gray-600 hover:text-gray-900 transition-colors p-1.5 sm:p-2"
                aria-label="Search"
              >
                <Search size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                className="text-gray-600 hover:text-gray-900 transition-colors p-1.5 sm:p-2"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Desktop: Navigation & Icons */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {/* Desktop Navigation */}
              <div className="flex items-center space-x-6 xl:space-x-8">
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
                        
                        // Check if we're on the home page
                        if (window.location.pathname === '/') {
                          // If on home page, just scroll to section
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }
                        } else {
                          // If on other pages, navigate to home page with hash
                          window.location.href = `/${link.href}`;
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

              {/* Desktop: Search & Cart Icons */}
              <div className="flex items-center space-x-4">
                <button
                  className="text-gray-600 hover:text-gray-900 transition-colors p-2"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
                <button
                  className="text-gray-600 hover:text-gray-900 transition-colors p-2"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
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
                        
                        // Check if we're on the home page
                        if (window.location.pathname === '/') {
                          // If on home page, just scroll to section
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }
                        } else {
                          // If on other pages, navigate to home page with hash
                          window.location.href = `/${link.href}`;
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

