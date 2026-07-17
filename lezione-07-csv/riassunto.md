# Lezione 07 — CSV in JavaScript

Prima lezione dedicata al parsing e alla generazione di dati CSV in JavaScript, argomento annunciato già nella lezione 05. Contenuti tratti da cipiaceinfo.it/docs/programmazione/javascript/manipolazione-dati/.

## Argomenti trattati

- Cos'è un CSV e come si presenta (header + righe separate da virgola)
- Pulizia della stringa: `trim()`, `replaceAll(' ', '')`
- Parsing: `split('\n')`, `shift()` per l'header, `split(',')` sull'header
- Costruzione di un array di dizionari con `map()` + `forEach()` sulle colonne
- Accesso ai dati con la notazione a punto
- Generazione di un CSV risultato con `map()` + `join('\n')` e con `Object.values()`
- `template.replace()` come alternativa per costruire righe di output non-CSV

## File creati

- `teoria-csv.js` — appunti commentati eseguibili con Node.js, 9 step in ordine progressivo (dalla definizione di CSV fino a `template.replace()`), ognuno con spiegazione commentata seguita da codice e `console.log` per vedere il risultato.
- `esercizio-csv-consegna.js` — consegna commentata + CSV pronto (5 studenti, nome/cognome/voti di 5 materie), nessuna soluzione.
- `esercizio-csv-soluzione.js` — soluzione completa e commentata: parsing con conversione dei voti in numero, calcolo media, status promosso/bocciato, materie insufficienti, CSV risultato stampato con `console.log`.
- `appunti-csv.pdf` + `genera_pdf.py` — PDF generato con Python/reportlab (stesso stile di lezione-05: titoli blu scuro, blocchi codice su sfondo grigio, A4); rilanciare lo script se si aggiorna `teoria-csv.js`.

## Concetti chiave

1. **Pulizia prima del parsing** — `trim()` e `replaceAll(' ', '')` evitano che spazi e newline spurii rompano il parsing successivo.
2. **`shift()`** — rimuove E restituisce il primo elemento di un array (modifica l'originale): usato per separare l'header dalle righe dati.
3. **Le colonne come chiavi dinamiche** — l'header diventa l'insieme delle chiavi del dizionario tramite `forEach` con indice, invece di scriverle a mano.
4. **I valori letti da un CSV sono sempre stringhe** — vanno convertiti esplicitamente con `Number()` prima di fare calcoli o confronti numerici (altrimenti es. `"10" < "6"` è vero come stringa ma sbagliato come numero).
5. **Andata e ritorno** — lo stesso schema (header + righe) serve sia per leggere un CSV sia per generarne uno nuovo da un array di dizionari.

## Note per la prossima sessione

- Prossimo argomento previsto: introduzione al DOM (annunciato nel discorso della lezione 05).
