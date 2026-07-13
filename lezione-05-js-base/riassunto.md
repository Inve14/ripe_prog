# Lezione 05 — JavaScript base

Prima lezione di JavaScript vero e proprio: sintassi di base, controllo del flusso, funzioni, array e dizionari (oggetti). Contenuti tratti dalle pagine cipiaceinfo.it "Introduzione a Javascript" e "Manipolazione dati".

## Argomenti trattati

- Variabili: `let` vs `const`
- Tipi di dato: stringa, numero, booleano, `undefined`, `null`
- Operatori aritmetici, di confronto (`===`, `!==`), logici (`&&`, `||`, `!`)
- `if`/`else`
- Cicli `for` e `while`
- Funzioni: dichiarazione classica vs arrow function
- Array: creazione, accesso per indice
- Metodi array: `forEach`, `map`, `filter`, `find`, `sort`, `reduce`
- Dizionari (oggetti): creazione, accesso con punto e con parentesi quadre
- `for...in` per scorrere un dizionario
- `Object.keys()` e `Object.values()`
- Array di dizionari (esempio: registro classe/studenti)

## File creati

- `teoria-js-base.js` — appunti commentati eseguibili con Node.js (`node teoria-js-base.js`), un blocco per argomento con spiegazione + esempio con `console.log`.
- `esercizi-js-base.js` — 9 esercizi (4 facili, 4 medi, 1 completo) eseguibili con Node.js, soluzioni commentate nascoste sotto ai puntini.
- `appunti-js-base.pdf` — versione PDF stampabile degli appunti, A4, titoli blu scuro, blocchi di codice su sfondo grigio in Courier. Generato con `genera_pdf.py` (Python + reportlab).
- `genera_pdf.py` — script Python che genera il PDF dai contenuti; da rilanciare se si aggiornano gli appunti.
- `discorso-lezione5.txt` — testo colloquiale per la spiegazione orale in classe (~950 parole).
- `riassunto.md` — questo file.

## Concetti chiave

1. **`const` di default, `let` solo se serve riassegnare** — riduce errori e rende il codice più chiaro su cosa può cambiare.
2. **`===`/`!==` sempre, mai `==`/`!=`** — evita conversioni di tipo automatiche e risultati sorprendenti.
3. **`for` quando sai quante iterazioni servono, `while` quando dipende da una condizione** — scelta guidata dal problema, non dallo stile.
4. **I metodi array (`map`, `filter`, `reduce`, ecc.) non modificano l'array originale** (tranne `sort`, che va usato con cautela) — restituiscono un nuovo array o un valore.
5. **Un dizionario ha chiavi con nome, un array ha posizioni numeriche** — un array di dizionari è la struttura standard per rappresentare dati tabellari (es. elenco studenti) in JS.

## Note per la prossima sessione

- Prossimi argomenti annunciati nel discorso: CSV (parsing riga per riga, conversione in array di dizionari) e DOM (collegare JS a HTML).
- Se si aggiorna `teoria-js-base.js`, ricordarsi di rilanciare `python3 genera_pdf.py` per rigenerare il PDF allineato.
