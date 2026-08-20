/*
Consegna:
Disegna 3 rettangoli colorati, tutti della stessa dimensione,
posizionati uno accanto all'altro in orizzontale, con un piccolo
spazio vuoto fra uno e l'altro.

Risultato atteso:
Tre blocchi di colore diverso (a scelta) allineati in fila,
ben distanziati e non sovrapposti.

*/

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#888";
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, canvas.width, canvas.height);


//rettangolo 1
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 60, 40);

//rettangolo 2
ctx.fillStyle = "yellow";
ctx.fillRect(100, 20, 60, 40);

//rettangolo 3
ctx.fillStyle = "blue";
ctx.fillRect(180, 20, 60, 40);


