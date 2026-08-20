// SOL-07 - Scacchiera

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const dimensione = 40;

for (let riga = 0; riga < 8; riga++) {
  for (let colonna = 0; colonna < 8; colonna++) {
    // la somma riga+colonna è pari sulle caselle chiare, dispari su quelle scure
    const pari = (riga + colonna) % 2 === 0;
    ctx.fillStyle = pari ? "#ffffff" : "#333333";
    ctx.fillRect(colonna * dimensione, riga * dimensione, dimensione, dimensione);
  }
}
