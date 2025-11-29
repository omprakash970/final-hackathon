import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import googleLogo from '../assets/logos/google.png';
import amazonLogo from '../assets/logos/amazon.png';
import infosysLogo from '../assets/logos/infosys.png';

const CompaniesContext = createContext(null);
export function useCompanies() { return useContext(CompaniesContext); }

const STORAGE_KEY = 'cf-companies';

const defaultCompanies = [
  { id: 1, name: 'Google', status: 'Active', booths: 2, logo: googleLogo, description: 'Technology & Cloud Computing' },
  { id: 2, name: 'Amazon', status: 'Active', booths: 3, logo: amazonLogo, description: 'E-commerce & AWS Services' },
  { id: 3, name: 'Infosys', status: 'Pending', booths: 1, logo: infosysLogo, description: 'IT Services & Consulting' },
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
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(companies)); } catch { /* ignore persistence errors */ void 0; }
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

  // Ensure legacy entries without description/logo have fallback when consumed
  const logoMap = { Google: googleLogo, Amazon: amazonLogo, Infosys: infosysLogo };
  const hydrated = companies.map(c => ({
    ...c,
    description: c.description || 'No description yet.',
    // Prefer known, bundled logos; otherwise hide invalid legacy paths
    logo: logoMap[c.name] ?? (c.logo && !String(c.logo).startsWith('/assets/') ? c.logo : undefined),
  }));

  const value = { companies: hydrated, addCompany, updateCompany, deleteCompany };
  return <CompaniesContext.Provider value={value}>{children}</CompaniesContext.Provider>;
}
