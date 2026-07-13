"""
Genera appunti-js-base.pdf a partire dai contenuti di teoria-js-base.js.
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
        "1. Variabili: let e const",
        "In JavaScript esistono due modi per creare una variabile. \"let\" crea "
        "una variabile che si può modificare in seguito. \"const\" crea una "
        "costante: il valore non si può più riassegnare. Regola pratica: usa "
        "sempre const di default, passa a let solo quando sai già che quel "
        "valore dovrà cambiare (es. un contatore, un punteggio).",
        'let eta = 16;\n'
        'eta = 17; // va bene, "let" si può riassegnare\n\n'
        'const nomeScuola = "Liceo Italia";\n'
        '// nomeScuola = "Altro Liceo"; // ERRORE! const non si riassegna',
    ),
    (
        "2. Tipi di dato: stringa, numero, booleano, undefined, null",
        "string è testo, number è un numero (intero o decimale, senza "
        "distinzione), boolean è true o false, undefined è una variabile "
        "dichiarata ma senza valore assegnato, null è un valore vuoto "
        "assegnato di proposito da chi scrive il codice.",
        'const stringa = "Ciao mondo";\n'
        'const numero = 42;\n'
        'const booleano = true;\n'
        'let nonDefinita; // undefined\n'
        'const valoreNullo = null; // vuoto, ma di proposito\n\n'
        'console.log(typeof stringa); // "string"\n'
        'console.log(typeof numero);  // "number"',
    ),
    (
        "3. Operatori aritmetici, di confronto, logici",
        "Gli operatori aritmetici (+ - * /) servono per fare calcoli. Gli "
        "operatori di confronto (===, !==, >, <) confrontano due valori e "
        "restituiscono true o false: usa sempre === e !== (confronto forte) "
        "invece di == e != per evitare conversioni automatiche impreviste. "
        "Gli operatori logici combinano condizioni: && (e) è vero solo se "
        "entrambe le condizioni sono vere, || (o) è vero se almeno una lo "
        "è, ! (non) inverte true/false.",
        "const a = 10, b = 3;\n"
        "console.log(a + b); // 13\n"
        "console.log(a / b); // 3.333...\n\n"
        "console.log(5 === 5);   // true\n"
        "console.log(5 === '5'); // false, tipi diversi\n\n"
        "const haStudiato = true, haDormitoBene = false;\n"
        "console.log(haStudiato && haDormitoBene); // false\n"
        "console.log(haStudiato || haDormitoBene); // true",
    ),
    (
        "4. if / else",
        "Permette di eseguire codice diverso a seconda che una condizione "
        "sia vera o falsa. Esempio pratico: controllare se un voto è "
        "sufficiente oppure no.",
        "const voto = 5.5;\n\n"
        "if (voto >= 6) {\n"
        '  console.log(`Voto ${voto}: sufficiente!`);\n'
        "} else {\n"
        '  console.log(`Voto ${voto}: insufficiente.`);\n'
        "}",
    ),
    (
        "5. for classico",
        "Il ciclo for ripete un blocco di codice un numero definito di "
        "volte. Ha tre parti: inizializzazione, condizione di continuazione, "
        "aggiornamento ad ogni giro.",
        "for (let i = 1; i <= 5; i++) {\n"
        '  console.log("Numero:", i);\n'
        "}\n"
        "// stampa i numeri da 1 a 5",
    ),
    (
        "6. while",
        "Il ciclo while ripete un blocco di codice finché una condizione "
        "resta vera. A differenza del for, non sappiamo in anticipo quante "
        "volte girerà.",
        "let benzina = 5; // litri rimasti\n\n"
        "while (benzina > 0) {\n"
        '  console.log("Benzina rimasta:", benzina);\n'
        "  benzina = benzina - 1;\n"
        "}\n"
        'console.log("Serbatoio vuoto!");',
    ),
    (
        "7. Funzioni: modo classico e modo freccia",
        "Una funzione è un blocco di codice riutilizzabile a cui possiamo "
        "passare dati (parametri) e che può restituire un risultato "
        "(return). In JavaScript moderno si usano molto le arrow function, "
        "una sintassi più corta e diretta.",
        "// Modo classico\n"
        "function saluta(nome) {\n"
        '  return `Ciao ${nome}, benvenuto!`;\n'
        "}\n\n"
        "// Modo freccia\n"
        "const salutaFreccia = (nome) => {\n"
        '  return `Ciao ${nome}, benvenuto!`;\n'
        "};\n\n"
        "// Freccia compatta (una riga)\n"
        "const salutaFrecciaCorta = (nome) => `Ciao ${nome}, benvenuto!`;",
    ),
    (
        "8. Array: cos'è, come si crea, come si accede",
        "Un array è una lista ordinata di valori. Ogni elemento ha una "
        "posizione (indice) che parte da 0.",
        'const frutti = ["mela", "banana", "kiwi", "arancia"];\n\n'
        "console.log(frutti[0]); // \"mela\"\n"
        "console.log(frutti[2]); // \"kiwi\"\n"
        "console.log(frutti.length); // 4\n\n"
        'frutti[1] = "pera"; // modifica un elemento',
    ),
    (
        "9. Metodi array: forEach",
        "forEach esegue un'azione per ogni elemento dell'array. Non "
        "restituisce un nuovo array, serve solo per \"fare qualcosa\" con "
        "ogni valore.",
        "const numeri = [5, 12, 8, 3, 20, 1];\n\n"
        "numeri.forEach((n) => {\n"
        '  console.log("Elemento:", n);\n'
        "});",
    ),
    (
        "10. Metodi array: map",
        "map applica una trasformazione a ogni elemento e crea un NUOVO "
        "array con i risultati, senza modificare l'originale.",
        "const numeri = [5, 12, 8, 3, 20, 1];\n"
        "const raddoppiati = numeri.map((n) => n * 2);\n"
        "console.log(raddoppiati); // [10, 24, 16, 6, 40, 2]",
    ),
    (
        "11. Metodi array: filter",
        "filter crea un NUOVO array con solo gli elementi che rispettano "
        "una condizione (predicato).",
        "const numeri = [5, 12, 8, 3, 20, 1];\n"
        "const maggioriDi5 = numeri.filter((n) => n > 5);\n"
        "console.log(maggioriDi5); // [12, 8, 20]",
    ),
    (
        "12. Metodi array: find",
        "find restituisce il PRIMO elemento che rispetta una condizione: "
        "un singolo valore, non un array.",
        "const numeri = [5, 12, 8, 3, 20, 1];\n"
        "const primoMaggioreDi10 = numeri.find((n) => n > 10);\n"
        "console.log(primoMaggioreDi10); // 12",
    ),
    (
        "13. Metodi array: sort",
        "sort ordina l'array. Di default ordina come testo, quindi per "
        "ordinare numeri serve una funzione di confronto.",
        "const numeri = [1, 20, 3, 12];\n"
        "const ordinati = [...numeri].sort((x, y) => x - y);\n"
        "console.log(ordinati); // [1, 3, 12, 20]",
    ),
    (
        "14. Metodi array: reduce",
        "reduce \"riduce\" tutto l'array a un unico valore, accumulando un "
        "risultato passo dopo passo (es. somma totale, media).",
        "const numeri = [5, 12, 8, 3, 20, 1];\n"
        "const somma = numeri.reduce((acc, n) => acc + n, 0);\n"
        "console.log(somma); // 49",
    ),
    (
        "15. Dizionari (oggetti): cos'è, come si crea, come si legge",
        "Un dizionario (in JS si chiama oggetto) raccoglie dati in coppie "
        "chiave: valore. Si legge sia con la notazione a punto sia con le "
        "parentesi quadre (utile quando la chiave è dentro una variabile).",
        'const studente = { nome: "Luca", cognome: "Verdi", eta: 16 };\n\n'
        "console.log(studente.nome);      // \"Luca\" (con il punto)\n"
        'console.log(studente["cognome"]); // "Verdi" (parentesi quadre)\n\n'
        'const chiave = "eta";\n'
        "console.log(studente[chiave]); // 16",
    ),
    (
        "16. for...in per scorrere un dizionario",
        "Il ciclo for...in scorre tutte le chiavi di un oggetto, una per "
        "una, permettendo di leggerne anche il valore.",
        'const studente = { nome: "Luca", cognome: "Verdi", eta: 16 };\n\n'
        "for (const chiave in studente) {\n"
        '  console.log(chiave, "->", studente[chiave]);\n'
        "}",
    ),
    (
        "17. Object.keys() e Object.values()",
        "Object.keys(oggetto) restituisce un array con tutte le chiavi. "
        "Object.values(oggetto) restituisce un array con tutti i valori.",
        'const studente = { nome: "Luca", cognome: "Verdi", eta: 16 };\n\n'
        "console.log(Object.keys(studente));   // [\"nome\",\"cognome\",\"eta\"]\n"
        "console.log(Object.values(studente)); // [\"Luca\",\"Verdi\",16]",
    ),
    (
        "18. Array di dizionari (esempio: lista studenti)",
        "Combinando array e dizionari possiamo rappresentare dati "
        "tabellari, come un registro di classe: ogni studente è un "
        "dizionario, la lista di studenti è un array.",
        "const classe = [\n"
        '  { nome: "Luca", voto: 7 },\n'
        '  { nome: "Giulia", voto: 9 },\n'
        '  { nome: "Marco", voto: 5 },\n'
        "];\n\n"
        "classe.forEach((s) => {\n"
        '  console.log(`${s.nome} ha preso ${s.voto}`);\n'
        "});\n\n"
        "const promossi = classe.filter((s) => s.voto >= 6);\n"
        "console.log(promossi);",
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
        title="JavaScript Base - Appunti",
    )

    story = []
    story.append(Paragraph("JavaScript Base &mdash; Appunti", title_style))
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
    crea_pdf("appunti-js-base.pdf")
    print("PDF generato: appunti-js-base.pdf")
