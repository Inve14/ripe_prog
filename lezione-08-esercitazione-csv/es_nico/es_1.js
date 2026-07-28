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

console.log("csvStudenti1 -> \n" + csvStudenti1);

// scrivi qui il tuo codice

let csv = csvStudenti1.trim();

console.log("csv -> \n" + csv);

const righe= csv.split('\n');
console.log("\n\n\nvalori di righe -> " + righe);

const colonne = righe.shift().split(',');
console.log("\n\n\nvalori di colonne -> " + colonne);
console.log("\n\n\nvalori di righe NUOVO dopo il shift()-> " + righe);

const studenti = righe.map((riga) => {
    const dizionario ={};

    const valori = riga.split(',');
    // valori = ["Luca", "7"]
    const nome = valori[0];
    const colonnaNome = colonne[0];

    dizionario[colonnaNome] = nome;

    return dizionario;

});

console.log(studenti);

/*
nomeColonna = colonne[0]
nome_effettivo = valori[0]
dizionario[nomeColonna] = nome_effettivo
*/