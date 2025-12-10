import "./App.css";
import AppRouter from "./router/AppRouter.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#b1aeaeff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <NavBar />
        <AppRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
