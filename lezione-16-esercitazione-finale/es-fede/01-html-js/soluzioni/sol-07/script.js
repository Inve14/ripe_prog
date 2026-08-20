// SOL-07 - Tabella studenti

const inputNome = document.querySelector("#inputNome");
const inputVoto = document.querySelector("#inputVoto");
const btnAggiungi = document.querySelector("#btnAggiungi");
const btnSvuota = document.querySelector("#btnSvuota");
const tbodyStudenti = document.querySelector("#tbodyStudenti");

let studenti = [];

function render() {
  tbodyStudenti.innerHTML = "";

  studenti.forEach((studente) => {
    const stato = studente.voto >= 6 ? "Promosso" : "Bocciato";
    const template = "<tr><td>{nome}</td><td>{voto}</td><td>{stato}</td></tr>";

    tbodyStudenti.innerHTML += template
      .replace("{nome}", studente.nome)
      .replace("{voto}", studente.voto)
      .replace("{stato}", stato);
  });
}

btnAggiungi.onclick = function () {
  const nome = inputNome.value;
  const voto = parseInt(inputVoto.value);

  if (nome === "" || isNaN(voto)) {
    return;
  }

  studenti.push({ nome: nome, voto: voto });
  inputNome.value = "";
  inputVoto.value = "";
  render();
};

btnSvuota.onclick = function () {
  studenti = [];
  render();
};

render();
