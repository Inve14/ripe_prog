// SOL-05 - CocktailDB (test con Node)
// Esegui con: node prova.js

const URL_COCKTAIL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=%NOME";

async function prova() {
  const url = URL_COCKTAIL.replace("%NOME", "margarita");
  const response = await fetch(url);
  const dati = await response.json();
  console.log(dati);
}

prova();
