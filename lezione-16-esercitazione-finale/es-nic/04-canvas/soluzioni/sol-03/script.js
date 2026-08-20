// SOL-03 - Testo centrato

const inputTesto = document.querySelector("#inputTesto");
const btnScrivi = document.querySelector("#btnScrivi");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

btnScrivi.onclick = function () {
  const testo = inputTesto.value;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "bold 40px Arial";
  ctx.fillStyle = "#4f8ef7";
  // textAlign center + textBaseline middle: canvas.width/2,canvas.height/2 diventa il centro esatto
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(testo, canvas.width / 2, canvas.height / 2);
};
