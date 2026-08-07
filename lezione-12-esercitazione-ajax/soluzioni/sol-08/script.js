// SOL-08 - Film di tendenza

const btnCarica = document.querySelector("#btnCarica");
const risultatoFilm = document.querySelector("#risultatoFilm");

const API_KEY = "fc652c0e93a32ff7a80e5eadc0d9fb61";
const URL_FILM = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
const URL_POSTER = "https://image.tmdb.org/t/p/w200";

btnCarica.onclick = async () => {
  const response = await fetch(URL_FILM);
  const data = await response.json();

  // i film sono annidati dentro data.results
  console.log(data);
  const film = data.results;

  risultatoFilm.innerHTML = "";

  for (const f of film) {
    risultatoFilm.innerHTML += `
      <div class="col">
        <div class="card h-100">
          <img src="${URL_POSTER + f.poster_path}" class="card-img-top" alt="${f.title}">
          <div class="card-body">
            <h5 class="card-title">${f.title}</h5>
            <p class="card-text">Voto: ${f.vote_average}</p>
          </div>
        </div>
      </div>
    `;
  }
};
