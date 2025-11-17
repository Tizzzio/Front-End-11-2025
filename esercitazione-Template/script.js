// Array globale per memorizzare gli utenti
const utenti = [];

// Funzione per creare un utente (categoria professione)
function creaUtente(nome, eta, professione = "non specificata") {
  let categoriaProfessione;

  switch (professione.toLowerCase()) {
    case "studente":
      categoriaProfessione = "Studente";
      break;
    case "developer":
      categoriaProfessione = "Developer";
      break;
    case "sviluppatore":
      categoriaProfessione = "Sviluppatore";
      break;
    case "designer":
      categoriaProfessione = "Designer";
      break;
    default:
      categoriaProfessione = "Altro";
  }

  return {
    nome,
    eta,
    professione,
    categoriaProfessione,
  };
}

//Funzione per aggiungere un utente
function aggiungiUtente() {
  const nome = document.getElementById("nome").value.trim();
  const eta = Number(document.getElementById("eta").value.trim());
  const professione = document.getElementById("professione").value.trim();
  console.log("Dati ricevuti:", { nome, eta, professione });

  //VALIDAZIONI
  if (!nome) {
    console.error("Nome mancante!");
    mostraMessaggio("Inserisci il nome pollo!");
    return;
  }

  if (!professione) {
    console.error("Professione mancante!");
    mostraMessaggio("Inserisci la professione pollo!");
    return;
  }

  if (!eta || eta < 0 || eta > 120) {
    console.warn("Età non valida");
    mostraMessaggio("L'età deve essere tra 0 e 120");
    return;
  }

  //Switch
  let categoria;
  switch (true) {
    case eta < 10:
      categoria = "Ma che ci fai qua a " + eta + " anni?";
      break;
    case eta < 17:
      categoria = "Adolescente";
      break;
    case eta < 65:
      categoria = "Adulto";
      break;
    default:
      categoria = "Anziano";
  }

  //Creazione oggetto utente completo
  const nuovoUtente = {
    ...creaUtente(nome, eta, professione),
    categoria,
  };
  utenti.push(nuovoUtente);

  //Scope variabile di funzione
  let messaggio = "Utente aggiunto!";
  console.log(messaggio);

  //Aggiorna DOM
  mostraMessaggio("");
  mostraUtenti();

  //Reset campi input
  document.getElementById("nome").value = "";
  document.getElementById("eta").value = "";
  document.getElementById("professione").value = "";
}

//Funzione per mostrare un messaggio di errore
const mostraMessaggio = (msg = "") => {
  document.getElementById("messaggio").textContent = msg;
};

//Funzione per mostrare tutti gli utenti nel div "lista"
function mostraUtenti() {
  const container = document.getElementById("lista");
  container.innerHTML = "";

  utenti.forEach((utente, index) => {
    const div = document.createElement("div");
    div.className = "user-card";

    div.innerHTML = `
            <strong>Nome:</strong> ${utente.nome}<br>
            <strong>Età:</strong> ${utente.eta}<br>
            <strong>Categoria Età:</strong> ${utente.categoria}<br>
            <strong>Professione:</strong> ${utente.professione}<br>
            <strong>Categoria Professione:</strong> ${utente.categoriaProfessione}<br>
        `;

    //Pulsante Rimuovi
    const btnRimuovi = document.createElement("button");
    btnRimuovi.textContent = "Rimuovi";
    btnRimuovi.style.marginTop = "5px";
    btnRimuovi.onclick = () => {
      utenti.splice(index, 1);
      mostraUtenti();
    };

    div.appendChild(btnRimuovi);
    container.appendChild(div);
  });
}

//Funzione di debug
function debugUtenti() {
  console.table(utenti);

  for (let i = 0; i < utenti.length; i++) {
    console.log(`Utente #${i}`);
    for (const prop in utenti[i]) {
      console.log(`${prop}: ${utenti[i][prop]}`);
    }
  }
}
