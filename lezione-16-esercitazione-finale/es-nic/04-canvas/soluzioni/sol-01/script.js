// SOL-01 - Rettangoli colorati

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const colori = ["#e63946", "#2ecc71", "#4f8ef7"];
const larghezza = 80;
const altezza = 100;
const spazio = 20;

colori.forEach((colore, i) => {
  ctx.fillStyle = colore;
  // ogni rettangolo si sposta a destra del precedente: larghezza + spazio
  const x = 20 + i * (larghezza + spazio);
  ctx.fillRect(x, 40, larghezza, altezza);
});
