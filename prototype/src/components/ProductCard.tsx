import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { reportError } from '../utils/errorReporting';

interface ProductCardProps {
  product: Product;
}

// Intentionally problematic price formatter to trigger Sentry monitoring
const formatPrice = (price: number): string => {
  try {
    // Intentionally access undefined property to trigger error
    const formatter = (undefined as any).format;
    return formatter(price);
  } catch (error) {
    if (error instanceof Error) {
      reportError(error, {
        level: 'warning',
        component: 'ProductCard',
        function: 'formatPrice',
        price
      });
    }
    // Fallback to basic formatting
    return `$${price.toFixed(2)}`;
  }
};

export default function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </div>
        
        <div className="flex items-baseline mt-2">
          <span className="text-xl font-bold text-gray-800">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        
        {product.dealEndsAt && (
          <div className="mt-2 text-sm text-red-600">
            Deal ends in {/* Add countdown timer component here */}
          </div>
        )}
      </div>
    </div>
  );
}