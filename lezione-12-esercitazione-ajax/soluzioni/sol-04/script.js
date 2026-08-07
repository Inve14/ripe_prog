// SOL-04 - Cache remota SET

const inputChiave = document.querySelector("#inputChiave");
const inputValore = document.querySelector("#inputValore");
const btnSalva = document.querySelector("#btnSalva");
const esito = document.querySelector("#esito");

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";

btnSalva.onclick = async () => {
  const chiave = inputChiave.value;
  const valore = inputValore.value;

  // POST: mandiamo dati al server, quindi servono method, headers e body
  const response = await fetch(URL_SET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // diciamo al server "ti mando JSON"
      "key": TOKEN                         // il nostro token di autenticazione
    },
    // il body deve essere una stringa: JSON.stringify sull'oggetto { key, value }.
    // Anche "value" deve essere una stringa JSON, quindi JSON.stringify due volte.
    body: JSON.stringify({
      key: chiave,
      value: JSON.stringify(valore)
    })
  });

  // due await, come sempre: uno per fetch, uno per .json()
  const data = await response.json();
  console.log(data); // { result: "Ok" } se è andato tutto bene

  esito.innerHTML = `<span class="text-success">Salvato! (${chiave} = ${valore})</span>`;
};
