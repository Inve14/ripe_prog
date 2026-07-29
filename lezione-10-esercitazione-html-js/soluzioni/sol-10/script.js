// SOL-10 - Gestione prodotti con ricerca

const formProdotto = document.querySelector("#formProdotto");
const inputNome = document.querySelector("#inputNome");
const inputPrezzo = document.querySelector("#inputPrezzo");
const inputRicerca = document.querySelector("#inputRicerca");
const corpoTabella = document.querySelector("#corpoTabella");
const totale = document.querySelector("#totale");

// L'array "prodotti" è la fonte di verità con TUTTI i prodotti inseriti.
// La tabella mostra invece solo il sottoinsieme filtrato dalla ricerca.
let prodotti = [];

function render() {
  const testoRicerca = inputRicerca.value.toLowerCase();

  // filter tiene solo i prodotti il cui nome contiene il testo cercato
  // (in minuscolo da entrambe le parti, per ignorare maiuscole/minuscole).
  const prodottiFiltrati = prodotti.filter((prodotto) =>
    prodotto.nome.toLowerCase().includes(testoRicerca)
  );

  corpoTabella.innerHTML = "";

  prodottiFiltrati.forEach((prodotto) => {
    corpoTabella.innerHTML += `
      <tr>
        <td>${prodotto.nome}</td>
        <td>€ ${prodotto.prezzo.toFixed(2)}</td>
      </tr>
    `;
  });

  // Il totale riguarda solo i prodotti effettivamente mostrati a schermo.
  const somma = prodottiFiltrati.reduce((accumulatore, prodotto) => accumulatore + prodotto.prezzo, 0);
  totale.innerText = `Totale: € ${somma.toFixed(2)}`;
}

formProdotto.onsubmit = function (event) {
  event.preventDefault();

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

// oninput: la ricerca filtra ad ogni carattere digitato, senza bisogno di un pulsante.
inputRicerca.oninput = function () {
  render();
};
