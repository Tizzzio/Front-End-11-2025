const btn = document.getElementById("run");
const out = document.getElementById("output");

// Utility
function log(title, content) {
  out.textContent += `\n--- ${title} ---\n`;
  out.textContent += (typeof content === "string" ? content : JSON.stringify(content, null, 2)) + "\n";
}

const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rndItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

btn.addEventListener("click", () => {
  out.textContent = "";

  //ARRAY

  // 1.1
  let playlist = ["Heat", "Sunrise", "Echo"];
  const nuoviBrani = ["Wave", "Sky", "Drift", "Bloom"];
  playlist.push(rndItem(nuoviBrani), rndItem(nuoviBrani));
  const primo = playlist.shift();
  playlist.push(primo);
  const centrali = playlist.slice(1, playlist.length - 1);
  log("1.1 Playlist dinamica", { playlist, centrali });

  // 1.2
  let coda = ["A", "B", "C", "D"];
  const nuovePersone = ["X", "Y", "Z"];
  coda.unshift(rndItem(nuovePersone), rndItem(nuovePersone));
  const uscita = coda.pop();
  const rimosso = coda.splice(1, 1)[0];
  log("1.2 Coda clienti", { coda, uscita, rimosso });

  // 1.3
  let numeri = [5, 3, 9, 1, 4];
  numeri.shift();
  numeri.pop();
  numeri.push(rnd(6, 12));
  const sottoserie = numeri.slice(0, 2);
  log("1.3 Serie numerica", { numeri, sottoserie });

  // 1.4
  let regali = ["Libro", "Puzzle", "Sciarpa"];
  const nuoviRegali = ["Gioco", "Borsa", "Tazza"];
  regali.unshift(rndItem(nuoviRegali), rndItem(nuoviRegali));
  regali.splice(1, 1);
  const ultimiDue = regali.slice(-2);
  log("1.4 Lista regali", { regali, ultimiDue });

  // 1.5
  let messaggi = ["hey", "ciao", "tutto bene?", "ok"];
  const nuoviMsg = ["ciao a tutti", "buongiorno", "arrivo"];
  messaggi.push(rndItem(nuoviMsg));
  messaggi.unshift(rndItem(nuoviMsg));
  messaggi.pop();
  const centraliMsg = messaggi.slice(1, messaggi.length - 1);
  log("1.5 Storico messaggi", { messaggi, centraliMsg });

  // 1.6
  let scorte = [12, 5, 8, 3, 9];
  scorte.push(rnd(1, 10), rnd(1, 10));
  const primoSc = scorte.shift();
  const ultimoSc = scorte.pop();
  scorte.unshift(ultimoSc);
  const centraliSc = scorte.slice(1, scorte.length - 1);
  log("1.6 Scorte magazzino", { scorte, centraliSc });

  TERNARIO + REST / SPREAD;

  // 2.1
  const spesa = rnd(50, 150);
  const sconto = spesa >= 100 ? "sconto" : "nessuno";
  log("2.1 Controllo sconto", { spesa, sconto });

  // 2.2
  function concatenaSep(sep, ...pezzi) {
    return pezzi.join(sep);
  }
  const frase1 = concatenaSep("-", "a", "b", "c");
  const arrPezzi = ["uno", "due", "tre"];
  const frase2 = concatenaSep("/", ...arrPezzi);
  log("2.2 concatenaSep", { frase1, frase2 });

  // 2.3
  const t1 = ["js", "es6"],
    t2 = ["alg", "db"];
  const allTags = [...t1, ...t2];
  log("2.3 Merge profili", allTags);

  // 2.4
  const eta = rnd(10, 25);
  const accesso = eta >= 18 ? "adulto" : "minore";
  log("2.4 Verifica accesso", { eta, accesso });

  // 2.5
  function sommaVariabile(...nums) {
    return nums.reduce((a, b) => a + b, 0);
  }
  const som1 = sommaVariabile(rnd(1, 10), rnd(1, 10), rnd(1, 10));
  const som2 = sommaVariabile(...[rnd(5, 15), rnd(5, 15), rnd(5, 15)]);
  log("2.5 Somma variabile", { som1, som2 });

  // 2.6
  const p1 = ["pane", "latte"],
    p2 = ["pasta", "uova"];
  const listaCompleta = [...p1, ...p2];
  log("2.6 Unione prodotti", listaCompleta);

  DESTRUCTURING;

  // 3.1
  const info = ["Luca", 28, "CTO", "Milano", "Italia"];
  const [nome, , ruolo] = info;
  log("3.1 Salto di elementi", { nome, ruolo });

  // 3.2
  const user = { username: "cli_user", role: "editor" };
  const { username: nick, role, active = false } = user;
  log("3.2 Alias + default", { nick, role, active });

  // 3.3
  function prendiPrimoEConta(...items) {
    const [primo, ...resto] = items;
    return { primo, contaResto: resto.length };
  }
  log("3.3 prendiPrimoEConta", prendiPrimoEConta(1, 2, 3, 4));

  // 3.4
  const dati = ["Marco", "Rossi", 32, "Roma", "IT"];
  const [nome2, , , citta2] = dati;
  log("3.4 Estrazione selettiva", { nome2, citta2 });

  // 3.5
  const config = { theme: "dark" };
  const { theme, lang: lingua = "it" } = config;
  log("3.5 Default + alias avanzato", { theme, lingua });

  // 3.6
  function riassumiUtente({ nome, cognome, ...resto }) {
    return { nomeCompleto: `${nome} ${cognome}`, altriDati: resto };
  }
  log("3.6 riassumiUtente", riassumiUtente({ nome: "Luca", cognome: "Bianchi", eta: 30 }));

  BONUS;

  // clone array
  const orig = [1, 2, 3],
    copia = [...orig];
  copia.push(rnd(10, 20));
  log("Bonus: clone array", { orig, copia });

  // Destructuring studenti
  const studenti = [
    { nome: "Anna", voto: 30 },
    { nome: "Luca", voto: 28 },
  ];
  function descrivi({ nome, voto }) {
    return `${nome} ha preso ${voto}`;
  }
  log("Bonus: descrivi studenti", studenti.map(descrivi));

  // Secondo elemento del primo array
  function secondoDelPrimo(...arrays) {
    const [primo] = arrays;
    return primo?.[1] ?? "non esiste";
  }
  log("Bonus: secondo del primo array", secondoDelPrimo([10, 20, 30], [1, 2]));

  // Prendi secondo e terzo
  function prendiSecondoTerzo([, b, c]) {
    return [b, c];
  }
  log("Bonus: secondo e terzo", prendiSecondoTerzo([100, 200, 300]));

  // Pari/Dispari
  function pariDispari(n) {
    return n % 2 === 0 ? "pari" : "dispari";
  }
  log("Bonus: pari/dispari", pariDispari(rnd(1, 100)));

  // Filtra stringhe >3
  function filtraLunghe(...strs) {
    return strs.filter((s) => s.length > 3);
  }
  log("Bonus: stringhe >3", filtraLunghe("ciao", "re", "javascript", "ok"));

  // Unisci 3 array
  log("Bonus: unisci 3 array", [...["a", "b"], ...[1, 2], ...[true, false]]);

  // Prodotto → stringa
  function descriviProdotto({ nome, prezzo = 0 }) {
    return `Nome: ${nome}, Prezzo: ${prezzo}`;
  }
  log("Bonus: descrivi prodotto", [descriviProdotto({ nome: "Libro" }), descriviProdotto({ nome: "PC", prezzo: 999 })]);
});
