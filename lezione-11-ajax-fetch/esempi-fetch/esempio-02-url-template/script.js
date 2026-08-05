// ============================================================
// Esempio 02 - fetch GET con URL dinamica (URL template)
// ============================================================
// Obiettivo: cercare i cocktail che contengono un certo
// ingrediente, scritto dall'utente in un input.

const inputIngrediente = document.getElementById("inputIngrediente");
const btnCerca = document.getElementById("btnCerca");
const tabellaCocktail = document.getElementById("tabellaCocktail");

// URL "modello" della CocktailDB: contiene un segnaposto %INGREDIENTE
// al posto del vero ingrediente, che sostituiremo ogni volta con
// il valore scritto dall'utente.
const URL_TEMPLATE = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=%INGREDIENTE";

btnCerca.onclick = async () => {
  // leggo il valore scritto dall'utente SOLO dentro l'onclick,
  // mai fuori, perché fuori l'input potrebbe non essere ancora
  // stato compilato
  const ingrediente = inputIngrediente.value;

  // costruisco l'URL vero sostituendo il segnaposto %INGREDIENTE
  // con il valore scritto dall'utente: .replace(cosa_cercare, con_cosa_sostituire)
  const url = URL_TEMPLATE.replace("%INGREDIENTE", ingrediente);
  console.log(url); // utile per controllare che l'URL sia corretto

  // 1° await: parte la richiesta GET verso la URL costruita
  const response = await fetch(url);

  // 2° await: converto il body della risposta in oggetto JavaScript
  const data = await response.json();
  console.log(data); // sempre bene guardare la forma dei dati ricevuti

  // la CocktailDB, se non trova nulla, risponde con drinks: null
  // (invece di un array vuoto), quindi gestiamo anche questo caso
  const cocktails = data.drinks || [];

  render(cocktails);
};

const render = (cocktails) => {
  let html = `
    <tr>
      <th>ID</th>
      <th>Nome</th>
      <th>Immagine</th>
    </tr>
  `;

  cocktails.forEach((cocktail) => {
    html += `
      <tr>
        <td>${cocktail.idDrink}</td>
        <td>${cocktail.strDrink}</td>
        <td><img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" width="80"></td>
      </tr>
    `;
  });

  tabellaCocktail.innerHTML = html;
};
