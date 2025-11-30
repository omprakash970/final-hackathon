import React from 'react';
import netflixVideo from '../../assets/videos/netflixvid.mp4';

export default function NetflixBooth() {
  const jobs = [
    { title: 'Software Engineer (Playback)', location: 'Los Gatos, CA', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Machine Learning Engineer', location: 'Los Gatos, CA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Data Scientist', location: 'Remote (US)', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Content Analytics Engineer', location: 'Los Gatos, CA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Security Engineer', location: 'Los Gatos, CA', type: 'Full-time', experience: '3-6 yrs' },
    { title: 'DevOps Engineer', location: 'Los Gatos, CA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'UI Engineer', location: 'Los Gatos, CA', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Streaming Infrastructure Engineer', location: 'Los Gatos, CA', type: 'Full-time', experience: '3-6 yrs' },
    { title: 'Data Platform Engineer', location: 'Los Gatos, CA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Product Manager', location: 'Los Gatos, CA', type: 'Full-time', experience: '3-6 yrs' },
    { title: 'Software Engineer Intern', location: 'Los Gatos, CA', type: 'Internship', experience: '2026 Grad' },
    { title: 'Analytics Engineer', location: 'Remote (US)', type: 'Full-time', experience: '2-4 yrs' }
  ];
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="video-hero">
        <video src={netflixVideo} autoPlay muted loop playsInline controls style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}>Your browser does not support the video tag.</video>
      </div>
      <h1 className="title-xl mb-6">Netflix Booth</h1>
      <div className="card">
        <p className="muted mb-4">Netflix is the world’s leading entertainment service, innovating streaming technologies and personalization for a global audience. Teams focus on scale, reliability, and storytelling impact.</p>
      </div>
      <div className="card mt-4">
        <h2 className="title-md mb-3">Job Offers</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {jobs.map((job, idx) => (
            <li key={idx} style={{ padding: '12px 0', borderBottom: idx !== jobs.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className="text-strong">{job.title}</div>
                  <div className="muted small">{job.location} • {job.type} • {job.experience}</div>
                </div>
                <button className="btn btn-secondary">Apply</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}