// SOL-05 - CSV risultato semplice
// Concetti chiave: map per costruire ogni riga del CSV risultato, join per riunirle
// Esegui con: node esercizio.js

const csv = `nome,cognome,voto
Marco,Bianchi,7
Giulia,Verdi,4
Luca,Rossi,6
Sara,Neri,9
Elena,Gialli,5`;

const righe = csv.trim().split('\n');
const colonne = righe.shift().split(',');

const studenti = righe.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

const righeRisultato = studenti.map((s) => {
  const status = parseInt(s.voto) >= 6 ? "promosso" : "bocciato";
  return `${s.nome},${s.cognome},${status}`;
});

const csvRisultato = "nome,cognome,status\n" + righeRisultato.join('\n');

console.log(csvRisultato);
