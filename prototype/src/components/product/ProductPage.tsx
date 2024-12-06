import React from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductPurchase from './ProductPurchase';
import ProductDetails from './ProductDetails';
import ProductReviews from './ProductReviews';
import ProductRecommendations from './ProductRecommendations';
import PriceHistory from './PriceHistory';
import RetailerComparison from './RetailerComparison';

const SAMPLE_RETAILERS = [
  {
    name: 'Amazon',
    price: 299.99,
    shipping: 0,
    inStock: true,
    url: '#'
  },
  {
    name: 'Best Buy',
    price: 309.99,
    shipping: 0,
    inStock: true,
    url: '#'
  },
  {
    name: 'Walmart',
    price: 289.99,
    shipping: 5.99,
    inStock: true,
    url: '#'
  }
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Product Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery />
          </div>

          {/* Right Column - Product Info & Purchase */}
          <div className="lg:col-span-5 space-y-6">
            <ProductInfo />
            <ProductPurchase />
            
            {/* Price Comparison */}
            <div className="border rounded-lg p-6">
              <RetailerComparison retailers={SAMPLE_RETAILERS} />
            </div>
            
            {/* Price History */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Price History</h3>
              <PriceHistory productId="1" />
            </div>
          </div>
        </div>

        {/* Product Details & Specifications */}
        <div className="mt-16">
          <ProductDetails />
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <ProductReviews />
        </div>

        {/* Recommendations */}
        <div className="mt-16">
          <ProductRecommendations />
        </div>
      </div>
    </div>
  );
}