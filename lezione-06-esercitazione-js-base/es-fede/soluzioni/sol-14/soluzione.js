// Soluzione ES-14 — Array di dizionari
// Consegna: stampa nome e voto di ogni studente, poi trova i promossi (voto >= 6)
// e i loro nomi.

const studenti = [
  { nome: "Alice", voto: 8 },
  { nome: "Bob", voto: 5 },
  { nome: "Carlo", voto: 7 },
  { nome: "Diana", voto: 4 },
  { nome: "Elena", voto: 9 },
];

studenti.forEach((studente) => {
  console.log(`${studente.nome}: ${studente.voto}`);
});

// filter seleziona solo gli oggetti che soddisfano la condizione,
// poi map estrae dal risultato solo la proprietà "nome"
const promossi = studenti.filter((studente) => studente.voto >= 6);
const nomiPromossi = promossi.map((studente) => studente.nome);

console.log(nomiPromossi);
