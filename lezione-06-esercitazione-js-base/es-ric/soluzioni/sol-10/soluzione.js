// Soluzione ES-10 — Sort
// Consegna: ordina l'array in modo crescente e poi decrescente.

const numeri = [34, 7, 23, 1, 56, 12, 89, 45];

// sort() modifica l'array ORIGINALE, quindi usiamo lo spread operator [...]
// per crearne una copia prima di ordinare, evitando effetti collaterali.
// La funzione di confronto (a, b) => a - b ordina in modo crescente,
// (a, b) => b - a in modo decrescente.
const crescente = [...numeri].sort((a, b) => a - b);
const decrescente = [...numeri].sort((a, b) => b - a);

console.log(crescente);
console.log(decrescente);
