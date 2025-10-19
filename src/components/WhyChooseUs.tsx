'use client';

import { motion } from 'framer-motion';
import { Award, Truck, ShieldCheck, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'FlashShop™ Quality',
    description: 'Premium products tested and verified for your safety and satisfaction.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your order within 2-3 days anywhere in Bangladesh. Free shipping on all orders.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Materials (BPA Free)',
    description: 'Medical-grade, BPA-free materials that are safe for daily use by the whole family.',
  },
  {
    icon: HeartHandshake,
    title: 'Local Warranty',
    description: '6-month warranty with easy replacement. Your satisfaction is our priority.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white">
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
            Why Choose FlashShop?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best products and service
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={36} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
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

