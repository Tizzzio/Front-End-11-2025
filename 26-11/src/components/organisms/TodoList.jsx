import React, { useState, useMemo } from "react";
import TodoItem from "../molecules/TodoItem";
import FilterGroup from "../molecules/FilterGroup";
import Button from "../atoms/Button";

export default function TodoList({ tasks, onDelete, onToggle, onUpdate }) {
  const [filter, setFilter] = useState("all");
  const [sortMode, setSortMode] = useState("recent");
  const filtered = useMemo(() => {
    let list = [...tasks];
    if (filter === "active") list = list.filter((t) => !t.completed);
    if (filter === "completed") list = list.filter((t) => t.completed);
    if (sortMode === "recent") {
      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortMode === "alpha") {
      list.sort((a, b) => a.text.localeCompare(b.text));
    }

    return list;
  }, [tasks, filter, sortMode]);
  const remaining = tasks.filter((t) => !t.completed).length;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <FilterGroup filter={filter} setFilter={setFilter} />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span className="small">Ordina:</span>
          <Button variant={sortMode === "recent" ? "primary" : "ghost"} onClick={() => setSortMode("recent")}>
            📅 Recenti
          </Button>
          <Button variant={sortMode === "alpha" ? "primary" : "ghost"} onClick={() => setSortMode("alpha")}>
            🔤 Alfabetico
          </Button>
        </div>
      </div>
      <div className="todo-list">
        {filtered.length === 0 ? (
          <div className="empty">Nessun task al momento.</div>
        ) : (
          filtered.map((task) => <TodoItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onUpdate={onUpdate} />)
        )}
      </div>
      <div className="footer">
        <div className="small">{remaining} task rimanenti</div>
        <div className="small">Totale: {tasks.length}</div>
      </div>
    </div>
  );
}
