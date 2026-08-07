// ES-06 - Cache remota SET + GET
//
// CONSEGNA:
// Unisci ES-04 ed ES-05 in una sola pagina: completa entrambi gli onclick
// qui sotto, uno per salvare (POST /cache/set) e uno per leggere
// (POST /cache/get) una coppia chiave/valore dalla cache remota del prof.
//
// Concetti: due fetch POST nella stessa pagina

// elementi del FORM 1 (Salva)
const inputChiaveSet = document.querySelector("#inputChiaveSet");
const inputValoreSet = document.querySelector("#inputValoreSet");
const btnSalva = document.querySelector("#btnSalva");
const esitoSalva = document.querySelector("#esitoSalva");

// elementi del FORM 2 (Leggi)
const inputChiaveGet = document.querySelector("#inputChiaveGet");
const btnLeggi = document.querySelector("#btnLeggi");
const esitoLeggi = document.querySelector("#esitoLeggi");

// token personale, ottenuto registrandosi su ws.cipiaceinfo.it/register/
const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

// ------------------------------------------------------------
// FORM 1 - SALVA
// ------------------------------------------------------------
btnSalva.onclick = async () => {
  // scrivi qui il codice della fetch POST verso URL_SET
  // (stesso schema di ES-04)
};

// ------------------------------------------------------------
// FORM 2 - LEGGI
// ------------------------------------------------------------
btnLeggi.onclick = async () => {
  // scrivi qui il codice della fetch POST verso URL_GET
  // (stesso schema di ES-05, ricordati il controllo con typeof)
};
