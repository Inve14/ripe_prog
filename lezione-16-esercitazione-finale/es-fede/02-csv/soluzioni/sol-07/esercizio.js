// SOL-07 - CSV con template.replace
// Concetti chiave: template.replace() per costruire ogni riga HTML in modo leggibile
// Esegui con: node esercizio.js

const csv = `partito,percentuale
Partito A,32.5
Partito B,24.1
Partito C,18.7
Partito D,14.2
Partito E,10.5`;

const righe = csv.trim().split('\n');
const colonne = righe.shift().split(',');

const partiti = righe.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

let html = "";
const template = "<tr><td>{nome}</td><td>{percentuale}%</td></tr>\n";

partiti.forEach((p) => {
  html += template.replace("{nome}", p.partito).replace("{percentuale}", p.percentuale);
});

console.log(html);
