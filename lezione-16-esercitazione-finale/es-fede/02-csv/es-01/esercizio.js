// ES-01 — Parsing base
//
// CONSEGNA:
// Dato il CSV con nome e città di 6 persone, parsalo e stampa ogni
// persona nel formato "nome abita a città".
//
// Concetti: trim, split, shift, map

const csv = `nome,citta
Marco,Roma
Giulia,Milano
Luca,Napoli
Sara,Torino
Elena,Bologna
Davide,Firenze`;

const rows = csv.split('\n');
const header = rows.shift().split(',');
const data = rows.map((row) => {
    const valore = row.split(',');
    const dict = {};
    header.forEach((chiave, i) => {
        dict[chiave] = valore[i];
    });
    return dict;
})


data.forEach((persona) => {
    console.log(persona.nome + " abita a " + persona.citta);
});
