# Scaling Guide - From Single to Multi-Product Store

This guide explains how to scale your FlashShop landing page from a single product to a full e-commerce platform.

## 📦 Adding New Products

### Step 1: Add Product Data

Edit `/src/data/products.ts`:

```typescript
export const products: Product[] = [
  // Existing Nasal Cleaner
  {
    id: 'nasal-cleaner-01',
    name: 'Smart Nasal Cleaner Bottle',
    tagline: 'Gentle nasal irrigation for daily sinus care',
    price: 999,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 127,
    badge: 'NEW',
    emoji: '🩺',
    category: 'Health & Wellness',
    inStock: true,
  },
  
  // NEW: Add more products here
  {
    id: 'smart-thermometer',
    name: 'Digital Smart Thermometer',
    tagline: 'Fast, accurate temperature readings in seconds',
    price: 799,
    originalPrice: 1199,
    rating: 4.9,
    reviews: 234,
    badge: 'BESTSELLER',
    emoji: '🌡️',
    category: 'Health & Wellness',
    inStock: true,
  },
  {
    id: 'pulse-oximeter',
    name: 'Fingertip Pulse Oximeter',
    tagline: 'Monitor blood oxygen and heart rate at home',
    price: 1299,
    originalPrice: 1899,
    rating: 4.7,
    reviews: 156,
    emoji: '💓',
    category: 'Health & Wellness',
    inStock: true,
  },
];
```

### Step 2: Create Product Images

Add product images to `/public/images/`:

```
public/
├── images/
│   ├── nasal-cleaner-1.jpg
│   ├── nasal-cleaner-2.jpg
│   ├── thermometer-1.jpg
│   ├── pulse-oximeter-1.jpg
│   └── ...
```

### Step 3: Update ProductCard Component

Modify `/src/components/ProductCard.tsx` to use real images:

```tsx
import Image from 'next/image';

// Replace placeholder with:
<Image
  src={product.images?.[0] || '/images/placeholder.jpg'}
  alt={product.name}
  fill
  className="object-cover"
/>
```

## 🛒 Adding Shopping Cart

### Step 1: Create Cart Context

Create `/src/context/CartContext.tsx`:

```tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((current) => current.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
```

### Step 2: Wrap App with CartProvider

Update `/src/app/layout.tsx`:

```tsx
import { CartProvider } from '@/context/CartContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
```

### Step 3: Update ProductCard with Add to Cart

```tsx
'use client';

import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div>
      {/* ... other code ... */}
      <button
        onClick={() => addToCart(product)}
        className="btn-primary"
      >
        Add to Cart
      </button>
    </div>
  );
}
```

### Step 4: Create Cart Component

Create `/src/components/Cart.tsx`:

```tsx
'use client';

import { useCart } from '@/context/CartContext';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Cart Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Cart ({totalItems})</h2>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="space-y-4 overflow-y-auto max-h-[60vh]">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">৳{item.price}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 border rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border rounded"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Checkout */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="text-2xl font-bold">৳{totalPrice}</span>
              </div>
              <button className="w-full btn-primary">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
```

## 💳 Payment Integration

### SSL Commerz (Bangladesh)

1. **Install Package:**
```bash
npm install sslcommerz-lts
```

2. **Create API Route** `/src/app/api/payment/route.ts`:

```tsx
import { SSLCommerzPayment } from 'sslcommerz-lts';

export async function POST(request: Request) {
  const body = await request.json();
  
  const sslcz = new SSLCommerzPayment(
    process.env.SSLCOMMERZ_STORE_ID,
    process.env.SSLCOMMERZ_STORE_PASSWORD,
    false // Set to true for live
  );

  const data = {
    total_amount: body.amount,
    currency: 'BDT',
    tran_id: 'ORDER_' + Date.now(),
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success`,
    fail_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/fail`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/cancel`,
    product_name: 'FlashShop Products',
    product_category: 'Health',
    cus_name: body.customerName,
    cus_email: body.customerEmail,
    cus_phone: body.customerPhone,
    cus_add1: body.customerAddress,
    shipping_method: 'Courier',
    product_profile: 'general',
  };

  const response = await sslcz.init(data);
  return Response.json(response);
}
```

## 📊 Database Integration

### Using Prisma with PostgreSQL

1. **Install Prisma:**
```bash
npm install prisma @prisma/client
npx prisma init
```

2. **Define Schema** in `prisma/schema.prisma`:

```prisma
model Product {
  id            String   @id @default(cuid())
  name          String
  slug          String   @unique
  description   String?
  price         Int
  originalPrice Int?
  images        String[]
  category      String
  inStock       Boolean  @default(true)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Order {
  id              String   @id @default(cuid())
  customerName    String
  customerEmail   String
  customerPhone   String
  customerAddress String
  items           Json
  total           Int
  status          String   @default("pending")
  createdAt       DateTime @default(now())
}
```

3. **Run Migration:**
```bash
npx prisma migrate dev --name init
```

## 🔍 Search Functionality

Create `/src/components/ProductSearch.tsx`:

```tsx
'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductSearch() {
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.tagline.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-12 pr-4 py-3 border rounded-lg"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
```

## 📱 Responsive Mobile Menu

Update Header with mobile cart and better mobile navigation already implemented.

## 🎨 Admin Dashboard (Future)

Consider using:
- **Payload CMS** - Headless CMS for product management
- **Sanity** - Content management
- **Custom Admin** - Build with Next.js + Prisma

---

## Next Features Roadmap

1. ✅ Basic landing page (Done)
2. 🔄 Shopping cart (In Progress)
3. ⏳ Payment integration
4. ⏳ Order management
5. ⏳ User authentication
6. ⏳ Product reviews
7. ⏳ Wishlist
8. ⏳ Email notifications
9. ⏳ Admin dashboard

Need help? support@flashshop.com

