// SOL-07 - CocktailDB

const inputNome = document.querySelector("#inputNome");
const btnCerca = document.querySelector("#btnCerca");
const tbodyCocktail = document.querySelector("#tbodyCocktail");

const URL_TEMPLATE = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=%NOME";

btnCerca.onclick = async () => {
  const nome = inputNome.value;

  const url = URL_TEMPLATE.replace("%NOME", nome);
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  console.log(data); // { drinks: [...] } oppure { drinks: null } se non trova nulla

  // "data.drinks || []": se drinks è null usiamo un array vuoto al suo
  // posto, così il for...of sotto non genera errori e la tabella resta
  // semplicemente vuota
  const cocktail = data.drinks || [];

  tbodyCocktail.innerHTML = "";

  if (cocktail.length === 0) {
    tbodyCocktail.innerHTML = `<tr><td colspan="3">Nessun cocktail trovato.</td></tr>`;
    return;
  }

  for (const drink of cocktail) {
    tbodyCocktail.innerHTML += `
      <tr>
        <td>${drink.idDrink}</td>
        <td>${drink.strDrink}</td>
        <td><img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="80"></td>
      </tr>
    `;
  }
};
