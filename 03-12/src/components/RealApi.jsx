import { useState, useEffect } from "react";
import { fetchPosts } from "../api/fetchPosts";

export default function RealAPIExample() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts();
        console.log("Posts nel componente:", data);
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []); // Solo al mount

  if (loading) return <div>Caricamento posts...</div>;
  if (error) return <div>Errore: {error}</div>;

  return (
    <div>
      <h2>📄 Posts dal Server</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px 0",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
