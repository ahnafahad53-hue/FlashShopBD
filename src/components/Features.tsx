'use client';

import { Sparkles, Droplets, Zap, Leaf } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Plasma for consistency
const Plasma = dynamic(() => import('./Plasma'), { ssr: false });

const features = [
  {
    icon: Sparkles,
    title: 'Gentle Nasal Cleaning',
    description: 'Soft, controlled flow ensures comfortable and effective cleaning without irritation.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Droplets,
    title: 'Relieves Congestion & Allergies',
    description: 'Flush out allergens, mucus, and irritants for instant sinus relief.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Zap,
    title: 'Easy to Use & Reusable',
    description: 'Simple squeeze design. Durable, eco-friendly, and cost-effective.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Leaf,
    title: 'Safe for Daily Use',
    description: 'Made from medical-grade, BPA-free materials. Perfect for the whole family.',
    color: 'from-emerald-500 to-teal-500'
  },
];

export default function Features() {
  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Plasma Background */}
      <div className="absolute inset-0 opacity-30">
        <Plasma 
          color="#1e40af" 
          speed={0.3} 
          direction="pingpong" 
          scale={1.5} 
          opacity={0.6} 
          mouseInteractive={false}
        />
      </div>

      {/* Gradient Overlay */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="animate-fade-up text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose Our <span className="text-gray-900">Nasal Cleaner?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-900 font-medium max-w-3xl mx-auto">
            Experience the benefits of professional-grade nasal care at home
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="animate-card"
              >
                <div className="p-8 h-full group hover:scale-[1.02] transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-gray-900 w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-900 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

