import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize auth state
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Login logic
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, login, logout };
}
