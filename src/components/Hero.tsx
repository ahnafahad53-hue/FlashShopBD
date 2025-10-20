'use client';

import { ShieldCheck, Truck, DollarSign, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Rating Badge */}
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm w-fit">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-700">Trusted by 10,000+ customers</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                Breathe Easy.{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Feel Fresh.</span>
              </h1>
              <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-slate-600 max-w-xl font-light leading-relaxed">
                Smart Nasal Cleaner Bottle - gently cleanse and refresh your sinuses daily for better breathing and health.
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Instant Relief</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Safe & Natural</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Daily Use</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Primary CTA Button */}
              <button className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-2xl border-0 overflow-hidden group w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span className="text-base sm:text-lg">🛒</span>
                  <span className="text-sm sm:text-base lg:text-lg">Buy Now - ৳999</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
              
              {/* Secondary CTA Button */}
              <button className="relative bg-white/90 backdrop-blur-sm text-slate-800 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg border border-slate-200/50 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group w-full sm:w-auto">
                <span className="flex items-center justify-center space-x-2">
                  <span className="text-sm sm:text-base">▶️</span>
                  <span className="text-sm sm:text-base">How It Works</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl"></div>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust-badges grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Truck className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-xs sm:text-sm">Free Delivery</p>
                  <p className="text-xs text-slate-600 truncate">All over Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-xs sm:text-sm">Safe Product</p>
                  <p className="text-xs text-slate-600 truncate">BPA Free Material</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-xs sm:text-sm">Money Back</p>
                  <p className="text-xs text-slate-600 truncate">7-Day Guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-full h-[700px] sm:h-[800px] md:h-[900px] lg:h-[1000px] flex items-center justify-center translate-x-[120px] lg:translate-x-[120px]">
              {/* Main Product Image Container */}
              <div className="hero-image relative w-full max-w-xl sm:max-w-2xl lg:max-w-4xl h-full flex items-center justify-center overflow-hidden">
                {/* Product Image */}
                <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2 lg:p-3">
                  <div className="relative w-full h-full max-w-lg sm:max-w-xl lg:max-w-3xl overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dgm2mosta/image/upload/v1760991740/shordi_fhhtlc.png"
                      alt="Smart Nasal Cleaner Bottle - FlashShop"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 640px) 600px, (max-width: 768px) 700px, (max-width: 1024px) 800px, 1000px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}