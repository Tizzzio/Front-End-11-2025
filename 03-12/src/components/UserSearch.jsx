import { useState, useEffect } from "react";

export default function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchCount, setSearchCount] = useState(0);

  // Questo si esegue solo quando searchTerm cambia
  useEffect(() => {
    // Non cercare se il termine è vuoto
    if (searchTerm.trim() === "") {
      setUsers([]);
      return;
    }

    console.log(`🔍 Cercando utenti per: "${searchTerm}"`);
    setLoading(true);

    // Simula chiamata API con ritardo
    const searchTimeout = setTimeout(() => {
      // Simula risultati di ricerca
      const mockUsers = [
        { id: 1, name: `Mario`, email: `mario@email.com` },
        { id: 2, name: `Anna`, email: `anna@email.com` },
        { id: 3, name: `Luca`, email: `luca@email.com` },
      ].filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

      setUsers(mockUsers);
      setLoading(false);
      setSearchCount((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearTimeout(searchTimeout);
    };
  }, [searchTerm]); // Si esegue solo quando searchTerm cambia

  return (
    <div>
      <h2>🔍 Cerca Utenti</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digita un nome da cercare..."
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            border: "2px solid #007bff",
            borderRadius: "5px",
          }}
        />
      </div>

      <p style={{ color: "#6c757d" }}>Ricerche effettuate: {searchCount}</p>

      {loading && <div style={{ color: "#007bff" }}>⏳ Cercando...</div>}

      {!loading && users.length > 0 && (
        <div>
          <h3>Risultati trovati ({users.length}):</h3>
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                padding: "10px",
                margin: "5px 0",
                border: "1px solid #dee2e6",
                borderRadius: "5px",
                backgroundColor: "#f8f9fa",
              }}
            >
              <strong>{user.name}</strong>
              <br />
              <small>{user.email}</small>
            </div>
          ))}
        </div>
      )}

      {!loading && searchTerm !== "" && users.length === 0 && <div style={{ color: "#dc3545" }}>😔 Nessun utente trovato per "{searchTerm}"</div>}
    </div>
  );
}
