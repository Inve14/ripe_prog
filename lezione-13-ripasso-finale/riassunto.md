# Lezione 14 — Ripasso finale

Lezione riepilogativa senza teoria nuova: raccoglie in un unico posto tutti gli argomenti visti dalla lezione 01 alla lezione 12 (HTML/CSS, Bootstrap, JS base, CSV, DOM/pattern EAR/render, AJAX/fetch, cache remota), sotto forma di foglio di ripasso rapido e di una batteria di 20 esercizi finali in ordine di difficoltà crescente.

## Argomenti coperti nel ripasso

- HTML+JS: collegamento script, querySelector/id, `.value` nell'onclick, `innerHTML` vs `innerText`, pattern EAR, pattern `render()`, `template.replace()`
- Array e dizionari: `forEach`/`map`/`filter`/`find`/`sort`/`reduce`, `for...in`, `Object.keys()`/`Object.values()`
- CSV: le 4 righe di parsing (`trim`, `replaceAll`, `split`, `shift`), costruzione array di dizionari, generazione CSV risultato con `map`+`join`
- AJAX e fetch: schema fetch→await→dati, GET vs POST, URL template con `.replace()`, struttura di una fetch POST
- Cache remota (`ws.cipiaceinfo.it`): SET/GET, header `key` per il token, doppio `JSON.stringify`/`JSON.parse`

## File creati

- `ripasso-rapido.md` — foglio di ripasso veloce (non un manuale), un blocco per argomento con bullet + esempio minimo di codice, 20 punti in tutto.
- `ripasso-rapido.pdf` + `genera_pdf.py` — stessa struttura del `.md`, generato con Python/reportlab (titoli blu, sezioni per macro-argomento, blocchi di codice Courier su sfondo grigio, A4); rilanciare lo script se si aggiorna il markdown.
- `es-ric/`, `es-nic/`, `es-fede/` — tre copie identiche (una per studente) di 20 esercizi finali, `es-01`...`es-20` in ordine di difficoltà crescente:
  - **es-01 → es-05** (JS base, Node.js): variabili/stringhe, array+filter+reduce, filter+map concatenati, dizionario con for...in/Object.keys/values, reduce avanzato (media/max/min). Solo `esercizio.js`, con i dati di partenza già dichiarati dove richiesto dalla consegna.
  - **es-06 → es-11** (HTML+JS, DOM): saluto dinamico, contatore, lista con svuota, calcolatrice, tabella studenti, filtro in tempo reale. `index.html` + `script.js`, entrambi completamente vuoti a parte la consegna commentata: lo studente scrive da zero sia la struttura HTML sia il JS (nessun id o scaffolding pre-fornito, a differenza degli esercizi delle lezioni precedenti).
  - **es-12 → es-15** (CSV, Node.js): parsing base, CSV con calcoli (media), generazione CSV risultato, tabella HTML da CSV con `template.replace()`. Solo `esercizio.js`, con il CSV di partenza già dichiarato come stringa.
  - **es-16 → es-18** (AJAX): fetch GET su jsonplaceholder, URL template su jsonplaceholder (posts per userId), meteo Open-Meteo con doppio `.replace()`. `index.html` + `script.js` + `prova.js` (per testare la fetch con Node prima di metterla nel browser).
  - **es-19 → es-20** (cache remota): salva/leggi chiave-valore, lista studenti persistente (salvata/ricaricata dalla cache a ogni modifica). Stessa struttura a 3 file di es-16/18; il token e gli URL della cache remota sono riportati nella consegna commentata (non nel codice), da usare così come sono.
- `riassunto.md` — questo file, da aggiornare ogni volta che si lavora su questa lezione.

## Note tecniche

- Per gli esercizi es-06/es-11, es-16/es-20 la consegna esplicitamente richiede file "vuoti": a differenza delle esercitazioni precedenti (es. lezione 12), qui non vengono forniti `querySelector` pre-scritti né id già presenti nell'HTML — lo studente deve costruire tutto da zero, scegliendo lui i propri id. È una scelta intenzionale per un ripasso finale, per verificare l'autonomia completa.
- Token e URL della Cache Remota (`https://ws.cipiaceinfo.it/cache/set` e `/cache/get`, token `c6498f6b-ccb2-4ad5-9375-8ce35d3498bc`) riusano quelli già verificati e documentati nelle lezioni 11 e 12 (header personalizzato `key` per il token, `key`/`value` nel body, doppio `JSON.stringify`, `typeof data.result` per distinguere chiave trovata/non trovata).
- Sintassi di tutti gli `esercizio.js` (es-01/05, es-12/15) verificata con `node -c`, nessun errore.
- Le tre cartelle `es-ric`/`es-nic`/`es-fede` sono generate da un unico script Python (non incluso nella cartella lezione, tenuto solo in locale) per garantirne l'identicità byte-per-byte; verificata con `diff -rq` che le tre cartelle sono effettivamente identiche.
