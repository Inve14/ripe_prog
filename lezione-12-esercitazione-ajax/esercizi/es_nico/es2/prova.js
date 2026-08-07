(async () => {
    const id = 1;
    const url = "https://jsonplaceholder.typicode.com/posts?userId=" + id;
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    const titolo = data[0].title;
    const body = data[0].body;
    console.log(titolo);
    console.log(body);
})();