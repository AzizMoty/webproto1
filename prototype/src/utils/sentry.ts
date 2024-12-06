import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

export const initSentry = () => {
  if (!import.meta.env.PROD) {
    console.log('Sentry disabled in development mode');
    return;
  }

  try {
    Sentry.init({
      dsn: "https://2c141f898560b22f78a29cf31d7b1947@o4508415327469568.ingest.us.sentry.io/4508419335782400",
      integrations: [new BrowserTracing()],
      environment: import.meta.env.MODE,
      release: "dealfinder@1.0.0",
      
      // Performance Monitoring
      tracesSampleRate: 0.2,
      
      // Error Sampling
      sampleRate: 1.0,
      
      beforeSend(event) {
        // Don't send events in development
        if (import.meta.env.DEV) {
          return null;
        }

        // Remove sensitive information
        if (event.user) {
          delete event.user.email;
          delete event.user.ip_address;
        }

        return event;
      },
      
      // Only track errors from our domain
      allowUrls: [
        window.location.origin
      ],
      
      // Disable debug mode in production
      debug: import.meta.env.DEV,
    });

  } catch (error) {
    console.error('Failed to initialize Sentry:', error);
  }
};