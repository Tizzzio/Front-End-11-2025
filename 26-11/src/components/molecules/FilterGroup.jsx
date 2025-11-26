import Button from "../atoms/Button";

export default function FilterGroup({ filter, setFilter }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Button variant={filter === "all" ? "primary" : "ghost"} onClick={() => setFilter("all")}>
        Tutti
      </Button>
      <Button variant={filter === "active" ? "primary" : "ghost"} onClick={() => setFilter("active")}>
        Attivi
      </Button>
      <Button variant={filter === "completed" ? "primary" : "ghost"} onClick={() => setFilter("completed")}>
        Completati
      </Button>
    </div>
  );
}
