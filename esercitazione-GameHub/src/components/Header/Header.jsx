import "./Header.css";

const Header = ({ totalGames, onSearch }) => {
  return (
    <header className="header">
      <h1 className="header-title">🎮 GameHub</h1>
      <p className="header-count">Giochi totali: {totalGames}</p>

      <input className="search-input" type="text" placeholder="Cerca per titolo o genere..." onChange={(e) => onSearch(e.target.value)} />
    </header>
  );
};

export default Header;
