# Ripasso rapido — Lezione 14

Foglio di riferimento veloce, non un manuale. Per ogni argomento: cosa ricordare + un esempio minimo.

---

## HTML + JS

### 1. Collegare JS all'HTML

- Lo script va collegato con `<script src="...">` **in fondo al `<body>`**, appena prima di `</body>`.
- Così, quando lo script parte, tutto l'HTML sopra è già stato letto dal browser (gli elementi esistono già).

```html
<body>
  <h1>Pagina</h1>
  <script src="script.js"></script>
</body>
```

### 2. querySelector e l'id come gancio

- L'`id` in HTML è un "gancio": `document.querySelector("#id")` prende esattamente quell'elemento.
- Si salva il risultato in una costante, una volta sola, in cima al file.

```js
const btn = document.querySelector("#btnAggiungi");
```

### 3. `.value` dentro l'onclick (non fuori)

- Il valore di un input va letto **al momento del click**, dentro la funzione collegata all'evento.
- Letto fuori (in cima al file) prende sempre il valore iniziale, vuoto.

```js
btn.onclick = () => {
  const nome = input.value; // letto ORA, non prima
};
```

### 4. `innerHTML` vs `innerText`

- `innerHTML` interpreta il testo come HTML (permette tag, `<strong>`, ecc.).
- `innerText` scrive solo testo puro, anche se contiene simboli `<`/`>`.

```js
div.innerHTML = "<strong>Ciao</strong>"; // grassetto vero
div.innerText = "<strong>Ciao</strong>"; // scritto letteralmente
```

### 5. Pattern EAR — Evento → Azione → Reazione

- **Evento**: qualcosa succede (click, submit, input).
- **Azione**: i dati (l'array/variabile di stato) vengono aggiornati.
- **Reazione**: la pagina viene ridisegnata di conseguenza.

```js
btn.onclick = () => {           // Evento
  lista.push(input.value);      // Azione
  render();                     // Reazione
};
```

### 6. Pattern `render()`

- L'array (o variabile) in JS è la **fonte di verità**, l'HTML è solo la sua fotografia.
- `render()` ricostruisce da zero il pezzo di pagina leggendo l'array, invece di aggiungere/togliere pezzi a mano.

```js
let lista = [];

function render() {
  ul.innerHTML = "";
  lista.forEach((el) => {
    ul.innerHTML += `<li>${el}</li>`;
  });
}
```

### 7. `template.replace()` per costruire HTML

- Si scrive un "modello" di stringa con un segnaposto e lo si sostituisce col valore vero.
- Utile per righe di tabella, card, messaggi ripetuti.

```js
const template = "<li>Nome: %NOME</li>";
const riga = template.replace("%NOME", "Marco");
```

---

## Array e Dizionari

### 8. I metodi array più usati

| Metodo | Cosa fa |
|---|---|
| `forEach` | esegue un'azione per ogni elemento, non restituisce nulla |
| `map` | trasforma ogni elemento, restituisce un nuovo array della stessa lunghezza |
| `filter` | restituisce un nuovo array più corto, solo elementi che rispettano una condizione |
| `find` | come `filter` ma si ferma al primo trovato, restituisce l'elemento (non un array) |
| `sort` | riordina l'array (**modifica l'originale**, usare `(a,b) => a-b` o `(a,b) => b-a`) |
| `reduce` | riduce l'array a un unico valore accumulato (somma, media, max...) |

```js
const numeri = [3, 8, 1, 5];
numeri.forEach((n) => console.log(n));
const doppi = numeri.map((n) => n * 2);
const grandi = numeri.filter((n) => n > 3);
const primo = numeri.find((n) => n > 3);
numeri.sort((a, b) => a - b);
const somma = numeri.reduce((acc, n) => acc + n, 0);
```

### 9. `for...in` per i dizionari

- Scorre le **chiavi** di un oggetto (non i valori).

```js
const studente = { nome: "Luca", voto: 7 };
for (const chiave in studente) {
  console.log(chiave, studente[chiave]);
}
```

### 10. `Object.keys()` e `Object.values()`

- `Object.keys(obj)` → array delle chiavi. `Object.values(obj)` → array dei valori.

```js
Object.keys(studente);   // ["nome", "voto"]
Object.values(studente); // ["Luca", 7]
```

---

## CSV

### 11. Le 4 righe fondamentali del parsing

```js
let testo = csv.trim();               // 1. pulisco spazi/newline ai bordi
testo = testo.replaceAll(" ", "");    // 2. tolgo spazi interni
const righe = testo.split("\n");      // 3. divido per riga
const header = righe.shift().split(","); // 4. tolgo e divido l'header
```

- `shift()` rimuove **e restituisce** il primo elemento dell'array (modifica l'originale).
- I valori letti da un CSV sono **sempre stringhe**: vanno convertiti con `Number()` prima di calcoli/confronti.

### 12. Costruire array di dizionari dal CSV

```js
const studenti = righe.map((riga) => {
  const valori = riga.split(",");
  const obj = {};
  header.forEach((chiave, i) => {
    obj[chiave] = valori[i];
  });
  return obj;
});
```

### 13. Generare CSV risultato con map e join

```js
const righeOutput = studenti.map((s) => Object.values(s).join(","));
const csvOutput = [header.join(","), ...righeOutput].join("\n");
```

---

## AJAX e Fetch

### 14. Schema base

- Sempre due `await`: uno per la richiesta, uno per leggerne il contenuto.

```js
const response = await fetch(url); // 1° await -> Response
const data = await response.json(); // 2° await -> dati veri
console.log(data); // SEMPRE, per capire la struttura prima di usarla
```

### 15. GET vs POST

| | GET | POST |
|---|---|---|
| Uso | leggere/chiedere dati | mandare dati al server |
| URL | basta `fetch(url)` | serve comunque un URL |
| `method` | non serve (default) | `"POST"` obbligatorio |
| `headers` | di solito non servono | quasi sempre `Content-Type: application/json` (+ eventuale token) |
| `body` | niente | `JSON.stringify({...})` |

### 16. URL template con `.replace()`

```js
const template = "https://api.esempio.it/posts?userId=%ID";
const url = template.replace("%ID", id);
```

Con più parametri si concatenano più `.replace()`:

```js
const url = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true"
  .replace("%LAT", lat)
  .replace("%LON", lon);
```

### 17. Fetch POST: struttura

```js
const response = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nome: "Mario", voto: 7 }),
});
```

---

## Cache remota

Servizio `ws.cipiaceinfo.it`: un "armadietto condiviso" dove salvare/leggere coppie chiave-valore. Il **TOKEN** (tessera d'accesso, personale) va nell'header `key`; la **chiave del dato** (il nome sotto cui si salva) va nel `body`, da non confondere.

### 18. SET — come si salva

```js
await fetch("https://ws.cipiaceinfo.it/cache/set", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "key": TOKEN, // il token, non la chiave del dato
  },
  body: JSON.stringify({
    key: "nomeChiave",
    value: JSON.stringify(valore), // il valore va sempre stringificato
  }),
});
```

### 19. GET — come si legge

```js
const response = await fetch("https://ws.cipiaceinfo.it/cache/get", {
  method: "POST",
  headers: { "Content-Type": "application/json", "key": TOKEN },
  body: JSON.stringify({ key: "nomeChiave" }),
});
const data = await response.json();

// data.result è una STRINGA se la chiave esiste, un OGGETTO se non esiste
if (typeof data.result === "string") {
  const valore = JSON.parse(data.result);
} else {
  // chiave non trovata
}
```

### 20. JSON.stringify prima di salvare, JSON.parse dopo aver letto

- Il `value` salvato deve essere una **stringa** → `JSON.stringify(valore)` prima del `SET`.
- Quello che torna dal `GET` (`data.result`) è ancora una stringa da "riaprire" → `JSON.parse(data.result)`.
- Vale anche per array/oggetti interi (es. una lista di preferiti): si stringifica l'intero array prima di salvarlo, si fa il parse dell'intero array dopo averlo letto.
