// SOL-06 - Assi cartesiani

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const centroX = canvas.width / 2;
const centroY = canvas.height / 2;

ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;

// asse X
ctx.beginPath();
ctx.moveTo(0, centroY);
ctx.lineTo(canvas.width, centroY);
ctx.stroke();

// freccia asse X
ctx.beginPath();
ctx.moveTo(canvas.width - 10, centroY - 5);
ctx.lineTo(canvas.width, centroY);
ctx.lineTo(canvas.width - 10, centroY + 5);
ctx.stroke();

// asse Y
ctx.beginPath();
ctx.moveTo(centroX, canvas.height);
ctx.lineTo(centroX, 0);
ctx.stroke();

// freccia asse Y
ctx.beginPath();
ctx.moveTo(centroX - 5, 10);
ctx.lineTo(centroX, 0);
ctx.lineTo(centroX + 5, 10);
ctx.stroke();

ctx.fillStyle = "#000000";
ctx.font = "12px Arial";
ctx.textAlign = "center";

// numeri sull'asse X, ogni 50px a partire dal centro (positivi e negativi)
for (let x = 50; x < centroX; x += 50) {
  ctx.fillText(x, centroX + x, centroY + 15);
  ctx.fillText(-x, centroX - x, centroY + 15);
}

// numeri sull'asse Y, ogni 50px a partire dal centro (positivi e negativi)
for (let y = 50; y < centroY; y += 50) {
  ctx.fillText(-y, centroX - 15, centroY + y);
  ctx.fillText(y, centroX - 15, centroY - y);
}
