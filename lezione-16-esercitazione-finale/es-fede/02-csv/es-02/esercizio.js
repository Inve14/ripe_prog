// ES-02 — Filtro su CSV
//
// CONSEGNA:
// Dato il CSV con nome e voto, stampa solo gli studenti promossi
// (voto >= 6).
//
// Concetti: parsing, filter

const csv = `nome,voto
Marco,7
Giulia,4
Luca,6
Sara,9
Elena,5
Davide,8`;

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
if(persona.voto >= 6) {
    console.log(persona.nome + " è stato promosso con voto " + persona.voto );
}
});
