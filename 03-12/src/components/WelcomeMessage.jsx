import { useEffect, useState } from "react";

export default function WelcomeMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Questo si esegue SOLO una volta, quando il componente appare
  useEffect(() => {
    console.log("🎉 Componente montato per la prima volta!");

    // Simula un caricamento
    setTimeout(() => {
      setShowMessage(true);
      setCurrentTime(new Date().toLocaleTimeString());
    }, 5000);

    // Potremmo anche fare una chiamata API qui
    // fetchUserData();
  }, []); // Array vuoto = esegue solo al mount

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        border: "2px solid #007bff",
        borderRadius: "10px",
      }}
    >
      <h2>Benvenuto nella nostra app! 👋</h2>

      {showMessage ? (
        <div>
          <p style={{ color: "#28a745", fontSize: "18px" }}>✅ Caricamento completato!</p>
          <p>Ora locale: {currentTime}</p>
        </div>
      ) : (
        <p style={{ color: "#6c757d" }}>⏳ Caricamento in corso...</p>
      )}
    </div>
  );
}
