/*
ESERCIZIO 10 — CocktailDB (AJAX con gestione dei dati mancanti) — SOLUZIONE
*/

const inputNomeCocktail = document.querySelector("#nomeCocktail");
const btnCerca = document.querySelector("#btnCerca");
const corpoTabella = document.querySelector("#corpoTabella");
const divMessaggio = document.querySelector("#messaggio");

const urlModello = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=NOME";

btnCerca.onclick = async function () {
    const nome = inputNomeCocktail.value;
    const url = urlModello.replace("NOME", nome);

    const risposta = await fetch(url);
    const dati = await risposta.json();

    console.log(dati);

    // Se la ricerca non trova nulla, l'API restituisce "drinks": null.
    // Con || [] trasformiamo quel null in un array vuoto, così il ciclo
    // sotto semplicemente non fa nessun giro invece di far crashare la pagina.
    const cocktail = dati.drinks || [];

    corpoTabella.innerHTML = "";
    divMessaggio.innerHTML = "";

    if (cocktail.length === 0) {
        divMessaggio.innerHTML = "Nessun risultato";
        return;
    }

    for (const drink of cocktail) {
        corpoTabella.innerHTML +=
            "<tr><td>" + drink.strDrink + "</td>" +
            "<td><img src='" + drink.strDrinkThumb + "' width='80'></td></tr>";
    }
};
