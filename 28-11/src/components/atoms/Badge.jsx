import "./Badge.css";

function Badge({ text, type = "default" }) {
  return <span className={`badge ${type}`}>{text}</span>;
}

export default Badge;
