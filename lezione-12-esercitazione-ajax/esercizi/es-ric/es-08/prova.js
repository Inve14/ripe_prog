(async () => {
    const API_KEY = "fc652c0e93a32ff7a80e5eadc0d9fb61";
    const URL_FILM = `https://api.themoviedb.org/3/trending/movie/day?api_key=%API`;

    const url = URL_FILM.replace("%API", API_KEY);

    const response = await fetch(url);
    const data = await response.json();

    //console.log(data.results[0]);
    const titolo = data.results[0].title;
    const img = data.results[0].poster_path;
    const voto = data.results[0].vote_average;

    console.log("titolo ->", titolo);
    console.log("img ->", img);
    console.log("voto ->", voto);
})();