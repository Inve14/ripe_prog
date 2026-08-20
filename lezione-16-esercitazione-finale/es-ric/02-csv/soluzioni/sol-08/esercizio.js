// SOL-08 - Classifica da CSV
// Concetti chiave: sort con comparatore decrescente (b - a) sul punteggio numerico
// Esegui con: node esercizio.js

const csv = `nome,punteggio
Marco,850
Giulia,920
Luca,700
Sara,980
Elena,760`;

const righe = csv.trim().split('\n');
const colonne = righe.shift().split(',');

const giocatori = righe.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

// convertiamo il punteggio in numero prima di ordinare, altrimenti sort
// confronta le stringhe carattere per carattere
giocatori.forEach((g) => (g.punteggio = parseInt(g.punteggio)));

giocatori.sort((a, b) => b.punteggio - a.punteggio);

giocatori.forEach((g, i) => {
  console.log(`${i + 1}° posto: ${g.nome} (${g.punteggio} punti)`);
});
