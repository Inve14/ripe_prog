/*
ESERCIZIO 3 — Contatore con limite — SOLUZIONE
*/

const divNumero = document.querySelector("#numero");
const btnMeno = document.querySelector("#btnMeno");
const btnPiu = document.querySelector("#btnPiu");

// Variabile "di stato": vive FUORI dalle funzioni onclick, così il suo valore
// sopravvive tra un click e l'altro (dentro la funzione verrebbe ricreata ogni volta).
let conteggio = 0;

// render() legge lo stato attuale e aggiorna la pagina: è l'unico punto
// in cui scriviamo dentro #numero.
function render() {
    divNumero.innerHTML = conteggio;
}

btnPiu.onclick = function () {
    // Aggiorniamo il dato solo se rispetta il limite massimo
    if (conteggio < 10) {
        conteggio = conteggio + 1;
    }
    render();
};

btnMeno.onclick = function () {
    // Stesso schema per il limite minimo
    if (conteggio > 0) {
        conteggio = conteggio - 1;
    }
    render();
};

// Disegniamo lo stato iniziale (0) al caricamento della pagina
render();
