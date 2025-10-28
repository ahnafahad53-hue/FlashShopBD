import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Content */}
      <div>
        {/* Sticky Header with Navigation */}
        <Header />

      {/* Hero Section - Full-width with product showcase */}
      <Hero />

      {/* Product Features Grid - Benefits of using the nasal cleaner */}
      <Features />

      {/* How It Works - Step-by-step guide */}
      <HowItWorks />

      {/* Why Choose FlashShop - Trust indicators */}
      <WhyChooseUs />

      {/* Customer Testimonials - Social proof */}
      <Testimonials />

      {/* FAQ Section - Common questions and answers */}
      <FAQ />

      {/* Final CTA - Conversion-focused call to action */}
      <CTA />

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
              price: '650',
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
