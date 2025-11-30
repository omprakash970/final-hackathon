import React from 'react';

export default function MetaBooth() {
  const jobs = [
    { title: 'Software Engineer', location: 'Menlo Park, CA', type: 'Full-time', experience: '0-2 yrs' },
    { title: 'AR/VR Engineer', location: 'Menlo Park, CA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Machine Learning Engineer', location: 'Remote (US)', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Data Engineer', location: 'New York, NY', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Security Engineer', location: 'Seattle, WA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Product Designer', location: 'Menlo Park, CA', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Backend Engineer', location: 'Seattle, WA', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Frontend Engineer', location: 'Menlo Park, CA', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Privacy Engineer', location: 'Menlo Park, CA', type: 'Full-time', experience: '3-6 yrs' },
    { title: 'Data Scientist', location: 'London, UK', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Research Scientist Intern', location: 'Menlo Park, CA', type: 'Internship', experience: '2026 Grad' },
    { title: 'DevOps Engineer', location: 'Remote (US)', type: 'Full-time', experience: '2-5 yrs' }
  ];
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-6">Meta Booth</h1>
      <div className="card">
        <p className="muted mb-4">Meta builds technologies that help people connect, find communities, and grow businesses. From Facebook and Instagram to WhatsApp and Quest, Meta is redefining social presence and immersive worlds.</p>
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