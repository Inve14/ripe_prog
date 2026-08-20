// SOL-06 - Filtro in tempo reale

const inputRicerca = document.querySelector("#inputRicerca");
const lista = document.querySelector("#lista");

const nomi = ["Marco", "Giulia", "Luca", "Sara", "Elena", "Davide", "Chiara", "Andrea"];

function render(elenco) {
  lista.innerHTML = "";
  elenco.forEach((nome) => {
    lista.innerHTML += `<li class="list-group-item">${nome}</li>`;
  });
}

// oninput scatta ad ogni carattere digitato, non solo al submit
inputRicerca.oninput = function () {
  const testo = inputRicerca.value.toLowerCase();
  const filtrati = nomi.filter((nome) => nome.toLowerCase().includes(testo));
  render(filtrati);
};

render(nomi);
