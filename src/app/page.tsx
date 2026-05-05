import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Dynamically import components below the fold to improve initial load speed
const Categories = dynamic(() => import('@/components/Categories'), { ssr: true });
const FeaturedProducts = dynamic(() => import('@/components/FeaturedProducts'), { ssr: true });
const NewArrivals = dynamic(() => import('@/components/NewArrivals'), { ssr: true });
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true });
const CTA = dynamic(() => import('@/components/CTA'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Content */}
      <div>
        {/* Sticky Header with Navigation */}
        <Header />

        {/* Hero Section - Full-width with product showcase */}
        <Hero />

        {/* Shop by Category */}
        <Categories />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* New Arrivals */}
        <NewArrivals />

        {/* Why Choose FlashShop - Trust indicators */}
        <WhyChooseUs />

        {/* Customer Testimonials - Social proof */}
        {/* <Testimonials /> */}

        {/* FAQ Section - Common questions and answers */}
        <FAQ />

        {/* Final CTA - Conversion-focused call to action */}
        <CTA />

        {/* Footer - Contact info, links, social media */}
        <Footer />
      </div>

      {/* Structured Data for SEO (JSON-LD) - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'FlashShop Bangladesh',
            alternateName: 'FlashShop',
            url: 'https://www.flashshopbd.com',
            logo: 'https://www.flashshopbd.com/flashshop.png',
            description: 'FlashShop is Bangladesh\'s trusted online shopping destination for quality health, wellness, personal care, and kids products. Fast delivery across Bangladesh with 100% authentic products.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dhaka',
              addressCountry: 'BD',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+880-1345903907',
              contactType: 'Customer Service',
              areaServed: 'BD',
              availableLanguage: ['en', 'bn'],
            },
            sameAs: [
              'https://www.facebook.com/share/17p5yog79E/',
              'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=zjb1k8d',
              'https://youtube.com/@flashshop-z7o?si=yeLwx6pXkFcyZmBV',
            ],
          }),
        }}
      />

      {/* Structured Data for SEO (JSON-LD) - E-commerce Store */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Store',
            name: 'FlashShop Bangladesh',
            image: 'https://www.flashshopbd.com/flashshop.png',
            url: 'https://www.flashshopbd.com',
            telephone: '+880-1345903907',
            priceRange: '৳৳',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dhaka',
              addressCountry: 'Bangladesh',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 23.8103,
              longitude: 90.4125,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '09:00',
                closes: '21:00',
              },
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '10000',
            },
          }),
        }}
      />

      {/* Structured Data for SEO (JSON-LD) - Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'FlashShop Bangladesh',
            url: 'https://www.flashshopbd.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.flashshopbd.com/products?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </main>
  );
}
