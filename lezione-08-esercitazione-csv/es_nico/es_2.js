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

//elimino gli "a capo" che si trovano all'inizio e alla fine di csvProdotti2
 let csv= csvProdotti2.trim();
 //creo una lista con all'interno tutte le righe del csv
 const righe = csv.split('\n');
 //creo una lista che contiene solo "prodotto" e "prezzo" come valori -> colonne è una lista di stringhe
 const colonne= righe.shift().split(',');

 const prodotti = righe.map((riga) => {
    const valori = riga.split(',');
    const dizionario= {};
    colonne.forEach((nomecolonna,indice) => {

        dizionario[nomecolonna]=valori[indice]
    });
    return dizionario;
 });

prodotti.sort((x,y) => y.prezzo-x.prezzo);

 console.log(prodotti[0]);



