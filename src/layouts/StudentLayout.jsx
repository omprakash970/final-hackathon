import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function StudentLayout({ children }) {
  return (
    <div className="page">
      <Navbar />
      <main className="page-main">
        <div className="container" style={{ padding: '32px 16px' }}>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
