// SOL-02 - Fetch GET con URL template

const inputUserId = document.querySelector("#inputUserId");
const btnCerca = document.querySelector("#btnCerca");
const listaPost = document.querySelector("#listaPost");

const URL_POST = "https://jsonplaceholder.typicode.com/posts?userId=%ID";

btnCerca.onclick = async () => {
  const id = inputUserId.value;
  const url = URL_POST.replace("%ID", id);

  const response = await fetch(url);
  const post = await response.json();

  console.log(post);

  listaPost.innerHTML = "";
  post.forEach((p) => {
    listaPost.innerHTML += `<li class="list-group-item">${p.title}</li>`;
  });
};
