// SOL-09 - Progetto completo: salva film preferiti

const btnCarica = document.querySelector("#btnCarica");
const risultatoFilm = document.querySelector("#risultatoFilm");
const listaPreferiti = document.querySelector("#listaPreferiti");

// --- TMDB ---
const API_KEY = "fc652c0e93a32ff7a80e5eadc0d9fb61";
const URL_FILM = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
const URL_POSTER = "https://image.tmdb.org/t/p/w200";

// --- Cache remota ---
const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";
const CHIAVE_PREFERITI = "preferiti-lezione12";

// array locale con i film salvati: viene riempito leggendo la cache
// all'avvio (caricaPreferitiSalvati) e aggiornato ogni volta che si
// salva un nuovo film (btnSalva.onclick)
let preferiti = [];

// pattern render(): ridisegna SEMPRE tutta la lista a partire
// dall'array "preferiti", invece di aggiungere singoli pezzi di HTML
function renderPreferiti() {
  listaPreferiti.innerHTML = "";

  if (preferiti.length === 0) {
    listaPreferiti.innerHTML = `<p class="text-muted">Nessun film salvato ancora.</p>`;
    return;
  }

  for (const f of preferiti) {
    listaPreferiti.innerHTML += `
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
}

// SEZIONE 1: carica i film di tendenza
btnCarica.onclick = async () => {
  const response = await fetch(URL_FILM);
  const data = await response.json();
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
            <!-- data-id: ci serve dopo per ritrovare a quale film
                 corrisponde questo pulsante -->
            <button class="btn btn-outline-success btnSalva" data-id="${f.id}">Salva nei preferiti</button>
          </div>
        </div>
      </div>
    `;
  }

  // le card sono state appena create con innerHTML, quindi i pulsanti
  // ".btnSalva" non esistevano ancora prima: li cerco ORA e assegno
  // a ognuno il proprio onclick
  const bottoniSalva = document.querySelectorAll(".btnSalva");

  for (const bottone of bottoniSalva) {
    bottone.onclick = async () => {
      // recupero l'id salvato nell'attributo data-id (è una stringa,
      // per questo lo confronto con Number() per farlo combaciare
      // con f.id che è un numero)
      const id = Number(bottone.dataset.id);
      const filmScelto = film.find((f) => f.id === id);

      preferiti.push(filmScelto);

      // salvo l'intero array aggiornato nella cache remota
      const response = await fetch(URL_SET, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "key": TOKEN
        },
        body: JSON.stringify({
          key: CHIAVE_PREFERITI,
          value: JSON.stringify(preferiti)
        })
      });
      await response.json();

      // aggiorno subito la lista in basso con il nuovo film incluso
      renderPreferiti();
    };
  }
};

// SEZIONE 2: al caricamento della pagina, leggo i preferiti già
// salvati in precedenza nella cache remota
async function caricaPreferitiSalvati() {
  const response = await fetch(URL_GET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": TOKEN
    },
    body: JSON.stringify({ key: CHIAVE_PREFERITI })
  });

  const data = await response.json();
  console.log(data);

  // se in cache non c'era ancora nulla, data.result è un oggetto
  // (non una stringa): in quel caso "preferiti" resta un array vuoto
  if (typeof data.result === "string") {
    preferiti = JSON.parse(data.result);
  }

  renderPreferiti();
}

// chiamata SUBITO, senza aspettare click: così la lista è già pronta
// quando la pagina finisce di caricarsi
caricaPreferitiSalvati();
