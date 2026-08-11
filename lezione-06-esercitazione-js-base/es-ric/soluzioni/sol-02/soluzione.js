// Soluzione ES-02 — If/else
// Consegna: dato un voto, stampa "Promosso" se >= 6, "Bocciato" altrimenti.
// Se il voto è 10 stampa "Ottimo!".

const voto = 7;

// Controlliamo prima il caso speciale (10), poi la condizione generale.
// L'ordine conta: se mettessimo prima "voto >= 6" il caso 10 non verrebbe
// mai raggiunto, perché 10 soddisfa anche quella condizione.
if (voto === 10) {
  console.log("Ottimo!");
} else if (voto >= 6) {
  console.log("Promosso");
} else {
  console.log("Bocciato");
}
