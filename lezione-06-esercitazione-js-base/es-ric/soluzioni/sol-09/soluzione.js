// Soluzione ES-09 — Find
// Consegna: trova il primo nome che inizia con la lettera "A".

const nomi = ["Mario", "Anna", "Luca", "Sara", "Paolo"];

// find restituisce il PRIMO elemento che soddisfa la condizione
// (o undefined se nessuno la soddisfa). nome[0] è il primo carattere della stringa.
const nomeConA = nomi.find((nome) => nome[0] === "A");

console.log(nomeConA);
