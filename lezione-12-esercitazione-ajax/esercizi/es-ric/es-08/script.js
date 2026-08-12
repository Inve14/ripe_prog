// ES-08 - Film di tendenza
//
// CONSEGNA:
// Al click sul pulsante #btnCarica, scarica i film di tendenza del giorno
// da TMDB usando la API_KEY fornita, e mostra titolo, poster e voto in
// una card Bootstrap dentro #risultatoFilm per ogni film.
//
// NOTA sulla chiave API: la chiave qui sotto è una chiave "v3" di TMDB.
// Con questo tipo di chiave TMDB vuole il parametro api_key direttamente
// nell'URL (non nell'header Authorization, che serve solo per le chiavi
// "v4" più lunghe) — per questo la trovi già inclusa in URL_FILM.
//
// Concetti: fetch con chiave API nell'URL, dati annidati

const btnCarica = document.querySelector("#btnCarica");
const risultatoFilm = document.querySelector("#risultatoFilm");

const API_KEY = "fc652c0e93a32ff7a80e5eadc0d9fb61";
const URL_FILM = `https://api.themoviedb.org/3/trending/movie/day?api_key=%API`;
const URL_POSTER = "https://image.tmdb.org/t/p/w200";

btnCarica.onclick = async () => {

    const url = URL_FILM.replace("%API", API_KEY);

    const response = await fetch(url);
    const data = await response.json();

    const lista_film = data.results;

    lista_film.forEach(film => {
      //film -> data.response[i]
      const titolo = film.title;
      const img = film.poster_path;
      const voto = film.vote_average;

      render(titolo, img, voto);
    });
};

const render = (titolo, img, voto) =>{
  const template = `<div>
        <div >
          <img src="%IMG" alt="%TITLE">


          <div>


            <h5>%TITLE</h5>


            <p>Voto: %VOTO</p>


          </div>
        </div>
      </div>
      `;

    const immagine = URL_POSTER + img;

    risultatoFilm.innerHTML += template.replace("%IMG", immagine).replaceAll("%TITLE", titolo).replace("%VOTO", voto);
}
