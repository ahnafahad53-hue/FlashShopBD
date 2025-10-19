'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Fill with warm water + salt',
    description: 'Add lukewarm water and the recommended amount of nasal salt solution to the bottle.',
  },
  {
    number: '02',
    title: 'Insert gently & press bottle',
    description: 'Tilt your head, insert the nozzle, and gently squeeze to allow water to flow through.',
  },
  {
    number: '03',
    title: 'Rinse and repeat',
    description: 'Repeat for the other nostril. Breathe naturally and enjoy clear, refreshed sinuses.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Three simple steps to clearer breathing and better sinus health
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="text-6xl font-bold text-white/20 mb-4">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="text-white/40 text-4xl">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Watch Demo Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105">
            <Play size={24} />
            <span>Watch Demo Video</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

