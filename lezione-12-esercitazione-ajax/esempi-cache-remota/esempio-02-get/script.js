const inputChiave = document.querySelector("#inputChiave");
const btnLeggi    = document.querySelector("#btnLeggi");
const esito       = document.querySelector("#esito");

const TOKEN   = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

btnLeggi.onclick = async () => {
    const chiave = inputChiave.value;

    console.log("Sto cercando la chiave:", chiave);

    const response = await fetch(URL_GET, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "key": TOKEN
        },
        body: JSON.stringify({ key: chiave })
    });

    const data = await response.json();
    console.log("Risposta grezza del server:", data);

    if (typeof data.result === "string") {
        const valore = data.result;
        console.log("Valore ritrovato:", valore);
        esito.innerHTML = `<span class="text-success">Trovato! Il valore è: <strong>${valore}</strong></span>`;
    } else {
        console.log("Chiave non trovata");
        esito.innerHTML = `<span class="text-danger">Chiave non trovata!</span>`;
    }
};