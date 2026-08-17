const chiave        = document.querySelector("#chiaveInput");
const valore        = document.querySelector("#valoreInput");
const button_salva  = document.querySelector("#btnSalva");
const output_salva  = document.querySelector("#outputSalva");
const leggi_chiave  = document.querySelector("#leggiChiave");
const button_leggi  = document.querySelector("#btnLeggi");
const output_leggi  = document.querySelector("#outputLeggi");

const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";
const TOKEN   = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

button_salva.onclick = async () => {
    const k = chiave.value;
    const v = valore.value;

    const response = await fetch(URL_SET, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "key": TOKEN
        },
        body: JSON.stringify({ key: k, value: v })
    });

    const data = await response.json();
    output_salva.innerText = "Salvato! chiave → " + k + " valore → " + v;
};

button_leggi.onclick = async () => {
    const k = leggi_chiave.value;

    const response = await fetch(URL_GET, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "key": TOKEN
        },
        body: JSON.stringify({ key: k })
    });

    const data = await response.json();
    output_leggi.innerText = "chiave → " + k + " valore → " + data.result;
};