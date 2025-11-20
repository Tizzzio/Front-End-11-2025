// Array di colori
const colori = ["red", "blue", "green", "yellow", "purple", "orange"];

// Container e messaggi
const container = document.querySelector("#container");
const messaggio = document.querySelector("#messaggio");
const resetBtn = document.querySelector("#reset");

let coloreSegreto = scegliColoreSegreto();
let giocoFinito = false;

//Funzione per scegliere colore casuale
function scegliColoreSegreto() {
  return colori[Math.floor(Math.random() * colori.length)];
}

//Messaggi variabili
const messaggiVittoria = [
  "🎉 Fantastico! Hai indovinato!",
  "👏 Bravissimo! È proprio questo il colore!",
  "🏆 Complimenti! Hai trovato il colore segreto!",
];
const messaggiSbaglio = ["😅 Riprova!", "🤔 Quasi... prova un altro colore!", "🙃 Non è questo, continua a tentare!"];

// Funzione per creare i quadrati
function creaQuadrati() {
  container.innerHTML = "";
  giocoFinito = false;

  colori.forEach((colore) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = colore;

    square.addEventListener("click", () => {
      if (giocoFinito || square.classList.contains("inactive")) return;

      if (colore === coloreSegreto) {
        // Vittoria
        messaggio.textContent = messaggiVittoria[Math.floor(Math.random() * messaggiVittoria.length)];

        // Solo i quadrati corretti diventano del colore segreto
        document.querySelectorAll(".square").forEach((sq) => {
          sq.style.backgroundColor = coloreSegreto;
          sq.classList.add("inactive");
        });

        giocoFinito = true;
      } else {
        // Sbaglio
        messaggio.textContent = messaggiSbaglio[Math.floor(Math.random() * messaggiSbaglio.length)];
        // Quadrato sbagliato diventa leggermente opaco
        square.classList.add("inactive");
      }
    });

    container.appendChild(square);
  });
}

// Evento reset
resetBtn.addEventListener("click", () => {
  coloreSegreto = scegliColoreSegreto();
  messaggio.textContent = "";
  creaQuadrati();
});

// Crea i quadrati inizialmente
creaQuadrati();
