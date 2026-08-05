// ============================================================
// Mini pratica - Meteo con fetch (SOLUZIONE)
// ============================================================

// binding: aggancio gli elementi HTML tramite il loro id
const inputLat = document.getElementById("inputLat");
const inputLon = document.getElementById("inputLon");
const btnCerca = document.getElementById("btnCerca");
const risultato = document.getElementById("risultato");

// URL template della API Open-Meteo: %LAT e %LON sono i
// segnaposto da sostituire con i valori scritti dall'utente
const URL_TEMPLATE = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

btnCerca.onclick = async () => {
  // leggo i valori scritti dall'utente
  const lat = inputLat.value;
  const lon = inputLon.value;

  // costruisco l'URL finale sostituendo entrambi i segnaposto
  const url = URL_TEMPLATE.replace("%LAT", lat).replace("%LON", lon);
  console.log(url);

  // 1° await: parte la richiesta GET
  const response = await fetch(url);

  // 2° await: converto la risposta in oggetto JavaScript
  const data = await response.json();

  // guardo sempre la forma dei dati prima di usarli:
  // data.current_weather contiene temperature e windspeed
  console.log(data);

  const temperatura = data.current_weather.temperature;
  const vento = data.current_weather.windspeed;

  // mostro il risultato nel div
  risultato.innerText = `Temperatura: ${temperatura} °C — Vento: ${vento} km/h`;
};
