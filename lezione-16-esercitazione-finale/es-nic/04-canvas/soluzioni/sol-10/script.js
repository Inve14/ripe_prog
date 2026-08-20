// SOL-10 - Istogramma completo

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const voti = [4, 8, 6, 5, 5, 4, 6, 4, 4, 6, 6, 5, 6, 8, 10, 7, 8, 9, 7, 6, 10];

// dizionario voto -> quantità
const conteggio = {};
voti.forEach((v) => {
  conteggio[v] = (conteggio[v] || 0) + 1;
});

const votiOrdinati = Object.keys(conteggio).map(Number).sort((a, b) => a - b);
const massimo = Math.max(...Object.values(conteggio));

const origineX = 60;
const origineY = 320;
const larghezzaBarra = 40;
const spazio = 20;
const scalaY = 20; // pixel per unità di quantità

// assi cartesiani
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(origineX, 20);
ctx.lineTo(origineX, origineY);
ctx.lineTo(origineX + votiOrdinati.length * (larghezzaBarra + spazio), origineY);
ctx.stroke();

// linee tratteggiate orizzontali + numeri sull'asse Y, uno per quantità
ctx.font = "12px Arial";
ctx.textAlign = "right";
ctx.setLineDash([4, 4]);
ctx.strokeStyle = "#cccccc";

for (let q = 1; q <= massimo; q++) {
  const y = origineY - q * scalaY;

  ctx.beginPath();
  ctx.moveTo(origineX, y);
  ctx.lineTo(origineX + votiOrdinati.length * (larghezzaBarra + spazio), y);
  ctx.stroke();

  ctx.fillStyle = "#000000";
  ctx.fillText(q, origineX - 10, y + 4);
}

ctx.setLineDash([]); // torniamo alla linea continua per il resto del disegno

// barre colorate + etichette sull'asse X
votiOrdinati.forEach((voto, i) => {
  const quantita = conteggio[voto];
  const x = origineX + i * (larghezzaBarra + spazio) + spazio / 2;
  const altezzaBarra = quantita * scalaY;

  ctx.fillStyle = "#4f8ef7";
  ctx.fillRect(x, origineY - altezzaBarra, larghezzaBarra, altezzaBarra);

  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.fillText(voto, x + larghezzaBarra / 2, origineY + 15);
});

// scritta verticale "Quantità" a sinistra dell'asse Y:
// save() salva lo stato, translate() sposta l'origine, rotate() ruota gli assi,
// restore() riporta tutto come prima per non "sporcare" i disegni successivi
ctx.save();
ctx.translate(20, origineY / 2);
ctx.rotate(-Math.PI / 2);
ctx.textAlign = "center";
ctx.fillStyle = "#000000";
ctx.font = "14px Arial";
ctx.fillText("Quantità", 0, 0);
ctx.restore();
