export default function Input({ value, onChange, placeholder, onKeyDown }) {
  return <input className="input" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} onKeyDown={onKeyDown} />;
}
