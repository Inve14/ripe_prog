// ============================================================
// Esempio 03 - fetch POST con cache remota
// ============================================================
// Obiettivo: usare il servizio "Cache Remota" del prof per
// SALVARE (POST) e poi RILEGGERE (POST) un valore associato a
// una chiave. A differenza degli esempi precedenti (solo GET),
// qui vediamo cosa cambia quando dobbiamo MANDARE dati al server.
//
// Differenza GET vs POST:
// - GET: chiedo/leggo dati, di solito passo i parametri nell'URL,
//   niente body.
// - POST: mando dati al server, devo specificare:
//     method: "POST"
//     headers: informazioni aggiuntive (qui: formato JSON + token)
//     body: i dati veri e propri, sempre come TESTO JSON
//           (per questo si usa JSON.stringify sull'oggetto)
//
// NB: qui il token di autenticazione NON va nel body, ma in un
// header personalizzato chiamato "key" (scelta della API del
// prof). Il body invece contiene la SUA chiave "key" che è il
// nome sotto cui salviamo il dato (da non confondere con
// l'header "key" che è il token!).

const inputChiaveSet = document.getElementById("inputChiaveSet");
const inputValoreSet = document.getElementById("inputValoreSet");
const btnSalva = document.getElementById("btnSalva");
const esitoSalva = document.getElementById("esitoSalva");

const inputChiaveGet = document.getElementById("inputChiaveGet");
const btnLeggi = document.getElementById("btnLeggi");
const esitoLeggi = document.getElementById("esitoLeggi");

// token personale ottenuto registrandosi su ws.cipiaceinfo.it/register/
const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

// ------------------------------------------------------------
// SALVA (POST su /cache/set)
// ------------------------------------------------------------
btnSalva.onclick = async () => {
  const chiave = inputChiaveSet.value;
  const valore = inputValoreSet.value;

  // fetch con la configurazione per una POST:
  const response = await fetch(URL_SET, {
    method: "POST", // stiamo mandando dati, non solo leggendo
    headers: {
      "Content-Type": "application/json", // diciamo al server "ti mando JSON"
      "key": TOKEN                         // il nostro token di autenticazione
    },
    // il body deve essere una STRINGA: per questo usiamo JSON.stringify
    // sull'oggetto { key, value }. Il "value" a sua volta deve essere
    // una stringa JSON, quindi facciamo JSON.stringify anche su di lui.
    body: JSON.stringify({
      key: chiave,
      value: JSON.stringify(valore)
    })
  });

  // come sempre, due await: uno per fetch, uno per .json()
  const data = await response.json();
  console.log(data); // { result: "Ok" } se è andato tutto bene

  esitoSalva.innerText = `Salvato! (${chiave} = ${valore})`;
};

// ------------------------------------------------------------
// LEGGI (POST su /cache/get)
// ------------------------------------------------------------
// Nota: anche la LETTURA qui è una POST (non una GET), perché lo
// impone questa specifica API: dobbiamo comunque mandare un body
// con dentro la chiave da cercare e l'header con il token.
btnLeggi.onclick = async () => {
  const chiave = inputChiaveGet.value;

  const response = await fetch(URL_GET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": TOKEN
    },
    body: JSON.stringify({ key: chiave })
  });

  const data = await response.json();
  console.log(data); // { result: "\"valore salvato\"" }

  // data.result è una stringa JSON (perché l'avevamo salvata con
  // JSON.stringify), quindi la "riapriamo" con JSON.parse per
  // tornare al valore originale
  const valore = JSON.parse(data.result);

  esitoLeggi.innerText = `Valore trovato: ${valore}`;
};
