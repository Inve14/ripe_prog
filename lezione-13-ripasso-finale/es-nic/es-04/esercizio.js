// ES-04 — Dizionario base
//
// CONSEGNA:
// Dato il dizionario con nome, materie e voti, stampa ogni coppia
// chiave-valore
//

const studente = {
  nome: "Giulia",
  materie: ["Matematica", "Italiano", "Inglese"],
  voti: [7, 8, 6],
};

// chiave -> nome
// valore -> Giulia
// chiave -> voti
// valore -> ["Matematica", "Italiano", "Inglese"]

// Scrivi qui il tuo codice

for (let chiave in studente){
  console.log(chiave, " -> ", studente[chiave]);
}
 
