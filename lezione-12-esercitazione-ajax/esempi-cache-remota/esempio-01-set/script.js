const chiave   = document.querySelector("#inputChiave");
const valore   = document.querySelector("#inputValore");
const btnSalva = document.querySelector("#btnSalva");
const esito    = document.querySelector("#esito");

const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const TOKEN   = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

btnSalva.onclick = async () => {
    const k = chiave.value;
    const v = valore.value;

    console.log("Salvo:", k, "→", v);

    const response = await fetch(URL_SET, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "key": TOKEN
        },
        body: JSON.stringify({ key: k, value: v })
    });

    const data = await response.json();
    console.log("Risposta:", data);

    esito.innerText = "Salvato! chiave → " + k + " valore → " + v;
};