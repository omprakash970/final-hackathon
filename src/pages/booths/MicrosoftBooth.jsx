import React from 'react';
import microsoftVideo from '../../assets/videos/microsoftvid.mp4';

export default function MicrosoftBooth() {
  const jobs = [
    { title: 'Software Engineer', location: 'Redmond, WA', type: 'Full-time', experience: '0-2 yrs' },
    { title: 'Azure Cloud Engineer', location: 'Redmond, WA', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Data Scientist', location: 'Remote (US)', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Security Engineer', location: 'Reston, VA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Product Manager', location: 'Redmond, WA', type: 'Full-time', experience: '3-6 yrs' },
    { title: 'DevOps Engineer', location: 'Vancouver, CA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Frontend Engineer', location: 'Redmond, WA', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Backend Engineer', location: 'Redmond, WA', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'AI Research Intern', location: 'Redmond, WA', type: 'Internship', experience: '2026 Grad' },
    { title: 'UX Designer', location: 'San Francisco, CA', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'QA Engineer', location: 'Remote (US)', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Site Reliability Engineer', location: 'Redmond, WA', type: 'Full-time', experience: '2-5 yrs' }
  ];
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="video-hero">
        <video src={microsoftVideo} autoPlay muted loop playsInline controls style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}>Your browser does not support the video tag.</video>
      </div>
      <h1 className="title-xl mb-6">Microsoft Booth</h1>
      <div className="card">
        <p className="muted mb-4">Microsoft builds platforms and tools that empower individuals and organizations worldwide. From Azure and GitHub to Teams and Xbox, Microsoft shapes the future of productivity and innovation.</p>
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