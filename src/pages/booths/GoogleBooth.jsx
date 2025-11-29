import React from 'react';
import googleVideo from '../../assets/videos/videoplayback.mp4';

export default function GoogleBooth() {
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="video-hero">
        <video
          src={googleVideo}
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
      <h1 className="title-xl mb-6">Google Booth</h1>
      <div className="card">
        <p className="muted mb-4">Welcome to Google's booth at the Career Fair!</p>
        
      </div>
    </div>
  );
}
