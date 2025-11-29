import { useCompanies } from '../../contexts/CompaniesContext';

export default function AdminDashboard() {
  const { companies } = useCompanies();

  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-6">Admin Dashboard</h1>

      <div className="grid-4 mb-8">
        <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
          <h3 className="muted">Companies</h3>
          <p className="title-lg" style={{ margin: 0 }}>{companies.length}</p>
        </div>
        <div className="card" style={{ borderLeft: '4px solid var(--green)' }}>
          <h3 className="muted">Booths</h3>
          <p className="title-lg" style={{ margin: 0 }}>{companies.reduce((sum,c)=>sum + (c.booths||0),0)}</p>
        </div>
        <div className="card" style={{ borderLeft: '4px solid #8b5cf6' }}>
          <h3 className="muted">Students</h3>
          <p className="title-lg" style={{ margin: 0 }}>256</p>
        </div>
        <div className="card" style={{ borderLeft: '4px solid #f59e0b' }}>
          <h3 className="muted">Registrations</h3>
          <p className="title-lg" style={{ margin: 0 }}>89</p>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 className="title-lg">Recent Activity</h3>
          <div className="section-muted row space-between mb-3">
            <span>New student registered</span>
            <span className="muted" style={{ fontSize: 12 }}>5 min ago</span>
          </div>
          <div className="section-muted row space-between mb-3">
            <span>Google booth updated</span>
            <span className="muted" style={{ fontSize: 12 }}>15 min ago</span>
          </div>
          <div className="section-muted row space-between">
            <span>New company added</span>
            <span className="muted" style={{ fontSize: 12 }}>1 hr ago</span>
          </div>
        </div>
        <div className="card">
          <h3 className="title-lg">Quick Actions</h3>
          <div style={{ display: 'grid', gap: 12 }}>
            <button className="btn btn-green w-full">+ Add New Company</button>
            <button className="btn btn-blue w-full">+ Create Booth</button>
            <button className="btn btn-purple w-full">View All Students</button>
          </div>
        </div>
      </div>
    </div>
  );
}
