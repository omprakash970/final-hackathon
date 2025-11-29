import React from 'react';
import StudentLayout from '../../layouts/StudentLayout';

export default function StudentResume() {
  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Skills</label>
          <textarea className="w-full px-4 py-2 border rounded-lg h-32"></textarea>
        </div>
      </div>
    </StudentLayout>
  );
}
