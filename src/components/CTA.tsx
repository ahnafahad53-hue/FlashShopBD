'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your nose deserves the best care
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10">
            Refresh it today and breathe easier tomorrow!
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-white text-blue-600 px-10 py-5 rounded-full hover:bg-blue-50 transition-all duration-200 font-bold text-xl shadow-2xl group"
          >
            <span>Buy Now - Only ৳999</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </motion.button>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>7-Day Money Back</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>6-Month Warranty</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

