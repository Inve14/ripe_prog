// SOL-04 - Meteo (test con Node)
// Esegui con: node prova.js

const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

async function prova() {
  const url = URL_METEO.replace("%LAT", 41.9).replace("%LON", 12.5); // Roma
  const response = await fetch(url);
  const dati = await response.json();
  console.log(dati.current_weather);
}

prova();
