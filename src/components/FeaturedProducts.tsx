'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const featuredProducts = products.slice(0, 3);

export default function FeaturedProducts() {
  if (!featuredProducts.length) return null;

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase">Best Picks</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Products</h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Customer-favorite essentials handpicked by FlashShop
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide uppercase border border-gray-900 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

