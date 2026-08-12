(async () => {
    const lat = 45;
    const lon = 9;
    const URL_TEMPLATE = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

    const url = URL_TEMPLATE.replace("%LAT", lat).replace("%LON", lon);

    const response = await fetch(url);
    const data = await response.json();

    //console.log(data);

    const vento = data.current_weather.windspeed;
    const vento_u = data.current_weather_units.windspeed;
    const temp = data.current_weather.temperature;
    const temp_u = data.current_weather_units.temperature;

    console.log("temp -> ", temp, " ", temp_u);
    console.log("vento -> ", vento, " ", vento_u);
})();