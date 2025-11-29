import React from 'react';
import StudentLayout from '../../layouts/StudentLayout';

export default function InfosysBooth() {
  return (
    <StudentLayout>
      <div className="relative w-full h-96 rounded-lg overflow-hidden mb-6 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover"
          src="/assets/videos/infosys-bg.mp4"
        />
      </div>
      <h1 className="text-3xl font-bold mb-6">Infosys Booth</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">Welcome to Infosys' booth at the Career Fair!</p>
      </div>
    </StudentLayout>
  );
}
