// SOL-03 - Meteo

const inputLat = document.querySelector("#inputLat");
const inputLon = document.querySelector("#inputLon");
const btnCerca = document.querySelector("#btnCerca");
const risultato = document.querySelector("#risultato");

const URL_TEMPLATE = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

btnCerca.onclick = async () => {
  const lat = inputLat.value;
  const lon = inputLon.value;

  // due .replace() concatenati: il primo sostituisce %LAT, il secondo
  // lavora sul risultato del primo e sostituisce %LON
  const url = URL_TEMPLATE.replace("%LAT", lat).replace("%LON", lon);
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();

  // i dati che ci servono sono annidati dentro data.current_weather
  console.log(data);

  const temperatura = data.current_weather.temperature;
  const vento = data.current_weather.windspeed;

  risultato.innerText = `Temperatura: ${temperatura} °C — Vento: ${vento} km/h`;
};
