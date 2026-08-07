// ES-02 - URL template
//
// CONSEGNA:
// Al click sul pulsante #btnCerca, leggi l'ID scritto in #inputUserId,
// costruisci l'URL sostituendo %ID nel template con quel valore, scarica
// i post di quell'utente e mostra titolo e corpo di ogni post in una card
// Bootstrap dentro #risultatoPost.
//
// Concetti: URL template con .replace(), dati annidati

const inputUserId = document.querySelector("#inputUserId");
const btnCerca = document.querySelector("#btnCerca");
const risultatoPost = document.querySelector("#risultatoPost");

// %ID è il segnaposto da sostituire con l'ID scritto dall'utente
const URL_TEMPLATE = "https://jsonplaceholder.typicode.com/posts?userId=%ID";

btnCerca.onclick = async () => {
  const id = inputUserId.value;
  const url = URL_TEMPLATE.replace("%ID", id);
  
  const response = await fetch(url);
  const data = await response.json();
  for ( let i=0; i<data.length; i++){
    const titolo = data[i].title;
    const corpo = data[i].body;

    const template = `<div class="card mb-3"> 
                        <div class="card-body"> 
                          <h5 class="card-title text-capitalize">%TITLE</h5>
                          <p class="card-text">%BODY</p>
                        </div>
                      </div>`;
   risultatoPost.innerHTML += template.replace("%TITLE", titolo).replace("%BODY",corpo);
  }
};
