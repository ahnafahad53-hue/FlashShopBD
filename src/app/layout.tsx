import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import FloatingCTA from '@/components/FloatingCTA';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import MetaPixel from '@/components/MetaPixel';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FlashShop Bangladesh | Online Shopping | Quality Products Fast Delivery',
  description: 'FlashShop - Your trusted online shopping destination in Bangladesh. Buy quality health & wellness, personal care, kids products with fast delivery across Bangladesh. 100% authentic products, COD available. Order now!',
  keywords: [
    'FlashShop',
    'FlashShop Bangladesh',
    'online shopping Bangladesh',
    'e-commerce Bangladesh',
    'online store Bangladesh',
    'buy online Bangladesh',
    'health products Bangladesh',
    'personal care products',
    'kids products Bangladesh',
    'wellness products',
    'nasal cleaner',
    'foot spray',
    'pillow Bangladesh',
    'fast delivery Bangladesh',
    'cash on delivery',
    'COD Bangladesh',
    'authentic products',
    'Dhaka online shopping',
    'Bangladesh shopping',
    'best online store Bangladesh',
  ],
  authors: [{ name: 'FlashShop Bangladesh' }],
  creator: 'FlashShop Bangladesh',
  publisher: 'FlashShop Bangladesh',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: 'https://www.flashshopbd.com',
    title: 'FlashShop Bangladesh - Online Shopping | Quality Products | Fast Delivery',
    description: 'Shop quality health, wellness, personal care & kids products online in Bangladesh. Fast delivery, 100% authentic, COD available. Your trusted online shopping partner.',
    siteName: 'FlashShop Bangladesh',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FlashShop Bangladesh - Online Shopping Store',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlashShop Bangladesh | Online Shopping Store',
    description: 'Shop quality products online in Bangladesh. Fast delivery, authentic products, COD available. Order now!',
    images: ['/twitter-image.jpg'],
    creator: '@flashshop',
  },
  icons: {
    icon: '/flashshop-icon.png',
    apple: '/flashshop-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'og:phone_number': '+880 1345903907',
    'og:email': 'support@flashshop.com',
    'og:locality': 'Dhaka',
    'og:region': 'Dhaka',
    'og:country-name': 'Bangladesh',
    'og:postal-code': '1000',
    'google-site-verification': 'yzsoc0u1oIwZw_tksgUkxbh3Oti5Q79wSaMZCOrBMcw',
    'business:contact_data:street_address': 'Dhaka',
    'business:contact_data:locality': 'Dhaka',
    'business:contact_data:country_name': 'Bangladesh',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://www.flashshopbd.com" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LB4F7582J6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LB4F7582J6');
            `,
          }}
        />

        {/* Meta Pixel Noscript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=840498368356556&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.className} font-inter antialiased`}>
        <MetaPixel />
        <SmoothScrollProvider>
          <CartProvider>
            {children}
            <FloatingCTA />
            <CartDrawer />
          </CartProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
