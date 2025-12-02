import "./Navigations.css";

const tabs = [
  { key: "tutti", label: "Tutti" },
  { key: "completato", label: "Completati" },
  { key: "in-corso", label: "In Corso" },
  { key: "wishlist", label: "Wishlist" },
  { key: "abbandonato", label: "Abbandonati" },
];

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navigation">
      {tabs.map((t) => (
        <button key={t.key} className={`nav-btn ${activeTab === t.key ? "active" : ""}`} onClick={() => setActiveTab(t.key)}>
          {t.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
