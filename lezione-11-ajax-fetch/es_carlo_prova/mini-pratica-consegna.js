// ============================================================
// Mini pratica - Meteo con fetch (CONSEGNA)
// ============================================================
// Leggi bene i commenti nella consegna dentro il file
// "mini-pratica-consegna.html" prima di scrivere codice qui.

// binding già fatti: aggancio gli elementi HTML tramite il loro id
const inputLat = document.getElementById("inputLat");
const inputLon = document.getElementById("inputLon");
const btnCerca = document.getElementById("btnCerca");
const risultato = document.getElementById("risultato");

// URL template della API Open-Meteo: %LAT e %LON vanno sostituiti
// con i valori scritti dall'utente usando .replace()
const URL_TEMPLATE = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

btnCerca.onclick = async () => {
    const lat = inputLat.value;
    const lon = inputLon.value;

    const url = URL_TEMPLATE.replace("%LAT", lat).replace("%LON", lon);

    const response = await fetch(url);
    const data = await response.json();

    const temp = data.current_weather.temperature;
    const temp_unit = data.current_weather_units.temperature;
    const vento = data.current_weather.windspeed;
    const vento_unit = data.current_weather_units.windspeed;

    //risultato.innerText = "temperatura -> %temp %unit_temp velocita' vento -> %vento %unit_vento";
    //risultato.replace("%temp", temp).replace("%unit_temp", temp_unit). 

    risultato.innerText = "temperatura -> " + temp + "" + temp_unit + " velocita' vento -> " + vento + "" +vento_unit;
};
