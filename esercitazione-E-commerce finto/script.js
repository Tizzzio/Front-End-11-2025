// Dati iniziali
const tuttiProdotti = [
  { id: crypto.randomUUID(), nome: "Laptop", prezzo: 800, categoria: "tech", immagine: "https://picsum.photos/200" },
  { id: crypto.randomUUID(), nome: "Mouse", prezzo: 25, categoria: "tech", immagine: "https://picsum.photos/201" },
  { id: crypto.randomUUID(), nome: "Libro", prezzo: 15, categoria: "cultura", immagine: "https://picsum.photos/202" },
  { id: crypto.randomUUID(), nome: "Tastiera", prezzo: 60, categoria: "tech", immagine: "https://picsum.photos/203" },
  { id: crypto.randomUUID(), nome: "Penna", prezzo: 3, categoria: "ufficio", immagine: "https://picsum.photos/204" },
  { id: crypto.randomUUID(), nome: "Monitor", prezzo: 250, categoria: "tech", immagine: "https://picsum.photos/205" },
  { id: crypto.randomUUID(), nome: "Webcam", prezzo: 80, categoria: "tech", immagine: "https://picsum.photos/206" },
  { id: crypto.randomUUID(), nome: "Cuffie", prezzo: 45, categoria: "tech", immagine: "https://picsum.photos/207" },
  { id: crypto.randomUUID(), nome: "SSD 1TB", prezzo: 120, categoria: "tech", immagine: "https://picsum.photos/208" },
  { id: crypto.randomUUID(), nome: "Router WiFi", prezzo: 65, categoria: "tech", immagine: "https://picsum.photos/209" },
  { id: crypto.randomUUID(), nome: "Romanzo Giallo", prezzo: 18, categoria: "cultura", immagine: "https://picsum.photos/210" },
  { id: crypto.randomUUID(), nome: "Enciclopedia", prezzo: 95, categoria: "cultura", immagine: "https://picsum.photos/211" },
  { id: crypto.randomUUID(), nome: "Fumetto", prezzo: 8, categoria: "cultura", immagine: "https://picsum.photos/212" },
  { id: crypto.randomUUID(), nome: "Rivista", prezzo: 5, categoria: "cultura", immagine: "https://picsum.photos/213" },
  { id: crypto.randomUUID(), nome: "Audiolibro", prezzo: 12, categoria: "cultura", immagine: "https://picsum.photos/214" },
  { id: crypto.randomUUID(), nome: "Quaderno A4", prezzo: 4, categoria: "ufficio", immagine: "https://picsum.photos/215" },
  { id: crypto.randomUUID(), nome: "Graffette", prezzo: 2, categoria: "ufficio", immagine: "https://picsum.photos/216" },
  { id: crypto.randomUUID(), nome: "Evidenziatori", prezzo: 6, categoria: "ufficio", immagine: "https://picsum.photos/217" },
  { id: crypto.randomUUID(), nome: "Calcolatrice", prezzo: 15, categoria: "ufficio", immagine: "https://picsum.photos/218" },
  { id: crypto.randomUUID(), nome: "Agenda 2025", prezzo: 20, categoria: "ufficio", immagine: "https://picsum.photos/219" },
  { id: crypto.randomUUID(), nome: "Cartelletta", prezzo: 3, categoria: "ufficio", immagine: "https://picsum.photos/220" },
  { id: crypto.randomUUID(), nome: "Spillatrice", prezzo: 8, categoria: "ufficio", immagine: "https://picsum.photos/221" },
  { id: crypto.randomUUID(), nome: "Matite Colorate", prezzo: 10, categoria: "ufficio", immagine: "https://picsum.photos/222" },
  { id: crypto.randomUUID(), nome: "Smartphone", prezzo: 600, categoria: "tech", immagine: "https://picsum.photos/223" },
  { id: crypto.randomUUID(), nome: "Tablet", prezzo: 350, categoria: "tech", immagine: "https://picsum.photos/224" },
  { id: crypto.randomUUID(), nome: "Smartwatch", prezzo: 180, categoria: "tech", immagine: "https://picsum.photos/225" },
  { id: crypto.randomUUID(), nome: "Powerbank", prezzo: 30, categoria: "tech", immagine: "https://picsum.photos/226" },
  { id: crypto.randomUUID(), nome: "Stampante", prezzo: 140, categoria: "tech", immagine: "https://picsum.photos/227" },
  { id: crypto.randomUUID(), nome: "Zaino", prezzo: 45, categoria: "accessori", immagine: "https://picsum.photos/228" },
  { id: crypto.randomUUID(), nome: "Borsa Laptop", prezzo: 35, categoria: "accessori", immagine: "https://picsum.photos/229" },
  { id: crypto.randomUUID(), nome: "Lampada Scrivania", prezzo: 28, categoria: "accessori", immagine: "https://picsum.photos/230" },
  { id: crypto.randomUUID(), nome: "Tappetino Mouse", prezzo: 12, categoria: "accessori", immagine: "https://picsum.photos/231" },
  { id: crypto.randomUUID(), nome: "Supporto Laptop", prezzo: 40, categoria: "accessori", immagine: "https://picsum.photos/232" },
  { id: crypto.randomUUID(), nome: "Cavo HDMI", prezzo: 15, categoria: "accessori", immagine: "https://picsum.photos/233" },
  { id: crypto.randomUUID(), nome: "Hub USB", prezzo: 25, categoria: "accessori", immagine: "https://picsum.photos/234" },
];
let carrello = [];
let categoriaAttiva = "tutte";

function filtraCategoria(categoria) {
  categoriaAttiva = categoria;

  document.querySelectorAll(".filtri button").forEach((btn) => {
    btn.classList.remove("attivo");
  });
  if (event && event.target) {
    event.target.classList.add("attivo");
  }

  mostraProdotti();
}

function aggiungiAlCarrello(idProdotto) {
  const prodotto = tuttiProdotti.find((p) => p.id === idProdotto);
  const esistente = carrello.find((item) => item.id === idProdotto);

  if (esistente) {
    esistente.quantita++;
  } else {
    carrello.push({ ...prodotto, quantita: 1 });
  }
  aggiornaCarrello();
}

function rimuoviDalCarrello(idProdotto) {
  //FILTER
  carrello = carrello.filter((item) => item.id !== idProdotto);
  aggiornaCarrello();
}

function mostraProdotti() {
  const container = document.getElementById("prodotti-container");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  //FILTER
  const prodottiFiltrati = categoriaAttiva === "tutte" ? tuttiProdotti : tuttiProdotti.filter((p) => p.categoria === categoriaAttiva);

  prodottiFiltrati.forEach((prodotto) => {
    const divProdotto = document.createElement("div");
    divProdotto.classList.add("prodotto");

    const img = document.createElement("img");
    img.src = prodotto.immagine;
    img.alt = prodotto.nome;
    divProdotto.appendChild(img);

    const spanCategoria = document.createElement("span");
    spanCategoria.classList.add("categoria");
    spanCategoria.textContent = prodotto.categoria;
    divProdotto.appendChild(spanCategoria);

    const h3Nome = document.createElement("h3");
    h3Nome.textContent = prodotto.nome;
    divProdotto.appendChild(h3Nome);

    const pPrezzo = document.createElement("p");
    pPrezzo.classList.add("prezzo");
    pPrezzo.textContent = `€${prodotto.prezzo.toFixed(2)}`;
    divProdotto.appendChild(pPrezzo);

    const buttonAggiungi = document.createElement("button");
    buttonAggiungi.classList.add("btn-aggiungi");
    buttonAggiungi.textContent = "Aggiungi al Carrello";

    buttonAggiungi.addEventListener("click", () => {
      aggiungiAlCarrello(prodotto.id);
    });
    divProdotto.appendChild(buttonAggiungi);
    container.appendChild(divProdotto);
  });
}
function aggiornaCarrello() {
  const contenuto = document.getElementById("carrello-contenuto");

  while (contenuto.firstChild) {
    contenuto.removeChild(contenuto.firstChild);
  }

  if (carrello.length === 0) {
    const pVuoto = document.createElement("p");
    pVuoto.classList.add("carrello-vuoto");
    pVuoto.textContent = "Il carrello è vuoto";
    contenuto.appendChild(pVuoto);
    return;
  }

  //MAP
  carrello.forEach((item) => {
    const subtotale = item.prezzo * item.quantita;

    const divItem = document.createElement("div");
    divItem.classList.add("item-carrello");

    const divDettagli = document.createElement("div");

    const strongNome = document.createElement("strong");
    strongNome.textContent = item.nome;
    divDettagli.appendChild(strongNome);

    const smallSubtotale = document.createElement("small");
    smallSubtotale.textContent = `€${item.prezzo.toFixed(2)} x ${item.quantita} = €${subtotale.toFixed(2)}`;
    divDettagli.appendChild(smallSubtotale);

    divItem.appendChild(divDettagli);

    const buttonRimuovi = document.createElement("button");
    buttonRimuovi.classList.add("btn-rimuovi");
    buttonRimuovi.textContent = "✕";

    buttonRimuovi.addEventListener("click", () => {
      rimuoviDalCarrello(item.id);
    });
    divItem.appendChild(buttonRimuovi);

    contenuto.appendChild(divItem);
  });

  const totale = carrello.reduce((acc, item) => {
    return acc + item.prezzo * item.quantita;
  }, 0);

  const divTotale = document.createElement("div");
  divTotale.classList.add("totale");
  divTotale.textContent = `TOTALE: €${totale.toFixed(2)}`;
  contenuto.appendChild(divTotale);
}
console.table(tuttiProdotti);
mostraProdotti();

//
//
//
//
//
//
// // Esempi di utilizzo di map, filter e reduce
// // 1. Map: Creare un array di nomi dei prodotti
// const nomiProdotti = tuttiProdotti.map((prodotto) => prodotto.nome);
// console.log("Nomi dei prodotti:", nomiProdotti);
// // 2. Filter: Filtrare i prodotti con prezzo superiore a 100
// const prodottiCostosi = tuttiProdotti.filter((prodotto) => prodotto.prezzo > 100);
// console.log("Prodotti con prezzo superiore a 100:", prodottiCostosi);
// // 3. Reduce: Calcolare il prezzo totale di tutti i prodotti
// const prezzoTotale = tuttiProdotti.reduce((totale, prodotto) => totale + prodotto.prezzo, 0);
// console.log("Prezzo totale di tutti i prodotti:", prezzoTotale);
// // 4. Combinazione di map, filter e reduce: Calcolare il prezzo totale dei prodotti tech
// const prezzoTotaleTech = tuttiProdotti.filter((prodotto) => prodotto.categoria === "tech").reduce((totale, prodotto) => totale + prodotto.prezzo, 0);
// console.log("Prezzo totale dei prodotti tech:", prezzoTotaleTech);
// // 5. Creare un array di oggetti con nome e prezzo scontato del 10%
// const prodottiScontati = tuttiProdotti.map((prodotto) => ({
//   nome: prodotto.nome,
//   prezzoScontato: (prodotto.prezzo * 0.9).toFixed(2),
// }));
// console.log("Prodotti con prezzo scontato del 10%:", prodottiScontati);
// // 6. Filtrare i prodotti della categoria 'ufficio' con prezzo inferiore a 10
// const prodottiUfficioEconomici = tuttiProdotti.filter((prodotto) => prodotto.categoria === "ufficio" && prodotto.prezzo < 10);
// console.log("Prodotti della categoria 'ufficio' con prezzo inferiore a 10:", prodottiUfficioEconomici);
// // 7. Calcolare il prezzo medio dei prodotti
// const prezzoMedio = prezzoTotale / tuttiProdotti.length;
// console.log("Prezzo medio dei prodotti:", prezzoMedio.toFixed(2));
// // 8. Creare un array di nomi dei prodotti tech
// const nomiProdottiTech = tuttiProdotti.filter((prodotto) => prodotto.categoria === "tech").map((prodotto) => prodotto.nome);
// console.log("Nomi dei prodotti tech:", nomiProdottiTech);
// // 9. Trovare il prodotto più costoso
// const prodottoPiuCostoso = tuttiProdotti.reduce((max, prodotto) => (prodotto.prezzo > max.prezzo ? prodotto : max));
// console.log("Prodotto più costoso:", prodottoPiuCostoso);
// // 10. Contare il numero di prodotti per ogni categoria
// const conteggioCategorie = tuttiProdotti.reduce((conteggio, prodotto) => {
//   conteggio[prodotto.categoria] = (conteggio[prodotto.categoria] || 0) + 1;
//   return conteggio;
// }, {});
// console.log("Numero di prodotti per categoria:", conteggioCategorie);
// Fine esempi di utilizzo di map, filter e reduce
