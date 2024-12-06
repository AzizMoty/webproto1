import React from 'react';
import { usePriceHistory } from '../../hooks/usePriceHistory';
import { formatPrice } from '../../utils/price';

interface PriceHistoryProps {
  productId: string;
}

export default function PriceHistory({ productId }: PriceHistoryProps) {
  const { priceHistory, loading, error } = usePriceHistory(productId);

  if (loading) {
    return <div className="animate-pulse h-48 bg-gray-100 rounded-lg"></div>;
  }

  if (error) {
    return (
      <div className="text-red-600 text-sm">
        Failed to load price history. Please try again later.
      </div>
    );
  }

  const lowestPrice = Math.min(...priceHistory.map(point => point.price));
  const highestPrice = Math.max(...priceHistory.map(point => point.price));

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-600">
        <div>
          Lowest: <span className="font-semibold">{formatPrice(lowestPrice)}</span>
        </div>
        <div>
          Highest: <span className="font-semibold">{formatPrice(highestPrice)}</span>
        </div>
      </div>

      <div className="relative h-48">
        {/* Price history graph would go here */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Price history visualization coming soon
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900">Price Changes</h4>
        <div className="space-y-1">
          {priceHistory.map((point, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-gray-600">{point.date}</span>
              <span className="font-medium">{formatPrice(point.price)}</span>
              <span className="text-gray-500">{point.retailer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}