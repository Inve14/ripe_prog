# Lezione 09 — HTML + JavaScript (introduzione al DOM)

Prima lezione in cui JavaScript viene collegato davvero a una pagina HTML (finora era stato usato solo eseguibile con Node.js). Si introduce il DOM, il modo per leggere e scrivere elementi della pagina, e il pattern Evento-Azione-Reazione (EAR) come schema generale per organizzare il codice.

## Argomenti trattati

- Il DOM e l'oggetto `document` come punto di accesso alla pagina
- `document.querySelector()` per trovare un elemento tramite il suo `id` (il "gancio" scritto in HTML)
- `.value` per leggere il contenuto di un input, sempre dentro la funzione collegata all'evento, mai fuori
- `innerHTML` (interpreta HTML) vs `innerText` (solo testo) per scrivere nella pagina
- Gestione eventi assegnando funzioni a `elemento.onclick` / `form.onsubmit` (niente `onclick` come attributo HTML)
- Il pattern Evento → Azione → Reazione (EAR): separare "cosa succede", "come cambiano i dati" e "come si aggiorna la pagina"
- Il pattern `render()`: funzione che ricostruisce un pezzo di pagina leggendo un array di dati, così l'HTML resta sempre coerente con lo stato
- `parseFloat` / `isNaN` per validare i dati letti dagli input numerici

## Esempi creati

- `esempio-01-saluto/` — saluto personalizzato: primo contatto con querySelector, `.value` e `innerHTML`, un solo evento.
- `esempio-02-contatore/` — contatore con Aggiungi/Azzera: introduce l'idea di variabile "di stato" esterna alla funzione, che persiste tra un click e l'altro.
- `esempio-03-lista/` — lista della spesa: primo uso di array + `render()`, con `innerHTML +=` per ricostruire la lista un elemento alla volta.
- `esempio-04-calcolatrice/` — calcolatrice a 4 operazioni: allena su `parseFloat`, `isNaN` e `if/else`, senza nuove tecniche sul DOM.
- `esempio-05-tabella-studenti/` — registro con tabella Bootstrap e badge Promosso/Bocciato: array di dizionari, `render()` che ricrea l'intera tabella, pattern EAR al completo (submit del form incluso).

## File creati

- `discorso-lezione9.txt` — spiegazione orale ~780 parole: querySelector e id come gancio, `.value` dentro l'onclick, `innerHTML`/`innerText`, pattern EAR, pattern `render()`, presentazione dei 5 esempi.
- `mini-pratica-consegna.html` + `.js` — esercizio da fare in aula: registro studenti con lista e media in tempo reale; il file `.js` contiene solo la consegna commentata, nessun codice di partenza.
- `mini-pratica-soluzione.html` + `.js` — stessa pagina con la soluzione completa e commentata (uso di `reduce` per la media).
- `riassunto.md` — questo file, da aggiornare ogni volta che si lavora su questa lezione.

## Concetti chiave

1. **querySelector + id** — l'id in HTML è un "gancio": `document.querySelector("#id")` recupera esattamente quell'elemento e nessun altro.
2. **`.value` va letto dentro l'evento** — leggere il valore di un input fuori dalla funzione onclick/onsubmit prende un valore vecchio o vuoto; va letto nel momento in cui l'evento scatta.
3. **I dati veri stanno in variabili/array JS, non nell'HTML** — l'HTML è solo la "fotografia" dei dati in un dato istante, non la fonte di verità.
4. **Pattern EAR (Evento → Azione → Reazione)** — ogni interazione segue questi tre passi: qualcosa accade, i dati vengono aggiornati, la pagina viene ridisegnata di conseguenza.
5. **Pattern `render()`** — ricostruire da zero un pezzo di pagina leggendo l'array dei dati garantisce che la pagina resti sempre coerente, invece di aggiungere/togliere pezzi a mano con `appendChild`.

## Note per la prossima sessione

- Verificare che gli studenti abbiano completato la mini pratica (registro con media in tempo reale) prima di introdurre argomenti nuovi.
- Prossimo argomento naturale: form più complessi, validazione, o localStorage per rendere persistenti i dati tra un ricaricamento e l'altro della pagina.
