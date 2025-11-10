import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import FloatingCTA from '@/components/FloatingCTA';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FlashShop | Nasal Cleaner Bottle in Bangladesh | Smart Sinus Rinse',
  description: 'Cleanse your nasal passages naturally. Smart Nasal Cleaner Bottle — easy, safe, and effective daily care for sinus relief. ৳650 only. Free delivery across Bangladesh.',
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
    description: 'Smart Nasal Cleaner Bottle — easy, safe, and effective daily care for sinus relief. ৳650 only.',
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
    'og:country-name': 'Bangladesh',
    'google-site-verification': 'yzsoc0u1oIwZw_tksgUkxbh3Oti5Q79wSaMZCOrBMcw',
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

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '840498368356556');
              fbq('track', 'PageView');
            `,
          }}
        />
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
        <SmoothScrollProvider>
          {children}
          <FloatingCTA />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
