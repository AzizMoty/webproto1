export const CURRENCY = 'USD';
export const DEFAULT_LOCALE = 'en-US';

export const SORT_OPTIONS = {
  PRICE_LOW_TO_HIGH: 'price_asc',
  PRICE_HIGH_TO_LOW: 'price_desc',
  DISCOUNT_HIGH_TO_LOW: 'discount_desc',
  RATING_HIGH_TO_LOW: 'rating_desc',
} as const;

export const CATEGORIES = [
  'Electronics',
  'Home',
  'Fashion',
  'Books',
  'Sports',
] as const;

export const DEAL_TYPES = [
  'Daily Deals',
  'Lightning Deals',
  'Clearance',
] as const;