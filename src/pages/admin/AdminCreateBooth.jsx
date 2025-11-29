import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

export default function AdminCreateBooth() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Create Booth</h1>
      <form className="bg-white rounded-lg shadow p-6 max-w-2xl">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Booth Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Company</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option>Select a company</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Create Booth
        </button>
      </form>
    </AdminLayout>
  );
}
