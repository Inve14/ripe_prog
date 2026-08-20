// SOL-01 - Fetch GET semplice (test con Node)
// Esegui con: node prova.js

const URL_UTENTI = "https://jsonplaceholder.typicode.com/users";

async function prova() {
  const response = await fetch(URL_UTENTI);
  const utenti = await response.json();
  console.log(utenti);
}

prova();
