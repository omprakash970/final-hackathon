import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import Button from '../components/Button';

export default function Register() {
  return (
    <AuthLayout>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Register</h1>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
          />
          <Button variant="primary" className="w-full">Register</Button>
        </form>
      </div>
    </AuthLayout>
  );
}
