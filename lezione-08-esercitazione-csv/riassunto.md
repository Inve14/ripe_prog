# Lezione 08 — Esercitazione CSV

Lezione interamente pratica, dedicata al ripasso e alla consolidazione di quanto visto nella lezione 07 (parsing e generazione di CSV in JavaScript), tramite 9 esercizi divisi per difficoltà. Spunti presi da cipiaceinfo.it/docs/esercizi/esercizi-javascript/esercizi-di-manipolazione-dati-in-javascript/.

## Argomenti trattati

- Ripasso rapido delle 4 righe fondamentali del parsing (`trim`, `replaceAll`, `split`, `shift`)
- Ripasso della costruzione di un array di dizionari da un CSV
- Ripasso della generazione di un CSV risultato con `map` + `join`
- Ripasso del pattern `template.replace()`
- 9 esercizi pratici in 3 livelli di difficoltà: facile (con suggerimento), medio (con indizio minimo), completo (senza aiuto)
- Varianti nuove rispetto alla lezione 07: raggruppamento in dizionario (`categoria -> [prodotti]`), ordinamento con `sort((a,b) => b - a)`, conversione di celle testuali in booleani (`"true"/"false"`)

## File creati

- `ripasso-csv.js` — promemoria rapido eseguibile con Node.js, non una ripetizione della teoria: 4 punti chiave (parsing base, array di dizionari, CSV risultato, template.replace), ognuno con un esempio breve e un `console.log`.
- `esercizi-csv-consegna.js` — 9 esercizi con consegna commentata e dati CSV già pronti, nessuna soluzione: 4 facili (con suggerimento), 4 medi (con indizio), 1 completo (senza aiuto).
- `esercizi-csv-soluzioni.js` — soluzioni complete e commentate dei 9 esercizi, con nota su qual è il passaggio più importante di ciascuna e perché.
- `discorso-lezione8.txt` — traccia orale per introdurre la lezione: ripasso veloce + presentazione di ogni esercizio.
- `riassunto.md` — questo file, da aggiornare a ogni sessione su questa lezione.

## Concetti chiave

1. **I dati da un CSV sono sempre stringhe** — vanno convertiti esplicitamente (`Number()`, `parseInt()`, o confronto `=== "true"` per i booleani) prima di fare calcoli, confronti o logica condizionale.
2. **`map()` per proiettare, `filter()` per selezionare** — estrarre una singola colonna o tenere solo alcuni elementi sono le due operazioni più ricorrenti sull'array di dizionari ottenuto dal parsing.
3. **Raggruppare in un dizionario** — per raggruppare righe per una chiave (es. categoria), si parte da un dizionario vuoto e si controlla ad ogni riga se la chiave esiste già, creandola con un array vuoto se necessario prima di fare `push`.
4. **Ordinare con `sort()`** — `sort((a, b) => b - a)` ordina in modo decrescente; `sort((a, b) => a - b)` in modo crescente. Va applicato dopo aver convertito i valori in numero.
5. **Celle con più valori dentro** — quando una singola colonna CSV deve contenere più informazioni (es. una lista di ore), si usa un separatore diverso dalla virgola (es. `;`) dentro la cella, per non confondere il parser che divide le colonne con `,`.

## Note per la prossima sessione

- Prossimo argomento previsto: introduzione al DOM (annunciato nel discorso della lezione 05, confermato nella nota di fine lezione 07).
