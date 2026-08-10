# Lezione 13 — Esercizi finali

Ultima lezione del corso: 12 esercizi progressivi che ripassano tutto (HTML + JS/DOM
+ AJAX + Cache Remota), nessuna teoria nuova. A differenza di tutte le esercitazioni
precedenti, qui `index.html` e `script.js` sono file COMPLETAMENTE vuoti (solo
DOCTYPE/html/head/body e la consegna come commento in cima): lo studente costruisce
tutto da zero, HTML/Bootstrap compresi, senza nessuno scheletro di partenza.

## Esercizi creati

- `esercizi/es-01` … `es-12` — 12 esercizi in ordine di difficoltà crescente. Ognuno ha
  `index.html` (DOCTYPE/html/head/body vuoto, consegna come commento HTML in cima) e
  `script.js` (vuoto, stessa consegna come commento JS in cima). Nessun querySelector
  o binding pre-scritto, a differenza di lezione-10 e lezione-12.
- `soluzioni/sol-01` … `sol-12` — stessa struttura, con `index.html` (Bootstrap via CDN,
  commentato) e `script.js` (completo e commentato riga per riga) per ognuno.

### Esercizi (in breve)

1. **es-01** — Saluto: input + pulsante, "Ciao [nome]!" in un div. querySelector/.value/onclick/innerHTML.
2. **es-02** — Pari o dispari: parseInt, if/else, operatore %.
3. **es-03** — Contatore con limite 0-10: variabile di stato esterna, render().
4. **es-04** — Lista dinamica: array, innerHTML +=, Aggiungi/Svuota, render().
5. **es-05** — Calcolatrice: 4 operazioni, parseFloat, isNaN, divisione per zero.
6. **es-06** — Tabella studenti: array di dizionari, render() completo, badge Promosso/Bocciato, template con .replace().
7. **es-07** — Filtro in tempo reale: array fisso nel JS, oninput, filter, includes.
8. **es-08** — Fetch utenti: prima AJAX, GET semplice su jsonplaceholder, tabella id/nome/email.
9. **es-09** — Meteo: URL template con due `.replace()` concatenati (lat/lon), dati annidati `current_weather`.
10. **es-10** — CocktailDB: URL template, gestione `drinks: null` con `||`.
11. **es-11** — Cache Remota SET+GET in un solo esercizio: due form separati, token nell'header `key`, `typeof data.result === "string"` per il caso "chiave non trovata".
12. **es-12** — Progetto finale: lista preferiti con array di dizionari, render(), salvataggio automatico in cache ad ogni aggiunta, caricamento automatico all'apertura pagina (JSON.stringify/parse), Svuota che pulisce anche la cache.

## File creati

- `esercizi/` e `soluzioni/` come sopra.
- `istruzioni.txt` — istruzioni per lo studente: come aprire gli esercizi nel browser (non Node), ordine consigliato, come usare F12/Console per debug, un consiglio per ciascuno dei 3 gruppi (HTML+JS base, AJAX, Cache Remota).
- `riassunto.md` — questo file.

## Concetti chiave

1. **Nessuno scaffolding**: a differenza di lezione-10/12, qui lo studente scrive anche l'HTML e collega Bootstrap da solo — è il primo esercizio "davvero da zero" del corso, pensato come sintesi finale.
2. **Consegna come commento, non come testo separato**: sia `index.html` che `script.js` portano la stessa consegna in testa, così lo studente ha sempre sotto gli occhi cosa deve fare anche mentre scrive codice.
3. **Le soluzioni riprendono tutti i pattern già consolidati**: querySelector fuori dagli handler, `.value` sempre letto dentro l'evento, `render()` che ricostruisce tutto da zero, URL template con `.replace()`, `typeof data.result === "string"` per la cache remota (pattern confermato in lezione 11/12, non quello ingenuo con confronto testuale).
4. **es-12 è la sintesi di tutto il corso**: unisce array di dizionari, render(), fetch POST set/get, JSON.stringify/parse e caricamento automatico all'avvio — stesso schema di lezione-12/es-09, ma costruito interamente dallo studente.

## Note tecniche

- Token Cache Remota (`c6498f6b-ccb2-4ad5-9375-8ce35d3498bc`) e struttura della richiesta: stesso token già usato e verificato in lezione 11/12 (header `key` = token, `value` = `JSON.stringify` del dato). Ri-verificato via curl per questa sessione: `set` risponde `{"result":"Ok"}`, `get` risponde `{"result":"\"ciao\""}` sulla chiave di test.
- Tutti i `script.js` delle soluzioni sono stati validati con `node --check` (solo controllo sintattico, non esecuzione, dato che usano `fetch`/DOM non disponibili in Node puro): nessun errore.
- Consegne ES-01…07 scritte a mano seguendo lo stile delle lezioni precedenti (nessuna corrispondenza diretta con esercizi del sito del prof, che per l'area "manipolazione dati" tratta solo array/dizionari/CSV, non DOM). Consegne ES-08…10 ispirate a `cipiaceinfo.it/docs/programmazione/javascript/esercizi-ajax/` (letta per la sessione: elenco di esercizi AJAX con/senza chiave API, cache remota — usata solo come ispirazione generale sul tipo di API, non copiata 1:1, coerente con l'approccio già seguito in lezione 12). Pagina `esercizi-di-manipolazione-dati-in-javascript/` letta anch'essa ma riguarda esercizi Node.js puri su array/dizionari/CSV già coperti da lezione-06/07/08, quindi non riusata qui.

## Note per la prossima sessione

- Questa è l'ultima lezione pianificata del corso (esame di riparazione in vista): se serve altro materiale, valutare un ripasso generale trasversale o simulazioni d'esame a tempo, non nuovi argomenti.
