import React from 'react';

export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">401</h1>
        <p className="text-xl text-gray-600">Unauthorized access</p>
      </div>
    </div>
  );
}
