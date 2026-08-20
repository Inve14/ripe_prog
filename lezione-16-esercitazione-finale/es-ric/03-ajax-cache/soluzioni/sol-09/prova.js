// SOL-09 - Lista salvata in cache (test con Node)
// Esegui con: node prova.js

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";
const CHIAVE_LISTA = "lista-studenti-es09";

async function prova() {
  const studenti = [{ nome: "Marco", voto: 7 }];

  await fetch(URL_SET, {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    body: JSON.stringify({ key: CHIAVE_LISTA, value: JSON.stringify(studenti) })
  });

  const response = await fetch(URL_GET, {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    body: JSON.stringify({ key: CHIAVE_LISTA })
  });
  const data = await response.json();
  console.log(JSON.parse(data.result));
}

prova();
