// Soluzione ES-15 — Dizionario da due liste
// Consegna: crea un dizionario materia -> voto, poi stampa le materie insufficienti (< 6).

const materie = ["Italiano", "Matematica", "Informatica", "Storia", "Inglese"];
const voti = [7, 6, 9, 5, 8];

const registro = {};

// forEach con indice: il secondo parametro della callback è la posizione
// dell'elemento nell'array, che usiamo per accoppiare materia e voto
materie.forEach((materia, indice) => {
  registro[materia] = voti[indice];
});

console.log(registro);

// for...in per scorrere le chiavi del dizionario e filtrare quelle insufficienti
for (const materia in registro) {
  if (registro[materia] < 6) {
    console.log(`${materia}: insufficiente (${registro[materia]})`);
  }
}
