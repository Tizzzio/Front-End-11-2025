import useForm from "../../hooks/useForm";
import Button from "../atoms/Buttons/Buttons";
import Input from "../atoms/Input/Input";
import { validateRegistrationForm } from "../../utils/validation";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    {
      name: "",
      surname: "",
      username: "",
      email: "",
      phone: "",
      birthdate: "",
      password: "",
      confirmPassword: "",
    },
    validateRegistrationForm
  );

  const submitSuccess = (data) => {
    // Remove confirmPassword from submitted data
    const { confirmPassword, ...submitData } = data;
    alert("Registrazione completata!!\n" + JSON.stringify(submitData, null, 2));
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(submitSuccess)}>
        <Input label="Nome" name="name" value={values.name} onChange={handleChange} error={errors.name} required />

        <Input label="Cognome" name="surname" value={values.surname} onChange={handleChange} error={errors.surname} required />

        <Input label="Username" name="username" value={values.username} onChange={handleChange} error={errors.username} required minLength={4} />

        <Input label="Email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} required />

        <Input
          label="Telefono"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="Es: 3331234567"
        />

        <Input
          label="Data di nascita"
          name="birthdate"
          type="date"
          value={values.birthdate}
          onChange={handleChange}
          error={errors.birthdate}
          required
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          required
          minLength={6}
        />

        <Input
          label="Conferma Password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          required
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registrazione..." : "Registrati"}
        </Button>
      </form>
    </div>
  );
}
