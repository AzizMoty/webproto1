import * as Sentry from '@sentry/react';

export const reportError = (error: Error, context: Record<string, any> = {}) => {
  Sentry.withScope((scope) => {
    // Add additional context
    Object.entries(context).forEach(([key, value]) => {
      scope.setExtra(key, value);
    });

    // Set error level based on context
    scope.setLevel(context.level || 'error');

    // Add user context if available
    if (context.user) {
      scope.setUser({
        id: context.user.id,
        username: context.user.username,
      });
    }

    Sentry.captureException(error);
  });
};

export const logMessage = (message: string, level: Sentry.SeverityLevel = 'info') => {
  Sentry.addBreadcrumb({
    category: 'app',
    message,
    level,
  });
};