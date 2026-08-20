/*
Consegna:
Scrivi il tuo nome al centro esatto del canvas, con un font
grande e ben leggibile.

Risultato atteso:
Il testo appare perfettamente centrato sia orizzontalmente sia
verticalmente rispetto al canvas, qualunque sia la dimensione
del canvas.

Suggerimento:
Usa font per la dimensione, textAlign = "center" e
textBaseline = "middle", poi fillText(nome, canvas.width/2,
canvas.height/2).
*/

const canvas = document.querySelector("#canvas");
const input = document.querySelector("#inputNome");
const button = document.querySelector("#scriviNome");
const ctx = canvas.getContext("2d");


ctx.strokeStyle = "#888";
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, canvas.width, canvas.height);

button.onclick = () => {
    const nome = input.value;
    ctx.font= "bold 20px arial";
    ctx.textAlign = "center";
    ctx.textBaseline= "middle";
    ctx.fillText( nome,canvas.width/2,canvas.height/2 );
}