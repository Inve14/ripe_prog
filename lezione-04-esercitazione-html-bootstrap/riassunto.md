# Riassunto — Lezione 4: Esercitazione HTML + Bootstrap

**Data:** 6 luglio 2026

---

## Argomenti trattati

- Ripasso pratico in vista dell'esame di riparazione: nessuna teoria nuova, solo esercizi ed un promemoria di consultazione rapida.
- Tag HTML principali (titoli, paragrafi, link, immagini, liste, tabelle, form) e differenza tra elementi a blocco (`div`) e in linea (`span`).
- L'attributo `id` come "gancio" per JavaScript/CSS mirato.
- I tipi di `input` più comuni: text, number, email, password, date, checkbox.
- Sistema a griglia Bootstrap (`container` → `row` → `col`, regola delle 12 colonne) e breakpoint responsive.
- Spacing Bootstrap (`m`/`p` + lato + numero 0-5), pulsanti, form, tabelle con badge, card, alert, classi utility (`d-flex`, `text-center`, ecc.).
- Esercizi ispirati a quelli presenti sul sito del prof (cipiaceinfo.it), semplificati per un livello di riparazione.

---

## File creati

| File | Descrizione |
|------|-------------|
| `esercizi-html-bootstrap.txt` | 9 esercizi divisi in tre livelli (4 facili, 4 medi, 1 completo), senza soluzione |
| `promemoria-html-bootstrap.html` | Foglio di riferimento rapido: tutti i tag HTML e le classi Bootstrap principali con spiegazione in una riga |
| `promemoria-html-bootstrap.css` | CSS del promemoria: sezione HTML in arancione, sezione Bootstrap in viola, classi in monospace su sfondo grigio chiaro |
| `riassunto.md` | Questo file |

---

## Struttura degli esercizi

**Facili (4):** pagina con titolo/paragrafi/lista/link, tabella Bootstrap con thead/tbody, tre alert colorati, form semplice nome+email.

**Medi (4):** form Bootstrap completo (8 campi diversi), griglia a 3 colonne con card, tabella con badge promosso/bocciato, layout a due colonne (contenuto + sidebar).

**Completo (1):** mini portale di classe che unisce alert, griglia a due colonne, tabella con badge, card e form in un'unica pagina.

---

## Concetti chiave

1. **Il promemoria serve durante gli esercizi** — se non si ricorda una classe Bootstrap o un tag HTML, prima si consulta `promemoria-html-bootstrap.html`, poi si chiede aiuto.

2. **La griglia Bootstrap segue sempre la stessa struttura** — `container > row > col`, con la somma delle colonne che deve fare 12 in ogni riga.

3. **`div` è a blocco, `span` è in linea** — è la distinzione più confusa per chi inizia, va tenuta a mente prima di scegliere quale usare.

4. **I badge colorati raccontano un dato a colpo d'occhio** — verde/rosso per promosso/bocciato è lo schema usato più volte negli esercizi medi e in quello completo.

5. **Gli esercizi vanno dal semplice al composito** — i livelli facili isolano un solo concetto alla volta, quello completo li richiede tutti insieme: è il modo giusto per allenarsi prima di un esame.
