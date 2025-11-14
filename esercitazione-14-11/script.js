let citta = "palermo";

const pi = 3.14;

let temperatura = 25;
console.log("La temperatura è 25 gradi");

let = null;

let numero = 42;
console.log(typeof numero);
let parola = "ciao";
console.log(typeof parola);
let flag = false;
console.log(typeof flag);
let nulla = null;
console.log(typeof nulla);
let nonDefinito;
console.log(typeof nonDefinito);

//Operatori

let somma = 7 + 5;
console.log("La somma di 7 + 5 è: " + somma);

let differenza = 10 - 3;
console.log("La differenza di 10 - 3 è: " + differenza);

let prodotto = 4 * 6;
console.log("Il prodotto di 4 * 6 è: " + prodotto);

let divisione = 20 / 4;
console.log("La divisione di 20 / 4 è: " + divisione);

let resto = 17 % 3;
console.log("Il resto di 17 % 3 è: " + resto);

let punti = 50;
punti += 10;
console.log("I punti dopo l'incremento sono: " + punti);

console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 7);
console.log(8 !== "8");

//CONDIZIONI

let eta = 20;
if (eta >= 18) {
  console.log("Sei maggiorenne.");
} else {
  console.log("Sei minorenne.");
}

let voto = 30;
if ((voto = 30)) {
  console.log("Ottimo");
} else if (voto > 18) {
  console.log("Buono");
} else {
  console.log("Insufficiente");
}

let ora = 8;
if (ora <= 9) {
  console.log("Buongiorno");
} else if (ora > 15) {
  console.log("Buon pomeriggio");
} else if (ora >= 21) {
  console.log("Buonasera");
} else {
  console.log("Buonanotte");
}

//CICLI

for (let i = 1; i <= 20; i++) {
  console.log("Iterazione numero: " + i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log("Numero pari: " + i);
}

let conto = 10;
while (conto > 0) {
  console.log("Conto alla rovescia: " + conto);
  conto--;
}

for (let i = 1; i <= 10; i++) {
  let risultato = 5 * i;
  console.log("5 x " + i + " = " + risultato);
}

let conta = 0;
for (let i = 1; i <= 100; i++) {
  conta += i;
}
console.log("La somma dei numeri da 1 a 100 è: " + conta);

//Funzioni

function saluta(nome) {
  console.log("Ciao, " + nome + "!");
}
saluta("Mario");

function sommaNumeri(a, b) {
  return a + b;
}
let risultatoSomma = sommaNumeri(7, 3);
console.log("La somma di 7 e 3 è: " + risultatoSomma);

function moltiplica(a, b) {
  return a * b;
}
let risultatoMoltiplica = moltiplica(7, 3);
console.log("Il prodotto di 7 e 3 è: " + risultatoMoltiplica);

function isPari(numero) {
  return numero % 2 === 0;
}
let numeroTest = 4;
if (isPari(numeroTest)) {
  console.log(numeroTest + " è un numero pari. True!");
} else {
  console.log(numeroTest + " è un numero dispari. False!");
}

function potenza(a, b) {
  return a ** b;
}
let risultatoPotenza = potenza(2, 3);
console.log("2 elevato alla 3 è: " + risultatoPotenza);

function presentati(nome, eta) {
  console.log("Ciao, mi chiamo " + nome + " e ho " + eta + " anni.");
}
presentati("Mario", 25);

//Array

let frutti = ["mela", "banana", "pera"];
console.log("Primo frutto: " + frutti[0]);
frutti.push("kiwi");
frutti.pop();

for (let i = 0; i < frutti.length; i++) {
  console.log("Frutto " + (i + 1) + ": " + frutti[i]);
}

console.log(frutti.length);
console.log("Lunghezza array frutti: " + frutti.length);

//Oggetti

const automobile = {
  marca: "Fiat",
  modello: "Panda",
  anno: 2005,
};
console.log("Marca: " + automobile.marca);
console.log("Modello: " + automobile.modello);

//Aggiungi un metodo descrivi() che stampa "Questa auto è una Fiat Panda del 2005".

function descrivi() {
  console.log("Questa auto è una " + automobile.marca + " " + automobile.modello + " del " + automobile.anno + ".");
}
descrivi();

//INTERAZIONE CON L’UTENTE

let nomeUtente = prompt("Inserisci il tuo nome:");
alert("Ciao, " + nomeUtente + "! Benvenuto!");

//Chiedi all’utente un numero e mostra in alert() il suo quadrato.

let numeroUtente = Number(prompt("Inserisci un numero:"));
let quadrato = numeroUtente ** 2;
alert("Il quadrato di " + numeroUtente + " è " + quadrato + ".");

/////Progetto Flash fatto in script.js separato

//1. Fai inserire due numeri all’utente con `prompt()` e mostra la loro somma con `alert()`.
//2. Crea un array di tre nomi e fai un ciclo che li saluta tutti.
//3. Crea un oggetto `studente` e stampa in alert: `"Mario ha preso 28"`.
//4. Scrivi una funzione che, data una parola, restituisce la parola in maiuscolo.
//5. Stampa tutti i quadrati dei numeri da 1 a 10.
