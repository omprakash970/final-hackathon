import React from 'react';
import infosysVideo from '../../assets/videos/infosysvid.mp4';

export default function InfosysBooth() {
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="video-hero">
        <video
          src={infosysVideo}
          autoPlay
          muted
          loop
          playsInline
          controls
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="title-xl mb-6">Infosys Booth</h1>
      <div className="card">
        <p className="muted mb-4">Welcome to Infosys' booth at the Career Fair!</p>
      </div>
    </div>
  );
}
