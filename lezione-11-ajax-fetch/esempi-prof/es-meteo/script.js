// ============================================================
// Esempio prof - Meteo (Open-Meteo)
// ============================================================
// Obiettivo: l'utente scrive latitudine e longitudine, noi
// chiediamo a Open-Meteo il meteo attuale in quel punto e
// mostriamo temperatura, vento e relative unità di misura.

// "aggancio" gli elementi HTML tramite il loro id
const inputLatitudine = document.getElementById("inputLatitudine");
const inputLongitudine = document.getElementById("inputLongitudine");
const btnCercaMeteo = document.getElementById("btnCercaMeteo");
const risultatoMeteo = document.getElementById("risultatoMeteo");

// URL "modello" (template) di Open-Meteo: contiene DUE segnaposto,
// %LAT e %LON, al posto dei veri valori numerici. current_weather=true
// dice alla API "dammi anche il meteo di adesso", non solo le previsioni.
const URL_TEMPLATE = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true";

// colleghiamo la funzione al click del pulsante
// "async" perché dentro useremo "await"
btnCercaMeteo.onclick = async () => {

  // leggo i valori scritti dall'utente SOLO dentro l'onclick
  const lat = inputLatitudine.value;
  const lon = inputLongitudine.value;

  // Gestione del caso "campi vuoti": se l'utente non ha scritto
  // niente in uno dei due input, non ha senso fare la richiesta:
  // mostriamo un avviso e usciamo subito dalla funzione con "return"
  if (lat === "" || lon === "") {
    risultatoMeteo.innerHTML = `<p class="text-danger">Inserisci sia latitudine che longitudine.</p>`;
    return;
  }

  // Come si sostituiscono due segnaposto nella URL con due .replace()
  // concatenati: ogni .replace() restituisce una NUOVA stringa, quindi
  // possiamo chiamare subito un secondo .replace() sul risultato del
  // primo, "in fila" (concatenati). Prima sostituiamo %LAT con la
  // latitudine, poi sul risultato sostituiamo %LON con la longitudine.
  const url = URL_TEMPLATE
    .replace("%LAT", lat)
    .replace("%LON", lon);
  console.log(url); // controllo visivo che l'URL sia corretta

  // 1° await: parte la richiesta GET e aspettiamo la risposta del server
  const response = await fetch(url);

  // 2° await: leggiamo il body della risposta e lo trasformiamo in
  // un oggetto JavaScript
  const data = await response.json();

  // Come si usa console.log(data) per esplorare la struttura della
  // risposta: prima di scrivere il codice che "pesca" i dati che ci
  // servono, stampiamo SEMPRE l'intero oggetto in console. Aprendo
  // gli oggetti annidati nella console del browser possiamo vedere
  // esattamente sotto quale nome si trovano temperatura e vento,
  // senza doverli indovinare leggendo la documentazione.
  console.log(data);

  // Come si naviga dentro un JSON annidato (data.current_weather...):
  // Open-Meteo non mette temperatura e vento direttamente dentro
  // "data", ma dentro un oggetto "figlio" chiamato "current_weather".
  // Per arrivare ai valori dobbiamo quindi "scendere" di un livello:
  // prima data.current_weather (l'oggetto), poi .temperature e
  // .windspeed (i valori dentro quell'oggetto).
  const temperatura = data.current_weather.temperature;
  const vento = data.current_weather.windspeed;

  // le unità di misura si trovano invece in un altro oggetto
  // "figlio" di data, chiamato "current_weather_units"
  const unitaTemperatura = data.current_weather_units.temperature;
  const unitaVento = data.current_weather_units.windspeed;

  render(temperatura, unitaTemperatura, vento, unitaVento);
};

// funzione che scrive i risultati dentro il div risultatoMeteo
const render = (temperatura, unitaTemperatura, vento, unitaVento) => {
  risultatoMeteo.innerHTML = `
    <p><strong>Temperatura:</strong> ${temperatura} ${unitaTemperatura}</p>
    <p><strong>Velocità del vento:</strong> ${vento} ${unitaVento}</p>
  `;
};
