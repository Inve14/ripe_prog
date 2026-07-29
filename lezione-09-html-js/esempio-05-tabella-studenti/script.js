// Esempio 5 - Tabella studenti (pattern EAR completo)

const formStudente = document.querySelector("#formStudente");
const inputNome = document.querySelector("#inputNome");
const inputVoto = document.querySelector("#inputVoto");
const corpoTabella = document.querySelector("#corpoTabella");
const btnSvuota = document.querySelector("#btnSvuota");

// I dati sono un array di dizionari: ogni studente è un oggetto { nome, voto }.
// Questo array è l'unica fonte di verità: la tabella HTML è solo la sua "fotografia".
let studenti = [];

// render() ricrea da zero l'intero corpo della tabella, leggendo l'array studenti.
// Conviene lavorare così (invece di aggiungere righe una a una con appendChild)
// perché in questo modo la tabella è SEMPRE coerente con i dati: se cambio
// l'array in un punto qualsiasi del codice, mi basta richiamare render().
function render() {
  corpoTabella.innerHTML = "";

  studenti.forEach((studente) => {
    // Il voto decide il colore e il testo del badge: verde se sufficiente, rosso altrimenti.
    const promosso;
    if(studente.voto>=6){
      promosso = true;
    } else {
      promosso = false;
    }
    const classeBadge = promosso ? "bg-success" : "bg-danger";
    const testoBadge = promosso ? "Promosso" : "Bocciato";

    corpoTabella.innerHTML += `
      <tr>
        <td>${studente.nome}</td>
        <td>${studente.voto}</td>
        <td><span class="badge ${classeBadge}">${testoBadge}</span></td>
      </tr>
    `;
  });
}

// EVENTO: submit del form (click su "Aggiungi" o invio da tastiera).
formStudente.onsubmit = function (event) {
  // Il submit di un form ricarica la pagina di default: lo impediamo,
  // perché vogliamo restare su questa pagina e gestire tutto noi con JS.
  event.preventDefault();

  const nome = inputNome.value;
  const voto = parseFloat(inputVoto.value);

  if (nome === "" || isNaN(voto)) {
    return; // dati non validi, non aggiungiamo nulla
  }

  // AZIONE: aggiorniamo i dati, aggiungendo un nuovo dizionario all'array.
  studenti.push({ nome: nome, voto: voto });

  // Puliamo il form per il prossimo inserimento.
  inputNome.value = "";
  inputVoto.value = "";

  // REAZIONE: ridisegniamo la tabella con i dati aggiornati.
  render();
};

// EVENTO: click su "Svuota tabella".
btnSvuota.onclick = function () {
  studenti = [];   // AZIONE: svuoto l'array
  render();        // REAZIONE: la tabella torna vuota
};
