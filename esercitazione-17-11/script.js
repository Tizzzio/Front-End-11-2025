function somma() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let somma = n1 + n2;
  document.getElementById("risultato").textContent = "Risultato: " + somma;
}

function sottrazione() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let sottrazione = n1 - n2;
  document.getElementById("risultato").textContent = "Risultato: " + sottrazione;
}

function moltiplicazione() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let moltiplicazione = n1 * n2;
  document.getElementById("risultato").textContent = "Risultato: " + moltiplicazione;
}

function divisione() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let divisione = n1 / n2;
  document.getElementById("risultato").textContent = "Risultato: " + divisione;
}
