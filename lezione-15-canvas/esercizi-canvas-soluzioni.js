// ============================================================
// SOLUZIONI — Esercizi Canvas (Lezione 15)
// Ogni esercizio è risolto in una propria funzione, eseguita
// automaticamente al caricamento della pagina.
// ============================================================

// ---------- ESERCIZIO 1 (facile): tre rettangoli affiancati ----------
function soluzione1() {
  const canvas = document.getElementById("canvas-es1");
  const ctx = canvas.getContext("2d");

  const colori = ["#4f8ef7", "#e63946", "#2ecc71"];
  const larghezza = 100;
  const altezza = 120;
  const spazio = 20;

  colori.forEach((colore, i) => {
    ctx.fillStyle = colore;
    // ogni rettangolo si sposta a destra del precedente: larghezza + spazio
    const x = 20 + i * (larghezza + spazio);
    ctx.fillRect(x, 50, larghezza, altezza);
  });
}

// ---------- ESERCIZIO 2 (facile): semaforo ----------
function soluzione2() {
  const canvas = document.getElementById("canvas-es2");
  const ctx = canvas.getContext("2d");

  const corpoX = 140, corpoY = 20, corpoW = 120, corpoH = 280;
  const centroX = corpoX + corpoW / 2;

  // corpo del semaforo
  ctx.fillStyle = "#333";
  ctx.fillRect(corpoX, corpoY, corpoW, corpoH);

  // tre cerchi allineati in verticale, stessa x, y diversa
  const colori = ["red", "gold", "limegreen"];
  colori.forEach((colore, i) => {
    const y = corpoY + 60 + i * 90;
    ctx.beginPath();
    ctx.arc(centroX, y, 35, 0, 2 * Math.PI);
    ctx.fillStyle = colore;
    ctx.fill();
  });
}

// ---------- ESERCIZIO 3 (facile): nome al centro ----------
function soluzione3() {
  const canvas = document.getElementById("canvas-es3");
  const ctx = canvas.getContext("2d");

  ctx.font = "bold 40px Arial";
  ctx.fillStyle = "#4f8ef7";
  // textAlign center + textBaseline middle = il punto x,y diventa il centro esatto
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Marco", canvas.width / 2, canvas.height / 2);
}

// ---------- ESERCIZIO 4 (facile): casa ----------
function soluzione4() {
  const canvas = document.getElementById("canvas-es4");
  const ctx = canvas.getContext("2d");

  const corpoX = 100, corpoY = 140, corpoW = 200, corpoH = 120;

  // corpo della casa
  ctx.fillStyle = "#d9a066";
  ctx.fillRect(corpoX, corpoY, corpoW, corpoH);

  // tetto: triangolo i cui due punti bassi coincidono con gli angoli del rettangolo
  ctx.beginPath();
  ctx.moveTo(corpoX - 20, corpoY);          // angolo in basso a sinistra del tetto
  ctx.lineTo(corpoX + corpoW / 2, corpoY - 80); // punta del tetto
  ctx.lineTo(corpoX + corpoW + 20, corpoY); // angolo in basso a destra del tetto
  ctx.closePath();
  ctx.fillStyle = "#c0392b";
  ctx.fill();

  // porticina
  ctx.fillStyle = "#5b3a29";
  ctx.fillRect(corpoX + corpoW / 2 - 20, corpoY + corpoH - 60, 40, 60);
}

// ---------- ESERCIZIO 5 (medio): scacchiera 8x8 ----------
function soluzione5() {
  const canvas = document.getElementById("canvas-es5");
  const ctx = canvas.getContext("2d");

  const dimensioneCasella = canvas.width / 8;

  for (let riga = 0; riga < 8; riga++) {
    for (let colonna = 0; colonna < 8; colonna++) {
      // (riga + colonna) pari o dispari decide il colore, come in una vera scacchiera
      const pari = (riga + colonna) % 2 === 0;
      ctx.fillStyle = pari ? "#f0d9b5" : "#4a3428";
      ctx.fillRect(
        colonna * dimensioneCasella,
        riga * dimensioneCasella,
        dimensioneCasella,
        dimensioneCasella
      );
    }
  }
}

// ---------- ESERCIZIO 6 (medio): grafico a barre orizzontali ----------
function soluzione6() {
  const canvas = document.getElementById("canvas-es6");
  const ctx = canvas.getContext("2d");

  const dati = [
    { etichetta: "Lunedì", valore: 12 },
    { etichetta: "Martedì", valore: 18 },
    { etichetta: "Mercoledì", valore: 7 },
    { etichetta: "Giovedì", valore: 22 },
    { etichetta: "Venerdì", valore: 15 },
  ];

  const max = Math.max(...dati.map((d) => d.valore));
  const scala = 250 / max; // px massimi per la barra più lunga
  const altezzaBarra = 30;
  const spazio = 12;
  const startX = 100;

  ctx.font = "13px Arial";
  ctx.textBaseline = "middle";

  dati.forEach((d, i) => {
    const y = 15 + i * (altezzaBarra + spazio);
    const lunghezza = d.valore * scala;

    // barra proporzionale al valore
    ctx.fillStyle = "#4f8ef7";
    ctx.fillRect(startX, y, lunghezza, altezzaBarra);

    // etichetta a sinistra della barra
    ctx.fillStyle = "#333";
    ctx.textAlign = "right";
    ctx.fillText(d.etichetta, startX - 10, y + altezzaBarra / 2);

    // valore a destra della barra
    ctx.textAlign = "left";
    ctx.fillText(d.valore, startX + lunghezza + 8, y + altezzaBarra / 2);
  });
}

// ---------- ESERCIZIO 7 (medio): orologio, solo segni delle ore ----------
function soluzione7() {
  const canvas = document.getElementById("canvas-es7");
  const ctx = canvas.getContext("2d");

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const raggioEsterno = 150;

  // quadrante
  ctx.beginPath();
  ctx.arc(cx, cy, raggioEsterno, 0, 2 * Math.PI);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#333";
  ctx.stroke();

  // 12 segni, uno ogni 30 gradi (2*PI/12 radianti)
  for (let ora = 0; ora < 12; ora++) {
    const angolo = ora * ((2 * Math.PI) / 12);
    const raggioInterno = raggioEsterno - 18;

    const x1 = cx + raggioInterno * Math.cos(angolo);
    const y1 = cy + raggioInterno * Math.sin(angolo);
    const x2 = cx + raggioEsterno * Math.cos(angolo);
    const y2 = cy + raggioEsterno * Math.sin(angolo);

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#333";
    ctx.stroke();
  }

  // pallino al centro
  ctx.beginPath();
  ctx.arc(cx, cy, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
}

// ---------- ESERCIZIO 8 (medio): bandiera italiana ----------
function soluzione8() {
  const canvas = document.getElementById("canvas-es8");
  const ctx = canvas.getContext("2d");

  const bandaW = canvas.width / 3;
  const bandaH = 180;
  const y = (canvas.height - bandaH) / 2;

  ctx.fillStyle = "#009246"; // verde
  ctx.fillRect(0, y, bandaW, bandaH);

  ctx.fillStyle = "#ffffff"; // bianco
  ctx.fillRect(bandaW, y, bandaW, bandaH);

  ctx.fillStyle = "#ce2b37"; // rosso
  ctx.fillRect(bandaW * 2, y, bandaW, bandaH);

  // bordo per far risaltare la banda bianca
  ctx.strokeStyle = "#ccc";
  ctx.lineWidth = 1;
  ctx.strokeRect(0, y, canvas.width, bandaH);

  // scritta "Italia" centrata sulla banda bianca (non sul canvas intero!)
  ctx.font = "bold 26px Arial";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Italia", bandaW + bandaW / 2, y + bandaH / 2);
}

// ---------- ESERCIZIO 9 (completo): istogramma dei voti ----------
function soluzione9() {
  const canvas = document.getElementById("canvas-es9");
  const ctx = canvas.getContext("2d");

  // indice = voto (0-10), valore = numero di studenti con quel voto
  const voti = [0, 0, 0, 2, 3, 6, 9, 7, 5, 3, 1];

  const margineSx = 60;
  const margineBasso = 60;
  const margineTop = 30;
  const margineDx = 20;

  const larghezzaGrafico = canvas.width - margineSx - margineDx;
  const altezzaGrafico = canvas.height - margineBasso - margineTop;

  const max = Math.max(...voti);
  const scalaY = altezzaGrafico / max; // px per ogni studente
  const larghezzaBarra = larghezzaGrafico / voti.length;

  const baseX = margineSx;
  const baseY = margineTop + altezzaGrafico; // riga in basso su cui poggiano le barre

  // griglia orizzontale tratteggiata (ogni 2 studenti)
  ctx.strokeStyle = "#ccc";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  for (let v = 0; v <= max; v += 2) {
    const y = baseY - v * scalaY;
    ctx.beginPath();
    ctx.moveTo(baseX, y);
    ctx.lineTo(baseX + larghezzaGrafico, y);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // assi cartesiani (X e Y)
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(baseX, margineTop);
  ctx.lineTo(baseX, baseY);
  ctx.lineTo(baseX + larghezzaGrafico, baseY);
  ctx.stroke();

  // barre colorate proporzionali ai valori (partono dal basso!)
  voti.forEach((numeroStudenti, voto) => {
    const altezzaBarra = numeroStudenti * scalaY;
    const x = baseX + voto * larghezzaBarra;
    const y = baseY - altezzaBarra; // "in alto" = y più piccola

    ctx.fillStyle = "#4f8ef7";
    ctx.fillRect(x + 5, y, larghezzaBarra - 10, altezzaBarra);

    if (numeroStudenti > 0) {
      ctx.fillStyle = "#333";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(numeroStudenti, x + larghezzaBarra / 2, y - 8);
    }
  });

  // etichette dei voti sull'asse X, con un for
  ctx.fillStyle = "#333";
  ctx.font = "13px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  for (let voto = 0; voto < voti.length; voto++) {
    const x = baseX + voto * larghezzaBarra + larghezzaBarra / 2;
    ctx.fillText(voto, x, baseY + 10);
  }

  // numeri sull'asse Y, con un for
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let v = 0; v <= max; v += 2) {
    const y = baseY - v * scalaY;
    ctx.fillText(v, baseX - 12, y);
  }

  // scritta verticale "Quantità" lungo l'asse Y
  ctx.save();
  ctx.translate(18, margineTop + altezzaGrafico / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.font = "bold 16px Arial";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Quantità studenti", 0, 0);
  ctx.restore();

  // etichetta asse X
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.font = "bold 14px Arial";
  ctx.fillText("Voto", baseX + larghezzaGrafico / 2, baseY + 34);
}

// ============================================================
// Esecuzione di tutte le soluzioni al caricamento della pagina
// ============================================================
window.addEventListener("DOMContentLoaded", () => {
  soluzione1();
  soluzione2();
  soluzione3();
  soluzione4();
  soluzione5();
  soluzione6();
  soluzione7();
  soluzione8();
  soluzione9();
});
