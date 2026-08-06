// ES-03 - Contatore
//
// CONSEGNA:
// Il pulsante #btnPiu aumenta il contatore di 1, il pulsante #btnMeno lo
// diminuisce di 1. Il contatore non deve mai scendere sotto lo 0 (se è già
// a 0, il pulsante "-" non fa nulla). Mostra sempre il valore in #numero.
//
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const output = document.querySelector("#output");

let somma = 0;


const render = () => {
  const template = "%SOMMA";
  output.innerHTML = template.replace("%SOMMA", somma);
}

button1.onclick = () => {
  somma++;
  render();
}

button2.onclick = () => {
  somma--;
  if(somma<0) {
    somma=0;
  }
  render();
}

