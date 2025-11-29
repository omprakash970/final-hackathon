import React from 'react';
import Button from '../components/Button';

export default function Register() {
  return (
    <div className="login-bg">
      <div className="glass">
        <h1 className="title-xl" style={{ textAlign: 'center' }}>Register</h1>
        <form>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="form-field"
            />
          </div>
          <div className="mb-3">
            <input 
              type="email" 
              placeholder="Email" 
              className="form-field"
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="Password" 
              className="form-field"
            />
          </div>
          <Button variant="primary" className="w-full">Register</Button>
        </form>
      </div>
    </div>
  );
}
