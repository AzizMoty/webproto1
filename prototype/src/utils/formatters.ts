import { CURRENCY, DEFAULT_LOCALE } from './constants';
import { reportError } from './errorReporting';

export const formatPrice = (price: number): string => {
  try {
    return new Intl.NumberFormat(DEFAULT_LOCALE, {
      style: 'currency',
      currency: CURRENCY
    }).format(price);
  } catch (error) {
    if (error instanceof Error) {
      reportError(error, {
        level: 'warning',
        component: 'formatters',
        function: 'formatPrice',
        price
      });
    }
    return `$${price.toFixed(2)}`;
  }
};

export const formatDiscount = (originalPrice: number, currentPrice: number): number => {
  if (originalPrice <= currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};