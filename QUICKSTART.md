# FlashShop - Quick Start Guide

Get your landing page up and running in less than 5 minutes!

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
cd flashshopbd
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site! 🎉

### 3. Build for Production

```bash
npm run build
npm start
```

## 📝 First Steps

### Update Product Information

Edit `/src/data/products.ts`:

```typescript
{
  id: 'nasal-cleaner-01',
  name: 'Smart Nasal Cleaner Bottle', // Change product name
  price: 999,                          // Update price
  originalPrice: 1499,                 // Update original price
  rating: 4.8,                         // Update rating
  reviews: 127,                        // Update review count
}
```

### Update SEO Meta Tags

Edit `/src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Custom Title',
  description: 'Your custom description',
  // ... update other meta tags
};
```

### Update Contact Information

Edit `/src/components/Footer.tsx`:

```tsx
// Update phone number
<a href="tel:+8801XXXXXXXXX">+880 1XXX-XXXXXX</a>

// Update email
<a href="mailto:your@email.com">your@email.com</a>

// Update address
<span>Your Address, City, Bangladesh</span>
```

### Add Real Product Images

1. Add images to `/public/images/`
2. Update ProductCard component:

```tsx
// Replace placeholder with:
<Image
  src="/images/your-product.jpg"
  alt={product.name}
  fill
  className="object-cover"
/>
```

## 🎨 Customization

### Change Colors

The site uses a blue theme by default. To change:

**Primary Blue (#2563eb):**
- Find and replace `blue-600` with your color
- Update `theme-color` in `layout.tsx`

**Quick color reference:**
- `blue-600` - Primary buttons, links, accents
- `blue-50` - Light backgrounds
- `gray-900` - Text

### Change Fonts

Edit `/src/app/layout.tsx`:

```tsx
import { YourFont } from 'next/font/google';

const yourFont = YourFont({ subsets: ['latin'] });
```

### Modify Sections

All sections are in `/src/components/`. Edit any component to customize:

- `Header.tsx` - Navigation
- `Hero.tsx` - Hero section
- `Features.tsx` - Product features
- `HowItWorks.tsx` - Usage guide
- `ProductDetails.tsx` - Product info
- `WhyChooseUs.tsx` - Trust badges
- `Testimonials.tsx` - Reviews
- `FAQ.tsx` - Questions
- `CTA.tsx` - Call to action
- `Footer.tsx` - Footer

## 📱 Testing Responsiveness

Test on different devices:

```bash
# Desktop
http://localhost:3000

# Mobile (on same network)
http://YOUR_LOCAL_IP:3000
```

Or use browser DevTools:
1. Press F12
2. Click device toggle (mobile icon)
3. Test different screen sizes

## 🔍 SEO Checklist

Before deploying:

- [ ] Update meta title and description
- [ ] Add your business name
- [ ] Update contact information
- [ ] Add real product images with alt text
- [ ] Update Open Graph images
- [ ] Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Verify structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

## 🚢 Deploy to Vercel

### Option 1: GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"
   - Done! ✅

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts and your site will be live!

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
npm run format   # Format code
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Images Not Showing

- Check image path is correct
- Ensure images are in `/public` folder
- Use absolute paths: `/images/product.jpg`

### Slow Performance

- Run production build: `npm run build && npm start`
- Development mode is slower
- Check bundle size: look at build output

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🎯 Next Steps

1. ✅ Get it running (you're here!)
2. 📝 Customize content
3. 🎨 Add your branding
4. 📸 Add real images
5. 🚀 Deploy to Vercel
6. 📊 Add analytics
7. 💳 Integrate payments

## 💬 Need Help?

- Check `README.md` for detailed documentation
- See `FEATURES.md` for feature list
- Read `SCALING_GUIDE.md` for adding features
- Review `DEPLOYMENT.md` for deployment help

## 📞 Support

Email: support@flashshop.com

---

**Happy building! 🎉**

Your professional landing page is ready to convert visitors into customers!

