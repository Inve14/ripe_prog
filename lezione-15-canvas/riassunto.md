# Lezione 15 — Canvas

Prima lezione dedicata al `<canvas>` HTML e al disegno 2D con JavaScript.

## File in questa cartella

- **`glossario-canvas.html` / `.css` / `.js`** — pagina interattiva completa, navbar laterale con 9 capitoli cliccabili, ogni sezione ha spiegazione dettagliata, blocco di codice scuro e un canvas dal vivo con pulsante "Esegui":
  1. Cos'è il Canvas (tag, getElementById/getContext, sistema di coordinate, canvas vs SVG, width/height come attributi HTML)
  2. Rettangoli (fillRect, strokeRect, clearRect, fillStyle, strokeStyle, lineWidth)
  3. Path (beginPath, moveTo, lineTo, closePath, stroke, fill — triangolo, stella, forma irregolare)
  4. Cerchi e Archi (arc, radianti, conversione gradi→radianti, pieno/vuoto/semicerchio/spicchio)
  5. Testo (fillText, strokeText, font, textAlign, textBaseline, measureText)
  6. Testo Verticale (save, translate, rotate, restore)
  7. Colori e Stili (formati colore, globalAlpha, gradienti lineari e radiali)
  8. Pulizia e Reset (clearRect totale, pattern render())
  9. Esempio Completo: Istogramma (assi tratteggiati, barre proporzionali, etichette con for, scritta verticale "Quantità")

- **`esercizi-canvas-consegna.txt`** — 9 esercizi senza soluzione: 4 facili (rettangoli affiancati, semaforo, nome al centro, casa), 4 medi (scacchiera 8x8, grafico a barre orizzontali, orologio con segni delle ore, bandiera italiana), 1 completo (istogramma voti con assi/etichette/scritta verticale)

- **`esercizi-canvas-soluzioni.html` / `.js`** — soluzioni complete e commentate dei 9 esercizi, ognuna su un canvas separato con titolo e livello (facile/medio/completo)

- **`appunti-canvas.pdf`** + `genera_pdf.py` — PDF Python/reportlab, stesso stile delle lezioni precedenti (titoli blu, sezioni viola, codice Courier su sfondo grigio, A4); rilanciare lo script se si aggiorna il glossario

- **`discorso-lezione15.txt`** — spiegazione orale ~1025 parole, copre in ordine tutti gli argomenti del glossario con un tono semplice per studente liceale

## Fonti

Contenuti basati su cipiaceinfo.it/docs/strumenti/strumenti-web/canvas/ (letta per la sessione), ampliati con maggiore dettaglio su richiesta esplicita (radianti, save/restore, gradienti, textAlign/textBaseline, pattern render, differenza canvas/SVG — argomenti solo accennati o assenti sulla pagina del prof).

## Note tecniche

- Tutti i file JS verificati con `node --check` (solo sintassi, essendo pensati per il browser).
- PDF generato con successo via `python3 genera_pdf.py` (reportlab già installato dalle lezioni precedenti).
