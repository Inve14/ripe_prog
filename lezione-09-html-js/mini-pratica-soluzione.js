// MINI PRATICA - SOLUZIONE
// Registro studenti con media in tempo reale.

// 1. Selezioniamo tutti gli elementi della pagina di cui abbiamo bisogno.
const inputNome = document.querySelector("#inputNome");
const inputVoto = document.querySelector("#inputVoto");
const btnAggiungi = document.querySelector("#btnAggiungi");
const lista = document.querySelector("#lista");
const mediaDiv = document.querySelector("#media");

// 2. I dati veri stanno qui: un array di dizionari, uno per ogni studente.
let studenti = [];

// 3. render() ridisegna sia la lista che la media, leggendo l'array studenti.
function render() {
  // Ricostruiamo la lista da zero, un <li> per ogni studente.
  lista.innerHTML = "";
  studenti.forEach(function (studente) {
    lista.innerHTML += `<li class="list-group-item">${studente.nome} — ${studente.voto}</li>`;
  });

  // Calcoliamo la media, gestendo il caso "nessuno studente ancora".
  if (studenti.length === 0) {
    mediaDiv.innerText = "Nessuno studente ancora.";
    return;
  }

  // Sommiamo tutti i voti con reduce, poi dividiamo per il numero di studenti.
  const somma = studenti.reduce(function (accumulatore, studente) {
    return accumulatore + studente.voto;
  }, 0);
  const media = somma / studenti.length;

  // toFixed(2) arrotonda a due cifre decimali, per una lettura più pulita.
  mediaDiv.innerText = `Media attuale: ${media.toFixed(2)}`;
}

// 4. Evento: click su Aggiungi -> Azione: aggiorno l'array -> Reazione: render().
btnAggiungi.onclick = function () {
  const nome = inputNome.value;

  // parseFloat perché il voto può avere anche i decimali (es. 6.5).
  const voto = parseFloat(inputVoto.value);

  // Validazione: nome non vuoto e voto convertito correttamente in numero.
  if (nome === "" || isNaN(voto)) {
    return;
  }

  studenti.push({ nome: nome, voto: voto }); // azione: nuovo dato nell'array

  inputNome.value = "";
  inputVoto.value = "";

  render(); // reazione: lista e media aggiornate a schermo
};

// Chiamiamo render() anche subito all'avvio, così il messaggio "Nessuno
// studente ancora" compare fin da quando si apre la pagina, non solo dopo il primo click.
render();
