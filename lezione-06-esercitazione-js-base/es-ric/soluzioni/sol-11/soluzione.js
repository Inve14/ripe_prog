// Soluzione ES-11 — Reduce
// Consegna: calcola la somma totale con reduce e poi la media.

const numeri = [4, 8, 6, 5, 5, 4, 6, 4, 4, 6];

// reduce accumula un singolo valore scorrendo l'array.
// acc è l'accumulatore (parte da 0, il secondo argomento di reduce),
// numero è l'elemento corrente.
const somma = numeri.reduce((acc, numero) => acc + numero, 0);
const media = somma / numeri.length;

console.log(`Somma: ${somma}`);
console.log(`Media: ${media}`);
