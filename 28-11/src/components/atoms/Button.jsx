import "./Button.css";

function Button({ children, variant = "primary", onClick, disabled }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
export default Button;
