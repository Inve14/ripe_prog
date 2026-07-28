// ============================================================
// ESERCITAZIONE CSV — 9 esercizi in 3 livelli
// Da eseguire con Node.js, uno alla volta:  node esercizi-csv-consegna.js
// ============================================================
// Le soluzioni sono in un file separato (esercizi-csv-soluzioni.js):
// prova a risolvere PRIMA da soli, guarda la soluzione solo dopo
// aver provato (o per sbloccarti se sei fermo da un po').


// ############################################################
// LIVELLO FACILE
// ############################################################


// ------------------------------------------------------------
// ESERCIZIO 1 — Solo i nomi
// ------------------------------------------------------------
// Consegna:
// Dato il CSV di studenti con nome e voto, stampa un array che
// contiene SOLO i nomi (senza i voti).
//
// Suggerimento: dopo aver fatto il parsing del CSV in un array
// di dizionari, usa map() per estrarre solo il campo "nome" da
// ogni dizionario.

const csvStudenti1 = `
nome,voto
Luca,7
Giulia,9
Marco,5
Sara,8
Elena,6
`;

// scrivi qui il tuo codice



// ------------------------------------------------------------
// ESERCIZIO 2 — Il prodotto più costoso
// ------------------------------------------------------------
// Consegna:
// Dato il CSV di prodotti con nome e prezzo, trova e stampa il
// prodotto con il prezzo più alto (nome e prezzo).
//
// Suggerimento: puoi ordinare l'array con sort() e prendere il
// primo elemento, oppure scorrerlo con un for classico tenendo
// traccia del prezzo più alto trovato finora. Attenzione: il
// prezzo dopo il parsing è una stringa, va convertito in numero.

const csvProdotti2 = `
prodotto,prezzo
Mouse,15
Tastiera,25
Monitor,120
Webcam,40
Cuffie,60
`;

// scrivi qui il tuo codice



// ------------------------------------------------------------
// ESERCIZIO 3 — Quanti promossi
// ------------------------------------------------------------
// Consegna:
// Dato il CSV di studenti con nome e voto, conta e stampa quanti
// studenti sono promossi (voto >= 6).
//
// Suggerimento: usa filter() per tenere solo gli studenti con
// voto >= 6, poi usa .length sull'array filtrato per contarli.

const csvStudenti3 = `
nome,voto
Anna,8
Paolo,5
Chiara,6
Davide,4
Federica,9
Marco,6
`;

// scrivi qui il tuo codice



// ------------------------------------------------------------
// ESERCIZIO 4 — CSV con le iniziali
// ------------------------------------------------------------
// Consegna:
// Dato il CSV con nome e cognome, genera e stampa un NUOVO CSV
// (come stringa) con le colonne: nome, cognome, iniziali. Le
// iniziali sono la prima lettera del nome + la prima lettera del
// cognome (es. Luca Rossi -> "LR").
//
// Suggerimento: usa map() sull'array di dizionari e prendi il
// primo carattere di una stringa con [0] (es. studente.nome[0]).

const csvPersone4 = `
nome,cognome
Luca,Rossi
Giulia,Bianchi
Marco,Verdi
Sara,Neri
`;

// scrivi qui il tuo codice



// ############################################################
// LIVELLO MEDIO
// ############################################################


// ------------------------------------------------------------
// ESERCIZIO 5 — Media voti e CSV risultato
// ------------------------------------------------------------
// Consegna:
// Dato il CSV di studenti con i voti di 3 materie, calcola per
// ognuno la media dei 3 voti e genera un CSV risultato con le
// colonne: nome, media.
//
// Indizio: i voti letti dal CSV sono stringhe, convertili in
// numero con parseInt() prima di fare la somma e la media.

const csvVoti5 = `
nome,materia1,materia2,materia3
Luca,7,6,8
Giulia,9,8,9
Marco,5,4,6
Sara,8,7,9
`;

// scrivi qui il tuo codice



// ------------------------------------------------------------
// ESERCIZIO 6 — Prodotti raggruppati per categoria
// ------------------------------------------------------------
// Consegna:
// Dato il CSV di prodotti con nome, categoria e prezzo, crea un
// dizionario che raggruppa i prodotti per categoria, cioè con
// la categoria come chiave e un array dei nomi dei prodotti di
// quella categoria come valore. Poi stampa il dizionario.
//
// Indizio: parti da un dizionario vuoto {} e, scorrendo le righe
// una alla volta, controlla se la categoria esiste già come
// chiave: se non esiste creala con un array vuoto, poi aggiungi
// il prodotto a quell'array.

const csvProdotti6 = `
nome,categoria,prezzo
Mela,frutta,2
Banana,frutta,1
Pane,panetteria,3
Latte,latticini,1.5
Formaggio,latticini,6
Croissant,panetteria,2
`;

// scrivi qui il tuo codice



// ------------------------------------------------------------
// ESERCIZIO 7 — Classifica elezioni
// ------------------------------------------------------------
// Consegna:
// Dato il CSV con i risultati di un'elezione (partito e
// percentuale di voti), genera una classifica ordinata dal
// partito più votato al meno votato e stampala.
//
// Indizio: converti le percentuali in numero, poi usa sort()
// con una funzione di confronto (a, b) => b - a per ordinare
// dal valore più grande al più piccolo.

const csvElezioni7 = `
partito,percentuale
PartitoA,35.2
PartitoB,28.7
PartitoC,15.4
PartitoD,12.1
PartitoE,8.6
`;

// scrivi qui il tuo codice



// ------------------------------------------------------------
// ESERCIZIO 8 — Ore libere nei laboratori
// ------------------------------------------------------------
// Consegna:
// Dato il CSV con i laboratori e le loro ore occupate (una lista
// di true/false, una per ogni ora della giornata, separata da
// ";"), genera per ogni laboratorio la lista delle ore LIBERE
// (usando gli orari dell'array "orariGiornata" qui sotto) e
// stampala.
//
// Indizio: ogni cella "true;false;true;..." va prima divisa con
// split(';') e poi ogni valore va confrontato con la stringa
// "true" (o convertito in booleano vero e proprio) per sapere se
// quell'ora è occupata oppure no.

const orariGiornata = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

const csvLaboratori8 = `
laboratorio,ore_occupate
Lab1,true;false;true;true;false;true;false;false
Lab2,false;false;true;false;true;true;false;true
Lab3,true;true;true;false;false;false;true;false
`;

// scrivi qui il tuo codice



// ############################################################
// LIVELLO COMPLETO (nessun aiuto)
// ############################################################


// ------------------------------------------------------------
// ESERCIZIO 9 — Pagelle complete
// ------------------------------------------------------------
// Consegna:
// Dato il CSV di studenti con nome, cognome e i voti di 5
// materie (italiano, matematica, inglese, storia, scienze),
// genera un CSV risultato con le colonne:
// nome, cognome, media, status, numeroInsufficienze, materieInsufficienti
// dove:
// - "media" è la media dei 5 voti;
// - "status" è "promosso" se la media è >= 6, altrimenti
//   "bocciato";
// - "numeroInsufficienze" è il numero di materie con voto < 6;
// - "materieInsufficienti" è la lista dei nomi di quelle materie
//   scritta tra parentesi quadre, es. "[matematica, storia]"
//   (oppure "[]" se non ce ne sono).
// Stampa il CSV risultato finale.

const csvPagelle9 = `
nome,cognome,italiano,matematica,inglese,storia,scienze
Alessandro,Ferrari,6,4,7,5,6
Martina,Colombo,9,8,9,8,10
Davide,Ricci,5,3,6,4,5
Chiara,Marino,8,7,8,9,9
Federico,Greco,4,5,3,6,4
`;

// scrivi qui il tuo codice
