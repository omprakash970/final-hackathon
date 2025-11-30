import React from 'react';

export default function TCSBooth() {
  const jobs = [
    { title: 'Assistant System Engineer', location: 'Mumbai, IN', type: 'Full-time', experience: '0-2 yrs' },
    { title: 'Full Stack Developer', location: 'Chennai, IN', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'QA Analyst', location: 'Kolkata, IN', type: 'Full-time', experience: '0-2 yrs' },
    { title: 'Data Engineer', location: 'Hyderabad, IN', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Network Engineer', location: 'Pune, IN', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Support Engineer', location: 'Noida, IN', type: 'Full-time', experience: '0-2 yrs' },
    { title: 'Business Analyst', location: 'Bengaluru, IN', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'Salesforce Developer', location: 'Ahmedabad, IN', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'SAP ABAP Consultant', location: 'Gurugram, IN', type: 'Full-time', experience: '2-5 yrs' },
    { title: 'DevOps Engineer', location: 'Remote (IN)', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'ETL Developer', location: 'Mumbai, IN', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Cloud Engineer', location: 'Hyderabad, IN', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Automation Tester', location: 'Chennai, IN', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Data Visualization Analyst', location: 'Pune, IN', type: 'Full-time', experience: '1-3 yrs' }
  ];
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-6">TCS Booth</h1>
      <div className="card">
        <p className="muted mb-4">Welcome to TCS' booth at the Career Fair!</p>
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
