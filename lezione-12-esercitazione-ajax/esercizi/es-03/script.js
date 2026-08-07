// ES-03 - Meteo
//
// CONSEGNA:
// Al click sul pulsante #btnCerca, leggi latitudine e longitudine dagli
// input, costruisci l'URL sostituendo entrambi i segnaposto nel template
// e mostra temperatura e vento dentro #risultato.
//
// Concetti: due .replace() concatenati, dati annidati (data.current_weather)

const inputLat = document.querySelector("#inputLat");
const inputLon = document.querySelector("#inputLon");
const btnCerca = document.querySelector("#btnCerca");
const risultato = document.querySelector("#risultato");

// %LAT e %LON sono i segnaposto da sostituire
const URL_TEMPLATE = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

btnCerca.onclick = async () => {
  // scrivi qui il codice:
  // 1. leggi lat e lon dagli input
  // 2. costruisci l'URL con due .replace() concatenati (uno per %LAT, uno per %LON)
  // 3. fai la fetch, converti la risposta con .json()
  // 4. i dati che ti servono sono dentro data.current_weather (temperature, windspeed)
};
