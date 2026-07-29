// SOL-03 - Contatore

const numero = document.querySelector("#numero");
const btnPiu = document.querySelector("#btnPiu");
const btnMeno = document.querySelector("#btnMeno");

// La variabile vive fuori dalle funzioni onclick: se fosse dentro,
// ogni click la ricreerebbe da zero e non potrebbe mai accumularsi.
let contatore = 0;

btnPiu.onclick = function () {
  contatore = contatore + 1;
  numero.innerText = contatore;
};

btnMeno.onclick = function () {
  // Il limite si controlla PRIMA di decrementare: se siamo già a 0 non facciamo nulla.
  if (contatore > 0) {
    contatore = contatore - 1;
  }
  numero.innerText = contatore;
};
