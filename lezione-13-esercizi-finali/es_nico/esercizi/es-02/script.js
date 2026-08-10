/*
ESERCIZIO 2 — Pari o dispari

Crea una pagina con:
- un campo numerico dove l'utente scrive un numero intero
- un pulsante "Controlla"
- un div dove mostrare il risultato

Al click, leggi il numero e mostra nel div se è "pari" o "dispari".

Concetti da usare: parseInt, if/else, operatore % (resto della divisione)
*/
const inputnumero = document.querySelector("#numero");
const btncontrolla = document.querySelector("#btncontrolla");
const divrisultato = document.querySelector("#risultato");

btncontrolla.onclick = () => {
    
    const numero = parseInt(inputnumero.value);

    if ( numero % 2 == 0 ){
        divrisultato.innerHTML = numero + " è pari";
    } else {
        divrisultato.innerHTML = numero + " è dispari";
    }
}
