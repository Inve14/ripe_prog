// Soluzione ES-01 — Variabili e operatori
// Consegna: dichiara tre variabili (nome, cognome, età) e stampale in console
// con una frase: "Mi chiamo [nome] [cognome] e ho [età] anni".

const nome = "Mario";
const cognome = "Rossi";
const eta = 25;

// Il template literal (backtick `` ` ``) permette di inserire variabili
// direttamente nella stringa usando ${}, senza bisogno di concatenare con +
console.log(`Mi chiamo ${nome} ${cognome} e ho ${eta} anni`);
