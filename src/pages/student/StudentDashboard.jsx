import React from 'react';
import StudentLayout from '../../layouts/StudentLayout';

export default function StudentDashboard() {
  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
          <p className="text-gray-600">View your scheduled company visits</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Your Resume</h3>
          <p className="text-gray-600">Update your resume information</p>
        </div>
      </div>
    </StudentLayout>
  );
}
