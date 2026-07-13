// ============================================================
// JAVASCRIPT BASE — APPUNTI COMMENTATI
// Da eseguire con Node.js: apri il terminale in questa cartella
// e scrivi:  node teoria-js-base.js
// ============================================================


// ============================================================
// 1. VARIABILI: let e const
// ============================================================
// In JavaScript esistono due modi principali per creare una variabile:
// - "let"   crea una variabile che si può modificare in seguito
// - "const" crea una costante: il valore NON si può più riassegnare
//
// Regola pratica: usa SEMPRE "const" per default. Passa a "let" solo
// se sai già che quel valore dovrà cambiare (es. un contatore in un
// ciclo, un punteggio che aumenta, ecc.)

let eta = 16;
eta = 17; // va bene, "let" si può riassegnare
console.log("Età (let, modificabile):", eta);

const nomeScuola = "Liceo Italia";
// nomeScuola = "Altro Liceo"; // ERRORE! non si può riassegnare una const
console.log("Nome scuola (const, fissa):", nomeScuola);


// ============================================================
// 2. TIPI DI DATO: stringa, numero, booleano, undefined, null
// ============================================================
// - string    -> testo, tra virgolette singole, doppie o backtick
// - number    -> numeri interi o decimali (in JS non c'è distinzione)
// - boolean   -> solo true o false
// - undefined -> una variabile dichiarata ma a cui non è stato ancora
//                dato un valore
// - null      -> un valore "vuoto" assegnato di proposito da noi

const stringa = "ciao mondo";
const numero = 42;
const decimale = 3.14;
const booleano = true;
let nonDefinita; // undefined, non le ho ancora dato un valore
const valoreNullo = null; // vuoto, ma di proposito

console.log("stringa:", stringa, "- tipo:", typeof stringa);
console.log("numero:", numero, "- tipo:", typeof numero);
console.log("decimale:", decimale, "- tipo:", typeof decimale);
console.log("booleano:", booleano, "- tipo:", typeof booleano);
console.log("nonDefinita:", nonDefinita, "- tipo:", typeof nonDefinita);
console.log("valoreNullo:", valoreNullo, "- tipo:", typeof valoreNullo);


// ============================================================
// 3. OPERATORI
// ============================================================

// --- Operatori aritmetici: + - * / ---
// Servono per fare calcoli matematici tra numeri
const a = 10;
const b = 3;
console.log("Somma:", a + b);         // 13
console.log("Differenza:", a - b);    // 7
console.log("Moltiplicazione:", a * b); // 30
console.log("Divisione:", a / b);     // 3.333...

// --- Operatori di confronto: === !== > < ---
// Confrontano due valori e restituiscono true o false.
// Usa SEMPRE === e !== (confronto "forte", controlla anche il tipo)
// invece di == e != che possono dare risultati imprevisti.
console.log("5 === 5:", 5 === 5);     // true
console.log("5 === '5':", 5 === "5"); // false, tipi diversi (number vs string)
console.log("5 !== 3:", 5 !== 3);     // true
console.log("5 > 3:", 5 > 3);         // true
console.log("5 < 3:", 5 < 3);         // false

// --- Operatori logici: && || ! ---
// Combinano più condizioni booleane
// &&  -> "e" (AND): vero solo se ENTRAMBE le condizioni sono vere
// ||  -> "o" (OR): vero se ALMENO UNA condizione è vera
// !   -> "non" (NOT): inverte true/false

/****
 * 
 * AND
 *       t.    f
 * 
 *    t. T.    f
 * 
 *.   f  f.    f
 * 
 * 
 * OR
 *       t.    f
 * 
 *    t. T.    T
 * 
 *.   f  T     f

 NOT.    t -> f
         f -> t
 * 
 */

const haStudiato = true;
const haDormitoBene = false;

console.log("haStudiato && haDormitoBene:", haStudiato && haDormitoBene); // false
console.log("haStudiato || haDormitoBene:", haStudiato || haDormitoBene); // true
console.log("!haStudiato:", !haStudiato); // false


// ============================================================
// 4. IF / ELSE
// ============================================================
// Permette di eseguire codice diverso a seconda che una condizione
// sia vera o falsa.

const voto = 5.5;

if (voto >= 6) {
  console.log(`Voto ${voto}: sufficiente!`);
} else {
  console.log(`Voto ${voto}: insufficiente, bisogna migliorare.`);
}



// ============================================================
// 5. FOR CLASSICO
// ============================================================
// Il ciclo "for" ripete un blocco di codice un numero definito di
// volte. Ha tre parti tra le parentesi:
// 1) inizializzazione (let i = 1)
// 2) condizione di continuazione (i <= 5)
// 3) aggiornamento ad ogni giro (i++)

for (let i = 1; i <= 5; i++) {
  console.log("Numero:", i);
}


// ============================================================
// 6. WHILE
// ============================================================
// Il ciclo "while" ripete un blocco di codice finché una condizione
// resta vera. A differenza del "for" non sappiamo in anticipo quante
// volte girerà: dipende da quando la condizione diventa falsa.
// Esempio pratico: un serbatoio che si svuota finché non è vuoto.

let benzina = 5; // litri rimasti

while (benzina > 0) {
  console.log("Benzina rimasta:", benzina, "litri");
  benzina = benzina - 1;
}
console.log("Serbatoio vuoto!");


// ============================================================
// 7. FUNZIONI: modo classico e modo freccia (arrow function)
// ============================================================
// Una funzione è un blocco di codice riutilizzabile, a cui possiamo
// passare dei dati (parametri) e che può restituire un risultato
// (return). Ci sono due modi principali per scriverla in JS.

// --- Modo classico ---
function saluta(nome) {
  return `Ciao ${nome}, benvenuto!`;
}

// --- Modo freccia (arrow function) ---
// Stessa cosa, ma con una sintassi più corta, molto usata nel JS
// moderno, soprattutto per funzioni brevi.
const salutaFreccia = (nome) => {
  return `Ciao ${nome}, benvenuto!`;
};

// Se la funzione freccia contiene solo un "return", si può scrivere
// in una riga sola, senza graffe e senza scrivere "return":
const salutaFrecciaCorta = (nome) => `Ciao ${nome}, benvenuto!`;

console.log(saluta("Marco"));
console.log(salutaFreccia("Marco"));
console.log(salutaFrecciaCorta("Marco"));


// ============================================================
// 8. ARRAY: cos'è, come si crea, come si accede agli elementi
// ============================================================
// Un array è una lista ordinata di valori. Ogni elemento ha una
// posizione numerica (indice) che parte da 0.

const frutti = ["mela", "banana", "kiwi", "arancia"];

console.log("Array completo:", frutti);
console.log("Primo elemento (indice 0):", frutti[0]);
console.log("Terzo elemento (indice 2):", frutti[2]);
console.log("Lunghezza dell'array:", frutti.length);

frutti[1] = "pera"; // modifico un elemento esistente
console.log("Array dopo la modifica:", frutti);


// ============================================================
// 9. METODI ARRAY: forEach, map, filter, find, sort, reduce
// ============================================================

const numeri = [5, 12, 8, 3, 20, 1];

for (let i = 0; i < numeri.length; i++) {
  let numero_singolo = numeri[i];
}

// --- forEach: esegue un'azione per ogni elemento (non ritorna niente) ---
console.log("--- forEach ---");
numeri.forEach((n) => {
  console.log("Elemento:", n);
});

// --- map: crea un NUOVO array trasformando ogni elemento ---
console.log("--- map ---");
const numeriRaddoppiati = numeri.map((n) => n * 2);
console.log("Originale:", numeri);
console.log("Raddoppiati:", numeriRaddoppiati);

// --- filter: crea un NUOVO array con solo gli elementi che rispettano
// una condizione ---
console.log("--- filter ---");
const numeriMaggioriDi5 = numeri.filter((n) => n > 5);
console.log("Maggiori di 5:", numeriMaggioriDi5);

// --- find: restituisce il PRIMO elemento che rispetta una condizione
// (non un array, un singolo valore) ---
console.log("--- find ---");
const primoMaggioreDi10 = numeri.find((n) => n > 10);
console.log("Primo maggiore di 10:", primoMaggioreDi10);

// --- sort: ordina l'array. Attenzione: di default ordina come testo!
// Per ordinare numeri bisogna dare una funzione di confronto. ---
console.log("--- sort ---");
const numeriOrdinati = [...numeri].sort((x, y) => x-y); // crescente
console.log("Ordinati crescente:", numeriOrdinati);

// --- reduce: "riduce" tutto l'array a un unico valore, accumulando
// un risultato passo dopo passo (es. somma totale) ---
console.log("--- reduce ---");
const somma = numeri.reduce((accumulatore, n) => accumulatore + n, 0);
console.log("Somma di tutti gli elementi:", somma);


// ============================================================
// 10. DIZIONARI (OGGETTI): cos'è, come si crea, come si legge
// ============================================================
// Un dizionario (in JS si chiama "oggetto") raccoglie dati sotto
// forma di coppie chiave: valore. Si usa quando i dati hanno un
// "nome" invece che solo una posizione come negli array.

let studente = {
  nome: "Luca",
  cognome: "Verdi",
  eta: 16,
};

// Lettura con la notazione a punto (la più comune)
console.log("Nome (con il punto):", studente.nome);

studente.cognome="Rossi";

// ============================================================
// 11. FOR...IN per scorrere un dizionario
// ============================================================
// Il ciclo "for...in" scorre tutte le CHIAVI di un oggetto, una
// per una, permettendoci di leggerne anche il valore.

console.log("--- for...in su studente ---");
for (const chiaveDict in studente) {
  console.log(chiaveDict, "->", studente[chiaveDict]);
}


// ============================================================
// 12. Object.keys() e Object.values()
// ============================================================
// - Object.keys(oggetto)   restituisce un ARRAY con tutte le chiavi
// - Object.values(oggetto) restituisce un ARRAY con tutti i valori

console.log("Chiavi:", Object.keys(studente));
console.log("Valori:", Object.values(studente));


// ============================================================
// 13. ARRAY DI DIZIONARI (esempio pratico: lista studenti)
// ============================================================
// Combinando array e dizionari possiamo rappresentare dati tabellari,
// come un registro di classe: ogni studente è un dizionario, e la
// lista di studenti è un array.

const classe = [
  { nome: "Luca", voto: 7 },
  { nome: "Giulia", voto: 9 },
  { nome: "Marco", voto: 5 },
];

console.log("--- Registro classe ---");
classe.forEach((s) => {
  console.log(`${s.nome} ha preso ${s.voto}`);
});

// Esempio: troviamo la media della classe usando reduce
const mediaClasse = classe.reduce((acc, s) => acc + s.voto, 0) / classe.length;
console.log("Media della classe:", mediaClasse);

// Esempio: filtriamo solo i promossi (voto >= 6)
const promossi = classe.filter((s) => s.voto >= 6);
console.log("Promossi:", promossi);
