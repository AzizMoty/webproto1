import { useState } from 'react';
import { Product } from '../types';
import { reportError } from '../utils/errorReporting';

export const useWishlist = () => {
  const [items, setItems] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    try {
      setItems(currentItems => {
        if (currentItems.some(item => item.id === product.id)) {
          return currentItems;
        }
        return [...currentItems, product];
      });
    } catch (error) {
      if (error instanceof Error) {
        reportError(error, {
          level: 'error',
          component: 'useWishlist',
          function: 'addItem',
          productId: product.id
        });
      }
      throw error;
    }
  };

  const removeItem = (productId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
  };

  const toggleItem = (product: Product) => {
    if (items.some(item => item.id === product.id)) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return {
    items,
    addItem,
    removeItem,
    toggleItem,
    isInWishlist: (productId: string) => items.some(item => item.id === productId)
  };
};