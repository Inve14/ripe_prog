/*
ESERCIZIO 8 — Fetch utenti (AJAX) — SOLUZIONE
*/

const btnCarica = document.querySelector("#btnCarica");
const corpoTabella = document.querySelector("#corpoTabella");

// async davanti alla funzione ci permette di usare await dentro di essa
btnCarica.onclick = async function () {
    // Primo await: aspettiamo che il server risponda alla richiesta.
    // fetch() restituisce un oggetto Response, non ancora i dati veri.
    const risposta = await fetch("https://jsonplaceholder.typicode.com/users");

    // Secondo await: .json() legge il corpo della risposta e lo trasforma
    // in un array/oggetto JavaScript utilizzabile.
    const utenti = await risposta.json();

    // Regola d'oro: appena arrivano dati nuovi da una API, si stampa in console
    // per vedere la struttura esatta prima di scrivere il codice che li usa.
    console.log(utenti);

    corpoTabella.innerHTML = "";

    // for...of scorre l'array di utenti uno alla volta
    for (const utente of utenti) {
        corpoTabella.innerHTML +=
            "<tr><td>" + utente.id + "</td>" +
            "<td>" + utente.name + "</td>" +
            "<td>" + utente.email + "</td></tr>";
    }
};
