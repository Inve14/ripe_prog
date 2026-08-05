# Lezione 11 — AJAX e fetch

Prima lezione su AJAX: JavaScript impara a chiedere dati a un server (API) senza ricaricare la pagina, usando `fetch()` e `async/await`.

## Argomenti trattati

- Cos'è AJAX e perché serve (aggiornare la pagina senza ricaricarla)
- Cos'è una API e il modello client-server
- Il problema dell'asincronia (JavaScript è monothread)
- La soluzione: `async`/`await`
- `fetch()` base: cosa restituisce (una Promise, poi un oggetto Response)
- I due `await` obbligatori (fetch + `.json()`)
- GET vs POST: quando si usa quale, cosa cambia nel codice
- Struttura di una HTTP request/response (request line, headers, body)
- URL template con `.replace()` per parametri dinamici
- Come leggere la struttura di un JSON di risposta con `console.log`

## File creati

- `teoria-ajax.js` — appunti commentati eseguibili con Node.js, i 10 argomenti sopra in ordine, ognuno con spiegazione + esempio di codice
- `esempi-fetch/esempio-01-get/` (`index.html` + `script.js`) — fetch GET semplice: pulsante "Carica utenti" che chiama `jsonplaceholder.typicode.com/users` e mostra id/nome/email in tabella Bootstrap
- `esempi-fetch/esempio-02-url-template/` (`index.html` + `script.js`) — fetch GET con URL dinamica: input ingrediente + `.replace()` sul template per cercare cocktail sulla CocktailDB (`filter.php?i=...`), tabella con id/nome/immagine
- `esempi-fetch/esempio-03-post/` (`index.html` + `script.js`) — fetch POST verso la Cache Remota del prof (`ws.cipiaceinfo.it/cache/set` e `/cache/get`): form per salvare una coppia chiave/valore e form per rileggerla
- `mini-pratica-consegna.html` + `.js` — esercizio da fare in aula: pagina meteo con input lat/lon, pulsante "Cerca meteo", fetch a Open-Meteo con URL template; binding già pronti, corpo della funzione da scrivere
- `mini-pratica-soluzione.html` + `.js` — stessa pagina con la soluzione completa e commentata
- `appunti-ajax.pdf` + `genera_pdf.py` — PDF con gli stessi contenuti di `teoria-ajax.js`, formattato con Python/reportlab (titoli blu scuro numerati, blocchi di codice Courier su sfondo grigio, A4); rilanciare lo script se si aggiorna `teoria-ajax.js`
- `discorso-lezione11.txt` — spiegazione orale ~915 parole per studente liceale, con le metafore del cameriere (API) e del bar (async/await)
- `riassunto.md` — questo file

## Concetti chiave

1. **AJAX aggiorna solo un pezzo di pagina**: JavaScript chiede dati al server con `fetch()` mentre la pagina resta aperta, invece di ricaricarla tutta.
2. **Servono sempre due `await`**: uno per `fetch(url)` (che restituisce l'oggetto `Response`), uno per `response.json()` (che restituisce i dati veri, usabili in JavaScript).
3. **GET legge, POST manda**: GET basta `fetch(url)`; POST richiede `method: 'POST'`, `headers` e un `body` costruito con `JSON.stringify(...)`.
4. **L'URL template con `.replace()`** è il pattern per costruire URL dinamiche: si scrive un modello con un segnaposto (es. `%WORD`) e lo si sostituisce col valore dell'utente prima della fetch.
5. **Regola d'oro**: davanti a dati nuovi da una API, fare sempre `console.log(data)` per capire la struttura del JSON PRIMA di scrivere il codice che li usa.

## Note tecniche

- La Cache Remota del prof (`ws.cipiaceinfo.it`) vuole il token nell'header personalizzato `key`, NON nel body; il body contiene invece la propria coppia `{ key, value }` dove `key` è il nome della chiave salvata (da non confondere con l'header `key` che è il token) e `value` deve essere una stringa JSON (`JSON.stringify` anche sul valore).
- Struttura confermata via test diretto delle API usate: `jsonplaceholder.typicode.com/users` (array di utenti con `id`, `name`, `email`), CocktailDB `filter.php?i=INGREDIENTE` (`drinks`: array con `idDrink`, `strDrink`, `strDrinkThumb`, oppure `null` se non trova nulla), Open-Meteo `forecast?...&current_weather=true` (`current_weather.temperature` e `current_weather.windspeed`).
- Contenuti tratti da cipiaceinfo.it/docs/programmazione/javascript/ajax/, /javascript-asincrono/ e /docs/strumenti-web/cache-remota/ (quest'ultima non linkata esplicitamente nella consegna ma necessaria per capire la struttura corretta della richiesta alla Cache Remota).
