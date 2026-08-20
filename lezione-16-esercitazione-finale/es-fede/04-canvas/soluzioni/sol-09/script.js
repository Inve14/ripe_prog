// SOL-09 - Orologio

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const centroX = canvas.width / 2;
const centroY = canvas.height / 2;
const raggio = 120;

// quadrante
ctx.beginPath();
ctx.arc(centroX, centroY, raggio, 0, 2 * Math.PI);
ctx.stroke();

// 12 segni delle ore, uno ogni 30 gradi, posizionati con seno e coseno
for (let ora = 0; ora < 12; ora++) {
  const angolo = (ora * 30 * Math.PI) / 180;
  const x = centroX + Math.cos(angolo) * (raggio - 15);
  const y = centroY + Math.sin(angolo) * (raggio - 15);

  ctx.beginPath();
  ctx.arc(x, y, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#000000";
  ctx.fill();
}

// ora e minuti attuali
const adesso = new Date();
const ore = adesso.getHours() % 12;
const minuti = adesso.getMinutes();

// lancetta delle ore: più corta, l'angolo dipende anche dai minuti
const angoloOre = ((ore + minuti / 60) * 30 - 90) * (Math.PI / 180);
ctx.beginPath();
ctx.moveTo(centroX, centroY);
ctx.lineTo(centroX + Math.cos(angoloOre) * raggio * 0.5, centroY + Math.sin(angoloOre) * raggio * 0.5);
ctx.lineWidth = 4;
ctx.stroke();

// lancetta dei minuti: più lunga
const angoloMinuti = (minuti * 6 - 90) * (Math.PI / 180);
ctx.beginPath();
ctx.moveTo(centroX, centroY);
ctx.lineTo(centroX + Math.cos(angoloMinuti) * raggio * 0.8, centroY + Math.sin(angoloMinuti) * raggio * 0.8);
ctx.lineWidth = 2;
ctx.stroke();
