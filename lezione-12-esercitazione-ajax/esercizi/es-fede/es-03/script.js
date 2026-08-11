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

const URL_TEMPLATE = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";
const render = (temp, temp_u, vento, vento_u) => {
  const template = `
  vento -> %V1 %V2 </br>
  temperatura -> %T1 %T2
  `;
  risultato.innerHTML = template.replace("%V1", vento).replace("%V2", vento_u).replace("%T1", temp).replace("%T2", temp_u);
}
btnCerca.onclick = async () => {
  const lat = inputLat.value;
  const lon = inputLon.value;
  const url = URL_TEMPLATE.replace("%LAT", lat).replace("%LON", lon);
  const response = await fetch(url);
  const data = await response.json();
  const temp = data.current_weather.temperature;
  const temp_u = data.current_weather_units.temperature;
  const vento = data.current_weather.windspeed;
  const vento_u = data.current_weather_units.windspeed;

  render(temp, temp_u, vento, vento_u);
}