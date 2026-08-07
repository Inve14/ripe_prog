# Lezione 12 — Esercitazione AJAX/fetch

Esercitazione pratica sui concetti AJAX visti in lezione 11 (fetch, async/await, GET/POST, URL template, cache remota), nessuna teoria nuova.

## File creati

- `esercizi/es-01` … `es-09` — 9 esercizi in ordine di difficoltà crescente, ognuno con `index.html` (Bootstrap, consegna commentata in cima, JS già collegato) e `script.js` (consegna commentata + querySelector/URL template già scritti, solo fetch e render da completare).
- `soluzioni/sol-01` … `sol-09` — stessa struttura, con `script.js` completo e commentato.
- `ripasso-ajax.js` — ripasso eseguibile con Node.js dei concetti chiave (schema fetch→await→dati, GET vs POST, URL template, cache remota SET/GET); testato con `node ripasso-ajax.js`, tutte le fetch verso le API reali funzionano.
- `discorso-lezione12.txt` — spiegazione orale ~420 parole: ripasso veloce fetch/async/GET-POST, poi due righe per ciascun esercizio.
- `esempi-cache-remota/` — cartella di approfondimento solo sulla Cache Remota (aggiunta 2026-08-07), pensata per ripasso/recupero: `spiegazione-cache-remota.md` (spiegazione scritta in linguaggio semplice, con l'analogia dell'"armadietto condiviso", la distinzione TOKEN/chiave-del-dato, il perché del doppio `JSON.stringify`, come riconoscere chiave trovata/non trovata) + 3 esempi progressivi commentati riga per riga: `esempio-01-set/` (solo salvataggio), `esempio-02-get/` (sola lettura, con focus sul controllo `typeof data.result`), `esempio-03-tutto-insieme/` (un click che salva e rilegge subito di seguito, per dimostrare che il giro funziona davvero).
- `riassunto.md` — questo file.

### Esercizi (in breve)

1. **es-01** — fetch GET semplice: pulsante "Carica utenti" su jsonplaceholder, tabella id/nome/email.
2. **es-02** — URL template: input ID + `.replace()` per cercare i post di un utente, card con titolo/corpo.
3. **es-03** — Meteo: due input lat/lon, due `.replace()` concatenati su Open-Meteo, temperatura e vento.
4. **es-04** — Cache remota SET: form chiave/valore, POST su `/cache/set` con token nell'header `key`.
5. **es-05** — Cache remota GET: POST su `/cache/get`, gestione "chiave non trovata" controllando `typeof data.result` (stringa se trovata, oggetto se assente).
6. **es-06** — es-04 + es-05 uniti in una pagina con due form.
7. **es-07** — CocktailDB: ricerca per nome (`search.php?s=`), tabella con immagine, gestione `drinks: null` con `|| []`.
8. **es-08** — Film di tendenza TMDB: card con poster e voto (vedi nota sotto sulla chiave API).
9. **es-09** — Progetto completo: film di tendenza + pulsante "Salva nei preferiti" per card, lista preferiti caricata dalla cache remota al caricamento pagina, pattern `render()` completo.

## Concetti chiave

1. **Schema fisso di ogni fetch**: `fetch(url)` → `await response.json()` → uso i dati. Due `await` sempre, uno per la richiesta, uno per leggerne il contenuto.
2. **GET legge, POST manda**: GET basta l'URL; POST richiede `method: "POST"`, `headers` e `body` (sempre una stringa, quindi `JSON.stringify`).
3. **URL template con `.replace()`**: uno o più segnaposto (es. `%ID`, `%LAT`/`%LON`) sostituiti prima della fetch; con più parametri si concatenano più `.replace()`.
4. **Gestione dei casi "vuoti"**: `data.drinks || []` per non iterare su `null`; `typeof data.result === "string"` per distinguere una cache-hit (stringa JSON) da una cache-miss (oggetto di errore) — più robusto del confronto testuale con "ok"/"not found" usato in lezione 11.
5. **Pattern `render()`**: soprattutto in es-09, la lista dei preferiti viene sempre ridisegnata da zero a partire dall'array in memoria, non aggiornata pezzo per pezzo.

## Note tecniche

- **Chiave API TMDB (es-08, es-09)**: la consegna originale indicava di passare la chiave `fc652c0e93a32ff7a80e5eadc0d9fb61` nell'header `Authorization` come Bearer token. Verificato via curl che questa chiave è una chiave TMDB "v3" (32 caratteri esadecimali): come Bearer header restituisce sempre `401 Invalid API key`, mentre funziona correttamente passata come parametro `?api_key=...` nell'URL (l'header Authorization Bearer è riservato ai token "v4", stringhe molto più lunghe). Esercizi e soluzioni usano quindi `api_key` in query string, con nota esplicita nei commenti del codice — stessa logica già seguita in lezione 11 per la cache remota (si segue la struttura verificata, non quella descritta a priori).
- **Cache remota — distinzione hit/miss**: testato via curl che una chiave esistente restituisce `{"result":"\"valore\""}` (stringa), mentre una chiave assente restituisce `{"result":{"message":"Does not exist","key":"..."}}` (oggetto). Da qui il controllo `typeof data.result === "string"` usato in es-05, es-06 e es-09.
- **es-09**: usa una chiave fissa `"preferiti-lezione12"` nella cache remota per salvare l'intero array dei preferiti (non singole voci), per evitare collisioni con le chiavi libere usate in es-04/05/06.
- Contenuti ispirati a cipiaceinfo.it/docs/programmazione/javascript/esercizi-ajax/ (rassegna di esercizi AJAX più ampia, usata solo come ispirazione generale sul tipo di API/esercizi, non copiata 1:1) e /docs/programmazione/javascript/ajax/ (stessa pagina di riferimento della lezione 11).
