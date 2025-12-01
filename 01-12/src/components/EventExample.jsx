import { useState } from "react";

export default function EventsExample() {
  const [eventInfo, setEventInfo] = useState("Nessun evento ancora");

  const handleClick = (event) => {
    // 'event' è un SyntheticEvent, non un evento nativo del browser [2]
    console.log("Tipo evento:", event.type); // "click" [2, 4]
    console.log("Elemento cliccato:", event.target); // L'elemento HTML che ha scatenato l'evento [2, 4]
    console.table(event);

    const x = event.clientX; // Coordinata X del mouse relativa alla finestra [3, 4]
    const y = event.clientY; // Coordinata Y del mouse relativa alla finestra [3, 4]

    setEventInfo(`Cliccato alle coordinate: ${x}, ${y}`);
  };

  const handleMouseMove = (event) => {
    setEventInfo(`Mouse a: ${event.clientX}, ${event.clientY}`);
  };

  const handleMouseEnter = () => {
    console.log("Mouse entrato nell'area");
  };

  const handleMouseLeave = () => {
    setEventInfo("Mouse uscito dall'area!");
    console.log("Mouse uscito dall'area");
  };

  return (
    <div>
      <h3>Gestione Eventi</h3>
      <button onClick={handleClick}>Clicca per vedere le coordinate</button>

      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "600px",
          height: "600px",
          border: "2px solid blue",
          margin: "10px 0",
          backgroundColor: "#f0f0f0",
        }}
      >
        Muovi il mouse qui sopra
      </div>

      <p>Info evento: {eventInfo}</p>
    </div>
  );
}
