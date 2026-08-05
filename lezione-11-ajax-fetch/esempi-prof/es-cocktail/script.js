// ============================================================
// ESERCIZIO - Cocktail (CocktailDB)
// ============================================================
// Dato un ingrediente inserito dall'utente, cerca tutti i cocktail
// che lo contengono e mostrali in una tabella con id, nome e immagine.
// ============================================================

// --- BINDING ---
const inputIngrediente = document.getElementById("inputIngrediente");
const btnCerca         = document.getElementById("btnCerca");
const tabellaCocktail  = document.getElementById("tabellaCocktail");

// --- URL TEMPLATE ---
const URL_TEMPLATE = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=%INGREDIENTE";

// --- EVENTO ---
btnCerca.onclick = async () => {
  
  const ingrediente = inputIngrediente.value;
  const url = URL_TEMPLATE.replace("%INGREDIENTE", ingrediente);

  const response = await fetch(url);
  const data = await response.json();

  const nome_drink = data.drinks[0].strDrink;
  //const img_drink = data.drinks[0].strDrinkThumb;

  render(nome_drink);

};

// --- RENDER ---
const render = (cocktail) => {

    tabellaCocktail.innerText = "nome cocktail -> " + cocktails;

};