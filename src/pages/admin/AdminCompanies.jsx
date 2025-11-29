import { useState } from 'react';
import { useCompanies } from '../../contexts/CompaniesContext';

export default function AdminCompanies() {
  const { companies, addCompany, updateCompany, deleteCompany } = useCompanies();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', status: 'Active', booths: 1 });
  const [editingId, setEditingId] = useState(null);

  const reset = () => { setForm({ name: '', status: 'Active', booths: 1 }); setEditingId(null); };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    if (editingId) {
      updateCompany(editingId, { ...form });
    } else {
      addCompany({ ...form });
    }
    reset();
    setShowForm(false);
  };

  const startEdit = (c) => {
    setEditingId(c.id);
    setForm({ name: c.name, status: c.status, booths: c.booths });
    setShowForm(true);
  };

  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="row space-between mb-6">
        <h1 className="title-xl" style={{ marginBottom: 0 }}>Manage Companies</h1>
        <button className="btn btn-green" onClick={() => { reset(); setShowForm(s => !s); }}>
          {showForm ? 'Cancel' : '+ Add Company'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={submit} className="card mb-6" style={{ display: 'grid', gap: 16 }}>
          <div>
            <label className="label">Company Name</label>
            <input className="form-field" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
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
            <button type="submit" className="btn btn-blue w-full">{editingId ? 'Update Company' : 'Create Company'}</button>
            {editingId && (
              <button type="button" onClick={() => { reset(); }} className="btn btn-outline w-full">Reset</button>
            )}
          </div>
        </form>
      )}

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Status</th>
              <th>Booths</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td style={{ fontWeight: 700 }}>{company.name}</td>
                <td>
                  {company.status === 'Active' ? (
                    <span className="badge badge-green">Active</span>
                  ) : (
                    <span className="badge badge-yellow">Pending</span>
                  )}
                </td>
                <td>{company.booths}</td>
                <td>
                  <button onClick={() => startEdit(company)} className="link" style={{ marginRight: 12 }}>Edit</button>
                  <button onClick={() => deleteCompany(company.id)} className="link link-red">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
