// SOL-07 - Maggiore e minore

const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const numero3 = document.querySelector("#numero3");
const numero4 = document.querySelector("#numero4");
const btnCalcola = document.querySelector("#btnCalcola");
const risultato = document.querySelector("#risultato");

btnCalcola.onclick = function () {
  // parseFloat(...) || 0: se parseFloat restituisce NaN (input vuoto),
  // NaN è "falsy" e || fa scattare il valore di riserva 0.
  const a = parseFloat(numero1.value) || 0;
  const b = parseFloat(numero2.value) || 0;
  const c = parseFloat(numero3.value) || 0;
  const d = parseFloat(numero4.value) || 0;

  const numeri = [a, b, c, d];

  // sort ordina l'array dal più piccolo al più grande (con una funzione
  // di confronto, altrimenti ordinerebbe i numeri come se fossero testo).
  numeri.sort((x, y) => x - y);

  const minimo = numeri[0];
  const massimo = numeri[numeri.length - 1];

  risultato.innerHTML = `Maggiore: <strong>${massimo}</strong> — Minore: <strong>${minimo}</strong>`;
};
