// Soluzione ES-12 — Dizionario base
// Consegna: stampa ogni coppia chiave-valore con for...in nel formato "chiave: valore".

const persona = { nome: "Mario", cognome: "Rossi", voto: 8, materia: "Informatica" };

// for...in scorre le CHIAVI di un oggetto. Per leggere il valore associato
// usiamo l'accesso con parentesi quadre: persona[chiave]
for (const chiave in persona) {
  console.log(`${chiave}: ${persona[chiave]}`);
}
