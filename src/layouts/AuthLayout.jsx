import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="login-bg">
      <div className="glass">
        {children}
      </div>
    </div>
  );
}
