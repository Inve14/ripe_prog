/*
Consegna:
Scrivi il tuo nome al centro esatto del canvas, con un font
grande e ben leggibile.

Risultato atteso:
Il testo appare perfettamente centrato sia orizzontalmente sia
verticalmente rispetto al canvas, qualunque sia la dimensione
del canvas.


*/

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const input = document.querySelector("#nomeUtente");
const button1 = document.querySelector("#button");
const button2 = document.querySelector("#pulisci");


ctx.strokeStyle = "#888";
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, canvas.width, canvas.height);

button1.onclick = () =>{
    const nome = input.value;
    ctx.font = "bold 30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.fillText(nome, 250, 200);
}

button2.onclick = () =>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.strokeStyle = "#888";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

}

