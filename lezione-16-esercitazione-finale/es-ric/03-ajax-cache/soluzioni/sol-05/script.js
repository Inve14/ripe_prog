// SOL-05 - CocktailDB

const inputNome = document.querySelector("#inputNome");
const btnCerca = document.querySelector("#btnCerca");
const risultato = document.querySelector("#risultato");

const URL_COCKTAIL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=%NOME";

btnCerca.onclick = async () => {
  const nome = inputNome.value;
  const url = URL_COCKTAIL.replace("%NOME", nome);

  const response = await fetch(url);
  const dati = await response.json();

  console.log(dati);

  // se non trova nulla, l'API restituisce { drinks: null }
  if (dati.drinks === null) {
    risultato.innerHTML = `<span class="text-danger">Nessun cocktail trovato.</span>`;
    return;
  }

  const drink = dati.drinks[0];
  risultato.innerHTML = `
    <h5>${drink.strDrink}</h5>
    <img src="${drink.strDrinkThumb}" width="200">
  `;
};
