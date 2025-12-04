export const fetchPosts = async () => {
  try {
    // Chiamata a API reale
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=99");

    // Verifica se la risposta è ok
    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("Posts caricati:", data);
    return data;
  } catch (err) {
    return err.message;
  }
};
