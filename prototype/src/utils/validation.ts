export const validateProduct = (product: any): boolean => {
  return !!(
    product &&
    typeof product.id === 'string' &&
    typeof product.title === 'string' &&
    typeof product.price === 'number' &&
    typeof product.originalPrice === 'number'
  );
};

export const validateRating = (rating: number): boolean => {
  return rating >= 0 && rating <= 5;