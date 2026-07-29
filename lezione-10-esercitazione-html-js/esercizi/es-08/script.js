// ES-08 - Tabella studenti
//
// CONSEGNA:
// Al submit di #formStudente, aggiungi un dizionario { nome, voto }
// all'array "studenti" e ridisegna la tabella con render(). Ogni riga deve
// mostrare un badge verde "Promosso" (voto >= 6) o rosso "Bocciato".
// Al click su #btnSvuota, svuota l'array e ridisegna la tabella vuota.
//
// Suggerimento per il template di riga: puoi costruire una stringa con dei
// segnaposto e sostituirli con .replace(), oppure usare direttamente i
// template literal con ${...} come negli esempi visti a lezione.
//
// Concetti: array di dizionari, render() che ricrea la tabella, template.replace

const formStudente = document.querySelector("#formStudente");
const inputNome = document.querySelector("#inputNome");
const inputVoto = document.querySelector("#inputVoto");
const corpoTabella = document.querySelector("#corpoTabella");
const btnSvuota = document.querySelector("#btnSvuota");

let studenti = [];

function render() {
  // scrivi qui il codice: ricostruisci #corpoTabella leggendo l'array studenti
}

formStudente.onsubmit = function (event) {
  event.preventDefault();
  // scrivi qui il codice
};

btnSvuota.onclick = function () {
  // scrivi qui il codice
};
