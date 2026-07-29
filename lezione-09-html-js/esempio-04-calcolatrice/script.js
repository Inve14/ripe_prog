// Esempio 4 - Calcolatrice

const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const operazione = document.querySelector("#operazione");
const btnCalcola = document.querySelector("#btnCalcola");
const risultato = document.querySelector("#risultato");

btnCalcola.onclick = function () {
  // Gli input restituiscono sempre TESTO, anche se sono di tipo "number".
  // parseFloat trasforma quel testo in un numero vero, con cui possiamo calcolare
  // (usiamo parseFloat e non parseInt perché vogliamo accettare anche i decimali).
  const a = parseFloat(numero1.value);
  const b = parseFloat(numero2.value);

  // isNaN ("is Not a Number") controlla se la conversione è andata male,
  // ad esempio perché un campo era vuoto o conteneva testo non numerico.
  if (isNaN(a) || isNaN(b)) {
    risultato.innerHTML = "Inserisci due numeri validi.";
    return;
  }

  // Leggiamo quale operazione è stata scelta nel select.
  const scelta = operazione.value;

  let esito;

  // In base al simbolo scelto, eseguiamo l'operazione corrispondente.
  if (scelta === "+") {
    esito = a + b;
    console.log(a+b);
    //  risultato.innerHTML = `Risultato: <strong>${a+b}</strong>`;
  } else if (scelta === "-") {
    esito = a - b;
  } else if (scelta === "*") {
    esito = a * b;
  } else if (scelta === "/") {
    // Caso speciale: la divisione per zero non è ammessa.
    if (b === 0) {
      risultato.innerHTML = "Impossibile dividere per zero.";
      return;
    }
    esito = a / b;
  }

  risultato.innerHTML = `Risultato: <strong>${esito}</strong>`;
};
