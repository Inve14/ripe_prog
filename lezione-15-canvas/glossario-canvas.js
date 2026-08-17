// ============================================================
// GLOSSARIO CANVAS — script degli esempi interattivi
// Ogni funzione esegue()X disegna l'esempio della sezione X.
// ============================================================

// ---------- SEZIONE 1: Cos'è il Canvas ----------
function esegui1() {
  const canvas = document.getElementById("canvas-1");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // bordo esterno del canvas
  ctx.strokeStyle = "#888";
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // asse X (rosso)
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 20);
  ctx.lineTo(canvas.width, 20);
  ctx.stroke();

  // asse Y (blu)
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(20, canvas.height);
  ctx.stroke();

  // etichetta origine
  ctx.fillStyle = "black";
  ctx.font = "14px Arial";
  ctx.fillText("(0,0)", 25, 15);

  // qualche punto di riferimento
  ctx.fillStyle = "#4f8ef7";
  [[20, 20], [200, 20], [20, 150], [300, 200]].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
  });

  ctx.fillStyle = "#555";
  ctx.font = "12px Arial";
  ctx.fillText("→ X cresce verso destra", 220, 40);
  ctx.fillText("↓ Y cresce verso il basso", 40, 170);
}

// ---------- SEZIONE 2: Rettangoli ----------
function esegui2() {
  const canvas = document.getElementById("canvas-2");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // rettangolo pieno
  ctx.fillStyle = "#4f8ef7";
  ctx.fillRect(30, 30, 120, 80);

  // rettangolo solo bordo
  ctx.strokeStyle = "#e63946";
  ctx.lineWidth = 4;
  ctx.strokeRect(190, 30, 120, 80);

  // rettangolo semi-trasparente rgba
  ctx.fillStyle = "rgba(46, 204, 113, 0.6)";
  ctx.fillRect(350, 30, 120, 80);

  // rettangolo con clearRect che "buca" un pezzo
  ctx.fillStyle = "#f4a300";
  ctx.fillRect(30, 140, 200, 90);
  ctx.clearRect(70, 165, 60, 40);

  ctx.fillStyle = "#333";
  ctx.font = "13px Arial";
  ctx.fillText("fillRect", 55, 128);
  ctx.fillText("strokeRect", 205, 128);
  ctx.fillText("fillStyle rgba", 355, 128);
  ctx.fillText("clearRect nel mezzo →", 30, 250);
}

// ---------- SEZIONE 3: Path ----------
function esegui3() {
  const canvas = document.getElementById("canvas-3");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // triangolo
  ctx.beginPath();
  ctx.moveTo(80, 30);
  ctx.lineTo(140, 140);
  ctx.lineTo(20, 140);
  ctx.closePath();
  ctx.fillStyle = "#f4a300";
  ctx.fill();
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;
  ctx.stroke();

  // stella a 5 punte
  const cx = 260, cy = 90, rOut = 55, rIn = 22;
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const angolo = (Math.PI / 5) * i - Math.PI / 2;
    const raggio = i % 2 === 0 ? rOut : rIn;
    const x = cx + raggio * Math.cos(angolo);
    const y = cy + raggio * Math.sin(angolo);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "#9b59b6";
  ctx.fill();

  // forma irregolare
  ctx.beginPath();
  ctx.moveTo(360, 40);
  ctx.lineTo(430, 60);
  ctx.lineTo(460, 120);
  ctx.lineTo(400, 145);
  ctx.lineTo(350, 110);
  ctx.closePath();
  ctx.fillStyle = "#2ecc71";
  ctx.fill();
  ctx.strokeStyle = "#1e8449";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#333";
  ctx.font = "13px Arial";
  ctx.fillText("triangolo", 45, 200);
  ctx.fillText("stella", 240, 200);
  ctx.fillText("forma irregolare", 370, 200);
}

// ---------- SEZIONE 4: Cerchi e Archi ----------
function esegui4() {
  const canvas = document.getElementById("canvas-4");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // cerchio pieno
  ctx.beginPath();
  ctx.arc(80, 90, 60, 0, 2 * Math.PI);
  ctx.fillStyle = "#4f8ef7";
  ctx.fill();

  // cerchio vuoto
  ctx.beginPath();
  ctx.arc(230, 90, 60, 0, 2 * Math.PI);
  ctx.strokeStyle = "#e63946";
  ctx.lineWidth = 3;
  ctx.stroke();

  // semicerchio
  ctx.beginPath();
  ctx.arc(380, 90, 60, 0, Math.PI);
  ctx.fillStyle = "#2ecc71";
  ctx.fill();

  // spicchio (90 gradi)
  ctx.beginPath();
  ctx.moveTo(80, 240);
  ctx.arc(80, 240, 60, 0, (90 * Math.PI) / 180);
  ctx.closePath();
  ctx.fillStyle = "#f4a300";
  ctx.fill();

  // spicchio (270 gradi)
  ctx.beginPath();
  ctx.moveTo(230, 240);
  ctx.arc(230, 240, 60, 0, (270 * Math.PI) / 180);
  ctx.closePath();
  ctx.fillStyle = "#9b59b6";
  ctx.fill();

  // semicerchio vuoto (bordo)
  ctx.beginPath();
  ctx.arc(380, 240, 60, Math.PI, 2 * Math.PI);
  ctx.strokeStyle = "#1e8449";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#333";
  ctx.font = "12px Arial";
  ctx.fillText("pieno", 55, 165);
  ctx.fillText("vuoto", 205, 165);
  ctx.fillText("semicerchio", 345, 165);
  ctx.fillText("spicchio 90°", 30, 315);
  ctx.fillText("spicchio 270°", 175, 315);
  ctx.fillText("semicerchio vuoto", 320, 315);
}

// ---------- SEZIONE 5: Testo ----------
function esegui5() {
  const canvas = document.getElementById("canvas-5");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // testo centrato
  ctx.font = "bold 28px Arial";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Testo centrato", canvas.width / 2, 55);

  // testo solo bordo
  ctx.font = "bold 40px Arial";
  ctx.strokeStyle = "#4f8ef7";
  ctx.lineWidth = 1.5;
  ctx.strokeText("CONTORNO", canvas.width / 2, 125);

  // testo allineato a sinistra/destra per confronto
  ctx.font = "16px Arial";
  ctx.textAlign = "left";
  ctx.fillStyle = "#555";
  ctx.fillText("allineato a sinistra (left)", 20, 175);
  ctx.textAlign = "right";
  ctx.fillText("allineato a destra (right)", canvas.width - 20, 175);

  // misura del testo
  ctx.font = "16px Arial";
  ctx.textAlign = "left";
  const testo = "Questo testo è largo:";
  const larghezza = ctx.measureText(testo).width;
  ctx.fillStyle = "#e63946";
  ctx.fillText(testo + " " + Math.round(larghezza) + "px", 20, 210);
}

// ---------- SEZIONE 6: Testo Verticale ----------
function esegui6() {
  const canvas = document.getElementById("canvas-6");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. save 2. translate 3. rotate 4. fillText 5. restore
  ctx.save();
  ctx.translate(30, 220);
  ctx.rotate(-Math.PI / 2);
  ctx.font = "bold 18px Arial";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Testo verticale", 0, 0);
  ctx.restore();

  // dimostrazione che il contesto torna normale dopo restore()
  ctx.fillStyle = "#4f8ef7";
  ctx.fillRect(100, 100, 60, 100);
  ctx.fillRect(200, 60, 60, 140);
  ctx.fillRect(300, 130, 60, 70);

  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.font = "13px Arial";
  ctx.fillStyle = "#555";
  ctx.fillText("← ruotato con save/translate/rotate/restore", 100, 40);
  ctx.fillText("questi rettangoli restano normali (dopo restore)", 100, 250);
}

// ---------- SEZIONE 7: Colori e Stili ----------
function esegui7() {
  const canvas = document.getElementById("canvas-7");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // nome, hex, rgb, rgba affiancati
  ctx.fillStyle = "tomato";
  ctx.fillRect(20, 20, 80, 60);
  ctx.fillStyle = "#4f8ef7";
  ctx.fillRect(110, 20, 80, 60);
  ctx.fillStyle = "rgb(46,204,113)";
  ctx.fillRect(200, 20, 80, 60);
  ctx.fillStyle = "rgba(155,89,182,0.5)";
  ctx.fillRect(290, 20, 80, 60);

  ctx.font = "11px Arial";
  ctx.fillStyle = "#333";
  ctx.fillText("nome", 45, 95);
  ctx.fillText("hex", 140, 95);
  ctx.fillText("rgb()", 220, 95);
  ctx.fillText("rgba()", 305, 95);

  // gradiente lineare
  const grad = ctx.createLinearGradient(20, 130, 380, 130);
  grad.addColorStop(0, "#ff512f");
  grad.addColorStop(1, "#f09819");
  ctx.fillStyle = grad;
  ctx.fillRect(20, 130, 360, 50);
  ctx.fillStyle = "#333";
  ctx.fillText("gradiente lineare", 20, 198);

  // gradiente radiale
  const gradR = ctx.createRadialGradient(430, 165, 5, 430, 165, 60);
  gradR.addColorStop(0, "#ffffff");
  gradR.addColorStop(1, "#4f8ef7");
  ctx.fillStyle = gradR;
  ctx.beginPath();
  ctx.arc(430, 165, 60, 0, 2 * Math.PI);
  ctx.fill();

  // globalAlpha
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = "black";
  ctx.fillRect(20, 230, 360, 40);
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#333";
  ctx.fillText("globalAlpha = 0.35 su questa fascia nera", 30, 255);
}

// ---------- SEZIONE 8: Pulizia e Reset ----------
const COLORI_SEZIONE8 = ["#4f8ef7", "#e63946", "#2ecc71", "#f4a300", "#9b59b6", "#1abc9c"];

function esegui8() {
  const canvas = document.getElementById("canvas-8");
  const ctx = canvas.getContext("2d");

  // pattern render(): pulisco e ridisegno da zero ogni volta
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const colore = COLORI_SEZIONE8[Math.floor(Math.random() * COLORI_SEZIONE8.length)];
  const x = 60 + Math.random() * (canvas.width - 120);
  const y = 60 + Math.random() * (canvas.height - 120);
  const raggio = 30 + Math.random() * 40;

  ctx.beginPath();
  ctx.arc(x, y, raggio, 0, 2 * Math.PI);
  ctx.fillStyle = colore;
  ctx.fill();

  ctx.font = "13px Arial";
  ctx.fillStyle = "#555";
  ctx.fillText("ogni click su Esegui pulisce e ridisegna (pattern render)", 20, 25);
}

function pulisci8() {
  const canvas = document.getElementById("canvas-8");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ---------- SEZIONE 9: Istogramma completo ----------
function esegui9() {
  const canvas = document.getElementById("canvas-9");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // voti degli studenti: indice = voto (0-10), valore = numero di studenti
  const voti = [0, 0, 0, 1, 2, 5, 8, 6, 4, 2, 1];

  const margineSx = 55;
  const margineBasso = 45;
  const margineTop = 25;
  const margineDx = 20;

  const larghezzaGrafico = canvas.width - margineSx - margineDx;
  const altezzaGrafico = canvas.height - margineBasso - margineTop;

  const max = Math.max(...voti);
  const scalaY = altezzaGrafico / max;
  const larghezzaBarra = larghezzaGrafico / voti.length;

  const baseX = margineSx;
  const baseY = margineTop + altezzaGrafico; // riga in basso, dove poggiano le barre

  // --- assi cartesiani tratteggiati ---
  ctx.strokeStyle = "#999";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  // linee orizzontali di riferimento (griglia) ogni 2 studenti
  for (let v = 0; v <= max; v += 2) {
    const y = baseY - v * scalaY;
    ctx.beginPath();
    ctx.moveTo(baseX, y);
    ctx.lineTo(baseX + larghezzaGrafico, y);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // asse X e asse Y pieni
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(baseX, margineTop);
  ctx.lineTo(baseX, baseY);
  ctx.lineTo(baseX + larghezzaGrafico, baseY);
  ctx.stroke();

  // --- barre colorate proporzionali ai valori ---
  voti.forEach((numeroStudenti, voto) => {
    const altezzaBarra = numeroStudenti * scalaY;
    const x = baseX + voto * larghezzaBarra;
    const y = baseY - altezzaBarra;

    ctx.fillStyle = "#4f8ef7";
    ctx.fillRect(x + 4, y, larghezzaBarra - 8, altezzaBarra);

    // numero di studenti sopra la barra
    if (numeroStudenti > 0) {
      ctx.fillStyle = "#333";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(numeroStudenti, x + larghezzaBarra / 2, y - 6);
    }
  });

  // --- etichette sull'asse X (i voti), con un for ---
  ctx.fillStyle = "#333";
  ctx.font = "13px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  for (let voto = 0; voto < voti.length; voto++) {
    const x = baseX + voto * larghezzaBarra + larghezzaBarra / 2;
    ctx.fillText(voto, x, baseY + 8);
  }

  // --- numeri sull'asse Y, con un for ---
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let v = 0; v <= max; v += 2) {
    const y = baseY - v * scalaY;
    ctx.fillText(v, baseX - 10, y);
  }

  // --- scritta verticale "Quantità" sull'asse Y ---
  ctx.save();
  ctx.translate(16, margineTop + altezzaGrafico / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.font = "bold 15px Arial";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Quantità studenti", 0, 0);
  ctx.restore();

  // etichetta asse X
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.font = "bold 14px Arial";
  ctx.fillText("Voto", baseX + larghezzaGrafico / 2, baseY + 26);
}

// ============================================================
// Collegamento pulsanti "Esegui"
// ============================================================
document.getElementById("btn-1").addEventListener("click", esegui1);
document.getElementById("btn-2").addEventListener("click", esegui2);
document.getElementById("btn-3").addEventListener("click", esegui3);
document.getElementById("btn-4").addEventListener("click", esegui4);
document.getElementById("btn-5").addEventListener("click", esegui5);
document.getElementById("btn-6").addEventListener("click", esegui6);
document.getElementById("btn-7").addEventListener("click", esegui7);
document.getElementById("btn-8").addEventListener("click", esegui8);
document.getElementById("btn-8-pulisci").addEventListener("click", pulisci8);
document.getElementById("btn-9").addEventListener("click", esegui9);

// Disegno automatico di tutti gli esempi al caricamento della pagina,
// così le sezioni non sono vuote prima di premere "Esegui"
window.addEventListener("DOMContentLoaded", () => {
  esegui1();
  esegui2();
  esegui3();
  esegui4();
  esegui5();
  esegui6();
  esegui7();
  esegui9();
});
