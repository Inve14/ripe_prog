// SOL-04 - Meteo

const inputLat = document.querySelector("#inputLat");
const inputLon = document.querySelector("#inputLon");
const btnCerca = document.querySelector("#btnCerca");
const risultato = document.querySelector("#risultato");

const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

btnCerca.onclick = async () => {
  const lat = inputLat.value;
  const lon = inputLon.value;

  // due .replace() concatenati, uno per ogni segnaposto
  const url = URL_METEO.replace("%LAT", lat).replace("%LON", lon);

  const response = await fetch(url);
  const dati = await response.json();

  console.log(dati);

  // current_weather è un oggetto annidato dentro la risposta
  const meteo = dati.current_weather;
  risultato.innerHTML = `Temperatura: ${meteo.temperature}°C — Vento: ${meteo.windspeed} km/h`;
};
