# Cache Remota — spiegazione semplice

## Cos'è

La Cache Remota è un servizio online del prof che funziona come un
grande **armadietto condiviso su Internet**: puoi mettere dentro un
oggetto con un'etichetta (una "chiave"), e più tardi — anche da un'altra
pagina, anche da un altro computer — puoi tornare a leggerlo usando la
stessa etichetta.

Serve per **far "ricordare" qualcosa a una pagina web**, anche dopo che
l'hai chiusa: normalmente le variabili JavaScript spariscono quando
ricarichi la pagina, ma un valore salvato nella Cache Remota resta lì,
sul server, finché non lo cambi tu.

## I due indirizzi

- `https://ws.cipiaceinfo.it/cache/set` → per **salvare** qualcosa
- `https://ws.cipiaceinfo.it/cache/get` → per **rileggere** qualcosa

Entrambi si usano con una richiesta **POST**, anche quella per leggere
(è una particolarità di questo servizio: di solito per leggere si usa
GET, ma qui il prof ha scelto di usare POST anche in lettura).

## Il TOKEN (da non confondere con la "chiave")

Per poter usare l'armadietto devi dimostrare che è il TUO: per questo
ogni richiesta porta con sé un **TOKEN**, una stringa lunga e segreta
che identifica te (o la tua classe). Il token si mette nell'**header**
della richiesta, in un campo chiamato `key` — un nome un po' infelice,
perché si confonde facilmente con la chiave del dato che stai salvando!
Per questo, per tenerli distinti, in questi esempi chiamiamo sempre la
variabile del token `TOKEN` e mai `key`.

Riassumendo, ci sono **due cose diverse chiamate "chiave"**:

| Cosa | Dove va | A cosa serve |
|---|---|---|
| **TOKEN** | header `key` | dice al server CHI sei tu |
| **chiave del dato** (es. `"colore-preferito"`) | dentro il body | dice CHE COSA stai salvando/cercando |

## Perché JSON.stringify (anche due volte)

Una richiesta HTTP può viaggiare solo come **testo puro**, non può
portarsi dietro un oggetto JavaScript "vivo". Per questo, prima di
mandare qualcosa nel `body`, lo trasformiamo sempre in testo con
`JSON.stringify(...)`.

In più, questa specifica API vuole che anche il `value` che salvi sia
già una stringa JSON per conto suo. Per questo capita di vedere
`JSON.stringify` **due volte**:

```javascript
body: JSON.stringify({
  key: "colore-preferito",     // la chiave del dato
  value: JSON.stringify("blu") // il valore, già trasformato in testo
})
```

Quando poi lo rileggi, devi fare il percorso inverso con
`JSON.parse(...)`, per tornare ad avere il valore originale invece
della sua versione "impacchettata" in testo.

## Come si riconosce se una chiave esiste o no

Quando fai una GET, il server risponde sempre con un oggetto che ha un
campo `result`:

- se la chiave **esiste**, `result` è una **stringa** di testo (il
  valore salvato, ancora da "aprire" con `JSON.parse`)
- se la chiave **non esiste**, `result` è invece un **oggetto** con un
  messaggio di errore dentro

Per questo, nel codice, controlliamo sempre con
`typeof data.result === "string"`: è il modo più sicuro per sapere se
il valore è stato trovato oppure no.

## I tre esempi in questa cartella

1. `esempio-01-set/` — solo il salvataggio, per vedere passo passo cosa
   serve per fare una POST.
2. `esempio-02-get/` — solo la lettura, per vedere come si distingue
   una chiave trovata da una non trovata.
3. `esempio-03-tutto-insieme/` — salva e rilegge di seguito, per vedere
   il giro completo: scrivo un valore, lo rileggo, e vedo che torna
   davvero quello che avevo scritto.

In ogni esempio, apri anche la Console del browser (F12): ogni fetch
stampa con `console.log` esattamente cosa manda e cosa riceve, così puoi
vedere con i tuoi occhi la forma reale dei dati.
