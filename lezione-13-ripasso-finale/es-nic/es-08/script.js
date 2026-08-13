// ES-08 — Lista dinamica con svuota
//
// CONSEGNA:
// Input + pulsante "Aggiungi" + pulsante "Svuota".
// Aggiunge elementi a una lista <ul>. Usa array + render().


// Scrivi qui il tuo codice

const input = document.querySelector("#inputelemento");
const aggiungi = document.querySelector("#btnaggiungi");
const svuota = document.querySelector("#btnsvuota");
const ulrisultato = document.querySelector("#risultato");

let lista = [];

const render = () => {
    ulrisultato.innerHTML = "";
    const template = "<li>%ELEMENTO</li>";
    lista.forEach(elemento => {
        ulrisultato.innerHTML += template.replace("%ELEMENTO", elemento);
    });
    /*
    for (let i = 0; i < lista.length; i++) {
        elemento = lista[i];
        ulrisultato.innerHTML += template.replace("%ELEMENTO", elemento);

    }
    */
}

aggiungi.onclick = () => {
    const elemento = input.value;
    lista.push(elemento);
    input.value = "";
    render();
}

svuota.onclick = () => {
    lista = [];
    render();
}