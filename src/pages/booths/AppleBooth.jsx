import React from 'react';

export default function AppleBooth() {
  const jobs = [
    { title: 'iOS Engineer', location: 'Cupertino, CA', type: 'Full-time', experience: '0-2 yrs' },
    { title: 'macOS Engineer', location: 'Cupertino, CA', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Hardware Engineer', location: 'Cupertino, CA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Graphics Engineer', location: 'Cupertino, CA', type: 'Full-time', experience: '3-6 yrs' },
    { title: 'ML Engineer - Vision', location: 'Cupertino, CA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Firmware Engineer', location: 'Cupertino, CA', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Product Designer', location: 'Cupertino, CA', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Data Engineer', location: 'Austin, TX', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Supply Chain Analyst', location: 'Cupertino, CA', type: 'Full-time', experience: '0-2 yrs' },
    { title: 'SRE', location: 'Cupertino, CA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Software QA Engineer', location: 'Remote (US)', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Security Engineer', location: 'Cupertino, CA', type: 'Full-time', experience: '3-6 yrs' }
  ];
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-6">Apple Booth</h1>
      <div className="card">
        <p className="muted mb-4">Apple designs products and services that enrich people’s daily lives. From the iPhone and Mac to iCloud and Vision Pro, Apple focuses on seamless experiences blending hardware, software, and services.</p>
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