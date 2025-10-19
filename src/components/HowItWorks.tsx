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
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 section-elegant relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            How It <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to clearer breathing and better sinus health. Experience the difference in just minutes.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20">
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
                <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-9 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-white/30 transition-all duration-500 hover:-translate-y-2 h-full group-hover:border-blue-200/50">
                  {/* Step Icon */}
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="text-white w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-200/60 mb-4 group-hover:text-slate-300/80 transition-colors duration-300">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/50">
                      <div className="text-blue-400 text-xl font-bold">→</div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Watch Demo Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
              <Play size={18} className="sm:w-5 sm:h-5 ml-0.5" />
            </div>
            <span>Watch Demo Video</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

