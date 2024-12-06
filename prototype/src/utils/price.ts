import { reportError } from './errorReporting';

export const calculateDiscount = (price: number, originalPrice: number): number => {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

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
        component: 'PriceFormatter',
        function: 'formatPrice',
        price
      });
    }
    return `$${price.toFixed(2)}`;
  }
};