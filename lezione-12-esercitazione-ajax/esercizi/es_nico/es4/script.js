// ES-04 - Cache remota SET
//
// CONSEGNA:
// Al click sul pulsante #btnSalva, leggi chiave e valore dagli input e
// manda una fetch POST a URL_SET per salvarli nella cache remota del
// prof. Mostra un messaggio di conferma dentro #esito.
//
// Concetti: fetch POST, headers, body, JSON.stringify

const inputChiave = document.querySelector("#inputChiave");
const inputValore = document.querySelector("#inputValore");
const btnSalva = document.querySelector("#btnSalva");
const esito = document.querySelector("#esito");

// token personale, ottenuto registrandosi su ws.cipiaceinfo.it/register/
const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

const URL_SET = "https://ws.cipiaceinfo.it/cache/set";

btnSalva.onclick = async () => {
  // 1. leggi chiave e valore dagli input
  const chiave = inputChiave.value;
  const valore = inputValore.value;

  // 2. fai la fetch POST verso URL_SET con:
  const response = await fetch(URL_SET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      key: TOKEN
    },

    body: JSON.stringify({
      key: chiave,
      value: JSON.stringify(valore)
    })
  });
  // 3. converti la risposta con .json() e mostra la conferma in #esito

  const data = await response.json();

  const template = `<span class="text-success">Salvato! (%CHIAVE = %VALORE)</span>`;

  esito.innerHTML = template.replace("%VALORE", valore).replace("%CHIAVE", chiave);


};
