import React from 'react';
import infosysVideo from '../../assets/videos/infosysvid.mp4';

export default function InfosysBooth() {
  const jobs = [
    { title: 'Systems Engineer', location: 'Bengaluru, IN', type: 'Full-time', experience: '0-2 yrs' },
    { title: 'Associate Consultant', location: 'Hyderabad, IN', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'Java Developer', location: 'Pune, IN', type: 'Full-time', experience: '1-3 yrs' },
    { title: '.NET Developer', location: 'Chennai, IN', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Test Engineer', location: 'Mysuru, IN', type: 'Full-time', experience: '0-2 yrs' },
    { title: 'Data Analyst', location: 'Hyderabad, IN', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'Cloud Administrator', location: 'Bengaluru, IN', type: 'Full-time', experience: '2-4 yrs' },
    { title: 'UI Developer', location: 'Pune, IN', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'DevOps Engineer', location: 'Remote (IN)', type: 'Full-time', experience: '1-3 yrs' },
    { title: 'SAP Consultant', location: 'Mumbai, IN', type: 'Full-time', experience: '3-6 yrs' }
  ];
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="video-hero">
        <video src={infosysVideo} autoPlay muted loop playsInline controls style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}>Your browser does not support the video tag.</video>
      </div>
      <h1 className="title-xl mb-6">Infosys Booth</h1>
      <div className="card">
        <p className="muted mb-4">Infosys is a global leader in next-generation digital services and consulting. With a rich heritage of over four decades, Infosys empowers clients to navigate their digital transformation journeys with innovative solutions and cutting-edge technologies. From AI and automation to cloud and cybersecurity, Infosys is at the forefront of driving business agility and growth. The company’s commitment to sustainability, diversity, and ethical practices makes it a trusted partner for organizations worldwide. Infosys isn’t just a tech company — it’s a catalyst for positive change in the digital era.</p>
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
