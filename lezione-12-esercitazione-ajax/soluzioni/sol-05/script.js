// SOL-05 - Cache remota GET

const inputChiave = document.querySelector("#inputChiave");
const btnLeggi = document.querySelector("#btnLeggi");
const esito = document.querySelector("#esito");

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
  // se la chiave esiste: { result: "\"blu\"" }        (result è una stringa)
  // se la chiave NON esiste: { result: { message: "Does not exist", ... } }
  //                                                    (result è un oggetto)

  // per questo controlliamo il TIPO di data.result: se è una stringa la
  // chiave esiste, altrimenti no
  if (typeof data.result === "string") {
    // data.result è una stringa JSON (perché al salvataggio avevamo fatto
    // JSON.stringify): con JSON.parse la "riapriamo" per tornare al valore originale
    const valore = JSON.parse(data.result);
    esito.innerHTML = `<span class="text-success">Valore trovato: <strong>${valore}</strong></span>`;
  } else {
    esito.innerHTML = `<span class="text-danger">Nessun valore trovato per questa chiave.</span>`;
  }
};
