'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'How often should I use the nasal cleaner?',
    answer: 'For best results, use the nasal cleaner once or twice daily, preferably in the morning and evening. However, you can use it more frequently if recommended by your healthcare provider, especially during allergy season or when experiencing congestion.',
  },
  {
    question: 'Can children use this product?',
    answer: 'Yes, children aged 4 and above can use this product under adult supervision. Make sure to use gentle pressure and ensure the child is comfortable with the process. Always consult with a pediatrician before starting nasal irrigation for young children.',
  },
  {
    question: 'What type of water should I use?',
    answer: 'Always use distilled, sterile, or previously boiled (and cooled) water. Never use tap water directly as it may contain bacteria or other microorganisms. The water should be lukewarm, not hot or cold, for maximum comfort.',
  },
  {
    question: 'How do I clean the bottle after use?',
    answer: 'After each use, rinse the bottle and nozzle thoroughly with warm water. Once a day, clean with warm soapy water and rinse completely. Allow it to air dry completely before storing. The bottle is also dishwasher safe (top rack only).',
  },
  {
    question: 'Is this safe for daily use?',
    answer: 'Yes, the nasal cleaner is made from medical-grade, BPA-free materials and is designed for daily use. Regular nasal irrigation can help maintain healthy sinuses and prevent infections when used properly.',
  },
  {
    question: 'What should I do if I feel discomfort?',
    answer: 'If you experience any pain or discomfort, stop using the product immediately. Discomfort may indicate too much pressure, incorrect head position, or water that is too hot or cold. If discomfort persists, consult with a healthcare professional.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our Nasal Cleaner
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-left border border-blue-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="text-blue-600" size={24} />
                    ) : (
                      <Plus className="text-blue-600" size={24} />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-blue-100">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link href="/contact">
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all duration-200 font-semibold">
              Contact Support
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

