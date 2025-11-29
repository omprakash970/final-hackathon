import React from 'react';
import StudentLayout from '../../layouts/StudentLayout';

export default function TCSBooth() {
  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">TCS Booth</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">Welcome to TCS' booth at the Career Fair!</p>
      </div>
    </StudentLayout>
  );
}
