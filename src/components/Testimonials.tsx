'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { videoReviews } from '../data/reviewVideos';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Video sources are managed in src/data/reviewVideos.ts for easy editing

// Text testimonials removed from home page as requested

export default function Testimonials() {
  const [current, setCurrent] = useState(1); // center index
  const [muted, setMuted] = useState(true);
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

  const handleVideoPlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    // Automatically unmute when play button is pressed
    if (muted) {
      setMuted(false);
      e.currentTarget.muted = false;
    }
  };

  const handleVideoClick = (videoIndex: number, e: React.MouseEvent<HTMLButtonElement>) => {
    // If clicking on a side video, slide it to center first
    if (videoIndex !== centerIndex) {
      setCurrent(videoIndex);
      // Small delay to allow the slide animation to complete before playing
      setTimeout(() => {
        const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
        if (videoElement) {
          videoElement.play();
        }
      }, 400); // Match the transition duration
    } else {
      // If clicking on center video, play immediately
      const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
      if (videoElement) {
        videoElement.play();
      }
    }
  };

  return (
    <section id="reviews" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
            Loved by <span className="text-gray-900">10,000+</span> Customers
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 max-w-3xl mx-auto px-4">
            Real experiences from satisfied customers across Bangladesh
          </p>
        </motion.div>

        {/* Video Reviews - responsive layout */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          {/* Mobile: Single video view */}
          <div className="block sm:hidden">
            <motion.div
              layout
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="relative mx-auto w-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
            >
              <motion.button
                layout
                key={videoReviews[centerIndex].id}
                type="button"
                onClick={(e) => handleVideoClick(centerIndex, e)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="relative w-[280px] h-[420px] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-lg"
              >
                <div className="absolute inset-0">
                  <video
                    className="w-full h-full object-cover"
                    muted={muted}
                    controls
                    preload="metadata"
                    playsInline
                    onPlay={handleVideoPlay}
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                  >
                    <source src={videoReviews[centerIndex].src} type="video/mp4" />
                  </video>
                </div>
              </motion.button>

              {/* Arrows */}
              <button
                type="button"
                aria-label="Previous review video"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); setCurrent((prev) => (prev - 1 + total) % total); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-gray-200 shadow hover:bg-white active:scale-95 z-40"
              >
                <ChevronLeft className="text-gray-900" size={20} />
              </button>
              <button
                type="button"
                aria-label="Next review video"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); setCurrent((prev) => (prev + 1) % total); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-gray-200 shadow hover:bg-white active:scale-95 z-40"
              >
                <ChevronRight className="text-gray-900" size={20} />
              </button>
            </motion.div>
            
            {/* Mobile navigation dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {videoReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === centerIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Tablet and Desktop: Three video view */}
          <div className="hidden sm:block">
            <motion.div
              layout
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="relative mx-auto w-full flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 select-none cursor-grab active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
            >
              {visible.map((idx, pos) => {
                const v = videoReviews[idx];
                const isCenter = pos === 1;
                const targetHeight = isCenter ? 
                  'h-[400px] sm:h-[420px] md:h-[460px] lg:h-[520px]' : 
                  'h-[360px] sm:h-[380px] md:h-[420px] lg:h-[480px]';
                const targetScale = isCenter ? 1 : 0.9;
                const z = isCenter ? 'z-20' : 'z-10';
                const opacity = isCenter ? 'opacity-100' : 'opacity-80';
                const width = isCenter ? 
                  'w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px]' : 
                  'w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]';
                
                return (
                  <motion.button
                    layout
                    key={v.id}
                    type="button"
                    onClick={(e) => handleVideoClick(idx, e)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ scale: targetScale }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className={`relative ${width} ${targetHeight} ${z} ${opacity} rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200`}
                  >
                    <div className="absolute inset-0">
                      <video
                        className="w-full h-full object-cover"
                        muted={muted}
                        controls
                        preload="metadata"
                        playsInline
                        onPlay={handleVideoPlay}
                        controlsList="nodownload nofullscreen noremoteplayback"
                        disablePictureInPicture
                      >
                        <source src={v.src} type="video/mp4" />
                      </video>
                    </div>
                  </motion.button>
                );
              })}

              {/* Arrows */}
              <button
                type="button"
                aria-label="Previous review video"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); setCurrent((prev) => (prev - 1 + total) % total); }}
                className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/90 border border-gray-200 shadow hover:bg-white active:scale-95 z-40"
              >
                <ChevronLeft className="text-gray-900" size={22} />
              </button>
              <button
                type="button"
                aria-label="Next review video"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); setCurrent((prev) => (prev + 1) % total); }}
                className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/90 border border-gray-200 shadow hover:bg-white active:scale-95 z-40"
              >
                <ChevronRight className="text-gray-900" size={22} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Text testimonials grid removed */}

        {/* View More Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <Button href="/reviews" className="px-4 sm:px-6 py-2 sm:py-3 font-semibold text-xs sm:text-sm md:text-base">
            View All 127 Reviews
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

