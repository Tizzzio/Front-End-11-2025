import "./App.css";
import { games } from "./mock/mock.js";

function App() {
  return (
    <div>
      <h1>🎮 I miei giochi</h1>
      <p>Totale giochi: {games.length}</p>

      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {games.map((game) => (
          <div key={game.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
            <h3>{game.title}</h3>
            <p>
              <strong>Genere:</strong> {game.genre}
            </p>
            <p>
              <strong>Piattaforma:</strong> {game.platform}
            </p>
            <p>
              <strong>Anno:</strong> {game.year}
            </p>
            <p>
              <strong>Voto:</strong> ⭐ {game.rating}/10
            </p>
            <p>
              <strong>Status:</strong> {game.status}
            </p>
            <p>
              <strong>Ore giocate:</strong> {game.hoursPlayed}h
            </p>
            <img src={game.coverUrl} alt={game.title} style={{ width: "100px", height: "133px", objectFit: "cover" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
