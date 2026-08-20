// ES-01 — Fetch GET semplice (test con Node)
//
// Prova qui con Node la fetch prima di scriverla in script.js.
// Esegui con: node prova.js
//
// URL: https://jsonplaceholder.typicode.com/users
//
// Concetti: fetch, await, response.json(), console.log per capire la struttura dei dati

// Scrivi qui il tuo codice


(async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    const id = data[0].id;
    const nome = data[0].name;
    const email = data[0].email;
    console.log(id);
    console.log(nome);
    console.log(email);

})();