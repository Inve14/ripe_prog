// Soluzione ES-07 — Map
// Consegna: crea un nuovo array con ogni voto moltiplicato per 10.

const voti = [6, 8, 4, 9, 5, 7];

// map crea un NUOVO array applicando la funzione a ogni elemento,
// senza modificare l'array originale
const votiPerDieci = voti.map((voto) => voto * 10);

console.log(voti);
console.log(votiPerDieci);
