// ES-01 — Saluto con controllo
//
// CONSEGNA:
// Input testo + pulsante. Al click mostra "Ciao [nome]!".
// Se il campo è vuoto mostra un messaggio di errore.
//
// Concetti: querySelector, .value, onclick, innerHTML

// Scrivi qui il tuo codice

const testo = document.querySelector("#testo");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

const render = (nome) => {
    const template = "ciao %NOME!";
    output.innerHTML = template.replace("%NOME", nome);
}

button.onclick = () => {
    const nome = testo.value;
    render(nome);
}