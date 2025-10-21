'use client';

import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import Link from 'next/link';
import Button from './Button';

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to <span className="text-gray-900">Breathe Better?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-900 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've improved their respiratory health with our Smart Nasal Cleaner.
          </p>

          {/* CTA Button */}
          <div className="mb-8 sm:mb-12">
            <Button href="/checkout" className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm flex items-center gap-2">
              <span>Order Now - ৳999</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E4E5E8' }}>
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
              </div>
              <span className="text-sm sm:text-base text-gray-900 font-medium text-center">Fast Nationwide Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E4E5E8' }}>
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
              </div>
              <span className="text-sm sm:text-base text-gray-900 font-medium text-center">Premium Quality</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E4E5E8' }}>
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
              </div>
              <span className="text-sm sm:text-base text-gray-900 font-medium text-center">6-Month Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

