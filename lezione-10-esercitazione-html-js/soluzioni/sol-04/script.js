// SOL-04 - Caratteri in tempo reale

const testo = document.querySelector("#testo");
const conteggio = document.querySelector("#conteggio");

// oninput scatta ad ogni singolo carattere digitato o cancellato,
// a differenza di onclick che serve solo per i pulsanti.
testo.oninput = function () {
  // .value.length conta i caratteri della stringa scritta finora.
  const numeroCaratteri = testo.value.length;
  conteggio.innerText = `Hai scritto ${numeroCaratteri} caratteri`;
};
