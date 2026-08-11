(async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    const id = data[0].id;
    const nome = data[0].name;
    const email = data[0].email;
    const citta = data[0].address.city;
})();
