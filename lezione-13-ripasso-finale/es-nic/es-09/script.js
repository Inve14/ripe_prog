// ES-09 — Calcolatrice
//
// CONSEGNA:
// Due input number, select con le 4 operazioni, pulsante "Calcola".
// Mostra il risultato. Gestisce isNaN e divisione per zero.
// Usa template.replace() per costruire il messaggio del risultato.
//
// Concetti: parseFloat, isNaN, if/else, template.replace()

// Scrivi qui il tuo codice



const n1 = document.querySelector("#numero1");
const operazioni = document.querySelector("#operazione");
const n2 = document.querySelector("#numero2");
const calcola = document.querySelector("#btncalcola");
const divrisultato = document.querySelector("#risultato");


let risultato = 0;


const render = (num1, num2, op) => {
    const template = "%NUM1 %OP %NUM2 = %RISULTATO";
    divrisultato.innerText = template.replace("%NUM1", num1).replace("%OP", op).replace("%NUM2", num2).replace("%RISULTATO", risultato);
}


calcola.onclick = () => {
    const num1 = parseFloat(n1.value);
    const num2 = parseFloat(n2.value);
    const op = operazioni.value;

    if (op == "+") {
        risultato = num1 + num2;
    } else if (op == "-") {
        risultato = num1 - num2;
    } else if (op == "*") {
        risultato = num1 * num2;
    } else {
        //dvisione
        if (num2 == 0) {
            return divrisultato.innerText = "Non si può dividere per 0";
        } else {
            risultato = num1 / num2;
        }
    }
    render(num1, num2, op);
}


