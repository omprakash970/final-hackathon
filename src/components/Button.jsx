import React from 'react';

export default function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  return (
    <button 
      className={`px-4 py-2 rounded-lg font-semibold transition-colors ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
