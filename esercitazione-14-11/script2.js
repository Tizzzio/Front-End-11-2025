let num1 = Number(prompt("Inserisci il primo numero:"));
let num2 = Number(prompt("Inserisci il secondo numero:"));
alert("La somma è: " + (num1 + num2));

// Array di tre nomi e ciclo che li saluta
let nomi = ["Luca", "Anna", "Giulia"];
for (let nome of nomi) {
  console.log("Ciao " + nome + "!");
}

// Oggetto studente e stampa
let studente = {
  nome: "Mario",
  voto: 28,
};
alert(studente.nome + " ha preso " + studente.voto);

// Funzione che restituisce una parola in maiuscolo
function inMaiuscolo(parola) {
  //suggerimento
  return parola.toUpperCase(); //suggerimento
}
console.log(inMaiuscolo("ciao"));

// 5. Stampa dei quadrati da 1 a 10
for (let i = 1; i <= 10; i++) {
  554;
  console.log(i * i);
}

//quindi modificare il codice script.js dell'index per vedere il tutto.
