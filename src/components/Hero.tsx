'use client';

import { ShieldCheck, Truck, Award, Star, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import Plasma to avoid SSR issues
const Plasma = dynamic(() => import('./Plasma'), { ssr: false });

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden bg-white">
      {/* Plasma Background */}
      <div className="absolute inset-0 opacity-40">
        <Plasma 
          color="#3b82f6" 
          speed={0.5} 
          direction="forward" 
          scale={1.2} 
          opacity={0.8} 
          mouseInteractive={true}
        />
      </div>

      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900">4.9/5 from 10,000+ reviews</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1]">
                Breathe Freely,{' '}
                <span className="text-gray-900 inline-flex items-center gap-2">
                  Live Better
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 inline-block" />
                </span>
              </h1>
              <p className="hero-subtitle text-lg sm:text-xl text-gray-900 leading-relaxed font-medium">
                Experience instant sinus relief with our medical-grade nasal cleaner. 
                Trusted by thousands for daily nasal care and allergy relief.
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400/20  flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-gray-900/90">Instant relief from congestion & allergies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400/20  flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-gray-900/90">Medical-grade, BPA-free materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400/20  flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-gray-900/90">Safe for daily use by the whole family</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <button className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] transition-all duration-300">
                <span>Order Now - ৳999</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="hero-trust-badges grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-500/20  rounded-lg flex items-center justify-center mb-2">
                  <Truck className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-xs font-semibold text-gray-900">Free Delivery</p>
                <p className="text-xs text-gray-900">Nationwide</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-500/20  rounded-lg flex items-center justify-center mb-2">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <p className="text-xs font-semibold text-gray-900">7-Day Return</p>
                <p className="text-xs text-gray-900">Money Back</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-amber-500/20  rounded-lg flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <p className="text-xs font-semibold text-gray-900">6M Warranty</p>
                <p className="text-xs text-gray-900">Guaranteed</p>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square max-w-2xl mx-auto">
              {/* Glow effect behind product */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Product Image */}
              <div className="hero-image relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dgm2mosta/image/upload/v1761034793/shordi_New_New_dqkryu.png"
                  alt="Smart Nasal Cleaner Bottle - FlashShop"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg shadow-emerald-500/50 animate-bounce">
                33% OFF - Limited Time!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
