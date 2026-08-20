// SOL-03 - Fetch GET con dati annidati

const btnCarica = document.querySelector("#btnCarica");
const tbodyUtenti = document.querySelector("#tbodyUtenti");

const URL_UTENTI = "https://jsonplaceholder.typicode.com/users";

btnCarica.onclick = async () => {
  const response = await fetch(URL_UTENTI);
  const utenti = await response.json();

  console.log(utenti);

  tbodyUtenti.innerHTML = "";
  utenti.forEach((u) => {
    // address è un oggetto dentro u: ci si accede con u.address.city
    tbodyUtenti.innerHTML += `<tr><td>${u.name}</td><td>${u.email}</td><td>${u.address.city}</td></tr>`;
  });
};
