# Lezione 01 — HTML & CSS

**Data:** 2026-06-28  
**Stato:** completata

---

## Argomenti trattati

- Cos'è HTML e il ruolo del browser
- Struttura base di una pagina HTML (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)
- Tag principali: `h1-h6`, `p`, `a`, `img`, `div`, `span`, `ul/ol/li`, `strong`, `em`
- Form HTML: `<form>`, `<input>` (text, number, email), `<select>`, `<button>`
- L'attributo `id` come identificatore univoco e aggancio per JavaScript
- CSS: cos'è, come si collega all'HTML con `<link>`
- I tre tipi di selettori: tag, classe (`.`), id (`#`), discendente
- Box model: content, padding, border, margin
- Pseudo-classi: `:hover`, `:focus`, `:nth-child`
- Bootstrap 5: CDN, griglia con `.container / .row / .col-md-*`, componenti form

---

## File creati

| File | Descrizione |
|------|-------------|
| `teoria-html-css.html` | Pagina con appunti sotto forma di codice commentato, tema scuro stile editor |
| `teoria-html-css.css` | Stile dark-theme per la pagina teoria (sfondo scuro, highlight sintassi manuale) |
| `mini-pratica-html-css.html` | Form Bootstrap (nome, cognome, materia, voto) + tabella vuota, senza JavaScript |
| `mini-pratica-html-css.css` | Stile personalizzato che integra Bootstrap per il form e la tabella |
| `discorso-lezione1.txt` | Spiegazione orale della lezione, tono semplice per studente liceale (~650 parole) |
| `riassunto.md` | Questo file — indice degli argomenti e dei concetti chiave |

---

## Concetti chiave

1. **HTML struttura, CSS stile, JavaScript logica** — i tre linguaggi del web hanno ruoli distinti e lavorano insieme; HTML da solo non fa nulla di interattivo.

2. **Ogni tag ha uno scopo semantico** — usare `<h1>` per il titolo principale, `<p>` per i paragrafi, `<a>` per i link non è arbitrario: dice al browser (e ai motori di ricerca) cosa significa quel contenuto.

3. **L'attributo `id` è il gancio** — ogni elemento con un id può essere selezionato con `document.getElementById()` in JavaScript. Deve essere unico nella pagina.

4. **Il Box Model governa lo spazio** — ogni elemento è una scatola: `content → padding → border → margin`. Capire questa gerarchia risolve il 90% dei problemi di layout e spacing.

5. **I selettori CSS determinano la priorità** — tag < classe < id: un id vince su una classe, una classe vince su un selettore di tag. Conoscere la specificità evita conflitti di stile.

---

## Note per le prossime lezioni

- Aggiungere JavaScript per popolare la tabella con i dati del form
- Approfondire Flexbox e Grid per il layout
- Validazione dei form lato client con JavaScript
