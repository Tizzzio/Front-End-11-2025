import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Rimuovi l'errore se l'utente inizia a digitare
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validazione username
    if (!formData.username.trim()) {
      newErrors.username = "Username obbligatorio";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username deve essere almeno 3 caratteri";
    }

    // Validazione email
    if (!formData.email.trim()) {
      newErrors.email = "Email obbligatoria";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email non valida";
    }

    // Validazione password
    if (!formData.password) {
      newErrors.password = "Password obbligatoria";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password deve essere almeno 6 caratteri";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // True se nessun errore
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form valido! Registrazione completata.");
      console.log("Dati:", formData);
    } else {
      alert("Form Non Valido!!!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => updateField("username", e.target.value)}
          style={{
            border: errors.username ? "2px solid red" : "1px solid gray",
          }}
        />
        {errors.username && <div style={{ color: "red", fontSize: "14px" }}>{errors.username}</div>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          style={{
            border: errors.email ? "2px solid red" : "1px solid gray",
          }}
        />
        {errors.email && <div style={{ color: "red", fontSize: "14px" }}>{errors.email}</div>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => updateField("password", e.target.value)}
          style={{
            border: errors.password ? "2px solid red" : "1px solid gray",
          }}
        />
        {errors.password && <div style={{ color: "red", fontSize: "14px" }}>{errors.password}</div>}
      </div>

      <button type="submit">Registrati</button>
    </form>
  );
}
