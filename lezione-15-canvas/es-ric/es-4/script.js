/*
Consegna:
Disegna una casa semplice: un rettangolo per il corpo della
casa e un triangolo sopra di esso per il tetto.

Risultato atteso:
Una forma riconoscibile come "casa": rettangolo colorato in
basso, triangolo colorato appoggiato esattamente sopra il bordo
superiore del rettangolo, senza spazi vuoti o sovrapposizioni
strane.

Suggerimento:
Usa fillRect per il corpo. Per il tetto usa beginPath + moveTo
+ lineTo (2 volte) + closePath + fill, facendo attenzione che
i due punti in basso del triangolo coincidano esattamente con
i due angoli superiori del rettangolo.
*/

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");



ctx.strokeStyle = "#888";
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, canvas.width, canvas.height);

//rettangolo casa
ctx.fillStyle= "brown";
ctx.fillRect( 100, 150, canvas.width/2, 300);

//triangolo della casa
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(350, 150);
ctx.lineTo( 225, 100);
ctx.closePath();
ctx.fillStyle="blue";
ctx.fill();

//porta
ctx.fillStyle="black";
ctx.fillRect(200, 300, 70, 100);

// finestre 
ctx.fillStyle="skyblue";
ctx.fillRect(125, 200, 45, 45);

ctx.fillStyle="skyblue";
ctx.fillRect(275,200,45,45);
