// SOL-01 - Parsing base
// Concetti chiave: parsing CSV base + map su array di dizionari
// Esegui con: node esercizio.js

const csv = `nome,città
Marco,Roma
Giulia,Milano
Luca,Napoli
Sara,Torino
Elena,Bologna
Davide,Firenze`;

const righe = csv.trim().split('\n');
const colonne = righe.shift().split(',');

const persone = righe.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

persone.forEach((p) => {
  console.log(`${p.nome} abita a ${p.città}`);
});
