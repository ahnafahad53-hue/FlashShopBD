'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

// Get new arrival products with smart selection
const getNewArrivalProducts = () => {
  // Filter for NEW ARRIVAL badge products
  const newArrivals = products.filter((product) => product.badge === 'NEW ARRIVAL');

  if (newArrivals.length === 0) return [];

  // Shuffle function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle and take up to 6 products
  return shuffleArray(newArrivals).slice(0, 6);
};

const newArrivalProducts = getNewArrivalProducts();

export default function NewArrivals() {
  if (!newArrivalProducts.length) return null;

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase">What's New</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">New Arrivals</h2>
            <p className="mt-3 text-gray-600 text-base sm:text-lg">
              Fresh drops you shouldn't miss. Limited stock and lots of excitement.
            </p>
          </div>
          <Link
            href="/products"
            className="self-start inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wide uppercase bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newArrivalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
