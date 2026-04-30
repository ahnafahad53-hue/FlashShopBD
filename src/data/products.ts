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
  stock: number;
}

export const products: Product[] = [
  {
    id: 'nasal-cleaner-01',
    name: 'Smart Nasal Cleaner Bottle (স্মার্ট নাসাল ক্লিনার বোতল)',
    tagline: 'Gentle nasal irrigation for daily sinus care and allergy relief',
    price: 650,
    originalPrice: 1050,
    rating: 4.8,
    reviews: 127,
    badge: 'BEST SELLER',
    emoji: '🩺',
    category: 'Health & Wellness',
    inStock: true,
    stock: 120,
    images: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1772633605/IMG_20260122_150253_mh6sbf.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1772633620/IMG_20251019_131330_jdjzod.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1772633616/IMG_20251019_131413_ppnawx.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1772633609/IMG_20251019_123820_zevzs2.jpg',
    ],
    description: 'Professional-grade nasal irrigation bottle designed for gentle and effective sinus care. Made from medical-grade, BPA-free materials. Perfect for relieving sinusitis, allergies, and congestion. Easy to use and clean.',
  },
  {
    id: 'foot-odor-spray',
    name: 'Anti Bacterial foot spray (অ্যান্টি ব্যাকটেরিয়াল ফুট স্প্রে)',
    tagline: 'Instantly eliminate foot odor and keep feet fresh all day',
    price: 450,
    originalPrice: 750,
    rating: 4.9,
    reviews: 89,
    badge: 'BEST SELLER',
    emoji: '👟',
    category: 'Personal Care',
    inStock: true,
    stock: 90,
    images: [
      'https://res.cloudinary.com/dgm2mosta/image/upload/v1764521832/spray-2_ayshp9.jpg',
    ],
    description: 'Powerful foot odor eliminator spray that neutralizes bad smells instantly. Long-lasting formula keeps your feet fresh and dry throughout the day. Safe for daily use on feet and shoes. Antibacterial properties prevent odor-causing bacteria.',
  },
  {
    id: 'kids-comfy-pillow',
    name: 'Head shaping pillow (হেড শেপিং পিলো)',
    tagline: 'Ultra-soft memory foam pillow for peaceful sleep',
    price: 890,
    originalPrice: 1290,
    rating: 4.7,
    reviews: 156,
    badge: 'TRENDING',
    emoji: '🛏️',
    category: 'Kids & Baby',
    inStock: true,
    stock: 60,
    images: [
      'https://res.cloudinary.com/dgm2mosta/image/upload/v1764521823/pillow-2_pqwye1.jpg',
      'https://res.cloudinary.com/dgm2mosta/image/upload/v1764521824/pillow-3_j38nyh.jpg',
      'https://res.cloudinary.com/dgm2mosta/image/upload/v1764521827/pillow-4_ibsojs.jpg',
      'https://res.cloudinary.com/dgm2mosta/image/upload/v1764521827/pillow_qxrggj.jpg',
    ],
    description: 'Premium quality children\'s pillow designed for optimal neck support and comfort. Made with hypoallergenic memory foam that adapts to your child\'s sleeping position. Breathable cover keeps them cool all night. Perfect for ages 0-3 years.',
  },
  {
    id: 'spray-oil',
    name: 'Spray Oil Pot (স্প্রে অয়েল পট)',
    tagline: 'Premium quality spray oil pot for versatile use - Coming soon',
    price: 0,
    rating: 0,
    reviews: 0,
    badge: 'COMING SOON',
    emoji: '🛢️',
    category: 'Personal Care',
    inStock: false,
    stock: 0,
    images: [
      'https://res.cloudinary.com/dgm2mosta/image/upload/v1764521824/oil-spray_drrayq.jpg',
    ],
    description: 'High-quality spray oil pot perfect for various applications. Stay tuned for this exciting new product launch!',
  },
  {
    id: 'fujiqui',
    name: 'Fujiqui LED Table Lamp (ফুজিকুই এলইডি টেবিল ল্যাম্প)',
    tagline: 'Innovative LED table lamp - Arriving soon',
    price: 0,
    rating: 0,
    reviews: 0,
    badge: 'COMING SOON',
    emoji: '💡',
    category: 'Home & Living',
    inStock: false,
    stock: 0,
    images: [
      'https://res.cloudinary.com/dgm2mosta/image/upload/v1764521824/Fujiqui_nsmknz.jpg',
    ],
    description: 'An innovative LED table lamp that will revolutionize your workspace and home lighting. Coming soon to FlashShop!',
  },
  {
    id: 'wheel-cover',
    name: 'Car Steering Wheel Cover (কার স্টিয়ারিং হুইল কভার)',
    tagline: 'Protective car steering wheel cover - Coming soon',
    price: 0,
    rating: 0,
    reviews: 0,
    badge: 'COMING SOON',
    emoji: '🚗',
    category: 'Automotive',
    inStock: false,
    stock: 0,
    images: [
      'https://res.cloudinary.com/dgm2mosta/image/upload/v1764521837/wheel_cover_sgmcnb.jpg',
    ],
    description: 'Premium car steering wheel cover for vehicle protection and comfort. This exciting new product will be available soon!',
  },
  {
    id: 'car-seat-gap-filler',
    name: 'Car Seat Gap Filler (কার সিট গ্যাপ ফিলার)',
    tagline: 'Prevent items from falling between car seats and console',
    price: 450,
    originalPrice: 750,
    rating: 4.6,
    reviews: 73,
    badge: 'NEW ARRIVAL',
    emoji: '🚗',
    category: 'Automotive',
    inStock: true,
    stock: 85,
    images: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579626/car4_lkaagg.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579626/car2_j3hkmq.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579626/car3_hs1pcy.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579622/car1_sjx2f5.jpg',
    ],
    description: 'Premium car seat gap filler designed to prevent items from falling between your car seats and center console. Made from high-quality, durable materials that fit perfectly in most vehicles. Easy to install and remove, keeps your car clean and organized.',
  },
  {
    id: 'car-steering-wheel-cover',
    name: 'Car Steering Wheel Cover (কার স্টিয়ারিং হুইল কভার)',
    tagline: 'Premium steering wheel cover for comfort and protection',
    price: 350,
    originalPrice: 550,
    rating: 4.5,
    reviews: 62,
    badge: 'NEW ARRIVAL',
    emoji: '🚗',
    category: 'Automotive',
    inStock: true,
    stock: 95,
    images: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579929/IMG_20260430_125155_zyiqfe.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579928/IMG_20260430_125740_za8pgy.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579940/IMG_20260430_125558_ctvedz.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579934/IMG_20260430_124902_kipwg3.jpg',
    ],
    description: 'Premium quality car steering wheel cover designed for enhanced grip and comfort. Made from durable, breathable materials that protect your steering wheel from wear and tear. Easy to install with a universal fit for most car models. Provides better control and reduces hand fatigue during long drives.',
  },
  {
    id: 'creative-soap-holder',
    name: 'Creative Soap Holder (ক্রিয়েটিভ সাব হোল্ডার)',
    tagline: 'Keep your soap dry and organized with this creative design',
    price: 250,
    originalPrice: 400,
    rating: 4.4,
    reviews: 48,
    badge: 'NEW ARRIVAL',
    emoji: '🧼',
    category: 'Home & Living',
    inStock: true,
    stock: 110,
    images: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580045/holder-1_d0iy8o.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580045/holder-2_sg5jrz.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580036/holder-4_lbm4dq.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580046/holder-3_xbiwxs.jpg',
    ],
    description: 'Creative and functional soap holder designed to keep your soap dry and lasting longer. Features innovative drainage design that prevents soap from becoming mushy. Made from durable, water-resistant materials perfect for bathroom use. Easy to clean and maintain, adds style to your bathroom decor.',
  },
  {
    id: 'makeup-brush-storage-box',
    name: 'Makeup Brush Storage Box (মেকআপ ব্রাশ স্টোরেজ বক্স)',
    tagline: 'Organize and protect your makeup brushes in style',
    price: 350,
    originalPrice: 550,
    rating: 4.3,
    reviews: 35,
    badge: 'NEW ARRIVAL',
    emoji: '💄',
    category: 'Personal Care',
    inStock: true,
    stock: 75,
    images: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580230/brush-4_yp7iur.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580229/brush-1_bmrh6z.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580226/bruish-2_ctqcx3.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580229/brush-3_mzgeka.jpg',
    ],
    description: 'Elegant makeup brush storage box designed to keep your beauty tools organized and protected. Features multiple compartments to store brushes of different sizes. Made from high-quality, transparent material that allows you to easily see your collection. Perfect for makeup enthusiasts and professionals alike.',
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

