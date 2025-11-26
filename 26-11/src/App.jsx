import React, { useState, useEffect } from "react";
import TodoForm from "./components/organisms/TodoForm";
import TodoList from "./components/organisms/TodoList";
import Button from "./components/atoms/Button";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const addTask = (text) => {
    if (!text || !text.trim()) return;
    const newTask = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));
  const toggleComplete = (id) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  const updateTask = (id, text) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));

  return (
    <div className="app">
      <div className="header">
        <div>
          <h1 style={{ margin: 0 }}>ToDo List con React</h1>
          <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>React + Vite • useState only • Tema: {theme}</p>
        </div>
        <div className="controls">
          <Button variant="ghost" onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
            {theme === "light" ? "🌙 Dark" : "🌤️ Light"}
          </Button>
        </div>
      </div>

      <div className="card">
        <TodoForm onAdd={addTask} />
      </div>
      <div style={{ height: 12 }} />
      <div className="card">
        <TodoList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} onUpdate={updateTask} />
      </div>
    </div>
  );
}
