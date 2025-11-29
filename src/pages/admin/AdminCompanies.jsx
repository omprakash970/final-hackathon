import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

export default function AdminCompanies() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Manage Companies</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Companies management page</p>
      </div>
    </AdminLayout>
  );
}
