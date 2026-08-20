// SOL-07 - Cache remota GET

const inputChiave = document.querySelector("#inputChiave");
const btnLeggi = document.querySelector("#btnLeggi");
const risultato = document.querySelector("#risultato");

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

btnLeggi.onclick = async () => {
  const chiave = inputChiave.value;

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

  // se la chiave esiste, data.result è una STRINGA JSON; se non esiste, è un oggetto
  if (typeof data.result === "string") {
    const valore = JSON.parse(data.result);
    risultato.innerHTML = `Valore: ${valore}`;
  } else {
    risultato.innerHTML = `<span class="text-danger">Chiave non trovata.</span>`;
  }
};
