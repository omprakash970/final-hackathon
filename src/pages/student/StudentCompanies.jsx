import React from 'react';
import StudentLayout from '../../layouts/StudentLayout';
import CompanyCard from '../../components/CompanyCard';

export default function StudentCompanies() {
  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">Companies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CompanyCard name="Google" logo="/assets/logos/google.png" />
        <CompanyCard name="Amazon" logo="/assets/logos/amazon.png" />
        <CompanyCard name="Infosys" logo="/assets/logos/infosys.png" />
      </div>
    </StudentLayout>
  );
}
