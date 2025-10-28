'use client';

import { ShieldCheck, Truck, Award, Star, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)]">
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
            <div className="space-y-4 sm:space-y-6">
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1]">
                Breathe Freely,{' '}
                <span className="text-gray-900 inline-flex items-center gap-1 sm:gap-2">
                  Live Better
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-900 inline-block" />
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
              <Button href="/checkout" className="px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2">
                <span>Order Now</span>
              </Button>
              
              <Button className="px-6 py-3 text-sm font-semibold">
                Learn More
              </Button>
            </div>

          </div>

          {/* Right Content - Product Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto">
              {/* Glow effect behind product */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
              
              {/* Product Image */}
              <div className="hero-image relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dgm2mosta/image/upload/v1761034793/shordi_New_New_dqkryu.png"
                  alt="Smart Nasal Cleaner Bottle - FlashShop"
                  fill
                  className="object-contain drop-shadow-xl sm:drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
