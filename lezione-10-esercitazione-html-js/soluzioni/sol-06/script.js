// SOL-06 - Lista della spesa

const inputProdotto = document.querySelector("#inputProdotto");
const btnAggiungi = document.querySelector("#btnAggiungi");
const btnSvuota = document.querySelector("#btnSvuota");
const lista = document.querySelector("#lista");

// L'array è la fonte di verità: la <ul> è solo la sua "fotografia" a schermo.
let prodotti = [];

// render() ricostruisce da zero la lista leggendo l'array, un <li> per elemento.
function render() {
  lista.innerHTML = "";

  prodotti.forEach((prodotto) => {
    lista.innerHTML += `<li class="list-group-item">${prodotto}</li>`;
  });
}

btnAggiungi.onclick = function () {
  const prodotto = inputProdotto.value;

  if (prodotto === "") {
    return; // non aggiungiamo prodotti vuoti
  }

  prodotti.push(prodotto);
  inputProdotto.value = "";
  render();
};

btnSvuota.onclick = function () {
  prodotti = [];
  render();
};
