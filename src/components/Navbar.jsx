import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">Logo</div>
          <div className="flex items-center">Menu</div>
        </div>
      </div>
    </nav>
  );
}
