import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { useTheme } from "./contexts/ThemeContext";
import ThemeControls from "./components/ThemeControls";
import UserProfile from "./components/UserProfile";
import ExampleComponents from "./components/ExampleComponents";
import "./App.css";

// Componente interno che usa il tema
const AppContent = () => {
  const { currentTheme, currentFontSize } = useTheme();

  return (
    <div
      className="app"
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
        fontSize: currentFontSize,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <header className="app-header">
        <h1>🚀 React Context API - Esempio Completo</h1>
        <p>Un esempio pratico di Context API con gestione tema e utente</p>
      </header>

      <main className="app-main">
        <div className="app-grid">
          <section className="controls-section">
            <ThemeControls />
          </section>

          <section className="user-section">
            <UserProfile />
          </section>

          <section className="examples-section">
            <ExampleComponents />
          </section>
        </div>
      </main>

      <footer className="app-footer">
        <p>
          💡 <strong>Context API Features:</strong>
          Gestione tema globale, stato utente, notifiche, preferenze e localStorage
        </p>
      </footer>
    </div>
  );
};

// App principale con i Provider
function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
