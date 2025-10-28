'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { videoReviews } from '../data/reviewVideos';

// Video sources are managed in src/data/reviewVideos.ts for easy editing

// Text testimonials removed from home page as requested

export default function Testimonials() {
  const [current, setCurrent] = useState(1); // center index
  const [muted] = useState(true);
  const dragStartX = useRef<number | null>(null);
  const dragging = useRef(false);

  const total = videoReviews.length;
  const leftIndex = (current - 1 + total) % total;
  const centerIndex = current % total;
  const rightIndex = (current + 1) % total;
  const visible = [leftIndex, centerIndex, rightIndex];

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    dragging.current = true;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    const threshold = 50;
    if (delta > threshold) {
      // swipe right -> go to previous
      setCurrent((prev) => (prev - 1 + total) % total);
    } else if (delta < -threshold) {
      // swipe left -> next
      setCurrent((prev) => (prev + 1) % total);
    }
    dragging.current = false;
    dragStartX.current = null;
  };

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

        {/* Video Reviews - three visible, click or drag to change */}
        <div className="mb-12 sm:mb-14 lg:mb-16">
          <motion.div
            layout
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="mx-auto w-full flex items-center justify-center gap-4 sm:gap-6 select-none cursor-grab active:cursor-grabbing"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            {visible.map((idx, pos) => {
              const v = videoReviews[idx];
              const isCenter = pos === 1;
              const targetHeight = isCenter ? 520 : 460;
              const targetScale = isCenter ? 1 : 0.95;
              const z = isCenter ? 'z-20' : 'z-10';
              const opacity = isCenter ? 'opacity-100' : 'opacity-90';
              return (
                <motion.button
                  layout
                  key={v.id}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ scale: targetScale }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  style={{ height: targetHeight }}
                  className={`relative w-[260px] sm:w-[280px] lg:w-[300px] ${z} ${opacity} rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm`}
                >
                  <div className="absolute inset-0">
                    <video
                      className="w-full h-full object-cover"
                      muted={muted}
                      controls
                      preload="metadata"
                      playsInline
                    >
                      <source src={v.src} type="video/mp4" />
                    </video>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Text testimonials grid removed */}

        {/* View More Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button href="/reviews" className="px-6 py-3 font-semibold text-sm">
            View All 127 Reviews
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

