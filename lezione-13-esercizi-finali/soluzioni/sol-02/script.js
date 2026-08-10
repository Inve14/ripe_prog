/*
ESERCIZIO 2 — Pari o dispari — SOLUZIONE
*/

const inputNumero = document.querySelector("#numero");
const btnControlla = document.querySelector("#btnControlla");
const divRisultato = document.querySelector("#risultato");

btnControlla.onclick = function () {
    // parseInt trasforma il testo dell'input (es. "7") nel numero intero 7.
    // Senza parseInt, il valore sarebbe sempre una stringa e % darebbe risultati sbagliati.
    const numero = parseInt(inputNumero.value);

    // % è l'operatore "resto della divisione": un numero è pari se diviso per 2
    // dà resto 0, dispari se dà resto 1.
    if (numero % 2 === 0) {
        divRisultato.innerHTML = numero + " è pari";
    } else {
        divRisultato.innerHTML = numero + " è dispari";
    }
};
