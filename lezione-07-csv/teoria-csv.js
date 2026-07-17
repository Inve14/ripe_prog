// ============================================================
// CSV IN JAVASCRIPT — APPUNTI COMMENTATI
// Da eseguire con Node.js: apri il terminale in questa cartella
// e scrivi:  node teoria-csv.js
// ============================================================


// ============================================================
// COS'È UN CSV?
// ============================================================
// CSV sta per "Comma Separated Values" (valori separati da
// virgola). È un modo semplicissimo per scrivere dati tabellari
// (come una tabella di Excel) dentro un normale file di testo:
// ogni RIGA di testo corrisponde a una riga della tabella, e i
// valori dentro la riga sono separati da virgole. La prima riga
// di solito è l'HEADER, cioè contiene i nomi delle colonne.
//
// Esempio: un registro di studenti con nome, cognome e voto.

const csvEsempio = `
nome, cognome, voto
Luca, Rossi, 7
Giulia, Bianchi, 9
Marco, Verdi, 5
`;

console.log("--- CSV di esempio ---");
console.log(csvEsempio);


// ============================================================
// STEP 1: trim() — rimuovere spazi e newline iniziali/finali
// ============================================================
// Quando scriviamo un CSV su più righe con i backtick (come sopra),
// spesso rimane una riga vuota all'inizio e/o alla fine. trim()
// rimuove gli spazi e i caratteri di "a capo" solo all'inizio e
// alla fine della stringa, lasciando intatto il contenuto centrale.

let csv = csvEsempio.trim();

/*
.trim() -> ci va a togliere gli spazi sopra e sotto
--------------
nome, cognome, voto
Luca, Rossi, 7
Giulia, Bianchi, 9
Marco, Verdi, 5
--------------
*/

console.log("--- Dopo trim() ---");
console.log(csv);


// ============================================================
// STEP 2: replaceAll(' ', '') — rimuovere tutti gli spazi
// ============================================================
// Nel CSV di esempio, dopo ogni virgola c'è uno spazio (", ") per
// renderlo più leggibile a chi legge. Per lavorarci facilmente
// conviene toglierlo: replaceAll(' ', '') sostituisce OGNI spazio
// della stringa con una stringa vuota, cioè lo elimina.

csv = csv.replaceAll(' ', '');

/*
.replaceAll -> ci va a togliere gli spazi tra i vari caratteri
--------------
nome,cognome,voto
Luca,Rossi,7
Giulia,Bianchi,9
Marco,Verdi,5
--------------
*/

console.log("--- Dopo replaceAll(' ', '') ---");
console.log(csv);


// ============================================================
// STEP 3: split('\n') — dividere la stringa in righe
// ============================================================
// split('\n') taglia la stringa in corrispondenza di ogni "a
// capo" (newline) e restituisce un ARRAY: ogni elemento è una
// riga del CSV, ancora come stringa unica (non ancora divisa
// nelle singole colonne).

const rows = csv.split('\n');

console.log("--- Dopo split('\\n') ---");
console.log(rows);


// ============================================================
// STEP 4: shift() — estrarre l'header
// ============================================================
// shift() è un metodo degli array che RIMUOVE il primo elemento
// dell'array e lo RESTITUISCE come valore. Quindi dopo questa
// riga:
// - "header" contiene la prima riga (i nomi delle colonne)
// - "rows" NON contiene più l'header, solo le righe con i dati
//   (shift() modifica l'array originale, non ne crea uno nuovo)

const header = rows.shift();

console.log("--- header (restituito da shift) ---");
console.log(header);
console.log("--- rows (senza più l'header, modificato da shift) ---");
console.log(rows);


// ============================================================
// STEP 5: split(',') sull'header — ottenere i nomi delle colonne
// ============================================================
// L'header per ora è ancora una stringa unica
// ("nome,cognome,voto"). Con split(',') la trasformiamo in un
// array con i nomi delle colonne.

const colonne = header.split(',');

console.log("--- colonne (nomi delle colonne) ---");
console.log(colonne);


// ============================================================
// STEP 6: map() su ogni riga — costruire un array di dizionari
// ============================================================
// Vogliamo trasformare ogni riga di testo (es. "Luca,Rossi,7")
// in un dizionario tipo { nome: "Luca", cognome: "Rossi",
// voto: "7" }. Usiamo map() per creare un NUOVO array (uno per
// ogni riga): dentro, dividiamo la riga con split(',') e
// costruiamo il dizionario usando "colonne" come chiavi
// (colonne[0] -> "nome", colonne[1] -> "cognome", ecc.)


//rows -> [ 'Luca,Rossi,7', 'Giulia,Bianchi,9', 'Marco,Verdi,5' ]
const studenti = rows.map((row) => {
  const valori = row.split(',');
  //array "valori" al primo ciclo di map -> ['Luca', 'Rossi', '7']
  const dizionario = {};
  
  colonne.forEach((nomeColonna, indice) => {
    console.log(nomeColonna + " " + indice);
    dizionario[nomeColonna] = valori[indice];
  });
  return dizionario;
});


console.log("--- studenti (array di dizionari) ---");
console.log(studenti);


/*
studenti -> nome
studenti[1].nome
*/

// ============================================================
// STEP 7: accedere ai dati del dizionario
// ============================================================
// Ogni elemento di "studenti" è un dizionario: possiamo leggerne
// i campi con la notazione a punto, esattamente come un oggetto
// qualsiasi (es. studente.nome, studente.voto).

console.log("--- Accesso ai dati (notazione a punto) ---");
studenti.forEach((studente) => {
  console.log(`${studente.nome} ${studente.cognome} ha preso ${studente.voto}`);
});


// ============================================================
// STEP 8: generare un CSV risultato con map() + join('\n')
// ============================================================
// Ora facciamo il percorso INVERSO: da un array di dizionari a
// una stringa CSV. Prima creiamo la riga di header unendo i nomi
// delle colonne con join(','), poi per ogni studente costruiamo
// la riga dei valori con Object.values() + join(','), infine
// uniamo tutte le righe (header compreso) con join('\n').

const headerRisultato = colonne.join(',');
const righeRisultato = studenti.map((studente) => Object.values(studente).join(','));
const csvRisultato = headerRisultato + '\n' + righeRisultato.join('\n');

console.log("--- CSV risultato (con map + join) ---");
console.log(csvRisultato);


// ============================================================
// STEP 9: template.replace() come alternativa
// ============================================================
// Invece di costruire ogni riga con Object.values().join(','),
// possiamo scrivere un TEMPLATE con dei segnaposto (es.
// "{{nome}}") e sostituirli con replace(). È utile quando
// l'ordine o il formato delle colonne del risultato è diverso da
// quello del CSV di partenza, o quando vogliamo un formato che
// non è nemmeno un vero CSV (come una frase).

const templateRiga = "{{nome}} {{cognome}}: {{voto}}/10";

const righeConTemplate = studenti.map((studente) => {
  return templateRiga
    .replace('{{nome}}', studente.nome)
    .replace('{{cognome}}', studente.cognome)
    .replace('{{voto}}', studente.voto);
});

console.log("--- Righe generate con template.replace() ---");
console.log(righeConTemplate.join('\n'));
