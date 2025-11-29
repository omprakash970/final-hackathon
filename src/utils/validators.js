// Email validation
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Password validation
export const validatePassword = (password) => {
  return password.length >= 8;
};

// Required field validation
export const isRequired = (value) => {
  return value && value.trim() !== '';
};

// Phone number validation
export const validatePhone = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
};
