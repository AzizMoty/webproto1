import * as Sentry from '@sentry/react';
import { reportError } from './errorReporting';

export const sendTestError = async () => {
  // Add a breadcrumb for test tracking
  Sentry.addBreadcrumb({
    category: 'test',
    message: 'Initiating Sentry test error',
    level: 'info'
  });

  try {
    // Create a controlled test error
    throw new Error('Sentry Test Error: Verification of error monitoring');
  } catch (error) {
    if (error instanceof Error) {
      // Report the error with detailed context
      reportError(error, {
        level: 'info',
        component: 'SentryTest',
        action: 'test_error',
        timestamp: new Date().toISOString()
      });

      // Add breadcrumb for successful capture
      Sentry.addBreadcrumb({
        category: 'test',
        message: 'Test error successfully captured',
        level: 'info'
      });

      return true;
    }
    return false;
  }
};