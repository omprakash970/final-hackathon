export default function AdminCompanies() {
  const companies = [
    { id: 1, name: 'Google', status: 'Active', booths: 2 },
    { id: 2, name: 'Amazon', status: 'Active', booths: 3 },
    { id: 3, name: 'Infosys', status: 'Pending', booths: 1 },
  ];

  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <div className="row space-between mb-6">
        <h1 className="title-xl" style={{ marginBottom: 0 }}>Manage Companies</h1>
        <button className="btn btn-green">+ Add Company</button>
      </div>
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
                  <button className="link" style={{ marginRight: 12 }}>Edit</button>
                  <button className="link link-red">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
