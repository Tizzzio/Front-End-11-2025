import "./GameCard.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.coverUrl} alt={game.title} className="game-cover" />

      <div className="game-info">
        <h3 className="game-title">{game.title}</h3>

        <div className="game-details">
          <GameDetail label="Genere" value={game.genre} />
          <GameDetail label="Piattaforma" value={game.platform} />
          <GameDetail label="Anno" value={game.year} />
          <GameDetail label="Voto" value={`⭐ ${game.rating}/10`} />
          <GameDetail label="Status" value={game.status} />
          <GameDetail label="Ore giocate" value={`${game.hoursPlayed}h`} />
        </div>
      </div>
    </div>
  );
};

const GameDetail = ({ label, value }) => (
  <p className="game-detail">
    <strong>{label}:</strong> {value}
  </p>
);

export default GameCard;
