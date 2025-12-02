import "./App.css";
import { games } from "./mock/mock.js";
import { useState, useMemo } from "react";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigations/Navigations.jsx";
import GameList from "./components/GameList/GameList.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("tutti");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra i giochi in base al tab attivo e al termine di ricerca
  const filteredGames = useMemo(() => {
    let filtered = games;

    // Filtro per tab
    if (activeTab !== "tutti") {
      filtered = filtered.filter((game) => game.status === activeTab);
    }

    // Filtro per ricerca
    if (searchTerm) {
      filtered = filtered.filter(
        (game) => game.title.toLowerCase().includes(searchTerm.toLowerCase()) || game.genre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [activeTab, searchTerm]);

  // Titoli dinamici per i tab
  const getTitle = () => {
    const tabLabels = {
      tutti: "Tutti i giochi",
      completato: "Giochi completati",
      "in-corso": "Giochi in corso",
      wishlist: "Wishlist",
      abbandonato: "Giochi abbandonati",
    };
    return tabLabels[activeTab] || "I miei giochi";
  };

  return (
    <div className="app">
      <Header totalGames={games.length} onSearch={setSearchTerm} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        <GameList games={filteredGames} title={getTitle()} />
      </main>
    </div>
  );
}

export default App;
