"""
Genera ripasso-rapido.pdf a partire dai contenuti di ripasso-rapido.md.
Esegui con: python3 genera_pdf.py
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Preformatted,
    ListFlowable,
    ListItem,
)

DARK_BLUE = colors.HexColor("#1a3d6d")
MID_BLUE = colors.HexColor("#2c5aa0")
LIGHT_GRAY = colors.HexColor("#f0f0f0")

styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    "TitleCustom", parent=styles["Title"], textColor=DARK_BLUE, fontSize=22, spaceAfter=6,
)
section_style = ParagraphStyle(
    "SectionCustom", parent=styles["Heading1"], textColor=DARK_BLUE, fontSize=16,
    spaceBefore=22, spaceAfter=10,
)
heading_style = ParagraphStyle(
    "HeadingCustom", parent=styles["Heading2"], textColor=MID_BLUE, fontSize=12.5,
    spaceBefore=12, spaceAfter=6,
)
bullet_style = ParagraphStyle(
    "BulletCustom", parent=styles["BodyText"], fontSize=9.5, leading=13.5, spaceAfter=2,
)
code_style = ParagraphStyle(
    "CodeCustom", parent=styles["Code"], fontName="Courier", fontSize=8, leading=10.5,
    backColor=LIGHT_GRAY, borderPadding=(6, 6, 6, 6), spaceBefore=4, spaceAfter=10,
)

# Ogni voce: (titolo, [bullet, ...], codice)
sezioni = [
    ("1. Collegare JS all'HTML", [
        "Lo script va collegato con <script src=\"...\"> in fondo al <body>, appena prima di </body>.",
        "Cosi, quando lo script parte, tutto l'HTML sopra e gia stato letto dal browser.",
    ], '<body>\n  <h1>Pagina</h1>\n  <script src="script.js"></script>\n</body>'),
    ("2. querySelector e l'id come gancio", [
        "L'id in HTML e un \"gancio\": document.querySelector(\"#id\") prende esattamente quell'elemento.",
        "Si salva il risultato in una costante, una volta sola, in cima al file.",
    ], 'const btn = document.querySelector("#btnAggiungi");'),
    ("3. .value dentro l'onclick (non fuori)", [
        "Il valore di un input va letto al momento del click, dentro la funzione collegata all'evento.",
        "Letto fuori (in cima al file) prende sempre il valore iniziale, vuoto.",
    ], 'btn.onclick = () => {\n  const nome = input.value; // letto ORA, non prima\n};'),
    ("4. innerHTML vs innerText", [
        "innerHTML interpreta il testo come HTML (permette tag come <strong>).",
        "innerText scrive solo testo puro, anche se contiene simboli < e >.",
    ], 'div.innerHTML = "<strong>Ciao</strong>"; // grassetto vero\ndiv.innerText = "<strong>Ciao</strong>"; // scritto letteralmente'),
    ("5. Pattern EAR — Evento -> Azione -> Reazione", [
        "Evento: qualcosa succede (click, submit, input).",
        "Azione: i dati (l'array/variabile di stato) vengono aggiornati.",
        "Reazione: la pagina viene ridisegnata di conseguenza.",
    ], 'btn.onclick = () => {           // Evento\n  lista.push(input.value);      // Azione\n  render();                     // Reazione\n};'),
    ("6. Pattern render()", [
        "L'array (o variabile) in JS e la fonte di verita, l'HTML e solo la sua fotografia.",
        "render() ricostruisce da zero il pezzo di pagina leggendo l'array.",
    ], 'let lista = [];\n\nfunction render() {\n  ul.innerHTML = "";\n  lista.forEach((el) => {\n    ul.innerHTML += `<li>${el}</li>`;\n  });\n}'),
    ("7. template.replace() per costruire HTML", [
        "Si scrive un \"modello\" di stringa con un segnaposto e lo si sostituisce col valore vero.",
        "Utile per righe di tabella, card, messaggi ripetuti.",
    ], 'const template = "<li>Nome: %NOME</li>";\nconst riga = template.replace("%NOME", "Marco");'),
    ("8. I metodi array piu usati", [
        "forEach: esegue un'azione per ogni elemento, non restituisce nulla.",
        "map: trasforma ogni elemento, restituisce un nuovo array della stessa lunghezza.",
        "filter: restituisce un nuovo array piu corto, solo elementi che rispettano una condizione.",
        "find: come filter ma si ferma al primo trovato, restituisce l'elemento (non un array).",
        "sort: riordina l'array (modifica l'originale), usare (a,b) => a-b oppure (a,b) => b-a.",
        "reduce: riduce l'array a un unico valore accumulato (somma, media, max...).",
    ], 'const numeri = [3, 8, 1, 5];\nnumeri.forEach((n) => console.log(n));\nconst doppi = numeri.map((n) => n * 2);\nconst grandi = numeri.filter((n) => n > 3);\nconst primo = numeri.find((n) => n > 3);\nnumeri.sort((a, b) => a - b);\nconst somma = numeri.reduce((acc, n) => acc + n, 0);'),
    ("9. for...in per i dizionari", [
        "Scorre le chiavi di un oggetto (non i valori).",
    ], 'const studente = { nome: "Luca", voto: 7 };\nfor (const chiave in studente) {\n  console.log(chiave, studente[chiave]);\n}'),
    ("10. Object.keys() e Object.values()", [
        "Object.keys(obj) restituisce l'array delle chiavi.",
        "Object.values(obj) restituisce l'array dei valori.",
    ], 'Object.keys(studente);   // ["nome", "voto"]\nObject.values(studente); // ["Luca", 7]'),
    ("11. Le 4 righe fondamentali del parsing CSV", [
        "shift() rimuove E restituisce il primo elemento dell'array (modifica l'originale): serve per l'header.",
        "I valori letti da un CSV sono sempre stringhe: vanno convertiti con Number() prima di calcoli/confronti.",
    ], 'let testo = csv.trim();                  // 1. pulisco spazi/newline ai bordi\ntesto = testo.replaceAll(" ", "");       // 2. tolgo spazi interni\nconst righe = testo.split("\\n");         // 3. divido per riga\nconst header = righe.shift().split(","); // 4. tolgo e divido l\'header'),
    ("12. Costruire array di dizionari dal CSV", [
        "Per ogni riga si crea un dizionario associando ogni valore alla chiave dell'header nella stessa posizione.",
    ], 'const studenti = righe.map((riga) => {\n  const valori = riga.split(",");\n  const obj = {};\n  header.forEach((chiave, i) => {\n    obj[chiave] = valori[i];\n  });\n  return obj;\n});'),
    ("13. Generare CSV risultato con map e join", [
        "map() trasforma ogni dizionario in una riga di testo, join() unisce le righe con l'a-capo.",
    ], 'const righeOutput = studenti.map((s) => Object.values(s).join(","));\nconst csvOutput = [header.join(","), ...righeOutput].join("\\n");'),
    ("14. Schema base fetch", [
        "Sempre due await: uno per la richiesta (fetch), uno per leggerne il contenuto (.json()).",
        "Regola d'oro: console.log(data) SEMPRE, per capire la struttura prima di usarla.",
    ], 'const response = await fetch(url);  // 1 await -> Response\nconst data = await response.json(); // 2 await -> dati veri\nconsole.log(data);'),
    ("15. GET vs POST", [
        "GET: si usa per leggere/chiedere dati, basta fetch(url), niente method/body.",
        "POST: si usa per mandare dati al server, servono method \"POST\", headers e body.",
        "body e sempre una stringa: si costruisce con JSON.stringify({...}).",
    ], '// GET\nconst r1 = await fetch(url);\n\n// POST\nconst r2 = await fetch(url, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ nome: "Mario" }),\n});'),
    ("16. URL template con .replace()", [
        "Si scrive un URL modello con un segnaposto e lo si sostituisce col valore vero prima della fetch.",
        "Con piu parametri si concatenano piu .replace().",
    ], 'const url = "https://api.open-meteo.com/v1/forecast?latitude=%LAT&longitude=%LON&current_weather=true"\n  .replace("%LAT", lat)\n  .replace("%LON", lon);'),
    ("17. Fetch POST: struttura", [
        "method: \"POST\" + headers (Content-Type application/json) + body (JSON.stringify).",
    ], 'const response = await fetch(url, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ nome: "Mario", voto: 7 }),\n});'),
    ("18. Cache remota — SET", [
        "Il TOKEN (personale) va nell'header \"key\"; la chiave del dato va nel body: non vanno confusi.",
        "Il value va sempre passato a JSON.stringify prima di salvarlo.",
    ], 'await fetch("https://ws.cipiaceinfo.it/cache/set", {\n  method: "POST",\n  headers: { "Content-Type": "application/json", "key": TOKEN },\n  body: JSON.stringify({\n    key: "nomeChiave",\n    value: JSON.stringify(valore),\n  }),\n});'),
    ("19. Cache remota — GET", [
        "data.result e una STRINGA se la chiave esiste, un OGGETTO se non esiste: si controlla con typeof.",
    ], 'const data = await response.json();\nif (typeof data.result === "string") {\n  const valore = JSON.parse(data.result);\n} else {\n  // chiave non trovata\n}'),
    ("20. JSON.stringify prima di salvare, JSON.parse dopo aver letto", [
        "Il value salvato deve essere una stringa: JSON.stringify(valore) prima del SET.",
        "data.result tornato dal GET e ancora una stringa da riaprire: JSON.parse(data.result) dopo.",
        "Vale anche per array/oggetti interi (es. una lista intera salvata in un colpo solo).",
    ], '// salvo\nvalue: JSON.stringify(valore)\n\n// leggo\nconst valore = JSON.parse(data.result);'),
]


def crea_pdf(percorso_output: str) -> None:
    doc = SimpleDocTemplate(
        percorso_output,
        pagesize=A4,
        leftMargin=2.3 * cm,
        rightMargin=2.3 * cm,
        topMargin=2 * cm,
        bottomMargin=2 * cm,
        title="Ripasso rapido - Lezione 14",
    )

    story = []
    story.append(Paragraph("Ripasso rapido &mdash; Lezione 14", title_style))
    story.append(Spacer(1, 0.3 * cm))

    macro = {
        1: "HTML + JS",
        8: "Array e Dizionari",
        11: "CSV",
        14: "AJAX e Fetch",
        18: "Cache remota",
    }

    for i, (titolo, bullets, codice) in enumerate(sezioni, start=1):
        if i in macro:
            story.append(Paragraph(macro[i], section_style))

        story.append(Paragraph(titolo, heading_style))

        def esc(t):
            return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

        items = [
            ListItem(Paragraph(esc(b), bullet_style), bulletColor=MID_BLUE)
            for b in bullets
        ]
        story.append(ListFlowable(items, bulletType="bullet", start="•", leftIndent=14))

        codice_escaped = (
            codice.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        )
        story.append(Preformatted(codice_escaped, code_style))

    doc.build(story)


if __name__ == "__main__":
    crea_pdf("ripasso-rapido.pdf")
    print("PDF generato: ripasso-rapido.pdf")
