/*
ESERCIZIO 5 — Calcolatrice — SOLUZIONE
*/

const inputNumero1 = document.querySelector("#numero1");
const inputNumero2 = document.querySelector("#numero2");
const selectOperazione = document.querySelector("#operazione");
const btnCalcola = document.querySelector("#btnCalcola");
const divRisultato = document.querySelector("#risultato");

btnCalcola.onclick = function () {
    // parseFloat converte il testo in numero decimale (a differenza di parseInt
    // gestisce anche i numeri con la virgola, tipo "3.5")
    const numero1 = parseFloat(inputNumero1.value);
    const numero2 = parseFloat(inputNumero2.value);
    const operazione = selectOperazione.value;

    // isNaN("Is Not a Number") è true quando la conversione non è riuscita,
    // ad esempio se il campo era vuoto o conteneva testo non numerico.
    if (isNaN(numero1) || isNaN(numero2)) {
        divRisultato.innerHTML = "Inserisci due numeri validi";
        return; // usciamo subito dalla funzione, non calcoliamo nulla
    }

    let risultato;

    if (operazione === "+") {
        risultato = numero1 + numero2;
    } else if (operazione === "-") {
        risultato = numero1 - numero2;
    } else if (operazione === "*") {
        risultato = numero1 * numero2;
    } else if (operazione === "/") {
        // Caso speciale: la divisione per zero non dà errore in JS ma "Infinity",
        // quindi la controlliamo a mano prima di dividere.
        if (numero2 === 0) {
            divRisultato.innerHTML = "Impossibile dividere per zero";
            return;
        }
        risultato = numero1 / numero2;
    }

    divRisultato.innerHTML = "Risultato: " + risultato;
};
