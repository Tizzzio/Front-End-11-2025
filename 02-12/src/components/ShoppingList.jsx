import { useState } from "react";

export default function ShoppingList() {
  // Array di oggetti per la lista della spesa
  const [items] = useState([
    { id: 1, name: "Pane", category: "Panetteria", bought: false },
    { id: 2, name: "Latte", category: "Latticini", bought: true },
    { id: 3, name: "Mele", category: "Frutta", bought: false },
    { id: 4, name: "Pasta", category: "Dispensa", bought: false },
    { id: 5, name: "Pomodori", category: "Verdura", bought: true },
  ]);

  return (
    <div>
      <h2>🛒 Lista della Spesa ({items.length} elementi)</h2>

      <div>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "10px",
              margin: "5px 0",
              backgroundColor: item.bought ? "#d4edda" : "#f8f9fa",
              border: "1px solid #dee2e6",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong
                style={{
                  textDecoration: item.bought ? "line-through" : "none",
                  color: item.bought ? "#6c757d" : "#212529",
                }}
              >
                {item.name}
              </strong>
              <small
                style={{
                  display: "block",
                  color: "#6c757d",
                }}
              >
                Categoria: {item.category}
              </small>
            </div>

            <span style={{ fontSize: "20px" }}>{item.bought ? "✅" : "⭕"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
