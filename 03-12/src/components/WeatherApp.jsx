import { useState, useEffect } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Roma");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Effetto per chiamare l'API del tempo
  useEffect(() => {
    // Funzione asincrona per chiamata API
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log(`🌤️ Caricando meteo per ${city}...`);

        // Simula chiamata API (normalmente useresti una vera API)
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula latenza

        // Simula risposta API
        const mockWeatherData = {
          city: city,
          temperature: Math.floor(Math.random() * 30) + 5, // 5-35°C
          condition: ["Soleggiato", "Nuvoloso", "Piovoso", "Nevoso"][Math.floor(Math.random() * 4)],
          humidity: Math.floor(Math.random() * 40) + 30, // 30-70%
          wind: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
          lastUpdated: new Date().toLocaleTimeString(),
        };

        // Simula possibile errore (10% di probabilità)
        if (Math.random() < 0.1) {
          throw new Error("Città non trovata");
        }

        setWeather(mockWeatherData);
      } catch (err) {
        console.error("❌ Errore nel caricamento meteo:", err);
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, refreshTrigger]); // Riesegue quando la città cambia o quando viene fatto refresh

  // Funzione per ricaricare i dati
  const refreshWeather = () => {
    setRefreshTrigger((prev) => prev + 1); // Forza un re-fetch incrementando il trigger
    console.log(refreshTrigger);
  };

  // Funzione per cambiare città
  const changeCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "2px solid #007bff",
        borderRadius: "15px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h2 style={{ textAlign: "center" }}>🌤️ Meteo App</h2>

      {/* Selezione città */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <h3>Seleziona città:</h3>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
          {["Roma", "Milano", "Napoli", "Torino", "Palermo"].map((cityName) => (
            <button
              key={cityName}
              onClick={() => changeCity(cityName)}
              style={{
                padding: "8px 15px",
                backgroundColor: city === cityName ? "#007bff" : "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {cityName}
            </button>
          ))}
        </div>
      </div>

      {/* Stato di caricamento */}
      {loading && (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <div style={{ fontSize: "24px", marginBottom: "10px" }}>⏳</div>
          <p>Caricando meteo per {city}...</p>
        </div>
      )}

      {/* Gestione errori */}
      {error && (
        <div
          style={{
            backgroundColor: "#f8d7da",
            border: "1px solid #f5c6cb",
            color: "#721c24",
            padding: "15px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "24px", marginBottom: "10px" }}>❌</div>
          <strong>Errore:</strong> {error}
          <br />
          <button
            onClick={() => refreshWeather()}
            style={{
              marginTop: "10px",
              padding: "8px 15px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Riprova
          </button>
        </div>
      )}

      {/* Dati meteo */}
      {weather && !loading && !error && (
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ textAlign: "center", margin: "0 0 20px 0" }}>📍 {weather.city}</h3>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div style={{ fontSize: "48px", fontWeight: "bold", color: "#007bff" }}>{weather.temperature}°C</div>
            <div style={{ fontSize: "18px", color: "#6c757d" }}>{weather.condition}</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px" }}>💧</div>
              <div>Umidità</div>
              <strong>{weather.humidity}%</strong>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px" }}>💨</div>
              <div>Vento</div>
              <strong>{weather.wind} km/h</strong>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#e9ecef",
              borderRadius: "5px",
            }}
          >
            <small>Ultimo aggiornamento: {weather.lastUpdated}</small>
            <br />
            <button
              onClick={() => refreshWeather()}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              🔄 Aggiorna
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
