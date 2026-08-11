// Soluzione ES-08 — Filter
// Consegna: crea un nuovo array con solo i numeri maggiori di 6.

const numeri = [12, 5, 8, 3, 15, 7, 20, 1, 9];

// filter crea un NUOVO array mantenendo solo gli elementi per cui
// la funzione restituisce true
const maggioriDiSei = numeri.filter((numero) => numero > 6);

console.log(maggioriDiSei);
