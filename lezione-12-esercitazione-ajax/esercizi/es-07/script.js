// ES-07 - CocktailDB
//
// CONSEGNA:
// Al click sul pulsante #btnCerca, leggi il nome scritto in #inputNome,
// costruisci l'URL sostituendo %NOME nel template e cerca i cocktail con
// quel nome (endpoint "search", NON "filter" per ingrediente). Mostra id,
// nome e immagine in una riga di tabella per ogni cocktail trovato dentro
// #tbodyCocktail. Se "drinks" è null, mostra un messaggio invece della
// tabella vuota.
//
// Concetti: URL template, gestione null con ||, immagine nel DOM

const inputNome = document.querySelector("#inputNome");
const btnCerca = document.querySelector("#btnCerca");
const tbodyCocktail = document.querySelector("#tbodyCocktail");

// %NOME è il segnaposto da sostituire con il testo scritto dall'utente
const URL_TEMPLATE = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=%NOME";

btnCerca.onclick = async () => {
  // scrivi qui il codice:
  // 1. leggi il nome dall'input e costruisci l'URL con .replace()
  // 2. fai la fetch, converti la risposta con .json()
  // 3. l'API risponde con { drinks: [...] } oppure { drinks: null } se
  //    non trova nulla: usa "data.drinks || []" per avere sempre un array
  //    su cui iterare senza errori
  // 4. per ogni cocktail crea una riga con idDrink, strDrink, e l'immagine
  //    strDrinkThumb dentro un tag <img>
};
