// ES-09 - Simulatore PIN
//
// CONSEGNA:
// FASE 1 - Impostazione: al click su #btnImposta, unisci le 4 cifre in una
// stringa e salvala come PIN. Pulisci gli input, nascondi #btnImposta e
// mostra #btnVerifica. Aggiorna #istruzioni per dire di reinserire il PIN.
//
// FASE 2 - Verifica: al click su #btnVerifica, unisci di nuovo le 4 cifre
// e confrontale col PIN salvato.
//   - Se corrisponde: mostra un messaggio di sblocco (alert-success) e
//     disabilita i 4 input e il pulsante (disabled = true).
//   - Se non corrisponde: diminuisci i tentativi rimasti, mostra un
//     messaggio con i tentativi rimasti (alert-warning) e pulisci gli input.
//     Se i tentativi finiscono: mostra un messaggio di blocco (alert-danger)
//     e disabilita input e pulsante.
//
// Concetti: variabili di stato, fasi della logica, disabilitare input

const inputCifra1 = document.querySelector("#inputCifra1");
const inputCifra2 = document.querySelector("#inputCifra2");
const inputCifra3 = document.querySelector("#inputCifra3");
const inputCifra4 = document.querySelector("#inputCifra4");
const btnImposta = document.querySelector("#btnImposta");
const btnVerifica = document.querySelector("#btnVerifica");
const istruzioni = document.querySelector("#istruzioni");
const messaggio = document.querySelector("#messaggio");

// variabili di stato: vivono fuori dalle funzioni
let pinSalvato = null;
let tentativiRimasti = 3;

function leggiCifre() {
  // funzione di appoggio: unisce le 4 cifre in un'unica stringa, es. "1234"
  return inputCifra1.value + inputCifra2.value + inputCifra3.value + inputCifra4.value;
}

function svuotaInput() {
  inputCifra1.value = "";
  inputCifra2.value = "";
  inputCifra3.value = "";
  inputCifra4.value = "";
}

btnImposta.onclick = function () {
  // scrivi qui il codice
};

btnVerifica.onclick = function () {
  // scrivi qui il codice
};
