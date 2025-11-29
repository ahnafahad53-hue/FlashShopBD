'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Activity, Sparkles, Baby, Gift } from 'lucide-react';

const categories = [
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    description: 'Essential health care products',
    icon: Activity,
    gradient: 'from-cyan-500 via-sky-500 to-blue-600',
    glow: 'shadow-cyan-200/80',
    count: '1+ Products'
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    description: 'Daily care essentials',
    icon: Sparkles,
    gradient: 'from-emerald-400 via-teal-500 to-green-600',
    glow: 'shadow-emerald-200/80',
    count: '1+ Products'
  },
  {
    id: 'kids-baby',
    name: 'Kids & Baby',
    description: 'Comfort for little ones',
    icon: Baby,
    gradient: 'from-violet-500 via-purple-500 to-pink-500',
    glow: 'shadow-violet-200/80',
    count: '1+ Products'
  },
  {
    id: 'coming-soon',
    name: 'More Coming Soon',
    description: 'Exciting new arrivals',
    icon: Gift,
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    glow: 'shadow-amber-200/80',
    count: 'Stay Tuned'
  },
];

export default function Categories() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by <span className="text-gray-900">Category</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover quality products across different categories
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href="/products">
                  <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gray-50 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative p-8 flex flex-col items-center text-center h-full">
                      {/* Icon Container */}
                      <div className={`relative mb-6`}>
                        <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl ${category.glow}`}>
                          <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                        </div>
                        {/* Accent ring */}
                        <div className="absolute inset-0 rounded-[34px] border border-white/40 pointer-events-none"></div>
                      </div>

                      {/* Category Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4">
                        {category.description}
                      </p>

                      {/* Product Count */}
                      <div className="mt-auto">
                        <span className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 border border-gray-200">
                          {category.count}
                        </span>
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Browse All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium uppercase tracking-wide bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 rounded-md group"
          >
            <span>Browse All Products</span>
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

