'use client';

import { motion } from 'framer-motion';
import { Play, Droplets, Hand, RotateCcw } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Fill with warm water + salt',
    description: 'Add lukewarm water and the recommended amount of nasal salt solution to the bottle.',
    icon: Droplets,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'Insert gently & press bottle',
    description: 'Tilt your head, insert the nozzle, and gently squeeze to allow water to flow through.',
    icon: Hand,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    number: '03',
    title: 'Rinse and repeat',
    description: 'Repeat for the other nostril. Breathe naturally and enjoy clear, refreshed sinuses.',
    icon: RotateCcw,
    color: 'from-violet-500 to-purple-500'
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            How It <span className="text-gray-900">Works</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 font-medium max-w-3xl mx-auto leading-relaxed">
            Three simple steps to clearer breathing and better sinus health. Experience the difference in just minutes.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-4 sm:p-6 lg:p-8 h-full group hover:scale-[1.02] transition-all duration-300">
                  {/* Step Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#E4E5E8' }}>
                    <Icon className="text-gray-900 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white/60 to-white/40 bg-clip-text text-transparent mb-3 sm:mb-4">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <div className="text-gray-900 text-xl font-bold">→</div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}

