// ES-09 - Progetto completo: salva film preferiti
//
// CONSEGNA:
// - Al click su #btnCarica: scarica i film di tendenza da TMDB e mostrali
//   in card dentro #risultatoFilm, ognuna con un pulsante "Salva nei
//   preferiti".
// - Al click su "Salva nei preferiti" di una card: aggiungi quel film
//   all'array "preferiti", salvalo nella cache remota (JSON.stringify) e
//   aggiorna la lista in #listaPreferiti.
// - Al caricamento della pagina (senza bisogno di cliccare nulla): leggi
//   i preferiti già salvati dalla cache remota e mostrali subito in
//   #listaPreferiti.
//
// Concetti: tutto insieme - fetch GET film, fetch POST cache remota,
// JSON.stringify/parse, render()

const btnCarica = document.querySelector("#btnCarica");
const risultatoFilm = document.querySelector("#risultatoFilm");
const listaPreferiti = document.querySelector("#listaPreferiti");

// --- TMDB ---
// chiave "v3": va messa come parametro api_key nell'URL (vedi nota in ES-08)
const API_KEY = "fc652c0e93a32ff7a80e5eadc0d9fb61";
const URL_FILM = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
const URL_POSTER = "https://image.tmdb.org/t/p/w200";

// --- Cache remota ---
const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";
const CHIAVE_PREFERITI = "preferiti-lezione12";

// array locale con i film salvati (viene riempito leggendo la cache
// all'avvio, e aggiornato ogni volta che si salva un nuovo film)
let preferiti = [];

// disegna la lista dei preferiti in #listaPreferiti, a partire
// dall'array "preferiti"
function renderPreferiti() {
  // scrivi qui il codice: per ogni film in "preferiti" crea una card
  // con titolo, poster e voto (stesso schema delle card di ES-08)
}

// SEZIONE 1: carica i film di tendenza
btnCarica.onclick = async () => {
  // scrivi qui il codice:
  // 1. fetch verso URL_FILM, converti con .json() (i film sono in data.results)
  // 2. per ogni film crea una card dentro #risultatoFilm, con un pulsante
  //    "Salva nei preferiti" che ha un attributo data-id="${film.id}"
  // 3. dopo aver disegnato tutte le card, cerca tutti i pulsanti
  //    ".btnSalva" con querySelectorAll e assegna a ognuno un onclick che:
  //    - trova il film corrispondente con .find() confrontando l'id
  //    - lo aggiunge all'array "preferiti"
  //    - salva "preferiti" in cache (POST su URL_SET, con JSON.stringify)
  //    - richiama renderPreferiti() per aggiornare la lista in basso
};

// SEZIONE 2: al caricamento della pagina, leggo subito i preferiti
// già salvati in precedenza nella cache remota
async function caricaPreferitiSalvati() {
  // scrivi qui il codice:
  // 1. fetch POST verso URL_GET con { key: CHIAVE_PREFERITI }
  // 2. se data.result è una stringa, fai JSON.parse per riavere l'array
  //    e assegnalo a "preferiti"; altrimenti lascia "preferiti" vuoto
  // 3. richiama renderPreferiti()
}

caricaPreferitiSalvati();
