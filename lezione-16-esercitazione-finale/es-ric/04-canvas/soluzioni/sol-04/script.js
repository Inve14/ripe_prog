// SOL-04 - Casa

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const corpoX = 100, corpoY = 140, corpoW = 200, corpoH = 120;

// corpo della casa
ctx.fillStyle = "#d9a066";
ctx.fillRect(corpoX, corpoY, corpoW, corpoH);

// tetto: triangolo i cui due punti bassi coincidono con gli angoli del corpo
ctx.beginPath();
ctx.moveTo(corpoX - 20, corpoY);
ctx.lineTo(corpoX + corpoW / 2, corpoY - 80);
ctx.lineTo(corpoX + corpoW + 20, corpoY);
ctx.closePath();
ctx.fillStyle = "#c0392b";
ctx.fill();

// porta
ctx.fillStyle = "#5b3a29";
ctx.fillRect(corpoX + corpoW / 2 - 20, corpoY + corpoH - 60, 40, 60);
