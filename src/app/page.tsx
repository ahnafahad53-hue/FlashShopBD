import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import ProductDetails from '@/components/ProductDetails';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Background Animation Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-500/6 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/[0.02] to-purple-500/[0.03] animate-gradient-shift"></div>
      </div>

      {/* Content with relative z-index to appear above background */}
      <div className="relative z-10">
        {/* Sticky Header with Navigation */}
        <Header />

      {/* Hero Section - Full-width with product showcase */}
      <Hero />

      {/* Product Features Grid - Benefits of using the nasal cleaner */}
      <Features />

      {/* How It Works - Step-by-step guide */}
      <HowItWorks />

      {/* Product Details Section - Images, pricing, tabs with description */}
      <ProductDetails />

      {/* Why Choose FlashShop - Trust indicators */}
      <WhyChooseUs />

      {/* Customer Testimonials - Social proof */}
      <Testimonials />

      {/* FAQ Section - Common questions and answers */}
      <FAQ />

      {/* Final CTA - Conversion-focused call to action */}
      <CTA />

      {/* Footer Separator - Visual indicator where footer begins */}
      <div className="relative">
        {/* Subtle gradient line */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        {/* Centered accent line */}
        <div className="flex justify-center -mt-0.5">
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full"></div>
        </div>
        {/* Decorative dots */}
        <div className="flex justify-center space-x-2 mt-4 mb-8">
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Footer - Contact info, links, social media */}
      <Footer />
      </div>

      {/* Structured Data for SEO (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Smart Nasal Cleaner Bottle',
            image: 'https://flashshop.com/nasal-cleaner.jpg',
            description: 'Smart Nasal Cleaner Bottle — gently cleanse and refresh your sinuses daily. Professional-grade nasal irrigation for allergy relief and better breathing.',
            brand: {
              '@type': 'Brand',
              name: 'FlashShop',
            },
            offers: {
              '@type': 'Offer',
              url: 'https://flashshop.com',
              priceCurrency: 'BDT',
              price: '999',
              priceValidUntil: '2025-12-31',
              itemCondition: 'https://schema.org/NewCondition',
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: 'FlashShop',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '127',
            },
          }),
        }}
      />
    </main>
  );
}
