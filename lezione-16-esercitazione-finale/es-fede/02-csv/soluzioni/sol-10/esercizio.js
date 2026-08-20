// SOL-10 - CSV completo
// Concetti chiave: combina tutte le tecniche precedenti: media, status, insufficienze, CSV finale
// Esegui con: node esercizio.js

const csv = `nome,cognome,italiano,matematica,inglese,storia,scienze
Marco,Bianchi,5,7,6,4,8
Giulia,Verdi,8,9,7,6,9
Luca,Rossi,4,5,6,5,7
Sara,Neri,9,8,9,8,9
Elena,Gialli,6,4,5,7,6`;

const righe = csv.trim().split('\n');
const colonne = righe.shift().split(',');
const materie = colonne.slice(2);

const studenti = righe.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

const righeRisultato = studenti.map((s) => {
  const voti = materie.map((m) => parseInt(s[m]));
  const somma = voti.reduce((acc, v) => acc + v, 0);
  const media = somma / voti.length;
  const status = media >= 6 ? "promosso" : "bocciato";
  const insufficienti = materie.filter((m) => parseInt(s[m]) < 6);

  return `${s.nome},${s.cognome},${media.toFixed(1)},${status},${insufficienti.length},${insufficienti.join('/')}`;
});

const csvRisultato = "nome,cognome,media,status,numInsufficienze,materieInsufficienti\n" + righeRisultato.join('\n');

console.log(csvRisultato);
