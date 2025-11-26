import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function TodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e?.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Input
        value={value}
        onChange={setValue}
        placeholder={"Aggiungi task..."}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit(e);
        }}
      />
      <Button type="submit" variant="primary">
        ➕ Aggiungi
      </Button>
    </form>
  );
}
