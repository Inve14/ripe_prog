// Esempio 2 - Contatore

// Elementi della pagina, presi una volta sola con querySelector.
const numeroDiv = document.querySelector("#numero");
const btnAggiungi = document.querySelector("#btnAggiungi");
const btnAzzera = document.querySelector("#btnAzzera");

// Questa variabile vive FUORI dalle funzioni: è il nostro "contatore".
// Se la mettessimo dentro la funzione onclick, ogni click la ricreerebbe
// da zero e non riusciremmo mai a farla crescere.
let contatore = 0;

// Funzione di appoggio: aggiorna solo il testo mostrato in pagina,
// leggendo il valore attuale della variabile contatore.
function aggiornaSchermo() {
  numeroDiv.innerText = contatore;
}

// Ad ogni click su Aggiungi: aumentiamo la variabile e riscriviamo il numero a schermo.
btnAggiungi.onclick = function () {
  contatore = contatore + 1;
  aggiornaSchermo();
};

// Azzera: riportiamo la variabile a 0 e aggiorniamo di nuovo lo schermo.
btnAzzera.onclick = function () {
  contatore = 0;
  aggiornaSchermo();
};
