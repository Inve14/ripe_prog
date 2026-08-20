// SOL-10 - Film di tendenza con preferiti (test con Node)
// Esegui con: node prova.js

const API_KEY = "fc652c0e93a32ff7a80e5eadc0d9fb61";
const URL_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

async function prova() {
  const response = await fetch(URL_TRENDING);
  const dati = await response.json();
  console.log(dati.results[0]);
}

prova();
