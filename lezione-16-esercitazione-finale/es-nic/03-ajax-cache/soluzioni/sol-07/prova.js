// SOL-07 - Cache remota GET (test con Node)
// Esegui con: node prova.js

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

async function prova() {
  const response = await fetch(URL_GET, {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    body: JSON.stringify({ key: "prova-nodo" })
  });
  const data = await response.json();
  console.log(data);
}

prova();
