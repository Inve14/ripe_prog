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

  const lat = inputLat.value;
  const lon = inputLon.value;

  const URL = URL_TEMPLATE.replace("%LAT", lat).replace("%LON", lon);

  const response = await fetch(URL);
  const data = await response.json();

  const vento = data.current_weather.windspeed;
  const vento_u = data.current_weather_units.windspeed;
  const temp = data.current_weather.temperature;
  const temp_u = data.current_weather_units.temperature;

  render(vento, vento_u, temp, temp_u);
};

const render = (vento, vento_u, temp, temp_u) => {
  const template = "velocita' vento -> %VENTO %VENTO_U </br> temperaturta -> %TEMP %TEMP_U";
  risultato.innerHTML = template.replace("%VENTO", vento).replace("%VENTO_U", vento_u).replace("%TEMP", temp).replace("%TEMP_U", temp_u);
  //risultato.innerHTML = `velocita' vento -> ${vento} ${vento_u} </br> temperaturta -> ${temp} ${temp_u}`;
};


