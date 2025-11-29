import CompanyCard from '../../components/CompanyCard';

export default function StudentCompanies() {
  const companies = [
    { id: 1, name: 'Google', logo: '/assets/logos/google.png', description: 'Technology & Cloud Computing' },
    { id: 2, name: 'Amazon', logo: '/assets/logos/amazon.png', description: 'E-commerce & AWS' },
    { id: 3, name: 'Infosys', logo: '/assets/logos/infosys.png', description: 'IT Services & Consulting' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Companies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <CompanyCard 
            key={company.id} 
            name={company.name} 
            logo={company.logo} 
            description={company.description}
          />
        ))}
      </div>
    </div>
  );
}
