// SOL-08 - Tabella studenti

const formStudente = document.querySelector("#formStudente");
const inputNome = document.querySelector("#inputNome");
const inputVoto = document.querySelector("#inputVoto");
const corpoTabella = document.querySelector("#corpoTabella");
const btnSvuota = document.querySelector("#btnSvuota");

// Array di dizionari: ogni studente è un oggetto { nome, voto }.
let studenti = [];

function render() {
  corpoTabella.innerHTML = "";

  studenti.forEach((studente) => {
    const promosso = studente.voto >= 6;
    const classeBadge = promosso ? "bg-success" : "bg-danger";
    const testoBadge = promosso ? "Promosso" : "Bocciato";

    // Template con segnaposto e .replace(): alternativa ai template literal
    // diretti, utile quando la riga HTML è lunga o riutilizzata più volte.
    const rigaTemplate = `
      <tr>
        <td>{{nome}}</td>
        <td>{{voto}}</td>
        <td><span class="badge {{classe}}">{{testo}}</span></td>
      </tr>
    `;

    const riga = rigaTemplate
      .replace("{{nome}}", studente.nome)
      .replace("{{voto}}", studente.voto)
      .replace("{{classe}}", classeBadge)
      .replace("{{testo}}", testoBadge);

    corpoTabella.innerHTML += riga;
  });
}

formStudente.onsubmit = function (event) {
  // Impediamo il comportamento di default del submit (ricaricare la pagina).
  event.preventDefault();

  const nome = inputNome.value;
  const voto = parseFloat(inputVoto.value);

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
