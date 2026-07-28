// ============================================================
// RIPASSO VELOCE — CSV in JavaScript
// Da eseguire con Node.js:  node ripasso-csv.js
// ============================================================
// Questo non è un ripasso completo della teoria (quella è nella
// lezione 07, file teoria-csv.js). È solo un promemoria rapido
// dei 4 blocchi che servono per lavorare con i CSV.


// ============================================================
// 1) LE 4 RIGHE FONDAMENTALI DEL PARSING
// ============================================================
// trim()       -> toglie spazi/newline iniziali e finali
// replaceAll() -> toglie gli spazi "in mezzo" (dopo le virgole)
// split('\n')  -> trasforma la stringa in un array di righe
// shift()      -> stacca la prima riga (header) dal resto

const csvGrezzo = `
nome, voto
Luca, 7
Giulia, 9
`;

let csv = csvGrezzo.trim();               // 1. trim
/*
const csvGrezzo = `nome, voto
Luca, 7
Giulia, 9`;
*/
csv = csv.replaceAll(' ', '');            // 2. replaceAll
/*
csv = `nome,voto
Luca,7
Giulia,9`;
*/
const righe = csv.split('\n');            // 3. split
/*
righe = ["nome,voto", "Luca,7", "Giulia,9"]
*/
const header = righe.shift();             // 4. shift (righe ora è solo dati)
//header = "nome,voto"
//righe = ["Luca,7", "Giulia,9"]

console.log("1) Parsing base");
console.log("header:", header);
console.log("righe (senza header):", righe);


// ============================================================
// 2) DA CSV AD ARRAY DI DIZIONARI
// ============================================================
// Le colonne dell'header diventano le chiavi. Con map() creiamo
// un dizionario per ogni riga, usando forEach sulle colonne per
// abbinare ogni valore alla chiave giusta.

const colonne = header.split(',');
//colonne = ["nome", "voto"]

const studenti = righe.map((riga) => {
  //al primo ciclo di map, riga = "Giulia,9"
  const valori = riga.split(',');
  //                                        0        1
  //split crea un nuovo array -> valori = ["Giulia", "9"]
  const dizionario = {};
  colonne.forEach((nomeColonna, indice) => {
    dizionario[nomeColonna] = valori[indice];
    //                       valori [0] -> 
    /*
    per il primo ciclo
    dizionario = {
      nome:
      voto:
    }
    */
  });
  return dizionario;
});

console.log("\n2) Array di dizionari");
console.log(studenti);


// ============================================================
// 3) DA ARRAY DI DIZIONARI A CSV RISULTATO (map + join)
// ============================================================
// Percorso inverso: header con join(','), righe con
// Object.values().join(','), tutto unito con join('\n').

//colonne = ["nome", "voto"]
const headerRisultato = colonne.join(',');
//headerRisultato = "nome,voto"

//righe = ["Luca,7", "Giulia,9"]
const righeRisultato = studenti.map((s) => Object.values(s).join(','));
// righeRisultato = "Luca,7 Giulia,9"

const csvRisultato = headerRisultato + '\n' + righeRisultato.join('\n');
//guarda stampa da terminale

console.log("\n3) CSV risultato (map + join)");
console.log(csvRisultato);


// ============================================================
// 4) IL PATTERN template.replace()
// ============================================================
// Utile quando il risultato non è un vero CSV ma una frase, o
// quando l'ordine delle colonne cambia rispetto all'originale.

const template = "{{nome}} ha preso {{voto}}/10";

const frasi = studenti.map((s) =>
  template.replace('{{nome}}', s.nome).replace('{{voto}}', s.voto)
);

console.log("\n4) template.replace()");
console.log(frasi.join('\n'));
