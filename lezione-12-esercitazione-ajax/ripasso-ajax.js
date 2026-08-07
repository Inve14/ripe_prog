// ============================================================
// Ripasso veloce - AJAX e fetch (lezione 11)
// Eseguibile con: node ripasso-ajax.js
// ============================================================

// ------------------------------------------------------------
// 1. Lo schema base: fetch -> await response.json() -> usa i dati
// ------------------------------------------------------------
// Ogni fetch segue sempre lo stesso schema in 3 passi:
//   1. fetch(url)              -> manda la richiesta, restituisce una Promise
//   2. await response.json()   -> legge il body e lo trasforma in oggetto JS
//   3. uso i dati               -> ora sono variabili JavaScript normali
//
// Servono SEMPRE due await: uno per fetch(), uno per .json().

async function schemaBase() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const utenti = await response.json();

  console.log("--- 1. Schema base ---");
  console.log("Numero utenti ricevuti:", utenti.length);
  console.log("Primo utente:", utenti[0].name, utenti[0].email);
}

// ------------------------------------------------------------
// 2. GET vs POST
// ------------------------------------------------------------
// GET: si usa per LEGGERE dati. Basta fetch(url), niente da configurare.
async function esempioGet() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const utente = await response.json();

  console.log("--- 2a. GET ---");
  console.log("Utente 1:", utente.name);
}

// POST: si usa per MANDARE dati al server. fetch() vuole un secondo
// parametro con method, headers e body (sempre una stringa, quindi
// JSON.stringify sull'oggetto).
async function esempioPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "prova", body: "contenuto", userId: 1 })
  });
  const risultato = await response.json();

  console.log("--- 2b. POST ---");
  console.log("Risposta del server:", risultato);
}

// ------------------------------------------------------------
// 3. URL template con .replace()
// ------------------------------------------------------------
// Per costruire URL dinamiche si scrive un modello con un segnaposto
// (es. %ID) e lo si sostituisce col valore vero prima della fetch.
// Se serve più di un parametro, si concatenano più .replace() di fila.

async function urlTemplate() {
  const template = "https://jsonplaceholder.typicode.com/posts?userId=%ID";
  const id = 2;
  const url = template.replace("%ID", id);

  console.log("--- 3. URL template ---");
  console.log("URL costruita:", url);

  const response = await fetch(url);
  const post = await response.json();
  console.log("Post trovati:", post.length);
}

// ------------------------------------------------------------
// 4. Cache remota: SET e GET con token
// ------------------------------------------------------------
// La cache remota del prof (ws.cipiaceinfo.it) salva coppie chiave/valore.
// Il TOKEN va nell'header personalizzato "key" (non nel body!). Il body
// contiene invece { key, value }, dove "key" è il NOME sotto cui si
// salva il dato e "value" deve essere una stringa JSON.

async function cacheRemota() {
  const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

  console.log("--- 4. Cache remota ---");

  // SET: salvo un valore
  const responseSet = await fetch("https://ws.cipiaceinfo.it/cache/set", {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    body: JSON.stringify({ key: "ripasso-lezione12", value: JSON.stringify("ciao") })
  });
  const dataSet = await responseSet.json();
  console.log("Esito SET:", dataSet);

  // GET: rileggo lo stesso valore
  const responseGet = await fetch("https://ws.cipiaceinfo.it/cache/get", {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    body: JSON.stringify({ key: "ripasso-lezione12" })
  });
  const dataGet = await responseGet.json();

  // se il valore esiste, data.result è una stringa da "riaprire" con
  // JSON.parse; se non esiste, data.result è un oggetto di errore
  const valore = typeof dataGet.result === "string" ? JSON.parse(dataGet.result) : null;
  console.log("Valore riletto dalla cache:", valore);
}

// ------------------------------------------------------------
// Eseguo tutto in ordine
// ------------------------------------------------------------
async function main() {
  await schemaBase();
  await esempioGet();
  await esempioPost();
  await urlTemplate();
  await cacheRemota();
}

main();
