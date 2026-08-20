// SOL-10 - Gestione prodotti con ricerca e totale

const inputNome = document.querySelector("#inputNome");
const inputPrezzo = document.querySelector("#inputPrezzo");
const btnAggiungi = document.querySelector("#btnAggiungi");
const inputRicerca = document.querySelector("#inputRicerca");
const tbodyProdotti = document.querySelector("#tbodyProdotti");
const totale = document.querySelector("#totale");

let prodotti = [];

function render() {
  const testo = inputRicerca.value.toLowerCase();
  const filtrati = prodotti.filter((p) => p.nome.toLowerCase().includes(testo));

  tbodyProdotti.innerHTML = "";
  filtrati.forEach((p) => {
    tbodyProdotti.innerHTML += `<tr><td>${p.nome}</td><td>${p.prezzo.toFixed(2)}</td></tr>`;
  });

  const somma = filtrati.reduce((acc, p) => acc + p.prezzo, 0);
  totale.innerText = `Totale: ${somma.toFixed(2)} EUR`;
}

btnAggiungi.onclick = function () {
  const nome = inputNome.value;
  const prezzo = parseFloat(inputPrezzo.value);

  if (nome === "" || isNaN(prezzo)) {
    return;
  }

  prodotti.push({ nome: nome, prezzo: prezzo });
  inputNome.value = "";
  inputPrezzo.value = "";
  render();
};

inputRicerca.oninput = render;

render();
