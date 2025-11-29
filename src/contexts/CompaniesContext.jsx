import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const CompaniesContext = createContext(null);
export function useCompanies() { return useContext(CompaniesContext); }

const STORAGE_KEY = 'cf-companies';

const defaultCompanies = [
  { id: 1, name: 'Google', status: 'Active', booths: 2, logo: '/assets/logos/google.png', description: 'Technology & Cloud Computing' },
  { id: 2, name: 'Amazon', status: 'Active', booths: 3, logo: '/assets/logos/amazon.png', description: 'E-commerce & AWS Services' },
  { id: 3, name: 'Infosys', status: 'Pending', booths: 1, logo: '/assets/logos/infosys.png', description: 'IT Services & Consulting' },
];

export function CompaniesProvider({ children }) {
  const [companies, setCompanies] = useState(() => {
    if (typeof window === 'undefined') return defaultCompanies;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultCompanies;
    } catch { return defaultCompanies; }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(companies)); } catch {}
  }, [companies]);

  const addCompany = useCallback((data) => {
    const company = {
      id: Date.now(),
      name: data.name || 'Untitled',
      status: data.status || 'Active',
      booths: data.booths || 1,
      logo: data.logo || '/assets/logos/placeholder.png',
      description: data.description || 'No description yet.'
    };
    setCompanies(prev => [...prev, company]);
  }, []);

  const updateCompany = useCallback((id, updates) => {
    setCompanies(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  }, []);

  const deleteCompany = useCallback((id) => {
    setCompanies(prev => prev.filter(c => c.id !== id));
  }, []);

  // Ensure legacy entries without description have fallback when consumed
  const hydrated = companies.map(c => ({
    ...c,
    description: c.description || 'No description yet.'
  }));

  const value = { companies: hydrated, addCompany, updateCompany, deleteCompany };
  return <CompaniesContext.Provider value={value}>{children}</CompaniesContext.Provider>;
}
