// SOL-02 - URL template

const inputUserId = document.querySelector("#inputUserId");
const btnCerca = document.querySelector("#btnCerca");
const risultatoPost = document.querySelector("#risultatoPost");

const URL_TEMPLATE = "https://jsonplaceholder.typicode.com/posts?userId=%ID";

btnCerca.onclick = async () => {
  const id = inputUserId.value;

  // sostituisco il segnaposto %ID con il valore letto dall'input
  const url = URL_TEMPLATE.replace("%ID", id);
  console.log(url);

  const response = await fetch(url);
  const posts = await response.json();

  // ogni elemento di posts è un oggetto con userId, id, title, body:
  // titolo e corpo sono "dati annidati" dentro ogni singolo post
  console.log(posts);

  risultatoPost.innerHTML = "";

  for (const post of posts) {
    risultatoPost.innerHTML += `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title text-capitalize">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
    `;
  }
};
