/*
ESERCIZIO 12 — Lista preferiti persistente (progetto finale)

Token da usare (va nell'header "key" di ogni richiesta):
"c6498f6b-ccb2-4ad5-9375-8ce35d3498bc"
Usa una chiave fissa a tua scelta per salvare la lista in cache, es.
"lista-preferiti-tuonome" (per non sovrascrivere i dati di un compagno).

Crea una pagina con:
- un form con nome e voto
- un pulsante "Svuota" (che svuota anche la cache remota)
- una tabella che mostra tutti gli studenti aggiunti

Ad ogni aggiunta:
1. aggiungi lo studente all'array in memoria
2. ridisegna la tabella con render()
3. salva l'intero array in cache remota con una fetch POST su /cache/set
   (JSON.stringify sull'array)

All'apertura della pagina (appena carica, senza bisogno di cliccare nulla):
- fai una fetch POST su /cache/get per leggere la lista salvata
- se esiste, fai JSON.parse e ricostruisci l'array, poi chiama render()

Al click su "Svuota": svuota l'array, la tabella, E salva un array vuoto in cache
(sovrascrivendo i dati vecchi).

Concetti da usare: tutto insieme — array di dizionari, render(), fetch POST set e
get, JSON.stringify/parse, caricamento automatico all'avvio della pagina
*/
