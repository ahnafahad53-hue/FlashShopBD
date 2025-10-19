import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FlashShop | Nasal Cleaner Bottle in Bangladesh | Smart Sinus Rinse',
  description: 'Cleanse your nasal passages naturally. Smart Nasal Cleaner Bottle — easy, safe, and effective daily care for sinus relief. ৳999 only. Free delivery across Bangladesh.',
  keywords: [
    'nasal cleaner',
    'nasal rinse bottle',
    'sinus rinse',
    'nasal irrigation',
    'allergy relief',
    'congestion relief',
    'Bangladesh',
    'FlashShop',
    'health products',
    'medical equipment',
  ],
  authors: [{ name: 'FlashShop' }],
  creator: 'FlashShop',
  publisher: 'FlashShop',
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
    url: 'https://flashshop.com',
    title: 'Buy Nasal Cleaner Bottle in Bangladesh | Smart Sinus Rinse | FlashShop',
    description: 'Cleanse your nasal passages naturally. Smart Nasal Cleaner Bottle — easy, safe, and effective daily care for sinus relief.',
    siteName: 'FlashShop',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Nasal Cleaner Bottle - FlashShop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Nasal Cleaner Bottle in Bangladesh | FlashShop',
    description: 'Smart Nasal Cleaner Bottle — easy, safe, and effective daily care for sinus relief. ৳999 only.',
    images: ['/twitter-image.jpg'],
    creator: '@flashshop',
  },
  icons: {
    icon: '/flashshop-icon.png',
    apple: '/flashshop-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'og:phone_number': '+880 1XXX-XXXXXX',
    'og:email': 'support@flashshop.com',
    'og:locality': 'Dhaka',
    'og:country-name': 'Bangladesh',
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
        <link rel="canonical" href="https://flashshop.com" />
      </head>
      <body className={`${inter.className} font-inter antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
