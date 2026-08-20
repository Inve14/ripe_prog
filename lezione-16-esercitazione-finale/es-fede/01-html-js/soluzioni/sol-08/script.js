// SOL-08 - Media in tempo reale

const inputNome = document.querySelector("#inputNome");
const inputVoto = document.querySelector("#inputVoto");
const btnAggiungi = document.querySelector("#btnAggiungi");
const btnSvuota = document.querySelector("#btnSvuota");
const lista = document.querySelector("#lista");
const media = document.querySelector("#media");

let studenti = [];

function render() {
  lista.innerHTML = "";
  studenti.forEach((s) => {
    lista.innerHTML += `<li class="list-group-item">${s.nome}: ${s.voto}</li>`;
  });

  if (studenti.length === 0) {
    media.innerText = "Media: -";
    return;
  }

  // reduce accumula la somma dei voti, poi dividiamo per il numero di studenti
  const somma = studenti.reduce((acc, s) => acc + s.voto, 0);
  const valoreMedia = somma / studenti.length;
  media.innerText = `Media: ${valoreMedia.toFixed(1)}`;
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
