'use client';

import { ShieldCheck, Truck, Award, Star, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-900">4.9/5 from 10,000+ reviews</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1]">
                Breathe Freely,{' '}
                <span className="text-gray-900 inline-flex items-center gap-1 sm:gap-2">
                  Live Better
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-gray-900 inline-block" />
                </span>
              </h1>
              <p className="hero-subtitle text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed font-medium">
                Experience instant sinus relief with our medical-grade nasal cleaner. 
                Trusted by thousands for daily nasal care and allergy relief.
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-900/90">Instant relief from sinusitis and migraine pain</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-900/90">Medical-grade, BPA-free materials</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-900/90">Safe for daily use by the whole family</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="/checkout" className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 rounded-xl">
                <span>Order Now</span>
              </a>
              
              <a href="#how-it-works" className="px-8 py-4 text-base font-semibold relative bg-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center rounded-xl group">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 p-[2px]">
                  <div className="w-full h-full bg-white rounded-lg"></div>
                </div>
                <span className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">Learn More</span>
              </a>
            </div>

          </div>

          {/* Right Content - Product Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              {/* Glow effect behind product */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-xl sm:blur-2xl lg:blur-3xl"></div>
              
              {/* Product Image */}
              <div className="hero-image relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dgm2mosta/image/upload/v1761034793/shordi_New_New_dqkryu.png"
                  alt="Smart Nasal Cleaner Bottle - FlashShop"
                  fill
                  className="object-contain drop-shadow-lg sm:drop-shadow-xl lg:drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 30vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
