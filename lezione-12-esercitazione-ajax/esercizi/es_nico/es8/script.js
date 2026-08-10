const btnCarica = document.querySelector("#btnCarica");
const risultatoFilm = document.querySelector("#risultatoFilm");


const API_KEY = "fc652c0e93a32ff7a80e5eadc0d9fb61";


const URL_FILM = `https://api.themoviedb.org/3/trending/movie/day?api_key=%API`;


const URL_POSTER = "https://image.tmdb.org/t/p/w200";


btnCarica.onclick = async () => {

    const url = URL_FILM.replace("%API", API_KEY);


    const response = await fetch(url);


    const data = await response.json();



    console.log(data);
    const film = data.results;


    risultatoFilm.innerHTML = "";

    for (const f of film) {
        risultatoFilm.innerHTML += `
      <div>
        <div >
          <img src="${URL_POSTER + f.poster_path}" alt="${f.title}">


          <div>


            <h5>${f.title}</h5>


            <p>Voto: ${f.vote_average}</p>


          </div>
        </div>
      </div>
    `;
    }
};
