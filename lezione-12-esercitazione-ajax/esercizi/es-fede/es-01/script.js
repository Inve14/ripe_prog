// ES-01 - Fetch GET semplice
//
// CONSEGNA:
// Al click sul pulsante #btnCarica, scarica la lista utenti da
// https://jsonplaceholder.typicode.com/users e mostrala dentro #tbodyUtenti,
// una riga <tr> per ogni utente con le colonne ID, Nome, Email.
//
// Concetti: fetch, await, response.json(), for...of per costruire la tabella

const btnCarica = document.querySelector("#btnCarica");
const tbodyUtenti = document.querySelector("#tbodyUtenti");

const URL_UTENTI = "https://jsonplaceholder.typicode.com/users";

const render = (id, nome, email) => {
  const template = `
                    <tr>
                        <td>%ID</td>
                        <td>%NOME</td>
                        <td>%EMAIL</td>
                    </tr>
                    `;
    tbodyUtenti.innerHTML += template.replace("%ID", id).replace("%NOME", nome).replace("%EMAIL", email);
};

btnCarica.onclick = async () => {
  const response = await fetch(URL_UTENTI);
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const id = data[i].id;
    const nome = data[i].name;
    const email = data[i].email;
    render(id, nome, email);
  }
};


