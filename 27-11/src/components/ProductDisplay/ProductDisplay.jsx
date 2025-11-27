import "./ProductDisplay.css";

export default function ProductDisplay({ product, onAddItem }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>€{product.price}</p>
      <p className={`category ${product.category.toLowerCase()}`}>{product.category}</p>
      <img src={product.image} alt={product.name} />

      {/* Accesso a proprietà annidate */}
      <div className="vendor">
        <p>Venduto da: {product.vendor.name}</p>
        <p>Rating: {"⭐".repeat(product.vendor.rating)}</p>
        <button onClick={() => onAddItem(product)}>Aggiungi al carrello</button>
      </div>
    </div>
  );
}
