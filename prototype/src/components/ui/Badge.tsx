import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  primary: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

export default function Badge({ 
  children, 
  variant = 'primary',
  size = 'md'
}: BadgeProps) {
  return (
    <span className={`
      inline-flex items-center font-medium rounded-full
      ${variantStyles[variant]}
      ${sizeStyles[size]}
    `}>
      {children}
    </span>
  );
}