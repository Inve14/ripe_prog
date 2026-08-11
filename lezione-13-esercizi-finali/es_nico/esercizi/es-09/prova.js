(async () => {
    const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=45&longitude=9&current_weather=true";
    const response = await fetch(URL_METEO);
    const data = await response.json();
    console.log(data);
})();