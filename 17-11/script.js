let giorno = 3; // Cambia questo valore per testare altri giorni

switch (giorno) {
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Giorno non valido");
}

let mese = "gennaio"; // Cambia questo valore per testare altri mesi

switch (mese) {
  case "gennaio":
    console.log("31 giorni");
    break;
  case "febbraio":
    console.log("28 o 29 giorni");
    break;
  case "marzo":
    console.log("31 giorni");
    break;
  case "aprile":
    console.log("30 giorni");
    break;
  case "maggio":
    console.log("31 giorni");
    break;
  case "giugno":
    console.log("30 giorni");
    break;
  case "luglio":
    console.log("31 giorni");
    break;
  case "agosto":
    console.log("31 giorni");
    break;
  case "settembre":
    console.log("30 giorni");
    break;
  case "ottobre":
    console.log("31 giorni");
    break;
  case "novembre":
    console.log("30 giorni");
    break;
  case "dicembre":
    console.log("31 giorni");
    break;
  default:
    console.log("Mese non valido");
}

let isStudent = false; // Cambia questo valore per testare altri stati
let haEsami = true; // Cambia questo valore per testare altri stati
let eta = 17; // Cambia questo valore per testare altre età

if (isStudent || haEsami || eta < 18) {
  console.log("studia");
} else {
  console.log("relax");
}
