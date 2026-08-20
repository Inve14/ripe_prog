// SOL-04 - Calcolatrice

const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const operazione = document.querySelector("#operazione");
const btnCalcola = document.querySelector("#btnCalcola");
const risultato = document.querySelector("#risultato");

btnCalcola.onclick = function () {
  const a = parseFloat(numero1.value);
  const b = parseFloat(numero2.value);
  const op = operazione.value;

  if (isNaN(a) || isNaN(b)) {
    risultato.innerHTML = `<span class="text-danger">Inserisci due numeri validi!</span>`;
    return;
  }

  let esito;

  if (op === "+") {
    esito = a + b;
  } else if (op === "-") {
    esito = a - b;
  } else if (op === "*") {
    esito = a * b;
  } else if (op === "/") {
    if (b === 0) {
      risultato.innerHTML = `<span class="text-danger">Non si può dividere per zero!</span>`;
      return;
    }
    esito = a / b;
  }

  const template = "Risultato: {r}";
  risultato.innerHTML = template.replace("{r}", esito);
};
