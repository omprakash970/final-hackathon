import CompanyCard from '../../components/CompanyCard';

export default function StudentCompanies() {
  const companies = [
    { id: 1, name: 'Google', logo: '/assets/logos/google.png', description: 'Technology & Cloud Computing' },
    { id: 2, name: 'Amazon', logo: '/assets/logos/amazon.png', description: 'E-commerce & AWS' },
    { id: 3, name: 'Infosys', logo: '/assets/logos/infosys.png', description: 'IT Services & Consulting' },
  ];

  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-6">Companies</h1>
      <div className="grid-3">
        {companies.map((company) => (
          <CompanyCard key={company.id} name={company.name} logo={company.logo} description={company.description} />
        ))}
      </div>
    </div>
  );
}
