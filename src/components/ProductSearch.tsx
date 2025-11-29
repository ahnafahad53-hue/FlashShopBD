'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import Image from 'next/image';
import { products } from '@/data/products';

interface ProductSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductSearch({ isOpen, onClose }: ProductSearchProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return products;
    const lowerQuery = query.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.tagline.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  const handleProductClick = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Navigating to product:', productId);
    onClose();
    // Use window.location for reliable navigation
    window.location.href = `/products/${productId}`;
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the backdrop, not its children
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[120]"
      onClick={handleBackdropClick}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/70 via-white to-pink-100/80 backdrop-blur-lg" />

      {/* Content */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-4">
          {/* Search Input */}
          <div className="bg-white rounded-[32px] shadow-lg border-2 border-pink-300 flex items-center px-5 py-3 gap-3">
            <Search className="text-pink-400" size={22} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search nasal care products..."
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-400 text-base"
            />
            <button
              className="text-pink-400 hover:text-pink-500 transition-colors"
              aria-label="Search"
              onClick={() => inputRef.current?.focus()}
              type="button"
            >
              <Search size={20} />
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close search"
              type="button"
            >
              <X size={22} />
            </button>
          </div>

          {/* Search Results */}
          <div className="bg-white/95 rounded-[36px] shadow-2xl border border-white/80 overflow-hidden">
            <div className="max-h-[420px] overflow-y-auto">
              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center text-gray-400 text-base">No products found.</div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={(e) => handleProductClick(e, product.id)}
                    className="flex items-center gap-4 px-6 py-5 hover:bg-pink-50/60 transition-colors cursor-pointer"
                  >
                    <div className="relative w-16 h-16 rounded-2xl bg-pink-50 overflow-hidden flex-shrink-0 shadow-inner">
                      <Image
                        src={product.images?.[0] || '/main-pro.jpeg'}
                        alt={product.name}
                        fill
                        className="object-contain p-1.5"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-gray-900 truncate">{product.name}</p>
                      <p className="text-sm text-gray-500 line-clamp-1">{product.tagline}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-pink-500">৳{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-xs text-gray-400 line-through">৳{product.originalPrice}</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


