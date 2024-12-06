import React from 'react';
import * as Sentry from '@sentry/react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const FallbackComponent = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          We've been notified and are working to fix the issue.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Refresh Page
        </button>
      </div>
    </div>
  </div>
);

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => (
  <Sentry.ErrorBoundary
    fallback={FallbackComponent}
    beforeCapture={(scope) => {
      scope.setTag("error_location", "react_error_boundary");
      scope.setLevel("error");
    }}
  >
    {children}
  </Sentry.ErrorBoundary>
);