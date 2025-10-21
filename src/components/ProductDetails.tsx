'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Package, AlertCircle, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const productImages = [
  { id: 1, src: '/images/1.jpeg', alt: 'Nasal Cleaner - Main View' },
  { id: 2, src: '/images/2.jpeg', alt: 'Nasal Cleaner - Side View' },
  { id: 3, src: '/images/3.jpeg', alt: 'Nasal Cleaner - In Use' },
  { id: 4, src: '/images/4.jpeg', alt: 'Nasal Cleaner - Package Contents' },
];

const tabs = [
  { id: 'description', label: 'Description', icon: Package },
  { id: 'how-to-use', label: 'How to Use', icon: AlertCircle },
  { id: 'precautions', label: 'Precautions', icon: AlertCircle },
  { id: 'reviews', label: 'Reviews', icon: MessageSquare },
];

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left - Product Images */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
            >
              <Image
                src={productImages[selectedImage].src}
                alt={productImages[selectedImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              {productImages.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 sm:h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImage === index
                      ? 'ring-4 ring-cyan-400 scale-105'
                      : 'hover:scale-105'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 12.5vw, 10vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Smart Nasal Cleaner Bottle
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`${
                        i < 4 ? 'text-gray-900 fill-gray-900' : 'text-gray-500'
                      }`}
                      size={20}
                    />
                  ))}
                </div>
                <span className="text-gray-900">(127 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-4">
                <span className="text-5xl font-bold text-gray-900">৳999</span>
                <span className="text-2xl text-gray-900 line-through">৳1,499</span>
              </div>

              {/* Short Description */}
              <p className="text-lg text-gray-900 leading-relaxed">
                Experience professional-grade nasal care at home. Our Smart Nasal Cleaner Bottle provides gentle, effective relief from congestion, allergies, and sinus discomfort.
              </p>

              {/* Add to Cart Button */}
              <Button href="/checkout" className="w-full px-6 py-3 font-semibold text-sm flex items-center justify-center gap-2">
                
                <span>Add to Cart </span>
              </Button>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg">
                  <p className="text-sm text-gray-900">Material</p>
                  <p className="font-semibold text-gray-900">BPA-Free Plastic</p>
                </div>
                <div className="p-4 rounded-lg">
                  <p className="text-sm text-gray-900">Capacity</p>
                  <p className="font-semibold text-gray-900">300ml</p>
                </div>
                <div className="p-4 rounded-lg">
                  <p className="text-sm text-gray-900">Warranty</p>
                  <p className="font-semibold text-gray-900">6 Months</p>
                </div>
                <div className="p-4 rounded-lg">
                  <p className="text-sm text-gray-900">Delivery</p>
                  <p className="font-semibold text-gray-900">2-3 Days</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20">
          {/* Tab Headers */}
          <div className="flex flex-wrap gap-4 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 pb-4 px-4 font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-900 hover:text-gray-900'
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8 rounded-2xl">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h3>
                <p className="text-gray-900 leading-relaxed mb-4">
                  The Smart Nasal Cleaner Bottle is designed to provide gentle and effective nasal irrigation for daily sinus care. Made from high-quality, medical-grade materials, this bottle ensures safe and comfortable use for the entire family.
                </p>
                <ul className="space-y-2 text-gray-900">
                  <li>✓ Ergonomic design for comfortable grip</li>
                  <li>✓ Soft silicone nozzle for gentle insertion</li>
                  <li>✓ Squeeze-controlled water flow</li>
                  <li>✓ Easy to clean and maintain</li>
                  <li>✓ Dishwasher safe components</li>
                </ul>
              </div>
            )}

            {activeTab === 'how-to-use' && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h3>
                <ol className="space-y-4 text-gray-900">
                  <li><strong>Step 1:</strong> Fill the bottle with lukewarm water (not hot)</li>
                  <li><strong>Step 2:</strong> Add the recommended amount of nasal salt solution</li>
                  <li><strong>Step 3:</strong> Lean over a sink and tilt your head to one side</li>
                  <li><strong>Step 4:</strong> Insert the nozzle gently into the upper nostril</li>
                  <li><strong>Step 5:</strong> Squeeze the bottle gently to allow water to flow through</li>
                  <li><strong>Step 6:</strong> Repeat on the other side</li>
                  <li><strong>Step 7:</strong> Blow your nose gently to remove excess water</li>
                </ol>
              </div>
            )}

            {activeTab === 'precautions' && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Precautions & Safety</h3>
                <ul className="space-y-3 text-gray-900">
                  <li>⚠️ Always use distilled, sterile, or previously boiled water</li>
                  <li>⚠️ Never use tap water directly</li>
                  <li>⚠️ Clean the bottle thoroughly after each use</li>
                  <li>⚠️ Replace the bottle every 3-6 months</li>
                  <li>⚠️ Consult a doctor if you have ear infections or sinus surgery</li>
                  <li>⚠️ Children should use under adult supervision</li>
                  <li>⚠️ Stop use if you experience pain or discomfort</li>
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="pb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, idx) => (
                            <Star
                              key={idx}
                              className="text-gray-900 fill-gray-900"
                              size={16}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-gray-900">Customer {i}</span>
                      </div>
                      <p className="text-gray-900">
                        Great product! Really helps with my sinus problems. Easy to use and very effective.
                      </p>
                      <p className="text-sm text-gray-900 mt-2">Verified Purchase - 2 weeks ago</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

