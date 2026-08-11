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

const render = (titolo, body) => {
  const template = `
                      <div> 
                          <h5>%TITOLO</h5>
                          <p>%BODY</p>
                      </div>
                    `;
  risultatoPost.innerHTML += template.replace("%TITOLO", titolo).replace("%BODY", body);
}

btnCerca.onclick = async () => {
  const id = inputUserId.value;
  const url = URL_TEMPLATE.replace("%ID", id);
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(elemento => {
    const titolo = elemento.title;
    const body = elemento.body;
    render(titolo, body);
  });

};
