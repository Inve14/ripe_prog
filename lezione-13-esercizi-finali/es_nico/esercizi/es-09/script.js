/*
ESERCIZIO 9 — Meteo (AJAX con URL template)

Crea una pagina con:
- un campo per la latitudine
- un campo per la longitudine
- un pulsante "Cerca"
- un div per il risultato

Al click, costruisci l'URL a partire da questo modello, sostituendo %LAT e %LON con i
valori inseriti (due .replace() concatenati):
https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true

Fai la fetch e mostra nel div temperatura e velocità del vento (sono dentro
data.current_weather, un oggetto annidato).

Concetti da usare: URL template con .replace(), dati annidati nel JSON
*/
 const inputlong = document.querySelector("#long");
 const inputlat = document.querySelector("#")