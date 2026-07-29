# Lezione 10 — Esercitazione HTML + JavaScript

Esercitazione pratica sul collegamento JavaScript-DOM introdotto nella lezione 09: dieci esercizi in ordine di difficoltà crescente, ognuno con una cartella "esercizi" (HTML pronto, JS con querySelector già scritti e consegna commentata da completare) e una cartella "soluzioni" (stessa struttura, codice completo e commentato).

## Esercizi creati

- `es-01` / `sol-01` — Saluto personalizzato: input + pulsante, mostra "Ciao [nome]!" in un div. Primo contatto con querySelector, .value, onclick, innerHTML.
- `es-02` / `sol-02` — Cambia colore: tre pulsanti cambiano il colore di sfondo di un div. Concetto: style.backgroundColor.
- `es-03` / `sol-03` — Contatore: pulsanti "+"/"-", non scende sotto 0. Concetto: variabile di stato esterna, if per il limite prima di decrementare.
- `es-04` / `sol-04` — Caratteri in tempo reale: textarea + conteggio caratteri aggiornato ad ogni tasto. Concetto: oninput, .value.length.
- `es-05` / `sol-05` — Calcolatrice semplice: due input numerici, select operazione, pulsante Calcola. Concetto: parseFloat, isNaN, if/else sull'operazione.
- `es-06` / `sol-06` — Lista della spesa: input + Aggiungi/Svuota su una `<ul>`. Primo esercizio vero con array + render().
- `es-07` / `sol-07` — Maggiore e minore: quattro input numerici, trova max e min. Concetto: array + sort, valori vuoti gestiti con `|| 0`.
- `es-08` / `sol-08` — Tabella studenti: form nome/voto, righe con badge Promosso/Bocciato, Svuota. Concetto: array di dizionari, render() completo, template con `.replace()`.
- `es-09` / `sol-09` — Simulatore PIN: 4 input cifra, Imposta PIN poi Verifica con 3 tentativi, blocco/sblocco. Primo esercizio multi-fase: variabili di stato, disabilitare input.
- `es-10` / `sol-10` — Gestione prodotti con ricerca: form nome/prezzo, tabella, ricerca in tempo reale che filtra e ricalcola il totale. Esercizio più completo: filter + render() con dati filtrati.

## File creati

- `esercizi/es-01/` … `es-10/` — 10 sottocartelle, ognuna con `index.html` (struttura Bootstrap commentata, consegna in cima, JS già collegato) e `script.js` (consegna commentata + querySelector già pronti, corpo delle funzioni da scrivere).
- `soluzioni/sol-01/` … `sol-10/` — stessa struttura, con `script.js` completo e commentato.
- `discorso-lezione10.txt` — spiegazione orale ~470 parole: ripasso di EAR e render(), poi due righe per ciascuno dei 10 esercizi con obiettivo e concetto centrale.
- `riassunto.md` — questo file, da aggiornare ogni volta che si lavora su questa lezione.

## Concetti chiave

1. **Pattern EAR (Evento → Azione → Reazione)** — ogni interazione: qualcosa accade, i dati JS vengono aggiornati, la pagina viene ridisegnata di conseguenza.
2. **Pattern `render()`** — ricostruire da zero un pezzo di pagina leggendo l'array dei dati, invece di aggiungere/togliere pezzi a mano: garantisce che la pagina resti sempre coerente con i dati (usato in es-06, 08, 09, 10).
3. **`.value` sempre dentro l'evento** — leggere un input fuori dalla funzione onclick/oninput/onsubmit dà un valore vecchio o vuoto.
4. **Variabili di stato esterne alle funzioni** — un contatore, un PIN salvato, i tentativi rimasti: devono vivere fuori dalle funzioni onclick per sopravvivere tra un evento e l'altro (es-03, es-09).
5. **Validazione dei numeri** — `parseFloat` converte il testo degli input in numeri veri, `isNaN` controlla che la conversione sia riuscita; `valore || 0` è una scorciatoia per trattare un campo vuoto come zero (es-05, es-07).
6. **`filter()` per i dati mostrati vs dati salvati** — l'array "vero" (tutti i prodotti) può essere diverso da quello mostrato a schermo (solo quelli che passano la ricerca): render() lavora sempre sui dati filtrati, non tocca l'array originale (es-10).
7. **Fasi/stati multipli in un solo esercizio** — non tutte le interazioni sono "un evento, una reazione": es-09 introduce l'idea di un programma con più fasi (impostazione → verifica) e di disabilitare elementi della pagina (`disabled = true`) quando l'interazione è conclusa.

## Note per la prossima sessione

- Verificare che gli studenti abbiano completato almeno i primi 6-7 esercizi prima di passare a nuovi argomenti; es-09 ed es-10 sono adatti anche come compito a casa.
- Prossimo argomento naturale: form più complessi/validazione o localStorage per rendere persistenti i dati tra un ricaricamento e l'altro (già annotato come possibile seguito dopo la lezione 09).
