/*
ESERCIZIO 9 — Meteo (AJAX con URL template) — SOLUZIONE
*/

const inputLat = document.querySelector("#lat");
const inputLon = document.querySelector("#lon");
const btnCerca = document.querySelector("#btnCerca");
const divRisultato = document.querySelector("#risultato");

// Modello di URL con due segnaposto da sostituire
const urlModello = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

btnCerca.onclick = async function () {
    const lat = inputLat.value;
    const lon = inputLon.value;

    // Due .replace() concatenati: uno per ogni segnaposto nel modello
    const url = urlModello.replace("%LAT", lat).replace("%LON", lon);

    const risposta = await fetch(url);
    const dati = await risposta.json();

    console.log(dati); // per vedere la struttura completa prima di usarla

    // I dati che ci interessano sono dentro un oggetto annidato "current_weather"
    const temperatura = dati.current_weather.temperature;
    const vento = dati.current_weather.windspeed;

    divRisultato.innerHTML =
        "Temperatura: " + temperatura + "°C<br>" +
        "Vento: " + vento + " km/h";
};
