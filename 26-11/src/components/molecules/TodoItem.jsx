import React, { useState } from "react";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";

function formatDate(iso) {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `Creato il ${dd}/${mm}/${yyyy}`;
}

export default function TodoItem({ task, onDelete, onToggle, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const save = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onUpdate(task.id, trimmed);
    setEditing(false);
  };

  return (
    <div className="todo-row">
      <div>
        <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      </div>
      <div className="todo-main">
        {!editing ? (
          <>
            <p className="todo-text" style={{ textDecoration: task.completed ? "line-through" : "none", opacity: task.completed ? 0.7 : 1 }}>
              {task.text}
            </p>
            <div className="todo-meta">{formatDate(task.createdAt)}</div>
          </>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            <input
              className="input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") save();
              }}
            />
          </div>
        )}
      </div>

      <div className="todo-actions">
        {!editing ? (
          <>
            <Button variant="ghost" onClick={() => setEditing(true)}>
              ✏️ Modifica
            </Button>
            <Button variant="ghost" onClick={() => onDelete(task.id)}>
              ❌ Elimina
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" onClick={save}>
              💾 Salva
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setText(task.text);
                setEditing(false);
              }}
            >
              Annulla
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
