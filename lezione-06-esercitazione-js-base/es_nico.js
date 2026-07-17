// ============================================================
// LEZIONE 6 — Esercitazione JavaScript base
// ============================================================
// 9 esercizi divisi in tre livelli: facile, medio, completo.
// Per ogni esercizio trovi la consegna, un eventuale suggerimento
// e i dati di esempio già pronti. Scrivi il codice nello spazio
// indicato. Le soluzioni complete sono nel file
// "soluzioni-js-base.js".
//
// Per eseguire questo file: node esercizi-js-base.js
// ============================================================


// ============================================================
// LIVELLO FACILE
// ============================================================

// --- Esercizio 1 ---
console.log("ESERCIZIO 1");

// Consegna: stampa tutti i numeri da 1 a 10 usando un ciclo for.
// Suggerimento: usa un ciclo for con la condizione i <= 10.

// scrivi qui il tuo codice
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// --- Esercizio 2 ---
console.log("ESERCIZIO 2");

// Consegna: data la lista di numeri qui sotto, stampa solo quelli
// pari e maggiori di 5.
// Suggerimento: usa filter e l'operatore % (modulo).

const numeriEs2 = [3, 8, 11, 14, 20, 7, 2, 9];

// scrivi qui il tuo codice

for (let i = 0; i <= numeriEs2.length; i++) {
    if (numeriEs2[i] % 2 == 0 && numeriEs2[i] > 5) {
        console.log(numeriEs2[i]);

    }
}




// --- Esercizio 3 ---
console.log("ESERCIZIO 3");

// Consegna: scrivi una funzione freccia che riceve un nome e
// restituisce la stringa "Ciao [nome]!".
// Suggerimento: usa una arrow function con return.

// scrivi qui il tuo codice
const saluta = (nome) => {
    return "ciao " + nome;
}

console.log("" + saluta("Nico"));

const saluta2 = (nome) => {
    console.log("ciao " + nome);
}

saluta2("Nico")


// --- Esercizio 4 ---
console.log("ESERCIZIO 4");

// Consegna: data la lista di voti qui sotto, trova il voto più
// alto.
// Suggerimento: usa il sort ordinando la lista in maniera decrescente(...).

const votiEs4 = [6, 8, 5, 9, 7, 10, 4];


// scrivi qui il tuo codice
let votoMax = votiEs4.sort((x, y) => y - x); //decrescente
// votoMax = [10, 9, 8, 7, 6, 5, 4]
console.log(votoMax[0]);
votoMax = votiEs4.sort((x, y) => x - y); //crescente
console.log(votoMax[votoMax.length - 1]);


// ============================================================
// LIVELLO MEDIO
// ============================================================

// --- Esercizio 5: FizzBuzz ---
console.log("ESERCIZIO 5");

// Consegna: per ogni numero da 1 a 20, stampa:
// - "FizzBuzz" se il numero è divisibile sia per 3 che per 5
// - "Fizz" se è divisibile solo per 3
// - "Buzz" se è divisibile solo per 5
// - altrimenti stampa il numero stesso
// Indizio: controlla prima il caso FizzBuzz, poi Fizz, poi Buzz.


// scrivi qui il tuo codice
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " -> FizzBuzz");
    } else if (i % 3 == 0) {
        console.log(i + " -> fizz");
    } else if (i % 5 == 0) {
        console.log(i + " -> buzz");
    }
}



// --- Esercizio 6 ---
console.log("ESERCIZIO 6");
// Consegna: data la lista di studenti con voto qui sotto, filtra
// solo i promossi (voto >= 6) e stampa i loro nomi.
const studentiEs6 = [
    { nome: "Anna", voto: 8 },
    { nome: "Marco", voto: 5 },
    { nome: "Elisa", voto: 6 },
    { nome: "Paolo", voto: 4 },
];


// voto -> studentiEs6[i].voto
// nome -> studenti[i].nome

// scrivi qui il tuo codice
for( let i=0; i<studentiEs6.length; i++){
    //studentiEs6[i] -> "{ nome: "Anna", voto: 8 }"
    let voto = studentiEs6[i].voto;
    let nome = studentiEs6[i].nome;
    if ( voto >= 6){
      console.log(nome);
    }
}


//dati = {
//    nome: "carlo",
//    cognome: "invernizzi"
//}
//dati.nome

//dati = [
//    {telefono: "123", indirizzo: "Milano"},
//    {telefono: "456", indirizzo: "Roma"},
//    {telefono: "789", indirizzo: "Lodi" identita: {eta: 1, sesso: "m"}}
//]
//dati[i].indizzo



// --- Esercizio 7 ---
console.log("ESERCIZIO 7");

// Consegna: dato l'array di numeri qui sotto, calcola la media.
// Indizio: somma tutti i valori poi dividi 
const numeriEs7 = [7, 8, 6, 9, 5];

// scrivi qui il tuo codice
let somma=0;
for(let i=0; i<numeriEs7.length; i++){
  somma=somma+numeriEs7[i];
}
const media = somma / numeriEs7.length;
console.log(media);




// --- Esercizio 8 ---
// Consegna: dato il dizionario {cognome: voto} qui sotto, stampa
// ogni coppia nel formato "cognome → voto".
// Indizio: usa un ciclo for.
const votiPerCognomeEs8 = {
    Rossi: 8,
    Bianchi: 6,
    Verdi: 9,
};

// scrivi qui il tuo codice
for(let = 1; )




// ============================================================
// LIVELLO COMPLETO
// ============================================================

// --- Esercizio 9 ---
// Consegna: dato l'array di dizionari studenti qui sotto (nome,
// cognome, e un array con i voti di 3 materie), calcola la media
// dei voti per ogni studente. Stampa per ognuno "nome cognome:
// media", con la media formattata a una cifra decimale (usa
// toFixed(1)). Alla fine, stampa il nome dello studente con la
// media più alta.
const studentiEs9 = [
    { nome: "Luca", cognome: "Rossi", voti: [7, 8, 6] },
    { nome: "Giulia", cognome: "Bianchi", voti: [9, 9, 10] },
    { nome: "Marco", cognome: "Verdi", voti: [5, 6, 7] },
    { nome: "Sara", cognome: "Neri", voti: [8, 7, 9] },
];

// scrivi qui il tuo codice
