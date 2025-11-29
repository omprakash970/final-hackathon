// Auth utilities
export const isLoggedIn = () => {
  return typeof window !== 'undefined' && !!window.localStorage.getItem('authToken');
};

export const getToken = () => {
  return typeof window !== 'undefined' ? window.localStorage.getItem('authToken') : null;
};

export const setToken = (token) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('authToken', token);
  }
};

export const removeToken = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('authToken');
  }
};
