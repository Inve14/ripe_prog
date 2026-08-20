// SOL-03 - Contatore con limiti

const valore = document.querySelector("#valore");
const btnPiu = document.querySelector("#btnPiu");
const btnMeno = document.querySelector("#btnMeno");

// variabile di stato: sopravvive tra un click e l'altro
let contatore = 0;

function render() {
  valore.innerText = contatore;
}

btnPiu.onclick = function () {
  if (contatore < 10) {
    contatore = contatore + 1;
  }
  render();
};

btnMeno.onclick = function () {
  if (contatore > 0) {
    contatore = contatore - 1;
  }
  render();
};

render();
