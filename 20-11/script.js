const btn = document.getElementById("run");
const out = document.getElementById("output");

// Utility per mostrare il risultato di ogni esempio
function log(title, content) {
  out.textContent += `-- ${title} --\n`;
  out.textContent += (typeof content === "string" ? content : JSON.stringify(content, null, 2)) + "\n\n";
}

btn.addEventListener("click", () => {
  out.textContent = "";
  // Qui inizieremo a incastrare gli esempi

  //OPERATORE TERNARIO
  const numero = Math.floor(Math.random() * 100);
  const esito = numero % 2 === 0 ? "pari" : "dispari";
  log("Operatore ternario", `Il numero ${numero} è ${esito}`);

  //REST PARAMETER
  function sommaRest(...numeri) {
    console.log(numeri); // array dei numeri passati
    let totale = 0;
    for (let num of numeri) {
      totale += num;
    }
    return totale;
  }

  const risultato1 = sommaRest(5, 10, 15, 20);
  log("Risultato somma 1", risultato1);
  const risultato2 = sommaRest(1, 2, 3, 100, 23, 45, 67, 90);
  log("Risultato somma 2", risultato2);

  function creaFrase(...parole) {
    log("Parole ricevute", `Array: ${parole}`);

    let frase = "";
    for (let i = 0; i < parole.length; i++) {
      frase += parole[i];
      if (i < parole.length - 1) {
        frase += " - ";
      }
    }
    return frase;
  }

  const frase1 = creaFrase("JavaScript", "è", "molto", "divertente");
  log("Frase 1", frase1);

  // Spread operator
  const arrayNumeri = [10, 20, 30, 40, 50];
  const sommaArray = sommaRest(...arrayNumeri);
  log("Somma con array come argomento:", sommaArray);

  const sommaArray2 = sommaRest(5, 60, 70, ...arrayNumeri);
  log("Somma con array e altri numeri:", sommaArray2);

  const paroleArray = ["Spread", "operator", "in", "action"];
  const frase2 = creaFrase("this", "is", ...paroleArray);
  log("Frase 2", frase2);

  // Destructuring con array
  const arr = ["uno", "due", "tre"];
  const [primo, secondo, terzo] = arr;
  //   const primo = arr[0];
  //   const secondo = arr[1];
  //   const terzo = arr[2];
  console.log("Destructuring array", primo, secondo, terzo);

  // Destructuring con REST
  const colori = ["rosso", "verde", "blu", "giallo", "viola"];
  const [principale, secondario, ...altriColori] = colori;
  log("Destructuring + REST", {
    "Colore principale": principale,
    "Colore secondario": secondario,
    "Altri colori": altriColori,
  });

  // DESTRUCTURING DI OGGETTI
  const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30,
    citta: "Roma",
    lavoro: "Programmatore",
  };

  //   const { nome, lavoro: professione } = persona;
  //   log("Destructuring oggetto", { nome, professione });

  const { nome, cognome, ...infoPersonali } = persona;
  log("Destructuring oggetti + REST", {
    "Cognome estratto": cognome,
    "Resto delle info": infoPersonali,
  });
  console.log(`Nome: ${nome}, Cognome: ${cognome}`);
  console.table(infoPersonali);
  console.log(persona);

  // ESEMPIO PRATICO: Funzione che riceve oggetto e usa destructuring
  function presentaPersona({ nome, eta, citta }) {
    return `Ciao, sono ${nome}, ho ${eta} anni e vivo a ${citta}!`;
  }

  const presentazione = presentaPersona(persona);
  log("Presentazione", presentazione);
});
