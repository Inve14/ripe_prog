// SOL-05 - Lista dinamica

const inputElemento = document.querySelector("#inputElemento");
const btnAggiungi = document.querySelector("#btnAggiungi");
const btnSvuota = document.querySelector("#btnSvuota");
const lista = document.querySelector("#lista");

let elementi = [];

function render() {
  lista.innerHTML = "";
  elementi.forEach((elemento) => {
    lista.innerHTML += `<li class="list-group-item">${elemento}</li>`;
  });
}

btnAggiungi.onclick = function () {
  const testo = inputElemento.value;

  if (testo === "") {
    return;
  }

  elementi.push(testo);
  inputElemento.value = "";
  render();
};

btnSvuota.onclick = function () {
  elementi = [];
  render();
};

render();
