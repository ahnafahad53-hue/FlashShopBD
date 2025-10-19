'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              >
                Breathe Easy.{' '}
                <span className="text-blue-600">Feel Fresh.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 max-w-xl"
              >
                Smart Nasal Cleaner Bottle — gently cleanse and refresh your sinuses daily.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105">
                Buy Now - ৳999
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-200 font-semibold text-lg">
                How It Works
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
            >
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <Truck className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Free Delivery</p>
                  <p className="text-xs text-gray-600">All over Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <ShieldCheck className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Safe Product</p>
                  <p className="text-xs text-gray-600">BPA Free Material</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <DollarSign className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Money Back</p>
                  <p className="text-xs text-gray-600">7-Day Guarantee</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
              {/* Placeholder for product image */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="w-64 h-64 mx-auto bg-white rounded-full shadow-xl flex items-center justify-center">
                    <div className="text-6xl">🩺</div>
                  </div>
                  <p className="mt-4 text-gray-500 italic">Product image placeholder</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg font-bold"
              >
                NEW!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

