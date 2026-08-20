// SOL-02 - Semaforo

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#333333";
ctx.fillRect(120, 20, 100, 260);

const colori = ["red", "gold", "limegreen"];
const centroX = 170;

// tre cerchi allineati in verticale, stessa x, y diversa
colori.forEach((colore, i) => {
  const y = 70 + i * 80;
  ctx.beginPath();
  ctx.arc(centroX, y, 30, 0, 2 * Math.PI);
  ctx.fillStyle = colore;
  ctx.fill();
});
