// SOL-01 - Fetch GET semplice

const btnCarica = document.querySelector("#btnCarica");
const tbodyUtenti = document.querySelector("#tbodyUtenti");

const URL_UTENTI = "https://jsonplaceholder.typicode.com/users";

btnCarica.onclick = async () => {
  // 1° await: parte la richiesta GET verso l'API
  const response = await fetch(URL_UTENTI);

  // 2° await: converto la risposta in un array di oggetti JavaScript
  const utenti = await response.json();

  // guardo sempre la forma dei dati prima di usarli
  console.log(utenti);

  // svuoto la tabella prima di ricostruirla (utile se si clicca più volte)
  tbodyUtenti.innerHTML = "";

  // for...of scorre l'array: per ogni utente aggiungo una riga <tr>
  for (const utente of utenti) {
    tbodyUtenti.innerHTML += `
      <tr>
        <td>${utente.id}</td>
        <td>${utente.name}</td>
        <td>${utente.email}</td>
      </tr>
    `;
  }
};
