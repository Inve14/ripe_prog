// SOL-06 - Cache remota SET + GET

const inputChiaveSet = document.querySelector("#inputChiaveSet");
const inputValoreSet = document.querySelector("#inputValoreSet");
const btnSalva = document.querySelector("#btnSalva");
const esitoSalva = document.querySelector("#esitoSalva");

const inputChiaveGet = document.querySelector("#inputChiaveGet");
const btnLeggi = document.querySelector("#btnLeggi");
const esitoLeggi = document.querySelector("#esitoLeggi");

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

// ------------------------------------------------------------
// FORM 1 - SALVA (POST su /cache/set)
// ------------------------------------------------------------
btnSalva.onclick = async () => {
  const chiave = inputChiaveSet.value;
  const valore = inputValoreSet.value;

  const response = await fetch(URL_SET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": TOKEN
    },
    body: JSON.stringify({
      key: chiave,
      value: JSON.stringify(valore)
    })
  });

  const data = await response.json();
  console.log(data);

  esitoSalva.innerHTML = `<span class="text-success">Salvato! (${chiave} = ${valore})</span>`;
};

// ------------------------------------------------------------
// FORM 2 - LEGGI (POST su /cache/get)
// ------------------------------------------------------------
btnLeggi.onclick = async () => {
  const chiave = inputChiaveGet.value;

  const response = await fetch(URL_GET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": TOKEN
    },
    body: JSON.stringify({ key: chiave })
  });

  const data = await response.json();
  console.log(data);

  if (typeof data.result === "string") {
    const valore = JSON.parse(data.result);
    esitoLeggi.innerHTML = `<span class="text-success">Valore trovato: <strong>${valore}</strong></span>`;
  } else {
    esitoLeggi.innerHTML = `<span class="text-danger">Nessun valore trovato per questa chiave.</span>`;
  }
};
