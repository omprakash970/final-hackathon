import { useState } from 'react';
import { useCompanies } from '../../contexts/CompaniesContext';

export default function AdminDashboard() {
  const { companies, addCompany } = useCompanies();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', description: '', status: 'Active', booths: 1 });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    addCompany(form);
    setForm({ name: '', description: '', status: 'Active', booths: 1 });
    setShowForm(false);
  };

  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="dashboard-hero mb-8">
        <h1 className="title-xl">Admin Overview</h1>
        <p>Live stats, quick actions and recent activity.</p>
      </div>

      <div className="grid-4 mb-8">
        <div className="stat-card stat-accent-primary">
          <h3 className="muted">Companies</h3>
          <p className="title-lg" style={{ margin: 0 }}>{companies.length}</p>
        </div>
        <div className="stat-card stat-accent-green">
          <h3 className="muted">Booths</h3>
          <p className="title-lg" style={{ margin: 0 }}>{companies.reduce((sum,c)=>sum + (c.booths||0),0)}</p>
        </div>
        <div className="stat-card stat-accent-purple">
          <h3 className="muted">Students</h3>
          <p className="title-lg" style={{ margin: 0 }}>256</p>
        </div>
        <div className="stat-card stat-accent-amber">
          <h3 className="muted">Registrations</h3>
          <p className="title-lg" style={{ margin: 0 }}>89</p>
        </div>
      </div>

      {showForm && (
        <form onSubmit={submit} className="card mb-8" style={{ display: 'grid', gap: 16 }}>
          <div>
            <label className="label" >Company Name</label>
            <input className="form-field" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </div>
            <div>
            <label className="label">Description</label>
            <textarea className="form-field" style={{ height: 96 }} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
          </div>
          <div className="row" style={{ gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label className="label">Status</label>
              <select className="form-field" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
                <option>Active</option>
                <option>Pending</option>
              </select>
            </div>
            <div style={{ width: 160 }}>
              <label className="label">Booths</label>
              <input type="number" min={1} className="form-field" value={form.booths} onChange={e => setForm(f => ({ ...f, booths: parseInt(e.target.value)||1 }))} />
            </div>
          </div>
          <div className="row" style={{ gap: 12 }}>
            <button type="submit" className="btn btn-blue w-full">Add Company</button>
            <button type="button" onClick={() => setShowForm(false)} className="btn btn-outline w-full">Cancel</button>
          </div>
        </form>
      )}

      <div className="grid-2">
        <div className="card">
          <h3 className="title-lg">Recent Activity</h3>
          <div className="list-muted">
            <div className="row space-between item">
            <span>New student registered</span>
            <span className="muted" style={{ fontSize: 12 }}>5 min ago</span>
            </div>
            <div className="row space-between item">
            <span>Google booth updated</span>
            <span className="muted" style={{ fontSize: 12 }}>15 min ago</span>
            </div>
            <div className="row space-between item">
            <span>New company added</span>
            <span className="muted" style={{ fontSize: 12 }}>1 hr ago</span>
            </div>
          </div>
        </div>
        <div className="card">
          <h3 className="title-lg">Quick Actions</h3>
          <div style={{ display: 'grid', gap: 12 }}>
            <button className="btn btn-green w-full" onClick={() => setShowForm(s => !s)}>{showForm ? 'Close Form' : '+ Add New Company'}</button>
            <button className="btn btn-blue w-full">+ Create Booth</button>
            <button className="btn btn-purple w-full">View All Students</button>
          </div>
        </div>
      </div>
    </div>
  );
}
