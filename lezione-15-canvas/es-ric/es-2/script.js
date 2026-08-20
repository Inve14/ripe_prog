/*
Consegna:
Disegna un semaforo: un rettangolo verticale (il corpo del
semaforo) e al suo interno 3 cerchi allineati in verticale,
colorati rispettivamente di rosso, giallo e verde dall'alto
verso il basso.

Risultato atteso:
Un rettangolo scuro (es. grigio o nero) con dentro tre cerchi
colorati, uno sopra l'altro, ben centrati orizzontalmente nel
rettangolo. 

*/
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#888";
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, canvas.width, canvas.height);


//rettangolo semaforo
ctx.fillStyle = "black";
ctx.fillRect(20, 20, 200, 400);

//luce rossa semaforo
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(120, 100, 50, 0, 2 * Math.PI);
ctx.fill();



//luce gialla semaforo
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(120, 210, 50, 0, 2 * Math.PI);
ctx.fill();


//luce verde semaforo

ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(120, 320, 50, 0, 2 * Math.PI);
ctx.fill();