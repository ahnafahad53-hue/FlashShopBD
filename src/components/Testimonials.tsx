'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Button from './Button';

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
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Loved by <span className="text-gray-900">10,000+</span> Customers
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-900 max-w-3xl mx-auto">
            Real experiences from satisfied customers across Bangladesh
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-4 sm:p-6 lg:p-8 h-64 sm:h-72 lg:h-80 relative hover:scale-[1.02] transition-all duration-300 bg-white border border-gray-200 rounded-xl flex flex-col shadow-sm hover:shadow-md">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 text-gray-900/60">
                    <Quote size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3 sm:mb-4 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`${
                          i < testimonial.rating
                            ? 'text-gray-900 fill-gray-900'
                            : 'text-gray-500'
                        }`}
                        size={16}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-4 sm:mb-6 relative z-10 flex-grow">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="pt-3 sm:pt-4 relative z-10">
                    <p className="text-sm sm:text-base font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-900">{testimonial.location}</p>
                    <p className="text-xs text-gray-900/80 mt-1">Verified Purchase - {testimonial.date}</p>
                  </div>
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
          <Button className="px-6 py-3 font-semibold text-sm">
            View All 127 Reviews
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

