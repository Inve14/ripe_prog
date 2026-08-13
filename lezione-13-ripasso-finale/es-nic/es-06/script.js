// ES-06 — Saluto dinamico
//
// CONSEGNA:
// Input testo + pulsante. Al click mostra "Ciao [nome]!" in un div.
// Se il campo è vuoto mostra un messaggio di errore.


// Scrivi qui il tuo codice
const nome = document.querySelector("#nome");
const btncerca = document.querySelector("#btncerca");
const divrisultato=document.querySelector("#divrisultato");

btncerca.onclick = () => {
    const name = nome.value;
    divrisultato.innerHTML = " ciao " + name;
}