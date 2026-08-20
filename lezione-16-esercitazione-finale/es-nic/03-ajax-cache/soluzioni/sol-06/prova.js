// SOL-06 - Cache remota SET (test con Node)
// Esegui con: node prova.js

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";

async function prova() {
  const response = await fetch(URL_SET, {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    body: JSON.stringify({ key: "prova-nodo", value: JSON.stringify("ciao") })
  });
  const data = await response.json();
  console.log(data);
}

prova();
