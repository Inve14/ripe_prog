// SOL-01 - Fetch GET semplice

const btnCarica = document.querySelector("#btnCarica");
const tbodyUtenti = document.querySelector("#tbodyUtenti");

const URL_UTENTI = "https://jsonplaceholder.typicode.com/users";

btnCarica.onclick = async () => {
  // 1° await: parte la richiesta GET
  const response = await fetch(URL_UTENTI);
  // 2° await: converto la risposta in dati JavaScript
  const utenti = await response.json();

  console.log(utenti);

  tbodyUtenti.innerHTML = "";
  utenti.forEach((u) => {
    tbodyUtenti.innerHTML += `<tr><td>${u.id}</td><td>${u.name}</td><td>${u.email}</td></tr>`;
  });
};
