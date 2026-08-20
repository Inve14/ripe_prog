// SOL-05 - Bandiera italiana

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const larghezzaStriscia = 100;
const altezza = 200;

ctx.fillStyle = "#009246";
ctx.fillRect(0, 0, larghezzaStriscia, altezza);

ctx.fillStyle = "#ffffff";
ctx.fillRect(larghezzaStriscia, 0, larghezzaStriscia, altezza);

ctx.fillStyle = "#ce2b37";
ctx.fillRect(larghezzaStriscia * 2, 0, larghezzaStriscia, altezza);

// il testo è bianco: sulla striscia centrale bianca sarebbe invisibile,
// quindi aggiungiamo un contorno nero con strokeText per farlo leggere ovunque
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.font = "bold 28px Arial";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.strokeText("Italia", canvas.width / 2, altezza / 2);
ctx.fillStyle = "#ffffff";
ctx.fillText("Italia", canvas.width / 2, altezza / 2);
