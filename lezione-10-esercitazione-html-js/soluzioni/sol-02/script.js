// SOL-02 - Cambia colore

const scatola = document.querySelector("#scatola");
const btnRosso = document.querySelector("#btnRosso");
const btnVerde = document.querySelector("#btnVerde");
const btnBlu = document.querySelector("#btnBlu");

// Ogni pulsante ha il suo evento: scriviamo direttamente sullo style
// dell'elemento, che corrisponde all'attributo CSS "style" in HTML.
btnRosso.onclick = function () {
  scatola.style.backgroundColor = "red";
};

btnVerde.onclick = function () {
  scatola.style.backgroundColor = "green";
};

btnBlu.onclick = function () {
  scatola.style.backgroundColor = "blue";
};
