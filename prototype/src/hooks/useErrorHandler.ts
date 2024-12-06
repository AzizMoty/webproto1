import { useCallback } from 'react';
import { reportError } from '../utils/errorReporting';

export const useErrorHandler = () => {
  return useCallback(async (operation: () => Promise<void>) => {
    try {
      await operation();
    } catch (error) {
      if (error instanceof Error) {
        reportError(error, {
          level: 'error',
          timestamp: new Date().toISOString(),
        });
      }
      throw error;
    }
  }, []);
};