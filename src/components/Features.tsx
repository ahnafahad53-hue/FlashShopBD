'use client';

import { Sparkles, Droplets, Zap, Leaf } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Gentle Nasal Cleaning',
    description: 'Soft, controlled flow ensures comfortable and effective cleaning without irritation.',
  },
  {
    icon: Droplets,
    title: 'Relieves Congestion & Allergies',
    description: 'Flush out allergens, mucus, and irritants for instant sinus relief.',
  },
  {
    icon: Zap,
    title: 'Easy to Use & Reusable',
    description: 'Simple squeeze design. Durable, eco-friendly, and cost-effective.',
  },
  {
    icon: Leaf,
    title: 'Safe for Daily Use',
    description: 'Made from medical-grade, BPA-free materials. Perfect for the whole family.',
  },
];

export default function Features() {
  return (
    <section id="benefits" className="py-12 sm:py-16 lg:py-20 section-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-fade-up text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Nasal Cleaner?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-light px-4">
            Experience the benefits of professional-grade nasal care at home
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="animate-card group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 sm:hover:-translate-y-3 border border-white/30 h-full group">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
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

