/*
ESERCIZIO 12 — Lista preferiti persistente (progetto finale) — SOLUZIONE

Mette insieme tutto il corso: array di dizionari, render(), fetch POST (set/get),
JSON.stringify/parse e caricamento automatico dei dati salvati all'apertura pagina.
*/

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

// Chiave fissa usata per salvare l'INTERA lista come un solo valore in cache
// (non una chiave per ogni studente, per tenere tutto insieme in un unico posto)
const CHIAVE_CACHE = "lista-preferiti-lezione13";

const formStudente = document.querySelector("#formStudente");
const inputNome = document.querySelector("#nome");
const inputVoto = document.querySelector("#voto");
const btnSvuota = document.querySelector("#btnSvuota");
const corpoTabella = document.querySelector("#corpoTabella");

let studenti = [];

function render() {
    corpoTabella.innerHTML = "";
    for (const studente of studenti) {
        corpoTabella.innerHTML +=
            "<tr><td>" + studente.nome + "</td><td>" + studente.voto + "</td></tr>";
    }
}

// Salva l'intero array in cache remota. JSON.stringify due volte:
// una per trasformare l'array in stringa JSON (il nostro dato),
// una richiesta dalla Cache Remota per il campo "value".
async function salvaInCache() {
    await fetch("https://ws.cipiaceinfo.it/cache/set", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "key": TOKEN
        },
        body: JSON.stringify({
            key: CHIAVE_CACHE,
            value: JSON.stringify(studenti)
        })
    });
}

// Legge la lista salvata in cache remota, se esiste, e ricostruisce l'array.
async function caricaDaCache() {
    const risposta = await fetch("https://ws.cipiaceinfo.it/cache/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "key": TOKEN
        },
        body: JSON.stringify({ key: CHIAVE_CACHE })
    });

    const dati = await risposta.json();
    console.log(dati);

    // Se la chiave esiste, dati.result è una stringa JSON: la trasformiamo
    // di nuovo in array con JSON.parse. Se non esiste, teniamo l'array vuoto.
    if (typeof dati.result === "string") {
        studenti = JSON.parse(dati.result);
    }

    render();
}

formStudente.onsubmit = async function (evento) {
    evento.preventDefault();

    const nome = inputNome.value;
    const voto = parseFloat(inputVoto.value);

    // 1. aggiorniamo l'array in memoria
    studenti.push({ nome: nome, voto: voto });

    // 2. ridisegniamo la tabella
    render();

    formStudente.reset();

    // 3. salviamo subito la nuova lista in cache, così resta anche dopo un ricaricamento
    await salvaInCache();
};

btnSvuota.onclick = async function () {
    studenti = [];
    render();
    // Sovrascriviamo la cache con un array vuoto, altrimenti al prossimo
    // caricamento della pagina tornerebbero i vecchi dati
    await salvaInCache();
};

// Appena la pagina si apre, senza bisogno di alcun click, carichiamo la lista salvata
caricaDaCache();
