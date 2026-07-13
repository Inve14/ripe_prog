// ============================================================
// LIVELLO FACILE
// ============================================================

// --- Esercizio 1 ---
// Consegna: stampa tutti i numeri da 1 a 10 usando un ciclo for.



// ....................
// SOLUZIONE ESERCIZIO 1
// ....................
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


// --- Esercizio 2 ---
// Consegna: data la lista di numeri qui sotto, stampa solo quelli pari.
const numeriEs2 = [3, 8, 11, 14, 20, 7, 2, 9];



// ....................
// SOLUZIONE ESERCIZIO 2
// ....................
// const numeriPariEs2 = numeriEs2.filter((n) => n % 2 === 0);
// console.log(numeriPariEs2);


// --- Esercizio 3 ---
// Consegna: scrivi una funzione che riceve un nome e stampa "Ciao [nome]!"



// ....................
// SOLUZIONE ESERCIZIO 3
// ....................
// function saluta(nome) {
//   console.log(`Ciao ${nome}!`);
// }
// saluta("Sara");


// --- Esercizio 4 ---
// Consegna: data la lista di voti qui sotto, trova il voto più alto.
const votiEs4 = [6, 8, 5, 9, 7, 10, 4];



// ....................
// SOLUZIONE ESERCIZIO 4
// ....................
// const votoMassimoEs4 = votiEs4.reduce((max, v) => (v > max ? v : max), votiEs4[0]);
// console.log(votoMassimoEs4);
// // In alternativa: Math.max(...votiEs4)


// ============================================================
// LIVELLO MEDIO
// ============================================================

// --- Esercizio 5: FizzBuzz ---
// Consegna: per ogni numero da 1 a 20, stampa:
// - "Fizz" se il numero è divisibile per 3
// - "Buzz" se è divisibile per 5
// - "FizzBuzz" se è divisibile sia per 3 che per 5
// - altrimenti stampa il numero stesso



// ....................
// SOLUZIONE ESERCIZIO 5
// ....................
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


// --- Esercizio 6 ---
// Consegna: data la lista di studenti con voto qui sotto, filtra
// solo i promossi (voto >= 6).
const studentiEs6 = [
  { nome: "Anna", voto: 8 },
  { nome: "Marco", voto: 5 },
  { nome: "Elisa", voto: 6 },
  { nome: "Paolo", voto: 4 },
];



// ....................
// SOLUZIONE ESERCIZIO 6
// ....................
// const promossiEs6 = studentiEs6.filter((s) => s.voto >= 6);
// console.log(promossiEs6);


// --- Esercizio 7 ---
// Consegna: dato l'array di numeri qui sotto, calcola la media
// usando reduce.
const numeriEs7 = [7, 8, 6, 9, 5];



// ....................
// SOLUZIONE ESERCIZIO 7
// ....................
// const sommaEs7 = numeriEs7.reduce((acc, n) => acc + n, 0);
// const mediaEs7 = sommaEs7 / numeriEs7.length;
// console.log(mediaEs7);


// --- Esercizio 8 ---
// Consegna: dato il dizionario {nome: voto} qui sotto, stampa ogni
// coppia nome-voto usando un ciclo for...in.
const votiPerNomeEs8 = {
  Anna: 8,
  Marco: 6,
  Elisa: 9,
};



// ....................
// SOLUZIONE ESERCIZIO 8
// ....................
// for (const nome in votiPerNomeEs8) {
//   console.log(`${nome}: ${votiPerNomeEs8[nome]}`);
// }


// ============================================================
// LIVELLO COMPLETO
// ============================================================

// --- Esercizio 9 ---
// Consegna: dato l'array di dizionari studenti qui sotto (nome,
// cognome, voti di 3 materie), per ogni studente calcola la media
// dei voti e stampa "nome cognome: media". Alla fine, stampa il
// nome dello studente con la media più alta.
const studentiEs9 = [
  { nome: "Luca", cognome: "Rossi", voti: [7, 8, 6] },
  { nome: "Giulia", cognome: "Bianchi", voti: [9, 9, 10] },
  { nome: "Marco", cognome: "Verdi", voti: [5, 6, 7] },
];



// ....................
// SOLUZIONE ESERCIZIO 9
// ....................
// const studentiConMediaEs9 = studentiEs9.map((s) => {
//   const mediaVoti = s.voti.reduce((acc, v) => acc + v, 0) / s.voti.length;
//   return { ...s, media: mediaVoti };
// });
//
// studentiConMediaEs9.forEach((s) => {
//   console.log(`${s.nome} ${s.cognome}: ${s.media.toFixed(2)}`);
// });
//
// const migliore = studentiConMediaEs9.reduce((top, s) =>
//   s.media > top.media ? s : top
// );
// console.log(`Studente con la media più alta: ${migliore.nome} ${migliore.cognome}`);
