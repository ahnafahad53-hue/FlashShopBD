'use client';

import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Plasma for consistency
const Plasma = dynamic(() => import('./Plasma'), { ssr: false });

export default function CTA() {
  return (
    <section className="py-20 lg:py-24 bg-white text-gray-900 relative overflow-hidden">
      {/* Plasma Background */}
      <div className="absolute inset-0 opacity-30">
        <Plasma 
          color="#3b82f6" 
          speed={0.6} 
          direction="forward" 
          scale={1.3} 
          opacity={0.8} 
          mouseInteractive={true}
        />
      </div>

      {/* Gradient Overlay */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-gray-900">Breathe Better?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-900 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've improved their respiratory health with our Smart Nasal Cleaner.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-gray-900 px-10 py-5 rounded-xl hover:scale-[1.02] transition-all duration-300 font-semibold text-lg">
              <span>Order Now - ৳999</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-cyan-300" />
              </div>
              <span className="text-gray-900 font-medium">Free Nationwide Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-300" />
              </div>
              <span className="text-gray-900 font-medium">7-Day Money Back</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-gray-900" />
              </div>
              <span className="text-gray-900 font-medium">6-Month Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

