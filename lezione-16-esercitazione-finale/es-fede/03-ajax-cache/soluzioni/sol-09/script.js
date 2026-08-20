// SOL-09 - Lista salvata in cache

const inputNome = document.querySelector("#inputNome");
const inputVoto = document.querySelector("#inputVoto");
const btnAggiungi = document.querySelector("#btnAggiungi");
const tbodyStudenti = document.querySelector("#tbodyStudenti");

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";
const CHIAVE_LISTA = "lista-studenti-es09";

let studenti = [];

function render() {
  tbodyStudenti.innerHTML = "";
  studenti.forEach((s) => {
    tbodyStudenti.innerHTML += `<tr><td>${s.nome}</td><td>${s.voto}</td></tr>`;
  });
}

async function salvaInCache() {
  await fetch(URL_SET, {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    // l'intero array va trasformato in una stringa JSON prima di spedirlo
    body: JSON.stringify({ key: CHIAVE_LISTA, value: JSON.stringify(studenti) })
  });
}

async function caricaDaCache() {
  const response = await fetch(URL_GET, {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    body: JSON.stringify({ key: CHIAVE_LISTA })
  });

  const data = await response.json();

  if (typeof data.result === "string") {
    // JSON.parse due volte: una per data.result, una era già gestita da JSON.stringify(studenti)
    studenti = JSON.parse(data.result);
  }

  render();
}

btnAggiungi.onclick = async () => {
  const nome = inputNome.value;
  const voto = parseInt(inputVoto.value);

  if (nome === "" || isNaN(voto)) {
    return;
  }

  studenti.push({ nome: nome, voto: voto });
  inputNome.value = "";
  inputVoto.value = "";
  render();

  await salvaInCache();
};

// all'apertura della pagina ricarichiamo subito la lista salvata
caricaDaCache();
