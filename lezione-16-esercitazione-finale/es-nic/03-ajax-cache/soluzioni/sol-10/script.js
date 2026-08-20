// SOL-10 - Film di tendenza con preferiti

const btnCarica = document.querySelector("#btnCarica");
const tbodyFilm = document.querySelector("#tbodyFilm");
const esito = document.querySelector("#esito");

const API_KEY = "fc652c0e93a32ff7a80e5eadc0d9fb61";
const URL_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";
const CHIAVE_PREFERITI = "film-preferiti-es10";

let film = [];
let preferiti = [];

function render() {
  tbodyFilm.innerHTML = "";

  film.forEach((f, i) => {
    tbodyFilm.innerHTML += `
      <tr>
        <td>${f.title}</td>
        <td>${f.vote_average}</td>
        <td><button class="btn btn-sm btn-outline-primary btn-preferito" data-indice="${i}">Salva preferito</button></td>
      </tr>
    `;
  });

  // i pulsanti sono nuovi ad ogni render: li ricolleghiamo ora
  const bottoniPreferiti = document.querySelectorAll(".btn-preferito");
  bottoniPreferiti.forEach((bottone) => {
    bottone.onclick = async () => {
      const indice = parseInt(bottone.dataset.indice);
      const f = film[indice];

      preferiti.push({ title: f.title, vote_average: f.vote_average });
      esito.innerHTML = `<span class="text-success">${f.title} salvato tra i preferiti!</span>`;

      await salvaPreferitiInCache();
    };
  });
}

async function salvaPreferitiInCache() {
  await fetch(URL_SET, {
    method: "POST",
    headers: { "Content-Type": "application/json", "key": TOKEN },
    body: JSON.stringify({ key: CHIAVE_PREFERITI, value: JSON.stringify(preferiti) })
  });
}

btnCarica.onclick = async () => {
  const response = await fetch(URL_TRENDING);
  const dati = await response.json();

  console.log(dati);

  film = dati.results;
  render();
};
