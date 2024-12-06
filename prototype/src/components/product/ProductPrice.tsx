import React from 'react';
import { reportError } from '../../utils/errorReporting';

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
}

export const formatPrice = (price: number): string => {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  } catch (error) {
    if (error instanceof Error) {
      reportError(error, {
        level: 'warning',
        component: 'ProductPrice',
        function: 'formatPrice',
        price
      });
    }
    return `$${price.toFixed(2)}`;
  }
};

export default function ProductPrice({ price, originalPrice }: ProductPriceProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="flex items-baseline mt-2">
      <span className="text-xl font-bold text-gray-800">
        {formatPrice(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <span className="ml-2 text-sm text-gray-500 line-through">
          {formatPrice(originalPrice)}
        </span>
      )}
      {discount > 0 && (
        <span className="ml-2 text-sm text-green-600">
          Save {discount}%
        </span>
      )}
    </div>
  );
}