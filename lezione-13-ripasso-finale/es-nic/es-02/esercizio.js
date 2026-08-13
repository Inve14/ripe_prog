// ES-02 — Array base
//
// CONSEGNA:
// Dato l'array di numeri, stampa solo i numeri pari.
// Poi calcola la loro somma.

const numeri = [12, 5, 8, 3, 15, 7, 20, 1, 9];

// Scrivi qui il tuo codice
let somma = 0;

for ( let i=0; i<numeri.length; i++){
    if ( numeri[i] % 2 == 0 ){
        console.log(numeri[i]);
    }
    somma = somma + numeri[i];
}

console.log("la somma dei numeri e' -> " , somma);

/*
numeri.forEach(numero => {
    if(numero % 2 == 0 )
});
*/