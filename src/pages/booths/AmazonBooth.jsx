import React from 'react';
import StudentLayout from '../../layouts/StudentLayout';

export default function AmazonBooth() {
  return (
    <StudentLayout>
      <div className="relative w-full h-96 rounded-lg overflow-hidden mb-6 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover"
          src="/assets/videos/amazon-bg.mp4"
        />
      </div>
      <h1 className="text-3xl font-bold mb-6">Amazon Booth</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">Welcome to Amazon's booth at the Career Fair!</p>
      </div>
    </StudentLayout>
  );
}
