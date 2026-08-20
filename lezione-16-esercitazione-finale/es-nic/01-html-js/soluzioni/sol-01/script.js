// SOL-01 - Saluto con controllo

const inputNome = document.querySelector("#inputNome");
const btnSaluta = document.querySelector("#btnSaluta");
const messaggio = document.querySelector("#messaggio");

btnSaluta.onclick = function () {
  // .value va letto qui dentro, nel momento del click.
  const nome = inputNome.value;

  if (nome === "") {
    messaggio.innerHTML = `<span class="text-danger">Scrivi un nome prima di continuare!</span>`;
    return;
  }

  messaggio.innerHTML = `Ciao ${nome}!`;
};
