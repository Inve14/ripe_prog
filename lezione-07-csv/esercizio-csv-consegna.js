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


//elimino gli "a capo"
let csv = csvPagelle.trim();


//righe del csv
const rows = csv.split('\n');


//intestazioni del csv
const headers = rows.shift();
//headers = "nome,cognome,italiano,matematica,inglese,storia,scienze


const colonne = headers.split(',');
//colonne = ["nome", "cognome", "italiano", ....]

//rows = ["Luca,Rossi,7,5,8,6,7", "Giulia,Bianchi,9,8,9,7,10", ....]


const studenti = rows.map((studente) => {
    const valori = studente.split(',');
    //valori = ["Luca", "Rossi", "7", ...]

    const dizionario = {};

    let somma = 0;
    let num_voti = 0;

    colonne.forEach((nomeColonna, indice) => {
        dizionario[nomeColonna] = valori[indice];
        if(indice > 1){
            somma += parseInt(valori[indice]);
            num_voti++;
        }
    });
    if(somma/num_voti >=6){
        dizionario["valutazione"] = "Promosso";
    } else {
        dizionario["valutazione"] = "Bocciato";
    }
    dizionario["media"] = somma/num_voti;
    return dizionario;
});

console.log(studenti);
