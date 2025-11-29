import React from 'react';

export default function AdminCreateBooth() {
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-6">Create Booth</h1>
      <form className="card container-narrow">
        <div className="mb-4">
          <label className="label">Booth Name</label>
          <input type="text" className="form-field" />
        </div>
        <div className="mb-4">
          <label className="label">Company</label>
          <select className="form-field">
            <option>Select a company</option>
          </select>
        </div>
        <button className="btn btn-blue">Create Booth</button>
      </form>
    </div>
  );
}
