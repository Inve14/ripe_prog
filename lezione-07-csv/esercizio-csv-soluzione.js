// ============================================================
// SOLUZIONE — Analisi pagelle da CSV
// ============================================================
// Stessa consegna di "esercizio-csv-consegna.js": parsare il CSV,
// calcolare media e status, trovare le materie insufficienti e
// generare un CSV risultato.
//
// Per eseguire questo file: node esercizio-csv-soluzione.js
// ============================================================

const csvPagelle = `
nome,cognome,italiano,matematica,inglese,storia,scienze
Luca,Rossi,7,5,8,6,7
Giulia,Bianchi,9,8,9,7,10
Marco,Verdi,5,4,6,5,4
Sara,Neri,8,7,7,9,8
Elena,Conti,6,5,4,7,6
`;

// --- 1. Parsing del CSV in un array di dizionari ---
// trim() toglie le newline iniziale/finale, split('\n') divide
// in righe, shift() estrae l'header (nomi colonna) rimuovendolo
// da "righe".
const csv = csvPagelle.trim();
const righe = csv.split('\n');
const colonne = righe.shift().split(',');

// Le prime due colonne (nome, cognome) restano testo, le altre
// sono le materie: i loro valori sono voti e vanno convertiti in
// numero con Number(), altrimenti resterebbero stringhe e non
// potremmo fare calcoli o confronti corretti (es. "10" < "6" è
// vero come stringa, ma sbagliato come numero!).
const materie = colonne.slice(2); // ["italiano","matematica","inglese","storia","scienze"]

const studenti = righe.map((riga) => {
  const valori = riga.split(',');
  const studente = {
    nome: valori[0],
    cognome: valori[1],
  };
  materie.forEach((materia, indice) => {
    studente[materia] = Number(valori[indice + 2]);
  });
  return studente;
});

console.log("--- Studenti (parsati dal CSV, voti come numeri) ---");
console.log(studenti);


// --- 2, 3, 4. Media, status e materie insufficienti ---
// Per ogni studente: prendiamo i voti delle materie con map,
// calcoliamo la media con reduce, determiniamo lo status
// confrontando la media con 6, e troviamo le materie
// insufficienti con filter (voto < 6).
const risultati = studenti.map((studente) => {
  const voti = materie.map((materia) => studente[materia]);
  const media = voti.reduce((acc, voto) => acc + voto, 0) / voti.length;
  const status = media >= 6 ? "promosso" : "bocciato";
  const materieInsufficienti = materie.filter((materia) => studente[materia] < 6);

  return {
    nome: studente.nome,
    cognome: studente.cognome,
    media: media.toFixed(1),
    status,
    insufficienze: materieInsufficienti.length,
    materieInsufficienti: materieInsufficienti.join('/'),
  };
});

console.log("--- Risultati (media, status, insufficienze) ---");
console.log(risultati);


// --- 5. Generare il CSV risultato ---
// Header con i nomi delle nuove colonne, poi una riga per ogni
// studente con Object.values().join(','), infine tutto unito con
// join('\n').
const headerRisultato = "nome,cognome,media,status,insufficienze,materieInsufficienti";
const righeRisultato = risultati.map((r) => Object.values(r).join(','));
const csvRisultato = headerRisultato + '\n' + righeRisultato.join('\n');

// --- 6. Stampa il CSV risultato ---
console.log("--- CSV risultato ---");
console.log(csvRisultato);
