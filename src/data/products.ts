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
  isFreeDelivery?: boolean;
  colors?: string[];
  steeringImages?: string[];
  gapFillerColors?: string[];
  gapFillerImages?: string[];
}

export const products: Product[] = [
  {
    id: 'car-combo-01',
    name: 'Carbon Fiber Steering Cover & Seat Gap Filler Combo (কার্বন ফাইবার স্টিয়ারিং কভার এবং সিট গ্যাপ ফিলার কম্বো)',
    tagline: 'Best value car interior protection combo with free delivery',
    price: 1350,
    originalPrice: 2199,
    rating: 4.9,
    reviews: 142,
    badge: 'COMBO OFFER',
    emoji: '🎁',
    category: 'Automotive',
    inStock: true,
    stock: 50,
    isFreeDelivery: true,
    images: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579940/IMG_20260430_125558_ctvedz.jpg', // Black Steering (Primary Card Image)
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579626/car3_hs1pcy.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579626/car4_lkaagg.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579626/car2_j3hkmq.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579622/car1_sjx2f5.jpg',
    ],
    colors: ['Black', 'Base', 'Brown'],
    steeringImages: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579940/IMG_20260430_125558_ctvedz.jpg', // Black
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579929/IMG_20260430_125155_zyiqfe.jpg', // White
      "https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579934/IMG_20260430_124902_kipwg3.jpg",
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777579928/IMG_20260430_125740_za8pgy.jpg', // Brown
    ],
    gapFillerColors: ['Black', 'Base', 'Brown'],
    gapFillerImages: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777920321/black_dfqbyx.png',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777920321/white_fpg0xt.png',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777920322/brown_dg9fy0.jpg',
    ],
    description: 'Get our two most popular car accessories in one value-packed combo! This offer includes the premium Car Seat Gap Filler to keep your interior tidy and the Carbon Fiber Steering Wheel Cover for ultimate grip and style. Plus, enjoy FREE delivery across Bangladesh with this combo pack!',
  },
  {
    id: 'makeup-brush-storage-box',
    name: 'Makeup Brush Storage Box (মেকআপ ব্রাশ স্টোরেজ বক্স)',
    tagline: 'Organize and protect your makeup brushes in style',
    price: 1550,
    originalPrice: 1999,
    rating: 4.3,
    reviews: 35,
    badge: 'NEW ARRIVAL',
    emoji: '💄',
    category: 'Personal Care',
    inStock: true,
    stock: 75,
    isFreeDelivery: true,
    colors: ['Pearl White', 'Cream'],
    images: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580230/brush-4_yp7iur.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580229/brush-1_bmrh6z.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580226/bruish-2_ctqcx3.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580229/brush-3_mzgeka.jpg',
    ],
    description: 'Elegant makeup brush storage box designed to keep your beauty tools organized and protected. Features multiple compartments to store brushes of different sizes. Made from high-quality, transparent material that allows you to easily see your collection. Perfect for makeup enthusiasts and professionals alike.',
  },
  {
    id: 'hud-speedometer-01',
    name: 'HUD Head-Up Display Speedometer (HUD হেড-আপ ডিসপ্লে স্পিডোমিটার)',
    tagline: 'High-accuracy real-time GPS speedometer with plug-and-play setup for all vehicles',
    price: 1550,
    originalPrice: 2350,
    rating: 4.8,
    reviews: 64,
    badge: 'NEW ARRIVAL',
    emoji: '🚘',
    category: 'Automotive',
    inStock: true,
    stock: 85,
    isFreeDelivery: true,
    images: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1778179973/IMG_20260508_004303_v69gav.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1778179972/IMG_20260508_004326_cl72tv.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1778179971/IMG_20260508_004209_o8azxr.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1778179970/IMG_20260508_004037_nwe5hc.jpg'
    ],
    description: 'Ensure a safer, smarter drive with our premium HUD Head-Up Display Speedometer. Projecting real-time satellite speed directly onto its crystal-clear display, this device allows you to monitor your speed without ever taking your eyes off the road. Powered by a simple 5V USB connection, it features automatic power synchronization with your car\'s engine, a high-precision GPS microchip for real-time, lag-free updates, and works flawlessly on every vehicle. Simply plug, place, and drive!'
  },
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
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777582031/Screenshot_2026-05-01_at_2.46.57_AM_z7ntzc.png',
    ],
    description: 'Powerful foot odor eliminator spray that neutralizes bad smells instantly. Long-lasting formula keeps your feet fresh and dry throughout the day. Safe for daily use on feet and shoes. Antibacterial properties prevent odor-causing bacteria.',
  },
  // {
  //   id: 'kids-comfy-pillow',
  //   name: 'Head shaping pillow (হেড শেপিং পিলো)',
  //   tagline: 'Ultra-soft memory foam pillow for peaceful sleep',
  //   price: 890,
  //   originalPrice: 1290,
  //   rating: 4.7,
  //   reviews: 156,
  //   badge: 'TRENDING',
  //   emoji: '🛏️',
  //   category: 'Kids & Baby',
  //   inStock: true,
  //   stock: 60,
  //   images: [
  //     '/placeholder-product.png',
  //     '/placeholder-product.png',
  //     '/placeholder-product.png',
  //     '/placeholder-product.png',
  //   ],
  //   description: 'Premium quality children\'s pillow designed for optimal neck support and comfort. Made with hypoallergenic memory foam that adapts to your child\'s sleeping position. Breathable cover keeps them cool all night. Perfect for ages 0-3 years.',
  // },
  {
    id: 'creative-soap-holder',
    name: 'Creative Soap Holder (ক্রিয়েটিভ সাব হোল্ডার)',
    tagline: 'Keep your soap dry and organized with this creative design - Coming soon',
    price: 0,
    originalPrice: 400,
    rating: 0,
    reviews: 0,
    badge: 'COMING SOON',
    emoji: '🧼',
    category: 'Home & Living',
    inStock: false,
    stock: 0,
    images: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580045/holder-1_d0iy8o.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580045/holder-2_sg5jrz.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580036/holder-4_lbm4dq.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1777580046/holder-3_xbiwxs.jpg',
    ],
    description: 'Creative and functional soap holder designed to keep your soap dry and lasting longer. Features innovative drainage design that prevents soap from becoming mushy. Made from durable, water-resistant materials perfect for bathroom use. Easy to clean and maintain, adds style to your bathroom decor.',
  },
  {
    id: 'kuwajia-charger-separator',
    name: 'Kuwajia Charger Separator',
    tagline: 'Keep charging cables neat, organized, and tangle-free',
    price: 1350, // Updated price
    originalPrice: 1850,
    rating: 4.9,
    reviews: 59,
    badge: 'NEW',
    emoji: '🔌',
    category: 'Home & Living',
    inStock: true,
    stock: 200,
    isFreeDelivery: true, // Added free delivery
    images: [
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1781881313/IMG_20260618_222117_ns6c2z.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1781881313/IMG_20260618_221405_reelqw.jpg',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1781881314/IMG_20260618_232135_chfx76.png',
      'https://res.cloudinary.com/dctw9lg1d/image/upload/v1781881325/IMG_20260618_232010_pmychf.png',
    ],
    description:
      'The Kuwajia Charger Separator is a practical cable management solution designed to keep charging cables organized and easily accessible. Its compact and durable design helps prevent tangled wires, reduces clutter on desks and bedside tables, and protects cables from unnecessary wear and tear. Easy to install and suitable for USB, Type-C, Lightning, and other charging cables, making it perfect for home, office, or workspace organization.',
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
