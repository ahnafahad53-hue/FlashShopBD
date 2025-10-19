# FlashShop - Nasal Cleaner Landing Page

A professional, SEO-optimized, conversion-focused landing page for selling the Smart Nasal Cleaner Bottle, built with Next.js and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Responsive Design**: Mobile-first approach, works on all devices
- **Performance**: Optimized for Core Web Vitals, lazy loading
- **Animations**: Smooth animations using Framer Motion
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader friendly
- **Scalable Architecture**: Reusable components, type-safe product data structure

## 📁 Project Structure

```
flashshopbd/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO meta tags
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles and animations
│   ├── components/
│   │   ├── Header.tsx           # Sticky navigation header
│   │   ├── Hero.tsx             # Hero section with CTA
│   │   ├── Features.tsx         # Product features grid
│   │   ├── HowItWorks.tsx       # Step-by-step guide
│   │   ├── ProductDetails.tsx   # Product info with tabs
│   │   ├── WhyChooseUs.tsx      # Trust indicators
│   │   ├── Testimonials.tsx     # Customer reviews
│   │   ├── FAQ.tsx              # Accordion FAQ section
│   │   ├── CTA.tsx              # Final call-to-action
│   │   ├── Footer.tsx           # Footer with links
│   │   └── ProductCard.tsx      # Reusable product card
│   └── data/
│       └── products.ts          # Product data structure
├── public/
│   └── (image assets)
└── package.json
```

## 🎯 Page Sections

1. **Header** - Sticky navigation with logo and menu
2. **Hero** - Eye-catching headline with product image and CTAs
3. **Features** - 4 key benefits with icons
4. **How It Works** - 3-step usage guide
5. **Product Details** - Image gallery, pricing, tabbed content
6. **Why Choose Us** - Trust badges and guarantees
7. **Testimonials** - Social proof from customers
8. **FAQ** - Common questions with accordion
9. **CTA** - Final conversion section
10. **Footer** - Contact info, links, social media

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Customization

### Update Product Information

Edit `/src/data/products.ts` to modify product details:

```typescript
{
  id: 'nasal-cleaner-01',
  name: 'Smart Nasal Cleaner Bottle',
  price: 999,
  originalPrice: 1499,
  rating: 4.8,
  reviews: 127,
  // ... more fields
}
```

### Add More Products

Simply add new product objects to the `products` array in `/src/data/products.ts`. The site is designed to scale to multiple products.

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles: inline Tailwind classes

### SEO Configuration

Update meta tags in `/src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... more meta tags
}
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO Features

- ✅ Meta title and description
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ JSON-LD structured data (Product schema)
- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Canonical URLs
- ✅ Robots meta tags

## 🎭 Components Reference

### ProductCard

Reusable component for displaying products:

```tsx
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

<ProductCard product={products[0]} />
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## 🔧 Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Quality**: Biome

## 📊 Performance Optimization

- Image lazy loading
- Code splitting
- Tree shaking
- Minification
- Font optimization (Inter from Google Fonts)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

Copyright © 2025 FlashShop. All rights reserved.

## 🤝 Contributing

For major changes, please open an issue first to discuss what you would like to change.

## 📞 Support

- Email: support@flashshop.com
- Phone: +880 1XXX-XXXXXX

---

Built with ❤️ by FlashShop Team
