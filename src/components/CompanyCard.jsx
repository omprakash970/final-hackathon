import React from 'react';

export default function CompanyCard({ name, logo }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <img src={logo} alt={name} className="w-20 h-20" />
      </div>
      <h3 className="text-center text-lg font-semibold">{name}</h3>
    </div>
  );
}
