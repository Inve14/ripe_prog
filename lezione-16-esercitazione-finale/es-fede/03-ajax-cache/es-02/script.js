// ES-02 — Fetch GET con URL template
//
// CONSEGNA:
// Input userId + pulsante "Cerca". Fetch a
// https://jsonplaceholder.typicode.com/posts?userId=%ID.
// Mostra il titolo dei post trovati in una lista.
//
// Concetti: URL template con .replace()

// Scrivi qui il tuo codice

const userId = document.querySelector("#userId");
const button = document.querySelector("#button");
const lista = document.querySelector("#lista");

const render = (titolo) => {
    const template = `
    <li>%TITLE</li>
    `;
  lista.innerHTML += template.replace("%TITLE",titolo);
}

button.onclick = async () => {
    const id = parseFloat(userId.value);
    const urlTemplate = "https://jsonplaceholder.typicode.com/posts?userId=%ID"
    const url = urlTemplate.replace("%ID", id);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.forEach((elemento) => {
        render(elemento.title);
    })
}