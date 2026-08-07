// ES-05 - Cache remota GET
//
// CONSEGNA:
// Al click sul pulsante #btnLeggi, leggi la chiave scritta nell'input e
// manda una fetch POST a URL_GET per cercarla nella cache remota del prof.
// Se il valore esiste mostralo in #esito, altrimenti mostra un messaggio
// di errore.
//
// Concetti: fetch POST, gestione risposta null

const inputChiave = document.querySelector("#inputChiave");
const btnLeggi = document.querySelector("#btnLeggi");
const esito = document.querySelector("#esito");

// token personale, ottenuto registrandosi su ws.cipiaceinfo.it/register/
const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

btnLeggi.onclick = async () => {
  // scrivi qui il codice:
  // 1. leggi la chiave dall'input
  // 2. fai la fetch POST verso URL_GET con:
  //    - method: "POST"
  //    - headers: Content-Type "application/json" + header "key" col TOKEN
  //    - body: JSON.stringify({ key: chiave })
  // 3. converti la risposta con .json(): se la chiave esiste, data.result è
  //    una STRINGA (da riaprire con JSON.parse); se non esiste, data.result
  //    è un oggetto con un messaggio di errore. Controlla con typeof!
  // 4. mostra il valore trovato oppure un messaggio di errore in #esito
};
