import { useTheme } from "../contexts/ThemeContext";

const ThemeControls = () => {
  const { theme, fontSize, toggleTheme, setSpecificTheme, changeFontSize, availableThemes, availableFontSizes } = useTheme();

  return (
    <div className="theme-controls">
      <h3>🎨 Controlli Tema</h3>

      <div className="control-group">
        <button onClick={toggleTheme} className="btn primary">
          🔄 Cambia Tema (Attuale: {theme})
        </button>
      </div>

      <div className="control-group">
        <label>Scegli tema specifico:</label>
        <div className="theme-buttons">
          {availableThemes.map((themeName) => (
            <button key={themeName} onClick={() => setSpecificTheme(themeName)} className={`btn ${theme === themeName ? "active" : "secondary"}`}>
              {themeName === "light" && "☀️"}
              {themeName === "dark" && "🌙"}
              {themeName === "blue" && "🌊"}
              {themeName}
            </button>
          ))}
        </div>
      </div>

      <div className="control-group">
        <label>Dimensione font:</label>
        <div className="font-buttons">
          {availableFontSizes.map((size) => (
            <button key={size} onClick={() => changeFontSize(size)} className={`btn ${fontSize === size ? "active" : "secondary"}`}>
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeControls;
