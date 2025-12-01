import { useForm } from "../hooks/UseForm.jsx";

export default function LoginForm() {
  const form = useForm({ name: "", surname: "", email: "", password: "", "confirm-password": "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login con:", form.values);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={form.values.name} onChange={(e) => form.setValue("name", e.target.value)} placeholder="Name" />
      <input type="text" value={form.values.surname} onChange={(e) => form.setValue("surname", e.target.value)} placeholder="Surname" />
      <input type="email" value={form.values.email} onChange={(e) => form.setValue("email", e.target.value)} placeholder="Email" />
      <input type="password" value={form.values.password} onChange={(e) => form.setValue("password", e.target.value)} placeholder="Password" />
      <input
        type="password"
        value={form.values["confirm-password"]}
        onChange={(e) => form.setValue("confirm-password", e.target.value)}
        placeholder="Confirm Password"
      />
      <button type="submit">Register</button>
      <button type="button" onClick={form.reset}>
        Reset
      </button>
    </form>
  );
}
