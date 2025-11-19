// Selezione degli elementi
const input = document.querySelector("#testo");
const bottone = document.querySelector("#aggiungi");
const lista = document.querySelector(".lista");
const messaggio = document.querySelector("#messaggio");
const svuotaBtn = document.querySelector("#svuota");

// Aggiorna il messaggio "lista vuota"
function aggiornaMessaggio() {
  const num = lista.querySelectorAll("li").length;
  messaggio.textContent = num === 0 ? "Nessuna attività inserita" : "";
}

// Aggiungere attività
bottone.addEventListener("click", function () {
  const testo = input.value.trim();
  if (testo === "") return;

  const li = document.createElement("li");
  const btnRimuovi = document.createElement("button");
  btnRimuovi.textContent = "X";

  const spanTesto = document.createElement("span");
  spanTesto.textContent = testo;

  li.appendChild(spanTesto);
  li.appendChild(btnRimuovi);
  lista.appendChild(li);

  input.value = "";
  aggiornaMessaggio();

  // Rimuovere singola attività
  btnRimuovi.addEventListener("click", function (event) {
    event.stopPropagation();
    li.remove();
    aggiornaMessaggio();
  });

  // Segnare completata
  spanTesto.addEventListener("click", function () {
    li.classList.toggle("completata");
  });

  // Doppio click → evidenziazione
  li.addEventListener("dblclick", function () {
    li.classList.toggle("evidenziata");
  });
});

// Svuota lista
svuotaBtn.addEventListener("click", function () {
  lista.innerHTML = "";
  aggiornaMessaggio();
});
