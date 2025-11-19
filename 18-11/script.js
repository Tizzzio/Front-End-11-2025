// ========================================
// LEZIONE DOM - SELEZIONE E NAVIGAZIONE ELEMENTI
// ========================================

// 1. DOCUMENT OBJECT
// Il document rappresenta l'intera pagina HTML come oggetto JavaScript
// Contiene tutti gli elementi, proprietà e metodi per manipolare la pagina
console.log(document);

// 2. SELEZIONE CON querySelector()
// querySelector() seleziona il PRIMO elemento che corrisponde al selettore CSS
// Sintassi: document.querySelector("selettore-css")
const main = document.querySelector("main");
console.log(main);

// 3. NAVIGAZIONE TRA ELEMENTI FRATELLI (siblings)
// nextElementSibling: restituisce l'elemento successivo allo stesso livello
console.log("Elemento successivo:", main.nextElementSibling);

// previousElementSibling: restituisce l'elemento precedente allo stesso livello
console.log("Elemento precedente:", main.previousElementSibling);

// 4. NAVIGAZIONE VERSO IL GENITORE
// parentElement: restituisce l'elemento genitore (quello che contiene l'elemento corrente)
console.log("Genitore:", main.parentElement);

// 5. NAVIGAZIONE VERSO I FIGLI
// children: restituisce una HTMLCollection con tutti gli elementi figli diretti
// NOTA: children contiene SOLO elementi HTML, non i nodi di testo
console.log("Tutti i figli:", main.children);

// 6. SELEZIONE PER TAG NAME
// getElementsByTagName() restituisce una HTMLCollection LIVE di tutti gli elementi con quel tag
// HTMLCollection LIVE = si aggiorna automaticamente se il DOM cambia
const tuttiLi = document.getElementsByTagName("li");
console.log("Tutti gli <li>:", tuttiLi.length);

// 7. SELEZIONE DEL PRIMO ELEMENTO
// querySelector() con tag seleziona solo il PRIMO elemento trovato
const primoParagrafo = document.querySelector("p");
console.log("Primo paragrafo:", primoParagrafo);

// 8. SELEZIONE PER ID
// getElementById() è il metodo più veloce per selezionare un elemento
// Cerca direttamente nell'hash map degli ID del browser
const lista = document.getElementById("lista-elementi");
console.log("Lista elementi:", lista);

// 9. ITERAZIONE SUGLI ATTRIBUTI
// attributes: restituisce una collezione di tutti gli attributi dell'elemento
// Utile per ispezionare dinamicamente tutti gli attributi (class, id, data-*, etc.)
for (let attr of lista.attributes) {
  console.log(`${attr.name}: ${attr.value}`);
}
console.log(lista.attributes.length);

// 10. SELEZIONE CON ATTRIBUTE SELECTOR
// Sintassi CSS: [nome-attributo="valore"]
// Seleziona elementi che hanno un attributo specifico con un valore specifico
const elementoDataId2 = document.querySelector('[data-id="2"]');

// textContent: restituisce SOLO il testo, senza tag HTML
console.log("Elemento trovato:", elementoDataId2.textContent);

// innerHTML: restituisce il contenuto HTML completo, inclusi i tag
console.log("Elemento trovato:", elementoDataId2.innerHTML);

// 11. SELEZIONE PER TAG
// querySelector("div") seleziona il PRIMO <div> trovato nel documento
const primoDiv = document.querySelector("div");
console.log("Primo <div>:", primoDiv);

// 12. SELEZIONE PER CLASSE
// querySelector(".classe") seleziona il primo elemento con quella classe
// NOTA: il punto (.) indica che è una classe CSS
const intro = document.querySelector(".intro");
console.log("Intro:", intro);

// 13. SELEZIONE PER ID (con querySelector)
// querySelector("#id") funziona come getElementById, ma è più lento
// NOTA: il cancelletto (#) indica che è un ID
const contenuto = document.querySelector("#contenuto");
console.log("Contenuto:", contenuto);

// 14. SELEZIONE MULTIPLA
// querySelectorAll() restituisce una NodeList STATICA con TUTTI gli elementi che corrispondono
// NodeList STATICA = non si aggiorna se il DOM cambia dopo la selezione
const allLi = document.querySelectorAll("li");
console.log("Tutti gli <li> con querySelectorAll:", allLi);

// 15. ITERAZIONE SU NodeList
// NodeList è iterabile con for...of (come un array)
// Possiamo accedere alle proprietà di ogni singolo elemento
for (const li of allLi) {
  console.log("Singolo <li>:", li.textContent);
}

// 16. SELETTORI CSS COMPLESSI
// querySelector() supporta qualsiasi selettore CSS valido
// ".menu li a" = seleziona il primo <a> dentro un <li> dentro un elemento con classe "menu"
const primoLinkMenu = document.querySelector(".menu li a");
console.log("Primo link nel menu:", primoLinkMenu);
