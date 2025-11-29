import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
