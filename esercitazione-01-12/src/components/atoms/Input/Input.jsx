import "./Input.css";

export default function Input({ label, error, id, required = false, ...inputProps }) {
  const inputId = id || inputProps.name;

  return (
    <div className="field">
      <label htmlFor={inputId}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input id={inputId} aria-invalid={error ? "true" : "false"} aria-describedby={error ? `${inputId}-error` : undefined} {...inputProps} />
      {error && (
        <p className="error" id={`${inputId}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
