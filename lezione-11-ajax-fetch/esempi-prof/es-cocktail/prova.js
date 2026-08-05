(async () => {
    const ingrediente = "tequila";
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingrediente;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.drinks[0].strDrink);
})();