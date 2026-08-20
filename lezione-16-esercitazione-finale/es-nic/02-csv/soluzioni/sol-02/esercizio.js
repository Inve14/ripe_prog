// SOL-02 - Filtro su CSV
// Concetti chiave: parsing + filter sul valore numerico del voto
// Esegui con: node esercizio.js

const csv = `nome,voto
Marco,7
Giulia,4
Luca,6
Sara,9
Elena,5
Davide,8`;

const righe = csv.trim().split('\n');
const colonne = righe.shift().split(',');

const studenti = righe.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

// il voto arriva come stringa dal CSV: va convertito prima di confrontarlo
const promossi = studenti.filter((s) => parseInt(s.voto) >= 6);

promossi.forEach((s) => {
  console.log(`${s.nome} (voto ${s.voto})`);
});
