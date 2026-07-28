// ============================================================
// SOLUZIONI — 9 esercizi CSV
// Stesse consegne e stessi dati di esercizi-csv-consegna.js.
// Da eseguire con Node.js:  node esercizi-csv-soluzioni.js
// ============================================================


// ############################################################
// LIVELLO FACILE
// ############################################################


// ------------------------------------------------------------
// SOLUZIONE 1 — Solo i nomi
// ------------------------------------------------------------
const csvStudenti1 = `
nome,voto
Luca,7
Giulia,9
Marco,5
Sara,8
Elena,6
`;

const righe1 = csvStudenti1.trim().split('\n');
const colonne1 = righe1.shift().split(',');
const studenti1 = righe1.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne1.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

// Passaggio più importante: map() su studenti1 per estrarre solo
// il campo "nome" — è il modo idiomatico per "proiettare" una
// singola colonna da un array di dizionari, invece di scrivere
// un ciclo con push() dentro un array vuoto.
const nomi1 = studenti1.map((s) => s.nome);

console.log("--- Esercizio 1: solo i nomi ---");
console.log(nomi1);


// ------------------------------------------------------------
// SOLUZIONE 2 — Il prodotto più costoso
// ------------------------------------------------------------
const csvProdotti2 = `
prodotto,prezzo
Mouse,15
Tastiera,25
Monitor,120
Webcam,40
Cuffie,60
`;

const righe2 = csvProdotti2.trim().split('\n');
const colonne2 = righe2.shift().split(',');
const prodotti2 = righe2.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne2.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

// Passaggio più importante: convertire prezzo in numero PRIMA di
// confrontarlo. Senza Number(), "120" < "60" sarebbe vero come
// confronto tra stringhe (confronto carattere per carattere), e
// il risultato sarebbe sbagliato.
let piuCostoso = prodotti2[0];
for (const p of prodotti2) {
  if (Number(p.prezzo) > Number(piuCostoso.prezzo)) {
    piuCostoso = p;
  }
}

console.log("\n--- Esercizio 2: prodotto più costoso ---");
console.log(piuCostoso);


// ------------------------------------------------------------
// SOLUZIONE 3 — Quanti promossi
// ------------------------------------------------------------
const csvStudenti3 = `
nome,voto
Anna,8
Paolo,5
Chiara,6
Davide,4
Federica,9
Marco,6
`;

const righe3 = csvStudenti3.trim().split('\n');
const colonne3 = righe3.shift().split(',');
const studenti3 = righe3.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne3.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

// Passaggio più importante: filter() con Number(s.voto) >= 6.
// filter() restituisce un array nuovo con solo gli elementi che
// soddisfano la condizione: da qui basta .length per contarli,
// senza bisogno di un contatore manuale.
const promossi3 = studenti3.filter((s) => Number(s.voto) >= 6);

console.log("\n--- Esercizio 3: numero promossi ---");
console.log(promossi3.length);


// ------------------------------------------------------------
// SOLUZIONE 4 — CSV con le iniziali
// ------------------------------------------------------------
const csvPersone4 = `
nome,cognome
Luca,Rossi
Giulia,Bianchi
Marco,Verdi
Sara,Neri
`;

const righe4 = csvPersone4.trim().split('\n');
const colonne4 = righe4.shift().split(',');
const persone4 = righe4.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne4.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

// Passaggio più importante: costruire un NUOVO dizionario per
// ogni persona aggiungendo il campo "iniziali" calcolato con
// nome[0] + cognome[0], invece di modificare l'oggetto originale.
// Questo tiene separato il dato letto dal dato calcolato.
const risultato4 = persone4.map((p) => ({
  nome: p.nome,
  cognome: p.cognome,
  iniziali: p.nome[0] + p.cognome[0],
}));

const headerRisultato4 = "nome,cognome,iniziali";
const righeRisultato4 = risultato4.map((r) => Object.values(r).join(','));
const csvRisultato4 = headerRisultato4 + '\n' + righeRisultato4.join('\n');

console.log("\n--- Esercizio 4: CSV con iniziali ---");
console.log(csvRisultato4);


// ############################################################
// LIVELLO MEDIO
// ############################################################


// ------------------------------------------------------------
// SOLUZIONE 5 — Media voti e CSV risultato
// ------------------------------------------------------------
const csvVoti5 = `
nome,materia1,materia2,materia3
Luca,7,6,8
Giulia,9,8,9
Marco,5,4,6
Sara,8,7,9
`;

const righe5 = csvVoti5.trim().split('\n');
const colonne5 = righe5.shift().split(',');
const materie5 = colonne5.slice(1); // tutte le colonne tranne "nome"

const studenti5 = righe5.map((riga) => {
  const valori = riga.split(',');
  const s = { nome: valori[0] };
  materie5.forEach((materia, i) => {
    // Passaggio più importante: parseInt() sul valore letto dal
    // CSV. È il punto in cui la stringa "7" diventa il numero 7:
    // senza questa conversione la somma darebbe una concatenazione
    // di stringhe (es. "7"+"6"+"8" -> "768") invece di 21.
    s[materia] = parseInt(valori[i + 1]);
  });
  return s;
});

const risultato5 = studenti5.map((s) => {
  const voti = materie5.map((m) => s[m]);
  const media = voti.reduce((acc, v) => acc + v, 0) / voti.length;
  return { nome: s.nome, media: media.toFixed(1) };
});

const csvRisultato5 = "nome,media\n" + risultato5.map((r) => Object.values(r).join(',')).join('\n');

console.log("\n--- Esercizio 5: CSV media voti ---");
console.log(csvRisultato5);


// ------------------------------------------------------------
// SOLUZIONE 6 — Prodotti raggruppati per categoria
// ------------------------------------------------------------
const csvProdotti6 = `
nome,categoria,prezzo
Mela,frutta,2
Banana,frutta,1
Pane,panetteria,3
Latte,latticini,1.5
Formaggio,latticini,6
Croissant,panetteria,2
`;

const righe6 = csvProdotti6.trim().split('\n');
const colonne6 = righe6.shift().split(',');
const prodotti6 = righe6.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne6.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

// Passaggio più importante: per ogni prodotto controlliamo se la
// sua categoria esiste già come chiave del dizionario "gruppi".
// Se non esiste la creiamo con un array vuoto ([]) PRIMA di fare
// push, altrimenti push() fallirebbe su "undefined".
const gruppi6 = {};
prodotti6.forEach((p) => {
  if (!gruppi6[p.categoria]) {
    gruppi6[p.categoria] = [];
  }
  gruppi6[p.categoria].push(p.nome);
});

console.log("\n--- Esercizio 6: prodotti per categoria ---");
console.log(gruppi6);


// ------------------------------------------------------------
// SOLUZIONE 7 — Classifica elezioni
// ------------------------------------------------------------
const csvElezioni7 = `
partito,percentuale
PartitoA,35.2
PartitoB,28.7
PartitoC,15.4
PartitoD,12.1
PartitoE,8.6
`;

const righe7 = csvElezioni7.trim().split('\n');
const colonne7 = righe7.shift().split(',');
const elezioni7 = righe7.map((riga) => {
  const valori = riga.split(',');
  const d = {};
  colonne7.forEach((c, i) => (d[c] = valori[i]));
  return d;
});

// Passaggio più importante: sort((a, b) => Number(b.percentuale)
// - Number(a.percentuale)). La funzione di confronto restituisce
// un numero negativo se "b" deve stare dopo "a": (b - a) ordina
// dal valore più grande al più piccolo, il contrario di (a - b).
const classifica7 = [...elezioni7].sort(
  (a, b) => Number(b.percentuale) - Number(a.percentuale)
);

console.log("\n--- Esercizio 7: classifica elezioni ---");
console.log(classifica7);


// ------------------------------------------------------------
// SOLUZIONE 8 — Ore libere nei laboratori
// ------------------------------------------------------------
const orariGiornata = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

const csvLaboratori8 = `
laboratorio,ore_occupate
Lab1,true;false;true;true;false;true;false;false
Lab2,false;false;true;false;true;true;false;true
Lab3,true;true;true;false;false;false;true;false
`;

const righe8 = csvLaboratori8.trim().split('\n');
righe8.shift(); // header non serve, i nomi delle colonne sono fissi

const laboratori8 = righe8.map((riga) => {
  const [laboratorio, oreString] = riga.split(',');
  // Passaggio più importante: split(';') sulla cella delle ore
  // per ottenere un array di stringhe "true"/"false", e il
  // confronto === "true" per trasformarle in veri booleani. Senza
  // questo passaggio ogni valore resterebbe una stringa e non
  // potremmo usarlo come condizione affidabile in un if.
  const occupata = oreString.split(';').map((v) => v === "true");

  const oreLibere = orariGiornata.filter((ora, indice) => !occupata[indice]);

  return { laboratorio, oreLibere };
});

console.log("\n--- Esercizio 8: ore libere per laboratorio ---");
console.log(laboratori8);


// ############################################################
// LIVELLO COMPLETO
// ############################################################


// ------------------------------------------------------------
// SOLUZIONE 9 — Pagelle complete
// ------------------------------------------------------------
const csvPagelle9 = `
nome,cognome,italiano,matematica,inglese,storia,scienze
Alessandro,Ferrari,6,4,7,5,6
Martina,Colombo,9,8,9,8,10
Davide,Ricci,5,3,6,4,5
Chiara,Marino,8,7,8,9,9
Federico,Greco,4,5,3,6,4
`;

const righe9 = csvPagelle9.trim().split('\n');
const colonne9 = righe9.shift().split(',');
const materie9 = colonne9.slice(2); // tutte le colonne tranne nome e cognome

const studenti9 = righe9.map((riga) => {
  const valori = riga.split(',');
  const s = { nome: valori[0], cognome: valori[1] };
  materie9.forEach((materia, i) => {
    s[materia] = Number(valori[i + 2]);
  });
  return s;
});

const risultato9 = studenti9.map((s) => {
  const voti = materie9.map((m) => s[m]);
  const media = voti.reduce((acc, v) => acc + v, 0) / voti.length;
  const status = media >= 6 ? "promosso" : "bocciato";

  // Passaggio più importante: filter() sulle materie (non sui
  // voti!) usando s[materia] < 6 come condizione. Filtrando i NOMI
  // delle materie invece dei numeri, otteniamo direttamente la
  // lista da mostrare, e materieInsufficienti.length ci dà anche
  // il conteggio richiesto senza calcoli separati.
  const materieInsufficienti = materie9.filter((m) => s[m] < 6);

  return {
    nome: s.nome,
    cognome: s.cognome,
    media: media.toFixed(1),
    status,
    numeroInsufficienze: materieInsufficienti.length,
    materieInsufficienti: `[${materieInsufficienti.join(', ')}]`,
  };
});

const headerRisultato9 = "nome,cognome,media,status,numeroInsufficienze,materieInsufficienti";
const righeRisultato9 = risultato9.map((r) => Object.values(r).join(','));
const csvRisultato9 = headerRisultato9 + '\n' + righeRisultato9.join('\n');

console.log("\n--- Esercizio 9: CSV pagelle complete ---");
console.log(csvRisultato9);
