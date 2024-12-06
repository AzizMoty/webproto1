import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types';
import { reportError } from '../utils/errorReporting';

interface WishlistContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggleItem: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
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
          component: 'WishlistProvider',
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

  return (
    <WishlistContext.Provider value={{
      items,
      addItem,
      removeItem,
      toggleItem,
      isInWishlist: (productId: string) => items.some(item => item.id === productId)
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}