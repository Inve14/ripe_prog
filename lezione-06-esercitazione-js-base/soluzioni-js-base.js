// ============================================================
// LEZIONE 6 — Soluzioni esercitazione JavaScript base
// ============================================================
// Soluzioni complete dei 9 esercizi di "esercizi-js-base.js",
// commentate e spiegate. Per ogni esercizio: soluzione, metodo
// chiave usato e motivo della scelta.
//
// Per eseguire questo file: node soluzioni-js-base.js
// ============================================================


// ============================================================
// LIVELLO FACILE
// ============================================================

// --- Soluzione Esercizio 1 ---
// Consegna: stampa tutti i numeri da 1 a 10.
console.log("--- Esercizio 1 ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Metodo chiave: ciclo for.
// Perché: sappiamo già esattamente quante volte ripetere
// l'azione (10 volte), quindi il for è la scelta naturale.


// --- Soluzione Esercizio 2 ---
// Consegna: stampa solo i numeri pari della lista.
const numeriEs2 = [3, 8, 11, 14, 20, 7, 2, 9];
console.log("--- Esercizio 2 ---");
const numeriPariEs2 = numeriEs2.filter((n) => n % 2 === 0);
console.log(numeriPariEs2);
// Metodo chiave: filter con l'operatore %.
// Perché: filter crea un nuovo array mantenendo solo gli elementi
// che soddisfano la condizione (n % 2 === 0 significa "resto zero
// dividendo per 2", cioè numero pari).


// --- Soluzione Esercizio 3 ---
// Consegna: funzione freccia che restituisce "Ciao [nome]!".
const salutaEs3 = (nome) => {
  return `Ciao ${nome}!`;
};
console.log("--- Esercizio 3 ---");
console.log(salutaEs3("Sara"));
// Metodo chiave: arrow function con return esplicito.
// Perché: la consegna chiede una funzione che "restituisce" la
// stringa (non che la stampa), quindi serve return; il chiamante
// deciderà cosa farne (qui la stampiamo con console.log).


// --- Soluzione Esercizio 4 ---
// Consegna: trova il voto più alto della lista.
const votiEs4 = [6, 8, 5, 9, 7, 10, 4];
console.log("--- Esercizio 4 ---");
const votoMassimoEs4 = Math.max(...votiEs4);
console.log(votoMassimoEs4);
// Metodo chiave: Math.max con lo spread operator.
// Perché: Math.max accetta singoli numeri separati da virgola, non
// un array; lo spread (...votiEs4) "spacchetta" l'array nei suoi
// singoli valori.


// ============================================================
// LIVELLO MEDIO
// ============================================================

// --- Soluzione Esercizio 5: FizzBuzz ---
console.log("--- Esercizio 5 ---");
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// Metodo chiave: if/else if in cascata, con il caso più
// specifico (divisibile per 3 E per 5) controllato per primo.
// Perché: se controllassimo prima solo "divisibile per 3", un
// numero come 15 verrebbe etichettato "Fizz" e non arriveremmo
// mai a verificare anche il 5.


// --- Soluzione Esercizio 6 ---
// Consegna: filtra i promossi e stampa solo i loro nomi.
const studentiEs6 = [
  { nome: "Anna", voto: 8 },
  { nome: "Marco", voto: 5 },
  { nome: "Elisa", voto: 6 },
  { nome: "Paolo", voto: 4 },
];
console.log("--- Esercizio 6 ---");
const nomiPromossiEs6 = studentiEs6
  .filter((s) => s.voto >= 6)
  .map((s) => s.nome);
console.log(nomiPromossiEs6);
// Metodo chiave: filter + map concatenati.
// Perché: filter seleziona prima gli studenti che rispettano la
// condizione (voto >= 6), poi map trasforma ogni studente
// rimasto nel solo dato che ci interessa (il nome).


// --- Soluzione Esercizio 7 ---
// Consegna: calcola la media dei numeri.
const numeriEs7 = [7, 8, 6, 9, 5];
console.log("--- Esercizio 7 ---");
const sommaEs7 = numeriEs7.reduce((acc, n) => acc + n, 0);
const mediaEs7 = sommaEs7 / numeriEs7.length;
console.log(mediaEs7);
// Metodo chiave: reduce.
// Perché: reduce "riduce" tutto l'array a un unico valore
// accumulato (qui la somma, partendo da 0); dividendo poi per
// numeriEs7.length otteniamo la media.


// --- Soluzione Esercizio 8 ---
// Consegna: stampa ogni coppia "cognome → voto".
const votiPerCognomeEs8 = {
  Rossi: 8,
  Bianchi: 6,
  Verdi: 9,
};
console.log("--- Esercizio 8 ---");
for (const cognome in votiPerCognomeEs8) {
  console.log(`${cognome} → ${votiPerCognomeEs8[cognome]}`);
}
// Metodo chiave: ciclo for...in.
// Perché: for...in scorre tutte le chiavi di un oggetto (qui i
// cognomi); da ogni chiave possiamo poi leggere il valore
// corrispondente con la sintassi a parentesi quadre.


// ============================================================
// LIVELLO COMPLETO
// ============================================================

// --- Soluzione Esercizio 9 ---
// Consegna: media per studente (3 materie), stampa formattata,
// e nome dello studente con la media più alta.
const studentiEs9 = [
  { nome: "Luca", cognome: "Rossi", voti: [7, 8, 6] },
  { nome: "Giulia", cognome: "Bianchi", voti: [9, 9, 10] },
  { nome: "Marco", cognome: "Verdi", voti: [5, 6, 7] },
  { nome: "Sara", cognome: "Neri", voti: [8, 7, 9] },
];
console.log("--- Esercizio 9 ---");

const studentiConMediaEs9 = studentiEs9.map((s) => {
  const mediaVoti = s.voti.reduce((acc, v) => acc + v, 0) / s.voti.length;
  return { ...s, media: mediaVoti };
});

studentiConMediaEs9.forEach((s) => {
  console.log(`${s.nome} ${s.cognome}: ${s.media.toFixed(1)}`);
});

const miglioreEs9 = studentiConMediaEs9.reduce((top, s) =>
  s.media > top.media ? s : top
);
console.log(
  `Studente con la media più alta: ${miglioreEs9.nome} ${miglioreEs9.cognome}`
);
// Metodo chiave: map (per calcolare la media di ogni studente e
// produrre un nuovo array arricchito con il campo "media"),
// forEach (per stampare, dato che qui non ci serve un nuovo
// array come risultato) e reduce (per trovare lo studente con la
// media più alta confrontando un elemento alla volta con il
// migliore trovato finora).
// Perché map e non forEach per calcolare le medie: vogliamo un
// nuovo array con i dati arricchiti, da riusare più avanti per
// trovare il migliore; forEach invece va bene per la sola stampa,
// dove non ci serve nessun array di ritorno.
