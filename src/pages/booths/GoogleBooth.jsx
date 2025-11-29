import React from 'react';

export default function GoogleBooth() {
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="video-hero">
        <video autoPlay muted loop src="/public/assets/videos/videoplayback.mp4" />
      </div>
      <h1 className="title-xl mb-6">Google Booth</h1>
      <div className="card">
        <p className="muted mb-4">Welcome to Google's booth at the Career Fair!</p>
      </div>
    </div>
  );
}
