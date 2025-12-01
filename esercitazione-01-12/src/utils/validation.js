// Validation utilities
export const validationRules = {
  required: (value, fieldName) => {
    if (!value?.toString().trim()) {
      return `${fieldName} è obbligatorio`;
    }
    return null;
  },

  minLength: (value, min, fieldName) => {
    if (value && value.length < min) {
      return `${fieldName} deve avere almeno ${min} caratteri`;
    }
    return null;
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return "Inserisci un'email valida";
    }
    return null;
  },

  phone: (value) => {
    if (value && !/^[0-9]{8,15}$/.test(value)) {
      return "Deve contenere solo numeri (8–15 cifre)";
    }
    return null;
  },

  date: (value, fieldName) => {
    if (!value) {
      return `Inserisci una ${fieldName.toLowerCase()} valida`;
    }
    return null;
  },

  confirmPassword: (value, originalPassword) => {
    if (value !== originalPassword) {
      return "Le password non coincidono";
    }
    return null;
  },
};

export const validateRegistrationForm = (values) => {
  const errors = {};

  // Name validation
  const nameError = validationRules.required(values.name, "Nome");
  if (nameError) errors.name = nameError;

  // Surname validation
  const surnameError = validationRules.required(values.surname, "Cognome");
  if (surnameError) errors.surname = surnameError;

  // Username validation
  const usernameRequiredError = validationRules.required(values.username, "Username");
  const usernameMinError = validationRules.minLength(values.username, 4, "Username");
  if (usernameRequiredError) errors.username = usernameRequiredError;
  else if (usernameMinError) errors.username = usernameMinError;

  // Email validation
  const emailRequiredError = validationRules.required(values.email, "Email");
  const emailFormatError = validationRules.email(values.email);
  if (emailRequiredError) errors.email = emailRequiredError;
  else if (emailFormatError) errors.email = emailFormatError;

  // Phone validation
  const phoneError = validationRules.phone(values.phone);
  if (phoneError) errors.phone = phoneError;

  // Birthdate validation
  const birthdateError = validationRules.date(values.birthdate, "Data di nascita");
  if (birthdateError) errors.birthdate = birthdateError;

  // Password validation
  const passwordRequiredError = validationRules.required(values.password, "Password");
  const passwordMinError = validationRules.minLength(values.password, 6, "Password");
  if (passwordRequiredError) errors.password = passwordRequiredError;
  else if (passwordMinError) errors.password = passwordMinError;

  // Confirm password validation
  const confirmPasswordError = validationRules.confirmPassword(values.confirmPassword, values.password);
  if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;

  return errors;
};
