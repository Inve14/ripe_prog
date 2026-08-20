// SOL-02 - Fetch GET con URL template (test con Node)
// Esegui con: node prova.js

const URL_POST = "https://jsonplaceholder.typicode.com/posts?userId=%ID";

async function prova() {
  const url = URL_POST.replace("%ID", 1);
  const response = await fetch(url);
  const post = await response.json();
  console.log(post);
}

prova();
