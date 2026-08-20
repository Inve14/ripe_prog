// SOL-08 - Cache remota SET + GET

const inputChiaveSalva = document.querySelector("#inputChiaveSalva");
const inputValoreSalva = document.querySelector("#inputValoreSalva");
const btnSalva = document.querySelector("#btnSalva");
const esitoSalva = document.querySelector("#esitoSalva");

const inputChiaveLeggi = document.querySelector("#inputChiaveLeggi");
const btnLeggi = document.querySelector("#btnLeggi");
const esitoLeggi = document.querySelector("#esitoLeggi");

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

btnSalva.onclick = async () => {
  const chiave = inputChiaveSalva.value;
  const valore = inputValoreSalva.value;

  const response = await fetch(URL_SET, {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    body: JSON.stringify({ key: chiave, value: JSON.stringify(valore) })
  });

  const data = await response.json();
  console.log(data);

  esitoSalva.innerHTML = `<span class="text-success">Salvato! (${chiave} = ${valore})</span>`;
};

btnLeggi.onclick = async () => {
  const chiave = inputChiaveLeggi.value;

  const response = await fetch(URL_GET, {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    body: JSON.stringify({ key: chiave })
  });

  const data = await response.json();
  console.log(data);

  if (typeof data.result === "string") {
    const valore = JSON.parse(data.result);
    esitoLeggi.innerHTML = `Valore: ${valore}`;
  } else {
    esitoLeggi.innerHTML = `<span class="text-danger">Chiave non trovata.</span>`;
  }
};
