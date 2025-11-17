// funzione freccia (arrow function)

const somma = (a, b) => a + b;

console.log(somma(5, 3)); // Output: 8
console.log(somma(10, 15)); // Output: 25

// funzione freccia con corpo della funzione
const moltiplica = (a, b) => {
  return a * b;
};
console.log(moltiplica(5, 3)); // Output: 15
console.log(moltiplica(10, 15)); // Output: 150

// funzione freccia senza parametri
const saluta = () => console.log("Ciao!");
saluta(); // Output: Ciao!

// funzione freccia con un solo parametro
const quadrato = (x) => x * x;
console.log(quadrato(4)); // Output: 16
console.log(quadrato(7)); // Output: 49
