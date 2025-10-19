'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {product.badge}
            </span>
          </div>
        )}

        {/* Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">{product.emoji || '🩺'}</div>
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
                size={16}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="text-gray-600 text-sm line-clamp-2 min-h-[2.5rem]">
          {product.tagline}
        </p>

        {/* Price */}
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-blue-600">৳{product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-gray-400 line-through">
                ৳{product.originalPrice}
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </>
          )}
        </div>

        {/* Buy Button */}
        <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group/button">
          <ShoppingCart className="group-hover/button:scale-110 transition-transform" size={20} />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
}

