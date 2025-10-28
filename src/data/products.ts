export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  emoji?: string;
  category: string;
  inStock: boolean;
  images?: string[];
  description?: string;
}

export const products: Product[] = [
  {
    id: 'nasal-cleaner-01',
    name: 'Smart Nasal Cleaner Bottle',
    tagline: 'Gentle nasal irrigation for daily sinus care and allergy relief',
    price: 650,
    originalPrice: 1050,
    rating: 4.8,
    reviews: 127,
    badge: 'NEW',
    emoji: '🩺',
    category: 'Health & Wellness',
    inStock: true,
    description: 'Professional-grade nasal irrigation bottle designed for gentle and effective sinus care. Made from medical-grade, BPA-free materials.',
  },
  // Future products can be added here
  {
    id: 'nasal-cleaner-premium',
    name: 'Premium Nasal Cleaner Set',
    tagline: 'Complete nasal care kit with extra nozzles and storage case',
    price: 650,
    originalPrice: 1050,
    rating: 4.9,
    reviews: 89,
    badge: 'PREMIUM',
    emoji: '💎',
    category: 'Health & Wellness',
    inStock: true,
    description: 'Premium set includes 2 bottles, 4 nozzles, 20 saline packets, and a carrying case.',
  },
  {
    id: 'saline-solution',
    name: 'Nasal Saline Solution (30 Packets)',
    tagline: 'Pre-measured saline packets for perfect nasal rinse every time',
    price: 299,
    rating: 4.7,
    reviews: 203,
    emoji: '💧',
    category: 'Accessories',
    inStock: true,
    description: 'Pharmaceutical-grade saline packets. Just add to warm water for the perfect nasal rinse solution.',
  },
];

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

// Helper function to get featured products
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.badge);
}

