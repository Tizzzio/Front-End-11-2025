//script di esempio per For
// array
let colori = ["rosso", "verde", "blu"];

for (let colore of colori) {
  console.log(colore);
}

// oggetti
let persona = { nome: "Luca", eta: 30 };

for (let chiave in persona) {
  console.log(chiave + ": " + persona[chiave]);
}
