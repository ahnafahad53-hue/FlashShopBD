import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetails from '@/components/ProductDetails';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Product Details Section */}
      <ProductDetails />

      <Footer />
    </main>
  );
}

