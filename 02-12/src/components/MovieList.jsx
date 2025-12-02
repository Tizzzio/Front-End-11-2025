import { useState } from "react";

export default function MovieList() {
  // Database di film
  const [movies] = useState([
    { id: 1, title: "Avengers", year: 2012, genre: "Azione", rating: 8.0, watched: true },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance", rating: 7.8, watched: false },
    { id: 3, title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, watched: true },
    { id: 4, title: "The Godfather", year: 1972, genre: "Drama", rating: 9.2, watched: false },
    { id: 5, title: "Jurassic Park", year: 1993, genre: "Azione", rating: 8.1, watched: true },
    { id: 6, title: "Casablanca", year: 1942, genre: "Romance", rating: 8.5, watched: false },
  ]);

  // Stati per i filtri
  const [selectedGenre, setSelectedGenre] = useState("Tutti");
  const [minRating, setMinRating] = useState(0);
  const [showWatchedOnly, setShowWatchedOnly] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Logica di filtraggio
  const filteredMovies = movies.filter((movie) => {
    // STEP 1: Controllo genere
    const genreMatch = selectedGenre === "Tutti" || movie.genre === selectedGenre;
    // Traduzione: "Va bene se sto cercando TUTTI i generi,
    //              oppure se il genere del film corrisponde"

    // STEP 2: Controllo rating
    const ratingMatch = movie.rating >= minRating;
    // Traduzione: "Il voto del film deve essere almeno minRating"

    // STEP 3: Controllo visti
    const watchedMatch = !showWatchedOnly || movie.watched;
    // Traduzione: "Va bene se NON sto filtrando per visti,
    //              oppure se il film è effettivamente visto"

    // STEP 4: Ricerca testuale
    const searchMatch = movie.title.toLowerCase().includes(searchText.toLowerCase());
    // Traduzione: "Il titolo (in minuscolo) deve contenere il testo cercato (in minuscolo)"

    // DECISIONE FINALE: TUTTE le condizioni devono essere vere
    return genreMatch && ratingMatch && watchedMatch && searchMatch;
    // && significa "E" → TUTTE devono essere true
  });

  // Ottieni lista unica di generi per il dropdown
  const genres = [...new Set(movies.map((movie) => movie.genre))];

  return (
    <div>
      <h2>
        🎬 La Mia Filmoteca ({filteredMovies.length} di {movies.length} film)
      </h2>

      {/* Controlli di filtro */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "5px",
        }}
      >
        <h3>Filtri</h3>

        {/* Ricerca per titolo */}
        <div style={{ marginBottom: "15px" }}>
          <label>🔍 Cerca film: </label>
          <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Digita il titolo..." style={{ padding: "5px", marginLeft: "10px" }} />
        </div>

        {/* Filtro per genere */}
        <div style={{ marginBottom: "15px" }}>
          <label>🎭 Genere: </label>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} style={{ padding: "5px", marginLeft: "10px" }}>
            <option value="Tutti">Tutti i generi</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro per rating */}
        <div style={{ marginBottom: "15px" }}>
          <label>⭐ Rating minimo: {minRating}/10</label>
          <input type="range" min="0" max="10" step="0.1" value={minRating} onChange={(e) => setMinRating(parseFloat(e.target.value))} style={{ marginLeft: "10px" }} />
        </div>

        {/* Filtro per film visti */}
        <div>
          <label>
            <input type="checkbox" checked={showWatchedOnly} onChange={(e) => setShowWatchedOnly(e.target.checked)} />
            👁️ Mostra solo film visti
          </label>
        </div>
      </div>

      {/* Lista film filtrati */}
      <div>
        {filteredMovies.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              color: "#6c757d",
            }}
          >
            <h3>😔 Nessun film trovato</h3>
            <p>Prova a modificare i filtri di ricerca</p>
          </div>
        ) : (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              style={{
                border: "1px solid #dee2e6",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "10px",
                backgroundColor: movie.watched ? "#d4edda" : "#ffffff",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h4 style={{ margin: "0 0 5px 0" }}>
                    {movie.title} ({movie.year})
                  </h4>
                  <p style={{ margin: "0", color: "#6c757d" }}>
                    <span style={{ marginRight: "15px" }}>🎭 {movie.genre}</span>
                    <span style={{ marginRight: "15px" }}>⭐ {movie.rating}/10</span>
                    <span>{movie.watched ? "👁️ Visto" : "📋 Da vedere"}</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
