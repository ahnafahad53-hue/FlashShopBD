'use client';

import { motion } from 'framer-motion';
import { Play, Monitor, Smartphone, Droplets, Hand, RotateCcw, X } from 'lucide-react';
import { useState } from 'react';

const tutorialVideos = [
  {
    id: 'desktop-2',
    title: 'Daily Usage Tips',
    description: 'Master the technique for effective nasal irrigation and care',
    icon: Monitor,
    videoUrl: '/images/VID_20251028211747.mp4',
    thumbnail: '/images/1.png',
    duration: '0:35'
  },
  {
    id: 'desktop-1',
    title: 'Complete Setup Guide',
    description: 'Learn how to properly prepare and use your nasal cleaner bottle',
    device: 'desktop',
    icon: Monitor,
    videoUrl: '/images/VID_20251028212619.mp4',
    thumbnail: '/images/2.png',
    duration: '0:32'
  },
  {
    id: 'mobile-1',
    title: 'Quick Start Guide',
    description: 'Fast and easy tutorial for immediate relief and better breathing',
    icon: Smartphone,
    videoUrl: '/images/InShot_20251028_212539309.mp4',
    thumbnail: '/images/3.png',
    duration: '0:48'
  }
];

const steps = [
  {
    number: '01',
    title: 'Fill with warm water + salt',
    description: 'Add lukewarm water and the recommended amount of nasal salt solution to the bottle.',
    icon: Droplets,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'Insert gently & press bottle',
    description: 'Tilt your head, insert the nozzle, and gently squeeze to allow water to flow through.',
    icon: Hand,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    number: '03',
    title: 'Rinse and repeat',
    description: 'Repeat for the other nostril. Breathe naturally and enjoy clear, refreshed sinuses.',
    icon: RotateCcw,
    color: 'from-violet-500 to-purple-500'
  },
];

export default function HowItWorks() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            How It <span className="text-gray-900">Works</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 font-medium max-w-3xl mx-auto leading-relaxed">
            Watch our tutorial videos and follow three simple steps to clearer breathing and better sinus health.
          </p>
        </motion.div>

        {/* Video Tutorials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Watch Tutorial Videos
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {tutorialVideos.map((video, index) => {
              const DeviceIcon = video.icon;
              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div
                    className="relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] cursor-pointer"
                    onClick={() => handleVideoClick(video.videoUrl)}
                  >
                    {/* Video Thumbnail: image with fallback so it never shows broken */}
                    <div className="relative aspect-[16/9] bg-gray-200 overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center"
                        style={{ display: 'none' }}
                      >
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                            <Play className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700 ml-0.5" fill="currentColor" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">Click to play</span>
                        </div>
                      </div>

                      {/* Play overlay on hover */}
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700 ml-0.5" fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Steps Grid - Made smaller */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Quick Steps
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="p-4 sm:p-6 h-48 sm:h-52 group hover:scale-[1.02] transition-all duration-300 bg-white border border-gray-200 rounded-xl flex flex-col shadow-sm hover:shadow-md">
                      {/* Step Icon */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#E4E5E8' }}>
                        <Icon className="text-gray-900 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      
                      {/* Step Number */}
                      <div className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-3">
                        {step.number}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-900 leading-relaxed flex-grow">
                        {step.description}
                      </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Inline Video Modal — click card opens this, Cloudinary video plays here */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          className="fixed inset-0 bg-black/85 z-[100] flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-2xl bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeVideo}
              className="absolute top-2 right-2 z-10 rounded-full p-2 bg-black/60 hover:bg-black/80 text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <video
              key={selectedVideo}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-auto max-h-[85vh]"
              onEnded={closeVideo}
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

