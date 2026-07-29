// SOL-01 - Saluto personalizzato

const inputNome = document.querySelector("#inputNome");
const btnSaluta = document.querySelector("#btnSaluta");
const messaggio = document.querySelector("#messaggio");

// EVENTO: click su "Saluta".
btnSaluta.onclick = function () {
  // .value va letto qui dentro, nel momento del click, non fuori dalla funzione.
  const nome = inputNome.value;

  // REAZIONE: scriviamo il saluto nel div. innerHTML basta perché qui
  // non serve nessun tag HTML, ma useremmo innerHTML anche per costruire
  // pezzi più complessi (es. con <strong>).
  messaggio.innerHTML = `Ciao ${nome}!`;
};
