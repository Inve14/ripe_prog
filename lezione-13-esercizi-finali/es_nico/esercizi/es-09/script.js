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
const inputlat = document.querySelector("#lat");
const btncerca = document.querySelector("#btncerca");
const divrisultato = document.querySelector("#risultato");

const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

btncerca.onclick = async () => {
    const lat = inputlat.value;
    const long = inputlong.value;

    const url = URL_METEO.replace("%LAT", lat).replace("%LON", long);

    const response = await fetch(url);
    const data = await response.json();
    /*
    {
  latitude: 45,
  longitude: 9,
  generationtime_ms: 0.13303756713867188,
  utc_offset_seconds: 0,
  timezone: 'GMT',
  timezone_abbreviation: 'GMT',
  elevation: 87,
  current_weather_units: {
    time: 'iso8601',
    interval: 'seconds',
    temperature: '°C',
    windspeed: 'km/h',
    winddirection: '°',
    is_day: '',
    weathercode: 'wmo code'
  },
  current_weather: {
    time: '2026-08-10T11:00',
    interval: 900,
    temperature: 32.4,
    windspeed: 8.3,
    winddirection: 270,
    is_day: 1,
    weathercode: 1
  }
}
    */
    const temperatura = data.current_weather.temperature;
    const vento = data.current_weather.windspeed;
    const temperatura_u = data.current_weather_units.temperature;
    const vento_u = data.current_weather_units.windspeed;

    const template = "temperatura -> %TEMP %TEMPU vento -> %VENTO %VENTOU";
    divrisultato.innerHTML = template.replace("%TEMP", temperatura).replace("%TEMPU", temperatura_u).replace("%VENTO", vento).replace("%VENTOU", vento_u);
    
}