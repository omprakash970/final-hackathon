import React from 'react';

export default function InfosysBooth() {
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="video-hero">
        <video autoPlay muted loop src="/assets/videos/infosys-bg.mp4" />
      </div>
      <h1 className="title-xl mb-6">Infosys Booth</h1>
      <div className="card">
        <p className="muted mb-4">Welcome to Infosys' booth at the Career Fair!</p>
      </div>
    </div>
  );
}
