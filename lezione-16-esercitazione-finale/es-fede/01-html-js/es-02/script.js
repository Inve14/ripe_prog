// ES-02 — Pari o dispari
//
// CONSEGNA:
// Input number + pulsante. Dice se il numero è pari o dispari.
// Gestisce il campo vuoto.
//
// Concetti: parseInt, if/else, operatore %

// Scrivi qui il tuo codice

const numero = document.querySelector("#numero");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

const render = (s) => {
output.innerHTML = s;
}

button.onclick = () => {
    const number = parseFloat(numero.value);
    console.log(number);
    if (number % 2 === 0) {
        render("il numero è pari");
    } else {
        render("il numero è dispari");
    }

}