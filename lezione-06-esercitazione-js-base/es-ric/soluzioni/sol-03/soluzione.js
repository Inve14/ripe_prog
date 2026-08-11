// Soluzione ES-03 — For classico
// Consegna: stampa i numeri da 1 a 20, aggiungendo "(multiplo di 3)" ai multipli di 3.

// L'operatore % (modulo) restituisce il resto della divisione.
// Se il resto della divisione per 3 è 0, il numero è multiplo di 3.
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(`${i} (multiplo di 3)`);
  } else {
    console.log(i);
  }
}
