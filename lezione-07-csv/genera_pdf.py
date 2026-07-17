"""
Genera appunti-csv.pdf a partire dai contenuti di teoria-csv.js.
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
)

DARK_BLUE = colors.HexColor("#1a3d6d")
LIGHT_GRAY = colors.HexColor("#f0f0f0")

styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    "TitleCustom",
    parent=styles["Title"],
    textColor=DARK_BLUE,
    fontSize=22,
    spaceAfter=18,
)

heading_style = ParagraphStyle(
    "HeadingCustom",
    parent=styles["Heading2"],
    textColor=DARK_BLUE,
    fontSize=14,
    spaceBefore=16,
    spaceAfter=8,
)

body_style = ParagraphStyle(
    "BodyCustom",
    parent=styles["BodyText"],
    fontSize=10.5,
    leading=15,
    alignment=TA_LEFT,
    spaceAfter=6,
)

code_style = ParagraphStyle(
    "CodeCustom",
    parent=styles["Code"],
    fontName="Courier",
    fontSize=9,
    leading=12,
    backColor=LIGHT_GRAY,
    borderPadding=(6, 6, 6, 6),
    spaceBefore=4,
    spaceAfter=10,
)

# Ogni voce: (titolo, spiegazione, esempio di codice)
sezioni = [
    (
        "Cos'è un CSV?",
        "CSV sta per \"Comma Separated Values\" (valori separati da virgola). "
        "È un modo semplicissimo per scrivere dati tabellari (come una tabella "
        "di Excel) dentro un normale file di testo: ogni riga di testo "
        "corrisponde a una riga della tabella, e i valori dentro la riga sono "
        "separati da virgole. La prima riga di solito è l'header, cioè "
        "contiene i nomi delle colonne.",
        "const csvEsempio = `\n"
        "nome, cognome, voto\n"
        "Luca, Rossi, 7\n"
        "Giulia, Bianchi, 9\n"
        "Marco, Verdi, 5\n"
        "`;",
    ),
    (
        "Step 1: trim()",
        "Quando scriviamo un CSV su più righe con i backtick, spesso rimane "
        "una riga vuota all'inizio e/o alla fine. trim() rimuove gli spazi e "
        "i caratteri di \"a capo\" solo all'inizio e alla fine della stringa, "
        "lasciando intatto il contenuto centrale.",
        "let csv = csvEsempio.trim();",
    ),
    (
        "Step 2: replaceAll(' ', '')",
        "Nel CSV di esempio, dopo ogni virgola c'è uno spazio (\", \") per "
        "renderlo più leggibile. Per lavorarci facilmente conviene toglierlo: "
        "replaceAll(' ', '') sostituisce OGNI spazio della stringa con una "
        "stringa vuota, cioè lo elimina.",
        "csv = csv.replaceAll(' ', '');\n"
        "// \"nome,cognome,voto\\nLuca,Rossi,7\\n...\"",
    ),
    (
        "Step 3: split('\\n')",
        "split('\\n') taglia la stringa in corrispondenza di ogni \"a capo\" "
        "(newline) e restituisce un array: ogni elemento è una riga del CSV, "
        "ancora come stringa unica (non ancora divisa nelle singole colonne).",
        "const rows = csv.split('\\n');\n"
        "// [\"nome,cognome,voto\", \"Luca,Rossi,7\", ...]",
    ),
    (
        "Step 4: shift()",
        "shift() è un metodo degli array che RIMUOVE il primo elemento "
        "dell'array e lo RESTITUISCE come valore. Dopo questa riga \"header\" "
        "contiene la prima riga (i nomi delle colonne) e \"rows\" non la "
        "contiene più: shift() modifica l'array originale, non ne crea uno "
        "nuovo.",
        "const header = rows.shift();\n"
        "// header: \"nome,cognome,voto\"\n"
        "// rows: [\"Luca,Rossi,7\", \"Giulia,Bianchi,9\", ...]",
    ),
    (
        "Step 5: split(',') sull'header",
        "L'header per ora è ancora una stringa unica (\"nome,cognome,voto\"). "
        "Con split(',') la trasformiamo in un array con i nomi delle colonne.",
        "const colonne = header.split(',');\n"
        "// [\"nome\", \"cognome\", \"voto\"]",
    ),
    (
        "Step 6: map() per costruire un array di dizionari",
        "Vogliamo trasformare ogni riga di testo (es. \"Luca,Rossi,7\") in un "
        "dizionario tipo { nome: \"Luca\", cognome: \"Rossi\", voto: \"7\" }. "
        "Usiamo map() per creare un nuovo array (uno per ogni riga): dentro, "
        "dividiamo la riga con split(',') e costruiamo il dizionario usando "
        "\"colonne\" come chiavi.",
        "const studenti = rows.map((row) => {\n"
        "  const valori = row.split(',');\n"
        "  const dizionario = {};\n"
        "  colonne.forEach((nomeColonna, indice) => {\n"
        "    dizionario[nomeColonna] = valori[indice];\n"
        "  });\n"
        "  return dizionario;\n"
        "});",
    ),
    (
        "Step 7: accedere ai dati del dizionario",
        "Ogni elemento di \"studenti\" è un dizionario: possiamo leggerne i "
        "campi con la notazione a punto, esattamente come un oggetto "
        "qualsiasi.",
        "studenti.forEach((studente) => {\n"
        "  console.log(`${studente.nome} ha preso ${studente.voto}`);\n"
        "});",
    ),
    (
        "Step 8: generare un CSV risultato con map() + join('\\n')",
        "Percorso inverso: da un array di dizionari a una stringa CSV. Prima "
        "creiamo la riga di header unendo i nomi delle colonne con join(','), "
        "poi per ogni studente costruiamo la riga dei valori con "
        "Object.values() + join(','), infine uniamo tutte le righe con "
        "join('\\n').",
        "const headerRisultato = colonne.join(',');\n"
        "const righeRisultato = studenti.map((s) => Object.values(s).join(','));\n"
        "const csvRisultato = headerRisultato + '\\n' + righeRisultato.join('\\n');",
    ),
    (
        "Step 9: template.replace() come alternativa",
        "Invece di costruire ogni riga con Object.values().join(','), "
        "possiamo scrivere un template con dei segnaposto (es. \"{{nome}}\") "
        "e sostituirli con replace(). Utile quando l'ordine o il formato del "
        "risultato è diverso da quello del CSV di partenza, o non è nemmeno "
        "un vero CSV.",
        "const templateRiga = \"{{nome}} {{cognome}}: {{voto}}/10\";\n\n"
        "const righeConTemplate = studenti.map((s) =>\n"
        "  templateRiga\n"
        "    .replace('{{nome}}', s.nome)\n"
        "    .replace('{{cognome}}', s.cognome)\n"
        "    .replace('{{voto}}', s.voto)\n"
        ");",
    ),
]


def crea_pdf(percorso_output: str) -> None:
    doc = SimpleDocTemplate(
        percorso_output,
        pagesize=A4,
        leftMargin=2.5 * cm,
        rightMargin=2.5 * cm,
        topMargin=2 * cm,
        bottomMargin=2 * cm,
        title="CSV in JavaScript - Appunti",
    )

    story = []
    story.append(Paragraph("CSV in JavaScript &mdash; Appunti", title_style))
    story.append(Spacer(1, 0.4 * cm))

    for titolo, spiegazione, codice in sezioni:
        story.append(Paragraph(titolo, heading_style))
        story.append(Paragraph(spiegazione, body_style))
        codice_escaped = (
            codice.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        )
        story.append(Preformatted(codice_escaped, code_style))

    doc.build(story)


if __name__ == "__main__":
    crea_pdf("appunti-csv.pdf")
    print("PDF generato: appunti-csv.pdf")
