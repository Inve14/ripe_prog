/*
ESERCIZIO 1 — Saluto

Crea una pagina con:
- un campo di testo dove l'utente scrive il proprio nome
- un pulsante "Saluta"
- un div vuoto dove mostrare il risultato

Al click del pulsante, leggi il nome scritto e mostra nel div la scritta:
"Ciao [nome]!"

Concetti da usare: querySelector, .value, onclick, innerHTML
*/


const input = document.querySelector("#nome");
const saluta = document.querySelector("#btnsaluta");
const risultato = document.querySelector("#risultato");

saluta.onclick = () => {

    const nome = input.value;

    risultato.innerText= "ciao " + nome;

}