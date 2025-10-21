'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Plasma for consistency
const Plasma = dynamic(() => import('./Plasma'), { ssr: false });

const testimonials = [
  {
    name: 'Fatima Rahman',
    location: 'Dhaka',
    rating: 5,
    text: 'This nasal cleaner has been a game-changer for my allergies! Easy to use and very effective. I can finally breathe freely during pollen season.',
    date: '2 weeks ago',
  },
  {
    name: 'Karim Ahmed',
    location: 'Chittagong',
    rating: 5,
    text: 'Highly recommended! My whole family uses it daily. The quality is excellent and it\'s so simple to clean and maintain.',
    date: '1 month ago',
  },
  {
    name: 'Nusrat Jahan',
    location: 'Sylhet',
    rating: 4,
    text: 'Great product at an affordable price. Delivery was quick and the packaging was very secure. Would definitely buy again!',
    date: '3 weeks ago',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Plasma Background */}
      <div className="absolute inset-0 opacity-25">
        <Plasma 
          color="#ec4899" 
          speed={0.3} 
          direction="pingpong" 
          scale={1.6} 
          opacity={0.6} 
          mouseInteractive={false}
        />
      </div>

      {/* Gradient Overlay */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span className="text-gray-900">10,000+</span> Customers
          </h2>
          <p className="text-lg sm:text-xl text-gray-900 max-w-3xl mx-auto">
            Real experiences from satisfied customers across Bangladesh
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 relative hover:scale-[1.02] transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-gray-900/60">
                <Quote size={48} />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-500'
                    }`}
                    size={20}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-900 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="pt-4 relative z-10">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-900">{testimonial.location}</p>
                <p className="text-xs text-gray-900/80 mt-1">Verified Purchase - {testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="text-gray-900 px-8 py-4 rounded-lg hover:text-gray-900 transition-all duration-300 font-semibold">
            View All 127 Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
}

