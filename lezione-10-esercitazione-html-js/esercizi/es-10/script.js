// ES-10 - Gestione prodotti con ricerca
//
// CONSEGNA:
// Al submit di #formProdotto, aggiungi un dizionario { nome, prezzo }
// all'array "prodotti" e ridisegna la tabella con render().
//
// #inputRicerca deve filtrare in tempo reale (oninput, nessun pulsante):
// render() deve mostrare solo i prodotti il cui nome contiene il testo di
// ricerca (usa .filter() e .toLowerCase() per ignorare maiuscole/minuscole).
//
// Il div #totale deve mostrare la somma dei prezzi dei prodotti MOSTRATI
// in quel momento (cioè quelli dopo il filtro, non tutti quelli salvati).
//
// Concetti: filter su array, oninput per la ricerca, render() con dati filtrati

const formProdotto = document.querySelector("#formProdotto");
const inputNome = document.querySelector("#inputNome");
const inputPrezzo = document.querySelector("#inputPrezzo");
const inputRicerca = document.querySelector("#inputRicerca");
const corpoTabella = document.querySelector("#corpoTabella");
const totale = document.querySelector("#totale");

let prodotti = [];

function render() {
  // scrivi qui il codice:
  // 1. leggi il testo di ricerca da inputRicerca.value
  // 2. filtra l'array prodotti in base al nome
  // 3. ricostruisci #corpoTabella con i soli prodotti filtrati
  // 4. calcola e scrivi il totale dei prezzi filtrati in #totale
}

formProdotto.onsubmit = function (event) {
  event.preventDefault();
  // scrivi qui il codice
};

inputRicerca.oninput = function () {
  // scrivi qui il codice
};
