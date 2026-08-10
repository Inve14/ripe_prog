/*
ESERCIZIO 7 — Filtro in tempo reale — SOLUZIONE
*/

const inputRicerca = document.querySelector("#ricerca");
const listaEl = document.querySelector("#lista");

// Array fisso di partenza: il dato "vero" che non cambia mai.
const nomi = [
    "Alessandro", "Beatrice", "Carlo", "Debora", "Elena",
    "Federico", "Giulia", "Hassan", "Ilaria", "Lorenzo", "Martina"
];

function render(elencoDaMostrare) {
    listaEl.innerHTML = "";
    for (const nome of elencoDaMostrare) {
        listaEl.innerHTML += "<li class='list-group-item'>" + nome + "</li>";
    }
}

inputRicerca.oninput = function () {
    const testo = inputRicerca.value;

    // filter crea un nuovo array con solo gli elementi che rispettano la condizione.
    // includes controlla se la stringa contiene il testo cercato.
    // Non tocchiamo mai l'array "nomi" originale: filtriamo solo per mostrare.
    const nomiFiltrati = nomi.filter(function (nome) {
        return nome.toLowerCase().includes(testo.toLowerCase());
    });

    render(nomiFiltrati);
};

// All'avvio mostriamo l'elenco completo
render(nomi);
