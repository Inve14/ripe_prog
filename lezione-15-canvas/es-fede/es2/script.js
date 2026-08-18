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

Suggerimento:
Usa fillRect per il corpo del semaforo, poi beginPath + arc +
fill per ogni cerchio, tenendo la stessa coordinata x per tutti
e tre e cambiando solo y.
    */


const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


ctx.strokeStyle = "#888";
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, canvas.width, canvas.height);



ctx.fillStyle = "grey";
ctx.fillRect(20, 20, 170, 320);

ctx.beginPath();
ctx.arc(100, 80 , 45, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();


ctx.beginPath();
ctx.arc(100, 180, 45, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(100, 280, 45, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();


