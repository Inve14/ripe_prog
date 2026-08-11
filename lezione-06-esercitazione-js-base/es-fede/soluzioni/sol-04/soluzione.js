// Soluzione ES-04 — While
// Consegna: parti da 100, sottrai 7 ad ogni iterazione, stampa ogni valore,
// fermati quando il valore scende sotto 0.

let numero = 100;

// Il while ripete finché la condizione è vera: qui continuiamo finché
// numero è maggiore o uguale a 0.
while (numero >= 0) {
  console.log(numero);
  numero -= 7;
}
