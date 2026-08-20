// SOL-02 - Pari o dispari

const inputNumero = document.querySelector("#inputNumero");
const btnVerifica = document.querySelector("#btnVerifica");
const risultato = document.querySelector("#risultato");

btnVerifica.onclick = function () {
  const testo = inputNumero.value;

  if (testo === "") {
    risultato.innerHTML = `<span class="text-danger">Inserisci un numero!</span>`;
    return;
  }

  const numero = parseInt(testo);

  // % restituisce il resto della divisione: 0 se il numero è pari
  if (numero % 2 === 0) {
    risultato.innerHTML = `${numero} è pari`;
  } else {
    risultato.innerHTML = `${numero} è dispari`;
  }
};
