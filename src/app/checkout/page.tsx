'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShoppingCart, MapPin, User, Phone, CreditCard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    fullAddress: '',
    deliveryLocation: 'inside'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pricing constants
  const basePrice = 650;
  const insideDhakaDelivery = 80;
  const outsideDhakaDelivery = 150;
  
  // Calculate total price
  const deliveryCost = formData.deliveryLocation === 'inside' ? insideDhakaDelivery : outsideDhakaDelivery;
  const totalPrice = basePrice + deliveryCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDeliveryLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      deliveryLocation: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting order data:', formData);
      
      // Prepare the order data
      const orderData = {
        ...formData,
        productPrice: basePrice,
        deliveryCost: deliveryCost,
        totalPrice: totalPrice
      };
      
      console.log('Full order payload:', orderData);
      
      // Send to Google Apps Script
      // The 302 redirect suggests the script might not be deployed correctly
      try {
        console.log('Sending order data to Google Sheets:', orderData);
        
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbzS41m_8996mHVnWgi35cLAc3EbugT09kyR5qh3BjS9oqV2OCgy_QGwvdxyX0pNiPHf/exec';
        
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData)
        });
        
        console.log('✅ Data sent to Google Apps Script (HTTP 302 is normal for redirect)');
      } catch (googleError) {
        console.error('❌ Failed to send to Google Sheets:', googleError);
      }
      
      // Also store in localStorage as backup
      const backupData = {
        ...orderData,
        timestamp: new Date().toISOString(),
        orderId: 'ORD-' + Date.now()
      };
      
      const existingOrders = JSON.parse(localStorage.getItem('pendingOrders') || '[]');
      existingOrders.push(backupData);
      localStorage.setItem('pendingOrders', JSON.stringify(existingOrders));
      console.log('Order stored locally as backup:', backupData);

      // Redirect to thank you page instead of showing alert
      router.push('/thank-you-order');
    } catch (error) {
      console.error('Error submitting order:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        formData: formData
      });
      alert('Something went wrong. Please try again later or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.fullName && formData.phone && formData.fullAddress;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Checkout / অর্ডার</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShoppingCart size={24} />
                Order Summary / অর্ডার সারসংক্ষেপ
              </h2>
              
              {/* Product */}
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://res.cloudinary.com/dgm2mosta/image/upload/v1761633111/IMG_20251019_124825_co8dcd.jpg"
                    alt="Smart Nasal Cleaner Bottle"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Smart Nasal Cleaner Bottle</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Medical-grade, BPA-free</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-200 pt-4 mt-6 space-y-2">
                <div className="flex justify-between text-gray-900">
                  <span>Product Price</span>
                  <span>৳{basePrice}</span>
                </div>
                <div className="flex justify-between text-gray-900">
                  <span className="text-sm sm:text-base">Delivery Charge ({formData.deliveryLocation === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka'})</span>
                  <span>৳{deliveryCost}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between items-center text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>৳{totalPrice}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Cash on Delivery</p>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User size={24} />
                Delivery Information / ডেলিভারি তথ্য
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name / পুরো নাম *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name / আপনার পুরো নাম লিখুন"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number / ফোন নম্বর *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="01XXXXXXXXX"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email / ইমেইল (Optional / ঐচ্ছিক)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Full Address */}
                <div>
                  <label htmlFor="fullAddress" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Address / সম্পূর্ণ ঠিকানা *
                  </label>
                  <textarea
                    id="fullAddress"
                    name="fullAddress"
                    required
                    value={formData.fullAddress}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Enter your complete address with area, city, district / আপনার সম্পূর্ণ ঠিকানা লিখুন"
                  />
                </div>

                {/* Delivery Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Delivery Location / ডেলিভারি এলাকা *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.deliveryLocation === 'inside'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        type="radio"
                        name="deliveryLocation"
                        value="inside"
                        checked={formData.deliveryLocation === 'inside'}
                        onChange={handleDeliveryLocationChange}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Inside Dhaka / ঢাকার ভিতরে</div>
                        <div className="text-sm text-gray-600">৳{insideDhakaDelivery}</div>
                      </div>
                      {formData.deliveryLocation === 'inside' && (
                        <div className="ml-2 text-blue-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </label>

                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.deliveryLocation === 'outside'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        type="radio"
                        name="deliveryLocation"
                        value="outside"
                        checked={formData.deliveryLocation === 'outside'}
                        onChange={handleDeliveryLocationChange}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Outside Dhaka / ঢাকার বাইরে</div>
                        <div className="text-sm text-gray-600">৳{outsideDhakaDelivery}</div>
                      </div>
                      {formData.deliveryLocation === 'outside' && (
                        <div className="ml-2 text-blue-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </label>
                  </div>
                </div>


                {/* Payment Method Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-blue-900 font-medium mb-2">
                    <CreditCard size={20} />
                    Payment Method / পেমেন্ট পদ্ধতি
                  </div>
                  <p className="text-blue-800 text-sm">
                    We accept Cash on Delivery only. You can pay when the product is delivered to your address.
                    <br />
                    শুধুমাত্র ক্যাশ অন ডেলিভারি গ্রহণ করা হয়। পণ্য পৌঁছানোর সময় পেমেন্ট করতে পারবেন।
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isFormValid && !isSubmitting
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:scale-[1.02] hover:shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Processing Order...
                    </>
                  ) : (
                    <>
                      <MapPin size={20} />
                      Place Order / অর্ডার করুন - ৳{totalPrice}
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By placing this order, you agree to our terms and conditions. We will contact you within 24 hours to confirm delivery.
                  <br />
                  এই অর্ডার দিয়ে আপনি আমাদের শর্তাবলী মেনে নিচ্ছেন। ডেলিভারি নিশ্চিত করতে ২৪ ঘন্টার মধ্যে যোগাযোগ করব।
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
