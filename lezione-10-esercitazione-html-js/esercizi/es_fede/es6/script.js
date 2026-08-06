// ES-06 - Lista della spesa
//
// CONSEGNA:
// Al click su #btnAggiungi, aggiungi il testo scritto in #inputProdotto
// all'array "prodotti" e ridisegna la lista con render(). Al click su
// #btnSvuota, svuota l'array e ridisegna la lista (che risulterà vuota).

const input = document.querySelector("#elemento");
const aggiungi = document.querySelector("#button1");
const svuota = document.querySelector("#button2");
const output = document.querySelector("#output");

let lista = [];

const render = () => {
  output.innerHTML="";
  const template = "<li>%ELEMENTO</li>";
  lista.forEach((elemento) => {
    output.innerHTML += template.replace("%ELEMENTO", elemento);
  });
}

aggiungi.onclick = () => {
  const testo = input.value;
  if (testo == "") {
    return;
  }
  lista.push(testo);
  input.value = "";
  render();
}

svuota.onclick = () => {
  lista = [];
  render();
}
