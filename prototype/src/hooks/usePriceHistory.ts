import { useState, useEffect } from 'react';
import { reportError } from '../utils/errorReporting';

interface PricePoint {
  date: string;
  price: number;
  retailer: string;
}

export const usePriceHistory = (productId: string) => {
  const [priceHistory, setPriceHistory] = useState<PricePoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPriceHistory = async () => {
      try {
        setLoading(true);
        // Simulated API call - replace with actual API call
        const response = await new Promise<PricePoint[]>((resolve) => {
          setTimeout(() => {
            resolve([
              { date: '2024-01-01', price: 399.99, retailer: 'Amazon' },
              { date: '2024-01-15', price: 349.99, retailer: 'Amazon' },
              { date: '2024-02-01', price: 299.99, retailer: 'Amazon' },
              { date: '2024-02-15', price: 299.99, retailer: 'BestBuy' },
            ]);
          }, 800);
        });
        setPriceHistory(response);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to fetch price history');
        setError(error);
        reportError(error, {
          level: 'error',
          component: 'usePriceHistory',
          productId
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPriceHistory();
  }, [productId]);

  return { priceHistory, loading, error };
};