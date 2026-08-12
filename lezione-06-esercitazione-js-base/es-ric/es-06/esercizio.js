// Consegna:
// Dato l'array, stampa ogni elemento con forEach.
// Poi stampa quanti elementi ci sono.
// Concetti: forEach, .length

const { forwardRef } = require("react");

// Dati
const numeri = [3, 7, 1, 9, 4, 6, 2, 8, 5];

// Scrivi qui il tuo codice

numeri.forEach((numero) => {
    console.log(numero);
});

console.log(numeri.length);