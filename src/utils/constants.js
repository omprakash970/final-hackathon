// API endpoints
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// User roles
export const ROLES = {
  STUDENT: 'student',
  ADMIN: 'admin',
  COMPANY: 'company',
};

// Company list
export const COMPANIES = [
  { id: 1, name: 'Google', logo: '/assets/logos/google.png' },
  { id: 2, name: 'Amazon', logo: '/assets/logos/amazon.png' },
  { id: 3, name: 'Infosys', logo: '/assets/logos/infosys.png' },
  { id: 4, name: 'TCS', logo: '/assets/logos/tcs.png' },
];
