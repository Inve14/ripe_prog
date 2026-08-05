// ============================================================
// Esempio prof - Cache Remota
// ============================================================
// Obiettivo: usare il servizio "Cache Remota" del prof per
// SALVARE (POST su /cache/set) e poi RILEGGERE (POST su /cache/get)
// un valore associato a una chiave. A differenza degli altri due
// esempi (solo GET), qui vediamo cosa cambia quando dobbiamo
// MANDARE dati al server, non solo chiederli.

// "aggancio" gli elementi del FORM 1 (Salva)
const inputChiaveSet = document.getElementById("inputChiaveSet");
const inputValoreSet = document.getElementById("inputValoreSet");
const btnSalva = document.getElementById("btnSalva");
const esitoSalva = document.getElementById("esitoSalva");

// "aggancio" gli elementi del FORM 2 (Leggi)
const inputChiaveGet = document.getElementById("inputChiaveGet");
const btnLeggi = document.getElementById("btnLeggi");
const esitoLeggi = document.getElementById("esitoLeggi");

// token personale, ottenuto registrandosi su ws.cipiaceinfo.it/register/
// serve al server per capire CHI sta salvando/leggendo i dati
const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

// ------------------------------------------------------------
// FORM 1 - SALVA (POST su /cache/set)
// ------------------------------------------------------------
btnSalva.onclick = async () => {
  const chiave = inputChiaveSet.value;
  const valore = inputValoreSet.value;

  // Differenza tra GET e POST nel codice:
  // - Con una GET (vedi es-cocktail, es-meteo) chiamiamo semplicemente
  //   fetch(url): i "parametri" della richiesta stanno scritti dentro
  //   l'URL stessa (es. ?i=vodka), e non c'è nulla da "mandare" oltre
  //   all'URL.
  // - Con una POST dobbiamo invece MANDARE dati al server, quindi
  //   fetch() vuole un secondo parametro: un oggetto di configurazione
  //   con "method", "headers" e "body" (spiegati sotto).
  const response = await fetch(URL_SET, {
    // method: "POST" dice al server "non sto solo leggendo, sto
    // scrivendo/mandando dati"
    method: "POST",

    // Cosa sono gli headers e perché servono:
    // gli headers sono informazioni "di contorno" sulla richiesta,
    // separate dai dati veri e propri. Qui ne servono due:
    // - "Content-Type": dice al server in che formato è scritto il
    //   body che stiamo per mandare (qui: "application/json", cioè
    //   testo JSON). Senza questo header il server potrebbe non
    //   capire come leggere il body.
    // - "key": qui il prof ha scelto di passare il TOKEN di
    //   autenticazione come header personalizzato (da non confondere
    //   con la "chiave" che stiamo salvando, che invece va nel body!)
    headers: {
      "Content-Type": "application/json",
      "key": TOKEN
    },

    // Cosa è il body e perché serve:
    // il body è il "pacco" con i dati veri che vogliamo mandare al
    // server: in questo caso la coppia chiave/valore da salvare.
    //
    // Perché si usa JSON.stringify() nel body:
    // il body di una richiesta HTTP deve sempre essere una STRINGA di
    // testo (non può essere un oggetto JavaScript "vivo"). JSON.stringify()
    // prende un oggetto JavaScript e lo trasforma nella sua
    // rappresentazione testuale in formato JSON, es:
    //   { key: "colore", value: "blu" }  →  '{"key":"colore","value":"blu"}'
    // Il server, dall'altra parte, farà l'operazione inversa (JSON.parse)
    // per ritrasformare quel testo in un oggetto.
    //
    // Nota sul "value": la API di questa cache si aspetta che anche il
    // valore da salvare sia già una stringa JSON (non importa se il dato
    // originale è un semplice testo, un numero o un oggetto). Per questo
    // facciamo JSON.stringify() due volte: una volta su "valore" (per
    // prepararlo) e una volta sull'intero oggetto { key, value } (per
    // trasformare tutto il body in testo, come richiesto da fetch).
    body: JSON.stringify({
      key: chiave,
      value: JSON.stringify(valore)
    })
  });

  // come sempre con fetch: un await per la risposta HTTP,
  // un await per leggere/convertire il body in oggetto JS
  const data = await response.json();
  console.log(data); // es: { result: "Ok" } se il salvataggio è andato bene

  // Come si controlla la risposta con data.result.toLowerCase() === "ok":
  // il server risponde con un campo "result" che contiene una stringa
  // tipo "Ok", "OK" o "ok" (le maiuscole possono variare). Per non
  // dover controllare tutte le combinazioni possibili, trasformiamo
  // la stringa ricevuta tutta in minuscolo con .toLowerCase() e la
  // confrontiamo con "ok": così il controllo funziona qualunque sia
  // la combinazione di maiuscole/minuscole usata dal server.
  if (data.result.toLowerCase() === "ok") {
    esitoSalva.innerHTML = `<p class="text-success">Salvato! (${chiave} = ${valore})</p>`;
  } else {
    esitoSalva.innerHTML = `<p class="text-danger">Errore durante il salvataggio.</p>`;
  }
};

// ------------------------------------------------------------
// FORM 2 - LEGGI (POST su /cache/get)
// ------------------------------------------------------------
// Nota: anche la LETTURA qui è una POST (non una GET), perché lo
// impone questa specifica API: dobbiamo comunque mandare un body
// con dentro la chiave da cercare, più l'header con il token.
btnLeggi.onclick = async () => {
  const chiave = inputChiaveGet.value;

  const response = await fetch(URL_GET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": TOKEN
    },
    // anche qui il body è un oggetto trasformato in stringa JSON:
    // stavolta contiene solo la chiave che vogliamo cercare
    body: JSON.stringify({ key: chiave })
  });

  const data = await response.json();
  console.log(data); // es: { result: "\"blu\"" } perché "value" era stato salvato con JSON.stringify

  // se la chiave non esiste, il server risponde con un result diverso
  // da un valore valido (qui lo controlliamo confrontandolo con "ok"
  // in minuscolo, stesso trucco usato sopra per il salvataggio, per
  // riconoscere le risposte di errore indipendentemente da maiuscole
  // e minuscole)
  if (data.result && data.result.toLowerCase() !== "ok" && data.result.toLowerCase() !== "not found") {
    // data.result è una stringa JSON (perché in fase di salvataggio
    // avevamo fatto JSON.stringify(valore)): con JSON.parse() la
    // "riapriamo" per tornare al valore originale scritto dall'utente
    const valore = JSON.parse(data.result);
    esitoLeggi.innerHTML = `<p>Valore trovato: <strong>${valore}</strong></p>`;
  } else {
    esitoLeggi.innerHTML = `<p class="text-danger">Nessun valore trovato per questa chiave.</p>`;
  }
};
