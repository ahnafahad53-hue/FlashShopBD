# Deployment Guide - FlashShop Landing Page

## 🚀 Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier available)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FlashShop landing page"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

3. **Configure Environment (Optional)**
   - Add environment variables in Vercel dashboard if needed
   - Configure custom domain in Settings > Domains

### Automatic Deployments
- Every push to `main` branch automatically deploys
- Pull requests get preview deployments

## 📊 Performance Checklist

Before deploying, ensure:

- ✅ Build completes without errors (`npm run build`)
- ✅ No console errors in production
- ✅ Images are optimized
- ✅ Meta tags are configured
- ✅ Analytics are set up (optional)

## 🔧 Production Environment Variables

Create a `.env.production` file:

```env
NEXT_PUBLIC_SITE_URL=https://flashshop.com
NEXT_PUBLIC_GA_TRACKING_ID=UA-XXXXXXXXX-X
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXXX
```

## 🌐 Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to Settings > Domains
   - Add your domain (e.g., flashshop.com)
   - Follow DNS configuration instructions

2. **DNS Configuration:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate:**
   - Automatically provisioned by Vercel
   - HTTPS enabled by default

## 📱 Mobile App Considerations

If you plan to add a mobile app later:

1. **App Store Links:**
   - Update Footer.tsx with actual app store links
   - Add app banners for mobile users

2. **Deep Linking:**
   - Configure URL schemes
   - Set up universal links

## 🔍 SEO Post-Deployment

1. **Google Search Console:**
   - Submit sitemap: `https://flashshop.com/sitemap.xml`
   - Verify ownership
   - Monitor indexing

2. **Meta Tags Verification:**
   - Use [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)

3. **Structured Data Testing:**
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Verify product schema

## 📈 Analytics Setup

### Google Analytics

1. Create GA4 property
2. Add to `/src/app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
  `}
</Script>
```

### Facebook Pixel

Add to layout.tsx:

```tsx
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
    fbq('track', 'PageView');
  `}
</Script>
```

## 🔐 Security Headers

Add to `next.config.ts`:

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

### Images Not Loading

- Ensure images are in `/public` folder
- Check Next.js Image component configuration
- Verify image paths are correct

### Slow Performance

- Enable image optimization
- Implement lazy loading
- Check bundle size: `npm run build`
- Use Lighthouse audit

## 📞 Post-Deployment Checklist

- [ ] Site loads correctly on mobile
- [ ] All links work
- [ ] Forms submit properly
- [ ] Images load properly
- [ ] SEO tags are present
- [ ] Analytics tracking works
- [ ] SSL certificate is active
- [ ] Custom domain works
- [ ] Social sharing previews work
- [ ] Performance score > 90

## 🔄 Update Process

```bash
# Make changes locally
git add .
git commit -m "Your update message"
git push origin main

# Vercel automatically deploys the update
```

## 📊 Monitoring

- Set up [Vercel Analytics](https://vercel.com/analytics)
- Monitor [Vercel Logs](https://vercel.com/docs/concepts/observability/logging)
- Track Core Web Vitals
- Set up error monitoring (Sentry)

## 🎯 Next Steps

1. Add shopping cart functionality
2. Integrate payment gateway (SSL Commerz, bKash)
3. Add user accounts
4. Implement order tracking
5. Add live chat support

---

Need help? Contact: support@flashshop.com

