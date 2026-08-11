// Soluzione ES-13 — Object.keys e Object.values
// Consegna: stampa solo le chiavi con Object.keys() e solo i valori con Object.values().

const persona = { nome: "Mario", cognome: "Rossi", voto: 8, materia: "Informatica" };

// Object.keys() restituisce un array con i nomi delle proprietà.
// Object.values() restituisce un array con i valori corrispondenti.
console.log(Object.keys(persona));
console.log(Object.values(persona));
