import { useState } from "react";

export default function KeyboardEvents() {
  const [pressedKey, setPressedKey] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event) => {
    setPressedKey(`Ultimo tasto: ${event.key}`);

    if (event.key === "Enter") {
      alert(`Hai premuto Enter con valore: ${event.target.value}`);
    }
  };

  const handleKeyDown = (event) => {
    // Esempi di tasti speciali
    if (event.key === "Escape") {
      setInputValue(""); // Pulisce l'input con ESC
    }
  };

  return (
    <div>
      <h3>Eventi Tastiera</h3>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress} //
        onKeyDown={handleKeyDown} //
        placeholder="Scrivi qui... Prova Enter o ESC"
      />

      <p>{pressedKey}</p>
      <p>Valore input: {inputValue}</p>
    </div>
  );
}
