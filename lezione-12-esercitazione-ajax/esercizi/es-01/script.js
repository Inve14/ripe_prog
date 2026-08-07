// ES-01 - Fetch GET semplice
//
// CONSEGNA:
// Al click sul pulsante #btnCarica, scarica la lista utenti da
// https://jsonplaceholder.typicode.com/users e mostrala dentro #tbodyUtenti,
// una riga <tr> per ogni utente con le colonne ID, Nome, Email.
//
// Concetti: fetch, await, response.json(), for...of per costruire la tabella

const btnCarica = document.querySelector("#btnCarica");
const tbodyUtenti = document.querySelector("#tbodyUtenti");

const URL_UTENTI = "https://jsonplaceholder.typicode.com/users";

btnCarica.onclick = async () => {
  // scrivi qui il codice:
  // 1. fai la fetch (con await) verso URL_UTENTI
  // 2. converti la risposta in oggetto JavaScript (con await .json())
  // 3. con un for...of costruisci le righe della tabella e mettile in tbodyUtenti
};
