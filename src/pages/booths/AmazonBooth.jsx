import React from 'react';

export default function AmazonBooth() {
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="video-hero">
        <video autoPlay muted loop src="/assets/videos/amazon-bg.mp4" />
      </div>
      <h1 className="title-xl mb-6">Amazon Booth</h1>
      <div className="card">
        <p className="muted mb-4">Welcome to Amazon's booth at the Career Fair!</p>
      </div>
    </div>
  );
}
