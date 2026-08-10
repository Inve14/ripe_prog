/*
ESERCIZIO 4 — Lista dinamica — SOLUZIONE
*/

const inputTesto = document.querySelector("#testo");
const btnAggiungi = document.querySelector("#btnAggiungi");
const btnSvuota = document.querySelector("#btnSvuota");
const listaEl = document.querySelector("#lista");

// L'array è il dato "vero": la <ul> è solo la sua fotografia sullo schermo.
let elementi = [];

function render() {
    // Ripartiamo sempre da una stringa vuota e ricostruiamo tutta la lista:
    // così l'HTML è sempre coerente con l'array, senza pezzi vecchi rimasti in giro.
    listaEl.innerHTML = "";
    for (const elemento of elementi) {
        listaEl.innerHTML += "<li class='list-group-item'>" + elemento + "</li>";
    }
}

btnAggiungi.onclick = function () {
    const testo = inputTesto.value;

    // Evitiamo di aggiungere elementi vuoti (campo lasciato bianco)
    if (testo !== "") {
        elementi.push(testo);
        inputTesto.value = ""; // svuotiamo il campo dopo l'aggiunta
        render();
    }
};

btnSvuota.onclick = function () {
    elementi = [];
    render();
};

render();
