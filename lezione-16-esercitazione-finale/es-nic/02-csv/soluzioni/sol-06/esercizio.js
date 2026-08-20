// SOL-06 - Dizionario da CSV
// Concetti chiave: forEach per riempire il dizionario, for...in per scorrerlo
// Esegui con: node esercizio.js

const csv = `prodotto,prezzo
Mouse,15
Tastiera,25
Monitor,120
Webcam,40
Cuffie,60`;

const righe = csv.trim().split('\n');
righe.shift(); // qui non serve tenere l'array delle colonne

const dizionario = {};

righe.forEach((riga) => {
  const [prodotto, prezzo] = riga.split(',');
  dizionario[prodotto] = parseInt(prezzo);
});

for (const prodotto in dizionario) {
  console.log(`${prodotto}: ${dizionario[prodotto]} euro`);
}
