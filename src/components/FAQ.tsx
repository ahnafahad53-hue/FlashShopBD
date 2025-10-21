'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import Plasma for consistency
const Plasma = dynamic(() => import('./Plasma'), { ssr: false });

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
    <section id="faq" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Plasma Background */}
      <div className="absolute inset-0 opacity-15">
        <Plasma 
          color="#6b7280" 
          speed={0.4} 
          direction="pingpong" 
          scale={2.2} 
          opacity={0.4} 
          mouseInteractive={false}
        />
      </div>

      {/* Gradient Overlay */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Questions? <span className="text-gray-900">We've Got Answers</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-900">
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
                className="w-full p-6 rounded-lg transition-all duration-300 text-left hover:scale-[1.01]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="text-gray-900" size={24} />
                    ) : (
                      <Plus className="text-gray-900" size={24} />
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
                      <p className="text-gray-900 leading-relaxed mt-4 pt-4">
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
          <p className="text-gray-900 mb-4 text-lg">Still have questions?</p>
          <Link href="/contact">
            <button className="text-cyan-300 px-8 py-4 rounded-lg hover:text-gray-900 transition-all duration-300 font-semibold">
              Contact Support
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

