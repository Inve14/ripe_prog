# Lezione 16 — Esercitazione finale

Esercitazione riepilogativa più grande del corso: nessuna teoria nuova, raccoglie in un'unica batteria da 40 esercizi tutti gli argomenti trattati (HTML+JS/DOM, CSV, AJAX/fetch, Cache Remota, Canvas), organizzati per argomento invece che in un unico blocco misto come nella lezione 13 (ripasso finale).

## Struttura

- `es-ric/`, `es-nic/`, `es-fede/` — tre copie identiche (una per studente, verificate byte-per-byte con `diff -rq`), ognuna con 4 sottocartelle per argomento:
  - **01-html-js** — 10 esercizi in ordine di difficoltà crescente: saluto con controllo, pari/dispari, contatore con limiti, calcolatrice, lista dinamica, filtro in tempo reale, tabella studenti, media in tempo reale, PIN a 4 cifre, gestione prodotti con ricerca e totale. `index.html` + `script.js`, entrambi vuoti a parte la consegna commentata in cima (nessun id o scaffolding pre-fornito).
  - **02-csv** — 10 esercizi Node.js: parsing base, filtro su CSV, CSV con calcolo, media da CSV, CSV risultato semplice, dizionario da CSV, CSV con template.replace, classifica da CSV, materie insufficienti, CSV completo (media+status+insufficienze). Solo `esercizio.js`, con il CSV di partenza già dichiarato come stringa (il resto vuoto).
  - **03-ajax-cache** — 10 esercizi: fetch GET semplice (jsonplaceholder/users), URL template su posts?userId, dati annidati (address.city), meteo Open-Meteo con doppio `.replace()`, CocktailDB con gestione `drinks: null`, cache remota SET, cache remota GET, SET+GET uniti, lista studenti persistente in cache, film di tendenza TMDB con preferiti salvati in cache. `index.html` + `script.js` + `prova.js` (per testare la fetch con Node prima di scriverla nel browser), tutti vuoti a parte la consegna.
  - **04-canvas** — 10 esercizi: rettangoli colorati, semaforo, testo centrato, casa, bandiera italiana, assi cartesiani, scacchiera 8x8, grafico a barre orizzontali, orologio con lancette da `new Date()`, istogramma voti completo (dizionario voto→quantità, assi tratteggiati, scritta verticale con save/translate/rotate/restore). `index.html` + `script.js` vuoti a parte la consegna.
  - Ogni sottocartella di argomento ha una `soluzioni/sol-01` … `sol-10` con la soluzione completa e commentata (stessa struttura di file dell'esercizio corrispondente).
- `istruzioni.txt` — istruzioni per i 3 studenti: come aprire ogni tipo di esercizio (browser per HTML+JS/Canvas/AJAX, Node per CSV, `prova.js` per testare le fetch prima del browser), ordine consigliato, uso di F12/Console, un consiglio per ciascuno dei 4 argomenti.
- `riassunto.md` — questo file, da aggiornare ogni volta che si lavora su questa lezione.

## Note tecniche

- Token Cache Remota riusato dalle lezioni 11/12/13 (`c6498f6b-ccb2-4ad5-9375-8ce35d3498bc`, header `key`, `typeof data.result === "string"` per distinguere chiave trovata/non trovata) — **riverificato dal vivo nel browser in questa sessione** con un round-trip SET+GET reale (sol-08), risposta corretta.
- Chiave API TMDB riusata dalla lezione 12 (`fc652c0e93a32ff7a80e5eadc0d9fb61`, passata come parametro `?api_key=` nell'URL, non come header Bearer) — **riverificata dal vivo** in questa sessione: `sol-10` carica correttamente i film di tendenza e il pulsante "Salva preferito" completa senza errori in console.
- Tutti gli `esercizio.js` delle soluzioni CSV eseguiti realmente con `node` (non solo `--check`): tutti e 10 producono l'output atteso.
- Tutti i file `.js` (esercizi vuoti e soluzioni, 4 argomenti) verificati con `node --check`: nessun errore di sintassi.
- Una soluzione canvas (`04-canvas/soluzioni/sol-10`, istogramma completo) e due soluzioni AJAX (`sol-01`, `sol-08`) verificate visivamente nel browser: rendering corretto, nessun errore in console.
- Bandiera italiana (`01-...` no, `04-canvas/es-05`): la consegna chiede testo bianco centrato che cadrebbe sulla striscia centrale bianca (poco leggibile); la soluzione aggiunge un `strokeText` nero come contorno per renderlo leggibile comunque, con commento che spiega la scelta.
- Contenuti ispirati a cipiaceinfo.it/docs/esercizi/esercizi-javascript/esercizi-di-manipolazione-dati-in-javascript/ (array/dizionari/CSV), /docs/programmazione/javascript/esercizi-ajax/ (rassegna generale di servizi AJAX, usata solo come ispirazione sul tipo di API) e /docs/strumenti/strumenti-web/canvas/ (tecniche base di canvas); tutte e tre lette all'inizio della sessione, nessuna copiata 1:1 — gli esercizi specifici sono stati forniti direttamente dall'utente nel prompt.
