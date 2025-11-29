import { useRef, useState } from 'react';

export default function StudentDashboard() {
  const fileInputRef = useRef(null);
  const initialResume = (() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('cf-resume') : null;
      return raw ? JSON.parse(raw) : { name: '', url: '' };
    } catch {
      return { name: '', url: '' };
    }
  })();
  const [resumeName, setResumeName] = useState(initialResume.name);
  const [resumeUrl, setResumeUrl] = useState(initialResume.url);

  const onPickResume = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== 'application/pdf') {
      alert('Please select a PDF file.');
      return;
    }
    const url = URL.createObjectURL(file);
    setResumeName(file.name);
    setResumeUrl(url);
    try { localStorage.setItem('cf-resume', JSON.stringify({ name: file.name, url })); }
    catch { /* ignore storage errors */ }
  };

  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-8">Student Dashboard</h1>

      <div className="grid-3 mb-8">
        <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
          <h3 className="muted mb-2">Companies</h3>
          <p className="title-lg" style={{ margin: 0 }}>12</p>
        </div>
        <div className="card" style={{ borderLeft: '4px solid var(--green)' }}>
          <h3 className="muted mb-2">Booths Visited</h3>
          <p className="title-lg" style={{ margin: 0 }}>5</p>
        </div>
        <div className="card" style={{ borderLeft: '4px solid #8b5cf6' }}>
          <h3 className="muted mb-2">Scheduled</h3>
          <p className="title-lg" style={{ margin: 0 }}>3</p>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 className="title-lg">Upcoming Events</h3>
          <div className="section-muted row space-between mb-3 "style={{color:'blue'}} >
            <span>Google Tech Talk</span>
            <span className="muted" style={{ fontSize: 12 }}>2:00 PM</span>
          </div>
           <div className="section-muted row space-between mb-3 "style={{color:'blue'}} >
            <span>Microsoft Azure Virtual Training session</span>
            <span className="muted" style={{ fontSize: 12 }}>2:00 PM</span>
          </div>
           <div className="section-muted row space-between mb-3 "style={{color:'blue'}} >
            <span>Apple Student Fest </span>
            <span className="muted" style={{ fontSize: 12 }}>2:00 PM</span>
          </div>
           <div className="section-muted row space-between mb-3 "style={{color:'blue'}} >
            <span>Google STEP trails </span>
            <span className="muted" style={{ fontSize: 12 }}>2:00 PM</span>
          </div>
           <div className="section-muted row space-between mb-3 "style={{color:'blue'}} >
            <span>Salesforce Associate training</span>
            <span className="muted" style={{ fontSize: 12 }}>2:00 PM</span>
          </div>
           <div className="section-muted row space-between mb-3 "style={{color:'blue'}} >
            <span>Mock Interview(Apple)</span>
            <span className="muted" style={{ fontSize: 12 }}>2:00 PM</span>
          </div>

          <div className="section-muted row space-between " style={{color:'blue'}}>
            <span>Amazon Interview</span>
            <span className="muted" style={{ fontSize: 12 }}>4:00 PM</span>
          </div>
        </div>
        <div className="card">
          <h3 className="title-lg">Your Resume</h3>
          <p className="muted mb-3">Keep your resume updated for better opportunities</p>
          {resumeName ? (
            <div className="section-muted mb-3">
              <div className="row space-between">
                <span className="muted">{resumeName}</span>
                {resumeUrl && (
                  <a href={resumeUrl} target="_blank" rel="noreferrer" className="link">Preview</a>
                )}
              </div>
            </div>
          ) : null}
          <button className="btn btn-primary" onClick={onPickResume}>Update Resume</button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            style={{ display: 'none' }}
            onChange={onFileChange}
          />
        </div>
      </div>
    </div>
  );
}