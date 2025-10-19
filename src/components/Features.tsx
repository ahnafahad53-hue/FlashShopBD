'use client';

import { motion } from 'framer-motion';
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
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Our Nasal Cleaner?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the benefits of professional-grade nasal care at home
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

