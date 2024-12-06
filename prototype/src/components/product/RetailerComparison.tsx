import React from 'react';
import { ExternalLink } from 'lucide-react';
import { formatPrice } from '../../utils/formatters';

interface Retailer {
  name: string;
  price: number;
  shipping: number;
  inStock: boolean;
  url: string;
}

interface RetailerComparisonProps {
  retailers: Retailer[];
}

export default function RetailerComparison({ retailers }: RetailerComparisonProps) {
  const sortedRetailers = [...retailers].sort((a, b) => (a.price + a.shipping) - (b.price + b.shipping));

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Compare Prices</h3>
      
      <div className="space-y-2">
        {sortedRetailers.map((retailer, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <div className="space-y-1">
              <div className="font-medium">{retailer.name}</div>
              <div className="text-sm text-gray-500">
                {retailer.shipping > 0 
                  ? `${formatPrice(retailer.shipping)} shipping`
                  : 'Free shipping'}
              </div>
            </div>

            <div className="text-right">
              <div className="font-bold text-lg">
                {formatPrice(retailer.price + retailer.shipping)}
              </div>
              <div className="text-sm">
                {retailer.inStock ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </div>
            </div>

            <a
              href={retailer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 p-2 text-blue-600 hover:text-blue-700"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}