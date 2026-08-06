// ES-05 - Calcolatrice semplice
//
// CONSEGNA:
// Al click su #btnCalcola, leggi i due numeri e l'operazione scelta nel
// select, esegui il calcolo e mostra il risultato in #risultato.
// Gestisci i casi non validi: numeri mancanti (isNaN) e divisione per zero.
//
// Concetti: parseFloat, if/else sull'operazione, isNaN

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operazione = document.querySelector("#operazione");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

let risultato = 0;

const render = () => {
  const template = "%NUM1 %OPERAZIONE %NUM2 = %RISULTATO <br>";
  output.innerHTML += template.replace("%NUM1", num1.value)
    .replace("%OPERAZIONE", operazione.value)
    .replace("%NUM2", num2.value)
    .replace("%RISULTATO", risultato);
}

button.onclick = () => {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);
  if (isNaN(n1) || isNaN(n2)) {
    alert("Inserire 2 numeri")
    return;
  }
  if (operazione.value == "+") {
    risultato = n1 + n2 ;
  } else if (operazione.value == "-") {
    risultato = n1-n2;
  } else if (operazione.value == "*") {
    risultato = n1*n2;
  } else if (operazione.value == "/") {
    if(n2 == 0){
      alert("non puoi dividere per 0!");
      return;
    } else {
      risultato = n1/n2;
    }
  }
  render();
}