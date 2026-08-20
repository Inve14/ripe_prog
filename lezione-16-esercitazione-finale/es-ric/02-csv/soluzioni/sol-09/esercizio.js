// SOL-09 - CSV con materie insufficienti
// Concetti chiave: colonne.slice(2) per isolare i nomi delle materie, poi filter su ognuna
// Esegui con: node esercizio.js

const csv = `nome,cognome,italiano,matematica,inglese,storia,scienze
Marco,Bianchi,5,7,6,4,8
Giulia,Verdi,8,9,7,6,9
Luca,Rossi,4,5,6,5,7
Sara,Neri,9,8,9,8,9
Elena,Gialli,6,4,5,7,6`;

const righe = csv.trim().split('\n');
const colonne = righe.shift().split(',');
const materie = colonne.slice(2); // tutte le colonne dopo nome e cognome

const studenti = righe.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

studenti.forEach((s) => {
  const insufficienti = materie.filter((m) => parseInt(s[m]) < 6);
  const testo = insufficienti.length === 0 ? "nessuna insufficienza" : insufficienti.join(', ');
  console.log(`${s.nome} ${s.cognome}: ${testo}`);
});
