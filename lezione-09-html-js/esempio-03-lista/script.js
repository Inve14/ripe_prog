// Esempio 3 - Lista della spesa

const inputElemento = document.querySelector("#inputElemento");
const btnAggiungi = document.querySelector("#btnAggiungi");
const btnSvuota = document.querySelector("#btnSvuota");
const lista = document.querySelector("#lista");

// I dati veri e propri vivono qui, in un array. La pagina HTML NON è la fonte
// della verità: è solo un disegno di quello che c'è dentro questo array.
let elementi = [];

// render() ridisegna TUTTA la lista partendo dall'array.
// Ogni volta che i dati cambiano (aggiunta o svuotamento), richiamiamo render():
// così la pagina è sempre lo specchio esatto dell'array, senza incongruenze.
function render() {
  // Prima puliamo la lista esistente...
  lista.innerHTML = "";

  const template = `<li>%ELEMENTO</li>`;

  // ...poi la ricostruiamo un pezzo alla volta con +=, che vuol dire
  // "aggiungi questo pezzo di HTML a quello che c'è già dentro".
  elementi.forEach((elemento) => {
    lista.innerHTML += template.replace("%ELEMENTO", elemento);
  });


  /*
  lista.innerHTML = "";

  const template = `<li class="list-group-item">ELEMENTO</li>`;

  elementi.forEach(function (elemento) {
    lista.innerHTML += template.replace("ELEMENTO", elemento);
  });
  */

}

// Evento: click su Aggiungi -> Azione: leggo il valore e lo metto nell'array -> Reazione: render()
btnAggiungi.onclick = () => {
  const testo = inputElemento.value;

  if (testo === "") {
    return; // non aggiungiamo elementi vuoti
  }

  elementi.push(testo);   // azione: aggiorno i dati
  inputElemento.value = ""; // pulisco l'input per il prossimo inserimento
  render();               // reazione: ridisegno la lista aggiornata
};

// Evento: click su Svuota -> Azione: svuoto l'array -> Reazione: render()
btnSvuota.onclick = () => {
  elementi = [];
  render();
};
