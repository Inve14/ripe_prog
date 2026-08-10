/*
ESERCIZIO 11 — Salva e leggi (Cache Remota)

Token da usare (va nell'header "key" di ogni richiesta):
"c6498f6b-ccb2-4ad5-9375-8ce35d3498bc"

Crea una pagina con DUE form separati:

FORM 1 — Salva:
- un campo "chiave"
- un campo "valore"
- un pulsante "Salva"
Al submit, fai una fetch POST a https://ws.cipiaceinfo.it/cache/set con:
- header "key": il token sopra
- body JSON: { key: <chiave inserita>, value: JSON.stringify(<valore inserito>) }
Mostra un messaggio di conferma.

FORM 2 — Leggi:
- un campo "chiave"
- un pulsante "Leggi"
Al submit, fai una fetch POST a https://ws.cipiaceinfo.it/cache/get con:
- header "key": il token sopra
- body JSON: { key: <chiave inserita> }
Mostra il valore letto, oppure un messaggio di errore se la chiave non esiste
(controlla typeof data.result === "string").

Concetti da usare: fetch POST, headers, body, JSON.stringify, gestione della risposta
*/
