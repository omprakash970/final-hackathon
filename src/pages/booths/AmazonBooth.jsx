import React from 'react';
import amazonVideo from '../../assets/videos/amazonvid.mp4';

export default function AmazonBooth() {
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="video-hero">
        <video
          src={amazonVideo}
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
      <h1 className="title-xl mb-6">Amazon Booth</h1>
      <div className="card">
        <p className="muted mb-4">Welcome to Amazon's booth at the Career Fair!</p>
      </div>
    </div>
  );
}
