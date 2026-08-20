// SOL-04 - Media da CSV
// Concetti chiave: reduce sull'array dei voti per calcolare la somma, poi la media
// Esegui con: node esercizio.js

const csv = `nome,italiano,matematica,inglese
Marco,6,7,5
Giulia,8,9,7
Luca,5,6,6
Sara,9,8,9
Elena,7,6,8`;

const righe = csv.trim().split('\n');
const colonne = righe.shift().split(',');

const studenti = righe.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

studenti.forEach((s) => {
  const voti = [parseInt(s.italiano), parseInt(s.matematica), parseInt(s.inglese)];
  const somma = voti.reduce((acc, v) => acc + v, 0);
  const media = somma / voti.length;
  console.log(`${s.nome}: media ${media.toFixed(1)}`);
});
