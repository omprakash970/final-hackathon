import CompanyCard from '../../components/CompanyCard';
import { useCompanies } from '../../contexts/CompaniesContext';

export default function StudentCompanies() {
  const { companies } = useCompanies();

  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-6">Companies</h1>
      {companies.length === 0 ? (
        <div className="card">
          <p className="muted">No companies available yet. Please check back later.</p>
        </div>
      ) : (
        <div className="grid-3">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              name={company.name}
              logo={company.logo}
              description={`${company.description} • ${company.status} • Booths: ${company.booths}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
