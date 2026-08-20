// ES-01 — Fetch GET semplice
//
// CONSEGNA:
// Pulsante "Carica". Fetch a https://jsonplaceholder.typicode.com/users.
// Mostra id, nome ed email in una tabella.
//
// Concetti: fetch, async/await, i due await

// Scrivi qui il tuo codice

const button = document.querySelector("#button");
const tbody = document.querySelector("#corpoTabella")

const render = (persona) => {
    const id = persona.id;
    const nome = persona.name;
    const email = persona.email;
    const template = `
    <tr>
        <td>%ID</td>
        <td>%NOME</td>
        <td>%EMAIL</td>
    </tr>
    `;
    
    tbody.innerHTML += template.replace("%ID", id).replace("%NOME", nome).replace("%EMAIL", email);
    
    
}

button.onclick = async() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((persona) => {


        render(persona);
    });
}