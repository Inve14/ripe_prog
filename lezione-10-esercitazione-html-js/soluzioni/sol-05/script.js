// SOL-05 - Calcolatrice semplice

const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const operazione = document.querySelector("#operazione");
const btnCalcola = document.querySelector("#btnCalcola");
const risultato = document.querySelector("#risultato");

btnCalcola.onclick = function () {
  // Gli input restituiscono sempre testo: parseFloat li converte in numeri veri.
  const a = parseFloat(numero1.value);
  const b = parseFloat(numero2.value);

  // isNaN controlla che la conversione sia andata a buon fine.
  if (isNaN(a) || isNaN(b)) {
    risultato.innerHTML = "Inserisci due numeri validi.";
    return;
  }

  const scelta = operazione.value;
  let esito;

  if (scelta === "+") {
    esito = a + b;
  } else if (scelta === "-") {
    esito = a - b;
  } else if (scelta === "*") {
    esito = a * b;
  } else if (scelta === "/") {
    if (b === 0) {
      risultato.innerHTML = "Impossibile dividere per zero.";
      return;
    }
    esito = a / b;
  }

  risultato.innerHTML = `Risultato: <strong>${esito}</strong>`;
};
