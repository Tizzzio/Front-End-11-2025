import { useState, useEffect } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  // Questo si esegue DOPO ogni render
  useEffect(() => {
    console.log("Componente renderizzato! Count è:", count);
    document.title = `Hai cliccato ${count} volte`;
  });

  return (
    <div>
      <h2>Contatore: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Cliccami!</button>
      <p style={{ color: "#6c757d", fontSize: "14px" }}>Guarda il titolo della scheda del browser!</p>
    </div>
  );
}
