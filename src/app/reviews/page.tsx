'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type TextReview = {
  id: string;
  name: string;
  rating: number; // 1-5
  content: string;
};

// Video reviews removed; this page now shows text reviews only

const textReviews: TextReview[] = [
  {
    id: 't1',
    name: 'Ayesha K.',
    rating: 5,
    content:
      'It really helped with congestion. Easy to use and clean. Highly recommended!'
  },
  {
    id: 't2',
    name: 'Rakib H.',
    rating: 4,
    content:
      'Solid build quality. Packaging was good and delivery was quick.'
  },
  {
    id: 't3',
    name: 'Nadia S.',
    rating: 5,
    content: 'Amazing experience. Customer support is responsive on WhatsApp.'
  }
];

export default function ReviewsPage() {
  return (
    <section className="py-0 bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Customer Reviews
          </h1>
          <p className="text-base sm:text-lg text-gray-900 mt-3">
            Real feedback from real customers across Bangladesh.
          </p>
        </motion.div>

        {/* Video reviews section removed */}

        {/* Text Reviews */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {textReviews.map((r, idx) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  <div className="text-yellow-500" aria-label={`${r.rating} out of 5`}>
                    {'★'.repeat(r.rating)}
                    <span className="text-gray-300">{'★'.repeat(5 - r.rating)}</span>
                  </div>
                </div>
                <p className="text-gray-900 leading-relaxed">{r.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}


