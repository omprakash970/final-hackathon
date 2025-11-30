import React from 'react';
import amazonVideo from '../../assets/videos/amazonvid.mp4';

export default function AmazonBooth() {
  const jobs = [
    { title: 'SDE I', location: 'Seattle, WA', type: 'Full-time', experience: '0-2 yrs' },
    { title: 'SDE II', location: 'Seattle, WA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Frontend Engineer', location: 'Austin, TX', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Backend Engineer', location: 'Arlington, VA', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Data Engineer', location: 'New York, NY', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Cloud Support Engineer', location: 'Dublin, IE', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Solutions Architect', location: 'London, UK', type: 'Full-time', experience: '3-6 yrs' },
    { title: 'DevOps Engineer', location: 'Vancouver, CA', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'QA Engineer', location: 'Remote (US)', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Technical Program Manager', location: 'Seattle, WA', type: 'Full-time', experience: '4-7 yrs' }
  ];
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="video-hero">
        <video src={amazonVideo} autoPlay muted loop playsInline controls style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}>Your browser does not support the video tag.</video>
      </div>
      <h1 className="title-xl mb-6">Amazon Booth</h1>
      <div className="card">
        <p className="muted mb-4">Amazon is the global giant that straight-up redefined online shopping and digital convenience. What started as a small online bookstore is now a massive ecosystem powering e-commerce, cloud computing, entertainment, and smart home tech. With Amazon Prime, AWS, and its ridiculously efficient logistics network, the company sets the benchmark for speed, scale, and customer obsession. It’s the brand that turned “one-day delivery” from a dream into an expectation. Amazon isn’t just a marketplace — it’s a tech-powered lifestyle.</p>
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
