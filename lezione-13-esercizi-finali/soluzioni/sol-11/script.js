/*
ESERCIZIO 11 — Salva e leggi (Cache Remota) — SOLUZIONE

Nota sulla Cache Remota del prof (ws.cipiaceinfo.it):
- il TOKEN va nell'header personalizzato "key" (non nel body!)
- il body contiene invece la COPPIA { key, value } della cache remota, dove "key"
  qui è il nome sotto cui salviamo il dato (da non confondere con l'header "key"
  sopra, che è sempre il token)
- "value" deve essere una stringa JSON, quindi si usa JSON.stringify anche sul
  valore semplice che vogliamo salvare
*/

// Token fornito per questo esercizio: va sempre nell'header "key" di ogni richiesta
const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

const formSalva = document.querySelector("#formSalva");
const inputChiaveSalva = document.querySelector("#chiaveSalva");
const inputValoreSalva = document.querySelector("#valoreSalva");
const divMessaggioSalva = document.querySelector("#messaggioSalva");

const formLeggi = document.querySelector("#formLeggi");
const inputChiaveLeggi = document.querySelector("#chiaveLeggi");
const divMessaggioLeggi = document.querySelector("#messaggioLeggi");

formSalva.onsubmit = async function (evento) {
    evento.preventDefault();

    const chiave = inputChiaveSalva.value;
    const valore = inputValoreSalva.value;

    const risposta = await fetch("https://ws.cipiaceinfo.it/cache/set", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "key": TOKEN // il token va qui, nell'header, non nel body
        },
        body: JSON.stringify({
            key: chiave,
            value: JSON.stringify(valore) // "value" deve essere una stringa JSON
        })
    });

    const dati = await risposta.json();
    console.log(dati);

    divMessaggioSalva.innerHTML = "<span class='text-success'>Salvato!</span>";
    formSalva.reset();
};

formLeggi.onsubmit = async function (evento) {
    evento.preventDefault();

    const chiave = inputChiaveLeggi.value;

    const risposta = await fetch("https://ws.cipiaceinfo.it/cache/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "key": TOKEN
        },
        body: JSON.stringify({ key: chiave })
    });

    const dati = await risposta.json();
    console.log(dati);

    // Chiave trovata -> dati.result è una STRINGA (il valore salvato, JSON.stringify-ato).
    // Chiave assente -> dati.result è un OGGETTO di errore.
    // Questo controllo è più affidabile del confronto testuale con "ok"/"not found".
    if (typeof dati.result === "string") {
        const valore = JSON.parse(dati.result);
        divMessaggioLeggi.innerHTML = "<span class='text-success'>Valore trovato: " + valore + "</span>";
    } else {
        divMessaggioLeggi.innerHTML = "<span class='text-danger'>Chiave non trovata</span>";
    }
};
