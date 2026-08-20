// SOL-08 - Grafico a barre orizzontali

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const dati = [
  { etichetta: "Lunedì", valore: 30 },
  { etichetta: "Martedì", valore: 55 },
  { etichetta: "Mercoledì", valore: 20 },
  { etichetta: "Giovedì", valore: 70 },
  { etichetta: "Venerdì", valore: 45 }
];

const altezzaBarra = 40;
const spazio = 15;
const xInizio = 100;

ctx.font = "14px Arial";

dati.forEach((d, i) => {
  const y = i * (altezzaBarra + spazio) + 10;

  // etichetta a sinistra della barra
  ctx.fillStyle = "#000000";
  ctx.textAlign = "right";
  ctx.fillText(d.etichetta, xInizio - 10, y + altezzaBarra / 2 + 5);

  // barra orizzontale: la larghezza dipende dal valore
  ctx.fillStyle = "#4f8ef7";
  ctx.fillRect(xInizio, y, d.valore * 3, altezzaBarra);

  // valore scritto subito dopo la fine della barra
  ctx.textAlign = "left";
  ctx.fillText(d.valore, xInizio + d.valore * 3 + 10, y + altezzaBarra / 2 + 5);
});
