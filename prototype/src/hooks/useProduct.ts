import { useState, useEffect } from 'react';
import { Product } from '../types';
import { reportError } from '../utils/errorReporting';

export const useProduct = (productId: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // Simulated API call - replace with actual API call
        const response = await new Promise<Product>((resolve) => {
          setTimeout(() => {
            resolve({
              id: '1',
              title: 'Premium Wireless Noise-Cancelling Headphones',
              description: 'High-quality wireless headphones with active noise cancellation',
              price: 299.99,
              originalPrice: 399.99,
              category: 'Electronics',
              imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
              rating: 4.5,
              reviewCount: 1234
            });
          }, 1000);
        });
        setProduct(response);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to fetch product');
        setError(error);
        reportError(error, {
          level: 'error',
          component: 'useProduct',
          productId
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};