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

      {/* How It Works - Step-by-step guide */}
      <HowItWorks />

      {/* Product Features Grid - Benefits of using the nasal cleaner */}
      <Features />

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
              hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: {
                  '@type': 'Country',
                  name: 'Bangladesh',
                },
                returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
                merchantReturnDays: 0,
                returnMethod: 'https://schema.org/ReturnByMail',
              },
              shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                  '@type': 'MonetaryAmount',
                  value: '100',
                  currency: 'BDT',
                },
                shippingDestination: {
                  '@type': 'DefinedRegion',
                  addressCountry: 'BD',
                },
                deliveryTime: {
                  '@type': 'ShippingDeliveryTime',
                  businessDays: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'https://schema.org/Monday',
                      'https://schema.org/Tuesday',
                      'https://schema.org/Wednesday',
                      'https://schema.org/Thursday',
                      'https://schema.org/Friday',
                    ],
                  },
                  cutoffTime: '14:00',
                  handlingTime: {
                    '@type': 'QuantitativeValue',
                    minValue: 1,
                    maxValue: 1,
                    unitCode: 'DAY',
                  },
                  transitTime: {
                    '@type': 'QuantitativeValue',
                    minValue: 1,
                    maxValue: 3,
                    unitCode: 'DAY',
                  },
                },
                transitTimeLabel: '1-3 business days',
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
