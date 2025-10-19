'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers across Bangladesh
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-blue-100">
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
                        : 'text-gray-300'
                    }`}
                    size={20}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4 relative z-10">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-xs text-gray-400 mt-1">Verified Purchase - {testimonial.date}</p>
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
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-200 font-semibold text-lg">
            View All Reviews (127)
          </button>
        </motion.div>
      </div>
    </section>
  );
}

