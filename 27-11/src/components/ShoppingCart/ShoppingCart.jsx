import { useState } from "react";
import CartItem from "./CartItem/CartItem";

export function ShoppingCart({ items, setItems }) {
  // State per gestire il carrello

  const [isOpen, setIsOpen] = useState(false);

  // Calcolo del totale
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const increaseQuantity = (product) => {
    if (items.find((p) => p.id == product.id)) {
      setItems((items) => items.map((p) => (p.id == product.id ? { ...p, quantity: p.quantity + 1 } : p)));
    } else {
      setItems((items) => [...items, product]);
    }
  };

  const decreaseQuantity = (product) => {
    if (items.find((p) => p.id == product.id)) {
      setItems((items) => items.map((p) => (p.id == product.id ? { ...p, quantity: Math.max(0, p.quantity - 1) } : p)).filter((p) => p.quantity > 0));
    }
  };

  return (
    <div className="shopping-cart">
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        🛒 Carrello ({items.length})
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          {items.length === 0 ? (
            <p>Il carrello è vuoto</p>
          ) : (
            <>
              {items.map((item) => (
                <CartItem key={item.id} item={item} onIncreaseQuantity={increaseQuantity} onDecreaseQuantity={decreaseQuantity} />
              ))}
              <div className="cart-total">Totale: €{total.toFixed(2)}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
