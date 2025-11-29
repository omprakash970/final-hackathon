import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const CompaniesContext = createContext(null);
export function useCompanies() { return useContext(CompaniesContext); }

const STORAGE_KEY = 'cf-companies';

const defaultCompanies = [
  { id: 1, name: 'Google', status: 'Active', booths: 2, logo: '/assets/logos/google.png' },
  { id: 2, name: 'Amazon', status: 'Active', booths: 3, logo: '/assets/logos/amazon.png' },
  { id: 3, name: 'Infosys', status: 'Pending', booths: 1, logo: '/assets/logos/infosys.png' },
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
    setCompanies(prev => [...prev, { id: Date.now(), ...data }]);
  }, []);

  const updateCompany = useCallback((id, updates) => {
    setCompanies(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  }, []);

  const deleteCompany = useCallback((id) => {
    setCompanies(prev => prev.filter(c => c.id !== id));
  }, []);

  const value = { companies, addCompany, updateCompany, deleteCompany };
  return <CompaniesContext.Provider value={value}>{children}</CompaniesContext.Provider>;
}
