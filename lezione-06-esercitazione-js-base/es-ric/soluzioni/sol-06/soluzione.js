// Soluzione ES-06 — Array base
// Consegna: stampa ogni elemento dell'array con forEach, poi il numero di elementi.

const numeri = [3, 7, 1, 9, 4, 6, 2, 8, 5];

// forEach esegue la funzione passata per ogni elemento dell'array
numeri.forEach((numero) => {
  console.log(numero);
});

console.log(`Numero di elementi: ${numeri.length}`);
