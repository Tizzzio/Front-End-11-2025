import GameCard from "../GameCard/GameCard";
import "./GameList.css";

const GameList = ({ games, title }) => {
  if (games.length === 0) {
    return (
      <div className="empty-state">
        <p>🎮 Nessun gioco trovato</p>
      </div>
    );
  }

  return (
    <section className="game-section">
      <header className="section-header">
        <h2>{title}</h2>
        <span className="games-count">({games.length} giochi)</span>
      </header>

      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default GameList;
