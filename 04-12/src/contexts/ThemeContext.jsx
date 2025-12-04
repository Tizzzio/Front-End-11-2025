import { createContext, useContext, useState } from "react";

// 1. Creiamo il Context
const ThemeContext = createContext();

// 2. Provider Component - fornisce lo state globale
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");

  const themes = {
    light: {
      backgroundColor: "#ffffff",
      color: "#333333",
      cardBackground: "#f8f9fa",
      borderColor: "#dee2e6",
    },
    dark: {
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
      cardBackground: "#2d2d2d",
      borderColor: "#404040",
    },
    blue: {
      backgroundColor: "#0d1421",
      color: "#e3f2fd",
      cardBackground: "#1e2a3a",
      borderColor: "#2196f3",
    },
  };

  const fontSizes = {
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
  };

  // Funzioni per cambiare il tema
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "blue";
      return "light";
    });
  };

  const setSpecificTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
  };

  // Valore del context
  const value = {
    theme,
    currentTheme: themes[theme],
    fontSize,
    currentFontSize: fontSizes[fontSize],
    toggleTheme,
    setSpecificTheme,
    changeFontSize,
    availableThemes: Object.keys(themes),
    availableFontSizes: Object.keys(fontSizes),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// 3. Custom hook per usare il context
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme deve essere usato all'interno di un ThemeProvider");
  }

  return context;
};
