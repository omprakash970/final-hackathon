import React from 'react';

export default function StudentResume() {
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-6">My Resume</h1>
      <div className="card container-narrow">
        <div className="mb-4">
          <label className="label">Full Name</label>
          <input type="text" className="form-field" />
        </div>
        <div className="mb-4">
          <label className="label">Email</label>
          <input type="email" className="form-field" />
        </div>
        <div className="mb-4">
          <label className="label">Skills</label>
          <textarea className="form-field" style={{ height: 128 }}></textarea>
        </div>
      </div>
    </div>
  );
}
