// ES-03 — Map e filter concatenati
//
// CONSEGNA:
// Dato l'array di studenti (nome, voto) solo i
// promossi (voto >= 6).
// Stampa il risultato.

const studenti = [
  { nome: "Marco", voto: 7 },
  { nome: "Giulia", voto: 5 },
  { nome: "Luca", voto: 8 },
  { nome: "Sara", voto: 4 },
  { nome: "Elena", voto: 6 },
];

// Scrivi qui il tuo codice

studenti.forEach(studente => {
  if(studente.voto >= 6 ){
    console.log(studente.nome);
  }
});