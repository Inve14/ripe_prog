// ============================================================
// ESERCIZIO — Analisi pagelle da CSV
// ============================================================
// Consegna:
// Qui sotto trovi un CSV con i voti di 5 studenti in 5 materie
// (italiano, matematica, inglese, storia, scienze), già pronto
// nella costante "csvPagelle".
//
// Scrivi un programma che:
// 1. Trasforma il CSV in un array di dizionari (uno per
//    studente), con i voti convertiti in NUMERI (non stringhe!).
// 2. Per ogni studente calcola la MEDIA dei voti delle 5 materie.
// 3. Determina lo STATUS: "promosso" se la media è >= 6,
//    altrimenti "bocciato".
// 4. Trova le MATERIE INSUFFICIENTI, cioè quelle con voto < 6
//    (possono essere zero, una o più materie).
// 5. Genera un CSV risultato con le colonne:
//    nome, cognome, media, status, insufficienze, materieInsufficienti
//    dove "insufficienze" è il numero di materie insufficienti e
//    "materieInsufficienti" è la lista dei loro nomi separata da
//    "/" (es. "matematica/scienze"), oppure una stringa vuota se
//    non ce ne sono.
// 6. Stampa il CSV risultato con console.log.
//
// Per eseguire questo file: node esercizio-csv-consegna.js
// ============================================================

const csvPagelle = `
nome,cognome,italiano,matematica,inglese,storia,scienze
Luca,Rossi,7,5,8,6,7
Giulia,Bianchi,9,8,9,7,10
Marco,Verdi,5,4,6,5,4
Sara,Neri,8,7,7,9,8
Elena,Conti,6,5,4,7,6
`;

// scrivi qui il tuo codice


// 1. Trasforma il CSV in un array di dizionari (uno per
//    studente), con i voti convertiti in NUMERI (non stringhe!).

//elimino gli spazi sopra e sotto del csv
let csvPagelle_1 = csvPagelle.trim();

//non serve rimuovere gli spazi con .replaceAll perchè il csv è già senza spazi

//creiamo un array per avere in maniera ordinata le varie righe della pagella usando split sull'"a capo" (\n)
const righe_pagelle = csvPagelle_1.split("\n");

//usiamo lo shift per avere in maniera separata:
// l'header: che contiene la riga che corrisponde a "nome,cognome,italiano,matematica,inglese,storia,scienze"
// rows senza header: che contiene le righe con dentro i valori effettivi dell'header

const header_pagelle = righe_pagelle.shift();

//usiamo il .split nell'header per creare un array ordinato con tutti i valori delle colonne in ordine
const colonne = header_pagelle.split(",");


//creiamo il csv

const studenti = righe_pagelle.map((riga) => {
    const valori = riga.split(",");
    const dizionario = {};

    colonne.forEach((nomecolonna, i) => {
        dizionario[nomecolonna]=valori[i];
    });

    return dizionario;

});

console.log(studenti);
