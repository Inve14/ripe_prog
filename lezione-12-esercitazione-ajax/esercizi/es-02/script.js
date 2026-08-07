// ES-02 - URL template
//
// CONSEGNA:
// Al click sul pulsante #btnCerca, leggi l'ID scritto in #inputUserId,
// costruisci l'URL sostituendo %ID nel template con quel valore, scarica
// i post di quell'utente e mostra titolo e corpo di ogni post in una card
// Bootstrap dentro #risultatoPost.
//
// Concetti: URL template con .replace(), dati annidati

const inputUserId = document.querySelector("#inputUserId");
const btnCerca = document.querySelector("#btnCerca");
const risultatoPost = document.querySelector("#risultatoPost");

// %ID è il segnaposto da sostituire con l'ID scritto dall'utente
const URL_TEMPLATE = "https://jsonplaceholder.typicode.com/posts?userId=%ID";

btnCerca.onclick = async () => {
  // scrivi qui il codice:
  // 1. leggi l'ID dall'input
  // 2. costruisci l'URL finale con URL_TEMPLATE.replace("%ID", ...)
  // 3. fai la fetch, converti la risposta con .json()
  // 4. per ogni post trovato, crea una card con titolo e corpo
};
