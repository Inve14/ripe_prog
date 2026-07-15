# Lezione 06 — Esercitazione JavaScript base

Sessione di esercitazione pratica, senza teoria nuova: consolida quanto visto nella lezione 05 (variabili, funzioni, array, dizionari, metodi array) con 9 esercizi su tre livelli di difficoltà. Spunto per gli esercizi preso dalla pagina cipiaceinfo.it "Esercizi di manipolazione dati in JavaScript".

## Argomenti trattati

- Ripasso pratico dei metodi array: `forEach`, `map`, `filter`, `find`, `sort`, `reduce`
- Cicli `for` e `for...in`
- Arrow function con `return`
- `Math.max` con spread operator
- Concatenazione di metodi (es. `filter` + `map`)
- Formattazione numeri con `toFixed()`
- Esercizio riepilogativo su array di dizionari (studenti con voti multi-materia)

## File creati

- `esercizi-js-base.js` — 9 esercizi (4 facili con suggerimento sul metodo, 4 medi con solo un indizio, 1 completo senza aiuti), eseguibile con Node.js, con dati di esempio pronti e spazio vuoto per scrivere la soluzione.
- `soluzioni-js-base.js` — soluzioni complete e commentate dei 9 esercizi, ognuna con l'indicazione del metodo chiave usato e la motivazione della scelta; eseguibile con Node.js.
- `discorso-lezione6.txt` — testo per l'introduzione orale della sessione: ripasso lampo dei metodi array e presentazione di ogni esercizio in due righe, tono incoraggiante.
- `riassunto.md` — questo file, da aggiornare ogni volta che si lavora su questa lezione.

## Concetti chiave

1. **`forEach`** — esegue un'azione per ogni elemento, non restituisce nulla di nuovo (utile solo per side-effect come `console.log`).
2. **`map`** — trasforma ogni elemento e restituisce un nuovo array della stessa lunghezza; da usare quando serve il risultato per un passo successivo.
3. **`filter`** — restituisce un nuovo array più corto, con solo gli elementi che rispettano una condizione.
4. **`find`** — come `filter` ma si ferma al primo elemento trovato e restituisce quello, non un array.
5. **`sort`** — riordina l'array secondo il criterio dato; da usare con cautela perché modifica l'array originale.
6. **`reduce`** — riduce l'intero array a un unico valore accumulato (somma, media, massimo, ecc.); è il metodo più flessibile e spesso il più difficile da padroneggiare.
7. **Concatenare metodi** (es. `array.filter(...).map(...)`) è una tecnica molto comune: ogni metodo fa un passo della trasformazione, il risultato passa al successivo.

## Note per la prossima sessione

- Verificare che gli studenti abbiano completato almeno i livelli facile e medio prima di passare a nuovi argomenti.
- Prossimo argomento previsto (annunciato nel discorso della lezione 05): parsing di CSV e introduzione al DOM.
