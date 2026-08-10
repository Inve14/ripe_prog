/*
ESERCIZIO 1 — Saluto — SOLUZIONE
*/

// querySelector("#id") trova l'elemento con quell'id nell'HTML.
// Lo facciamo una volta sola, fuori dalla funzione, e riusiamo la variabile.
const inputNome = document.querySelector("#nome");
const btnSaluta = document.querySelector("#btnSaluta");
const divRisultato = document.querySelector("#risultato");

// Colleghiamo la funzione all'evento click del pulsante (Evento -> Azione -> Reazione)
btnSaluta.onclick = function () {
    // Evento: click sul pulsante
    // Azione: leggiamo il valore SCRITTO ORA nel campo di testo.
    // Importante: .value va letto DENTRO la funzione, non fuori, altrimenti
    // prenderemmo il valore che c'era nel momento in cui la pagina si è caricata.
    const nome = inputNome.value;

    // Reazione: scriviamo il saluto nel div. innerHTML permette di inserire
    // anche tag HTML, qui usiamo solo testo semplice.
    divRisultato.innerHTML = "Ciao " + nome + "!";
};
