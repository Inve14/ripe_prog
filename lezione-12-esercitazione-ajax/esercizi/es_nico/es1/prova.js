(async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data[0]);
    const id = data[0].id;
    const nome = data[0].name;
    const email = data[0].email;
    console.log(id);
    console.log(nome);
    console.log(email);

})();
