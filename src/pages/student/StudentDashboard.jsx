export default function StudentDashboard() {
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
          <div className="section-muted row space-between mb-3">
            <span>Google Tech Talk</span>
            <span className="muted" style={{ fontSize: 12 }}>2:00 PM</span>
          </div>
          <div className="section-muted row space-between">
            <span>Amazon Interview</span>
            <span className="muted" style={{ fontSize: 12 }}>4:00 PM</span>
          </div>
        </div>
        <div className="card">
          <h3 className="title-lg">Your Resume</h3>
          <p className="muted mb-3">Keep your resume updated for better opportunities</p>
          <button className="btn btn-primary">Update Resume</button>
        </div>
      </div>
    </div>
  );
}