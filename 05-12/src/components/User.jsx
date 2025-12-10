import { useParams } from "react-router-dom";

export default function User() {
  // 🔍 Estraggo il parametro "id" dall'URL
  const { id } = useParams();

  return (
    <div>
      <h1>👤 Profilo utente</h1>

      {/* Stampo il valore dinamico */}
      <p>ID utente: {id}</p>
    </div>
  );
}
