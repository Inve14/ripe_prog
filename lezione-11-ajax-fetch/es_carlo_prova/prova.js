(async () => {
    //const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=45.28&longitude=9.11&current_weather=true");
    /*
    let lan = 45.28;
    let lon = 9.11;
    const url = "https://api.open-meteo.com/v1/forecast?latitude=" + lan + "&longitude=" + lon + "&current_weather=true";
    */
    let lan = 45.28;
    let lon = 9.11;
    const TEMPLATE_url = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

    let url = TEMPLATE_url.replace("%LAT", lan).replace("%LON", lon);



    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
})();