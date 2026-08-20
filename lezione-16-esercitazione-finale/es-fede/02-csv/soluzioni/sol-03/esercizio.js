// SOL-03 - CSV con calcolo
// Concetti chiave: parseInt sul valore letto dal CSV, poi map per calcolare l'annuale
// Esegui con: node esercizio.js

const csv = `nome,stipendio
Marco,1500
Giulia,1800
Luca,1350
Sara,2000
Elena,1650`;

const righe = csv.trim().split('\n');
const colonne = righe.shift().split(',');

const persone = righe.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

persone.forEach((p) => {
  const stipendioAnnuale = parseInt(p.stipendio) * 12;
  console.log(`${p.nome}: ${stipendioAnnuale} euro all'anno`);
});
