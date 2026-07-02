# Riassunto — Lezione 3: Bootstrap

**Data:** 1 luglio 2026
**Ultimo aggiornamento:** 2 luglio 2026 — riscrittura completa di `teoria-bootstrap.html`/`.css`

---

## Argomenti trattati

- Come collegare Bootstrap da CDN senza scaricare nulla (`<link>` nell'head, `<script>` prima di `</body>`)
- Il sistema a 12 colonne: `container` → `row` → `col-N`
- Breakpoint responsive: `col-md-*`, `col-lg-*`
- Spacing: logica `m`/`p` + lato (`t`, `b`, `s`, `e`, `x`, `y`) + valore da 0 a 5
- Pulsanti: `btn`, `btn-{colore}`, `btn-outline-*`, `btn-lg`, `btn-sm`
- Form: `form-label`, `form-control`, `form-select`, textarea, pulsante
- Tabelle: `table`, `table-striped`, `table-bordered`, `table-hover`, `thead table-dark`, badge colorati
- Card: `card-header`, `card-body`, `card-title`, `card-text`, pulsante
- Alert: `alert-success`, `alert-danger`, `alert-warning`, `alert-info`

---

## File creati

| File | Descrizione |
|------|-------------|
| `teoria-bootstrap.html` | Pagina di appunti riscritta a sezioni: ogni componente ha spiegazione testuale, blocco di codice in stile editor scuro (`<pre><code>`) ed esempio live subito sotto |
| `teoria-bootstrap.css` | CSS personalizzato: stile "finestra editor" per i blocchi di codice, etichetta "Risultato", box colorati per griglia/spacing |
| `mini-pratica-bootstrap.html` | Pagina pratica con tutti i componenti in contesti realistici (form iscrizione, registro voti, card materie) |
| `mini-pratica-bootstrap.css` | CSS personalizzato della pagina pratica |
| `esercizi-lezione3.txt` | 9 esercizi divisi in tre livelli (facili, medi, completo) senza soluzione |
| `discorso-lezione3.txt` | Spiegazione in stile colloquiale da insegnante a studente, ~600 parole |
| `riassunto.md` | Questo file |

---

## Struttura di `teoria-bootstrap.html` (aggiornata)

Ogni sezione segue lo stesso schema: **spiegazione testuale semplice** → **codice di esempio** in un blocco scuro stile editor → **esempio funzionante** visivo subito sotto (etichetta "Risultato"). Nessun JavaScript custom nella pagina.

1. Come collegare Bootstrap (CDN, `<link>`, `<script>`, pagina minima con anteprima in un iframe)
2. Griglia — col-4×3, col-8+col-4, col-12/col-md-6
3. Spacing — mt/mb/ms/me/px/py con box colorati di confronto
4. Pulsanti — solidi, outline, dimensioni
5. Form — input, select, textarea, pulsante
6. Tabella — striped/hover/bordered, thead scuro, badge di stato
7. Card — header, body, titolo, testo, pulsante
8. Alert — success, danger, warning, info

---

## Concetti chiave

1. **Bootstrap si include con un link CDN** — nessun file da scaricare, basta aggiungere il `<link>` nell'`<head>` e lo `<script>` prima di `</body>`; tutte le classi sono disponibili subito.

2. **La griglia è sempre `container > row > col`** — la somma delle colonne in una riga deve fare 12; i breakpoint (`col-md-*`) gestiscono il responsive automaticamente.

3. **Lo spacing segue una logica uniforme** — `m`/`p` + lato (`t`, `b`, `s`, `e`, `x`, `y`) + numero (0–5); imparare la logica significa non dover memorizzare ogni classe singola.

4. **I componenti (card, alert, form, tabella) hanno una struttura fissa** — basta conoscere la struttura HTML di base e aggiungere le classi Bootstrap; il CSS lo scrive Bootstrap per te.

5. **Bootstrap non sostituisce il CSS custom** — Bootstrap fa il lavoro pesante di layout e componenti; il file `.css` separato serve per i dettagli visivi specifici del progetto.

6. **Vedere codice e risultato affiancati aiuta a fissare i concetti** — per questo la pagina di teoria ora mostra ogni esempio prima come codice (blocco scuro stile editor) e subito dopo come risultato live nel browser.
