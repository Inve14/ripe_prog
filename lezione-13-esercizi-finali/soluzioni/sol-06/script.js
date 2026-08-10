/*
ESERCIZIO 6 — Tabella studenti — SOLUZIONE
*/

const formStudente = document.querySelector("#formStudente");
const inputNome = document.querySelector("#nome");
const inputVoto = document.querySelector("#voto");
const btnSvuota = document.querySelector("#btnSvuota");
const corpoTabella = document.querySelector("#corpoTabella");

// Array di dizionari: ogni studente è un oggetto {nome, voto}
let studenti = [];

function render() {
    corpoTabella.innerHTML = "";

    for (const studente of studenti) {
        // Calcoliamo l'esito in base al voto
        const esito = studente.voto >= 6 ? "Promosso" : "Bocciato";

        // Template di riga con segnaposto, sostituiti con .replace()
        let riga = "<tr><td>%NOME</td><td>%VOTO</td><td>%ESITO</td></tr>";
        riga = riga.replace("%NOME", studente.nome);
        riga = riga.replace("%VOTO", studente.voto);
        riga = riga.replace("%ESITO", esito);

        corpoTabella.innerHTML += riga;
    }
}

// onsubmit invece di onclick sul pulsante: si attiva anche premendo Invio
formStudente.onsubmit = function (evento) {
    // Il form di default ricaricherebbe la pagina al submit: lo impediamo
    evento.preventDefault();

    const nome = inputNome.value;
    const voto = parseFloat(inputVoto.value);

    studenti.push({ nome: nome, voto: voto });

    // Puliamo il form per il prossimo inserimento
    formStudente.reset();

    render();
};

btnSvuota.onclick = function () {
    studenti = [];
    render();
};

render();
