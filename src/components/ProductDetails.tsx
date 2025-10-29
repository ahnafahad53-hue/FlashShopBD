'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Package, AlertCircle, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const productImages = [
  { id: 1, src: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761633111/IMG_20251019_124825_co8dcd.jpg', alt: 'Smart Nasal Cleaner - Main View' },
  { id: 5, src: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761633116/IMG_20251019_131413_kf5jdi.jpg', alt: 'Smart Nasal Cleaner - Usage View' },
  { id: 2, src: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761633110/IMG_20251019_123820_p4kvve.jpg', alt: 'Smart Nasal Cleaner - Side View' },
  { id: 3, src: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761633108/IMG_20250925_162855_wtgfpz.jpg', alt: 'Smart Nasal Cleaner - Package View' },
  // { id: 4, src: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761633102/IMG_20250929_083939_ibmkuj.jpg', alt: 'Smart Nasal Cleaner - Detail View' },
  
];

const tabs = [
  { id: 'how-to-use', label: 'How to Use', icon: AlertCircle },
  { id: 'reviews', label: 'Reviews', icon: MessageSquare },
  { id: 'description', label: 'Description', icon: Package },
  { id: 'precautions', label: 'Precautions', icon: AlertCircle },
 
];

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('how-to-use');
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left - Product Images */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden bg-white"
            >
              <Image
                src={productImages[selectedImage].src}
                alt={productImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              {productImages.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-16 sm:h-20 md:h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImage === index
                      ? 'ring-2 sm:ring-4 ring-cyan-400 scale-105'
                      : 'hover:scale-105'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain bg-white"
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
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
              <div className="flex items-baseline space-x-3 sm:space-x-4">
                <span className="text-4xl sm:text-5xl font-bold text-gray-900">৳650</span>
                <span className="text-xl sm:text-2xl text-gray-900 line-through">৳1,050</span>
              </div>
              
              {/* Delivery Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900 font-medium">Delivery Charges:</p>
                <p className="text-sm text-blue-800 mt-1">
                  Inside Dhaka: ৳80 | Outside Dhaka: ৳150
                </p>
              </div>

              {/* Short Description */}
              <p className="text-lg text-gray-900 leading-relaxed">
                Experience professional-grade nasal care at home. Our Smart Nasal Cleaner Bottle provides gentle, effective relief from congestion, allergies, and sinus discomfort.
              </p>

              {/* Order Now Button */}
              <a href="/checkout" className="w-full py-4 px-8 font-semibold text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 rounded-xl">
                <ShoppingCart size={20} />
                <span>Order Now</span>
              </a>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg">
                  <p className="text-sm text-gray-900">Material</p>
                  <p className="font-semibold text-gray-900">BPA-Free Plastic</p>
                </div>
                <div className="p-4 rounded-lg">
                  <p className="text-sm text-gray-900">Capacity</p>
                  <p className="font-semibold text-gray-900">500ml</p>
                </div>
                <div className="p-4 rounded-lg">
                  <p className="text-sm text-gray-900">Reusable</p>
                  <p className="font-semibold text-gray-900">Long-lasting</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h3>
                <div className="space-y-6 text-gray-900">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-3 text-blue-900">🏥 Medical-Grade Quality</h4>
                    <p className="mb-3">The Smart Nasal Cleaner Bottle is designed to provide gentle and effective nasal irrigation for daily sinus care.</p>
                    <p className="text-sm text-gray-700">Made from high-quality, medical-grade materials, this bottle ensures safe and comfortable use for the entire family.</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-3 text-green-900">✨ Key Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Ergonomic design for comfortable grip</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Soft silicone nozzle for gentle insertion</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Squeeze-controlled water flow</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Easy to clean and maintain</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Dishwasher safe components</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-3 text-purple-900">🎯 Perfect For</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">•</span>
                        <span>Daily sinus care</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">•</span>
                        <span>Allergy relief</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">•</span>
                        <span>Cold & flu symptoms</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">•</span>
                        <span>Nasal congestion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'how-to-use' && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ব্যবহার করার নিয়ম</h3>
                <div className="space-y-6 text-gray-900">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-2">১. পানির প্রস্তুতি</h4>
                    <p className="mb-2">বোতলে আগে থেকে ফুটিয়ে রাখা পরিস্কার পানি নিন।</p>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>• কোনভাবেই ট্যাপ অথবা কলের পানি ব্যবহার করবেন না</p>
                      <p>• অতিরিক্ত গরম অথবা ঠান্ডা পানি ব্যবহার করবেন না</p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-2">২. লবণ মিশ্রণ</h4>
                    <p className="mb-2">পানিতে স্যালাইন / লবণ মিশ্রণ যোগ করতে হবে।</p>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>• তাহলে পানি নাকে দিলে জ্বলবে না</p>
                      <p>• হাফ চা চামচ পরিমাণে লবণ যথেষ্ট হবে</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-2">৩. নাকের প্রবেশ</h4>
                    <p>নোজল (মুখ অংশ) নাকে আলতোভাবে প্রবেশ করান।</p>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-2">৪. চাপ প্রয়োগ</h4>
                    <p className="mb-2">বোতল হালকা চাপ দিন 👍 পানি এক নাসারন্ধ্র দিয়ে ঢুকে অপর নাসারন্ধ্র দিয়ে বের হবে।</p>
                    <p className="text-sm text-gray-700">(ভেতরে জমে থাকা সর্দি সহ)</p>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-2">৫. অন্য পাশ পরিস্কার</h4>
                    <p>একইভাবে অন্য পাশের নাকও পরিস্কার করুন।</p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-2">৬. পরিস্কারকরণ</h4>
                    <p className="mb-2">ব্যবহার শেষে বোতলটি ভালোভাবে ধুয়ে রাখুন</p>
                    <p className="text-sm text-gray-700">(পুনরায় ব্যবহারের জন্য)</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'precautions' && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Precautions & Safety</h3>
                <div className="space-y-6 text-gray-900">
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-3 text-red-900">🚰 Water Safety</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-red-600 mt-1">⚠️</span>
                        <span>Always use distilled, sterile, or previously boiled water</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-600 mt-1">⚠️</span>
                        <span>Never use tap water directly</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-3 text-orange-900">🧽 Maintenance & Care</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-orange-600 mt-1">⚠️</span>
                        <span>Clean the bottle thoroughly after each use</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-orange-600 mt-1">⚠️</span>
                        <span>Replace the bottle every 3-6 months</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-3 text-purple-900">🏥 Medical Considerations</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">⚠️</span>
                        <span>Consult a doctor if you have ear infections or sinus surgery</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">⚠️</span>
                        <span>Stop use if you experience pain or discomfort</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-3 text-blue-900">👶 Child Safety</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">⚠️</span>
                        <span>Children should use under adult supervision</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-3 text-green-900">✅ Safe Usage Tips</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Use lukewarm water only</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Gentle pressure application</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Store in clean, dry place</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Follow manufacturer instructions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  {/* Review 1 */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="text-yellow-400 fill-yellow-400"
                            size={18}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">Rahman Ahmed</span>
                      <span className="text-sm text-gray-600">Verified Purchase</span>
                    </div>
                    <p className="text-gray-900 mb-2">
                      "Excellent product! Really helps with my sinus problems. Easy to use and very effective. Highly recommended!"
                    </p>
                    <p className="text-sm text-gray-600">2 weeks ago</p>
                  </div>

                  {/* Review 2 */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="text-yellow-400 fill-yellow-400"
                            size={18}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">Fatima Begum</span>
                      <span className="text-sm text-gray-600">Verified Purchase</span>
                    </div>
                    <p className="text-gray-900 mb-2">
                      "Perfect for allergy season! My whole family uses it. The quality is amazing and it's very gentle on the nose."
                    </p>
                    <p className="text-sm text-gray-600">1 month ago</p>
                  </div>

                  {/* Review 3 */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="text-yellow-400 fill-yellow-400"
                            size={18}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">Karim Hassan</span>
                      <span className="text-sm text-gray-600">Verified Purchase</span>
                    </div>
                    <p className="text-gray-900 mb-2">
                      "Great value for money! Works exactly as described. My nasal congestion has improved significantly since using this."
                    </p>
                    <p className="text-sm text-gray-600">3 weeks ago</p>
                  </div>

                  {/* Review 4 */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="text-yellow-400 fill-yellow-400"
                            size={18}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">Ayesha Khan</span>
                      <span className="text-sm text-gray-600">Verified Purchase</span>
                    </div>
                    <p className="text-gray-900 mb-2">
                      "Very easy to use and clean. The instructions are clear and the product is exactly what I needed for my sinus issues."
                    </p>
                    <p className="text-sm text-gray-600">1 week ago</p>
                  </div>

                  {/* Overall Rating Summary */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gray-900">📊 Overall Rating</h4>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">4.8</div>
                        <div className="flex">
                          {[...Array(5)].map((_, idx) => (
                            <Star
                              key={idx}
                              className="text-yellow-400 fill-yellow-400"
                              size={16}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">
                        <p>Based on 127 verified reviews</p>
                        <p className="mt-1">98% of customers recommend this product</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

