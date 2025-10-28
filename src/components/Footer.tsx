'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative">
      {/* Footer Separator Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full"></div>
      
      {/* Footer Background */}
      <div className="bg-gray-50 text-gray-900 pt-8">
        {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About FlashShop */}
          <div>
            <div className="mb-6">
              <Image
                src="/flashshop.png"
                alt="FlashShop Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your trusted source for quality health and wellness products in Bangladesh. 
              We're committed to bringing you innovative solutions for better living.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-gray-700 hover:text-white transition-colors duration-200" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-gray-700 hover:text-white transition-colors duration-200" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} className="text-gray-700 hover:text-white transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-blue-400 transition-colors duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="hover:text-blue-400 transition-colors duration-200">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="hover:text-blue-400 transition-colors duration-200">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-blue-400 transition-colors duration-200">
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">
                  Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <a href="tel:+8801345903907" className="hover:text-blue-400 transition-colors duration-200 block">
                    +880 1345903907
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <a
                  href="mailto:iflashshopbd001@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  flashshopbd001@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 text-sm">
                © {currentYear} FlashShop. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/terms" className="hover:text-blue-400 transition-colors duration-200">
                  Terms
                </Link>
                <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-200">
                  Privacy
                </Link>
                <Link href="/cookies" className="hover:text-blue-400 transition-colors duration-200">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

