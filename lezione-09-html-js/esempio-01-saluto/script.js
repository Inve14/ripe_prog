// Esempio 1 - Saluto personalizzato

// querySelector cerca nella pagina l'elemento con quell'id (il "gancio" scritto in HTML).
// Lo salviamo in una variabile per non doverlo ricercare ogni volta.
const inputNome = document.querySelector("#inputNome");
const risultato = document.querySelector("#risultato");
const btnSaluta = document.querySelector("#btnSaluta");


const render = (nome) => {
    risultato.innerHTML = `Ciao <strong>${nome}</strong>, benvenuto!`;
}

// Colleghiamo una funzione al click del pulsante.
// La funzione non viene eseguita subito: viene eseguita SOLO quando l'utente clicca.
btnSaluta.onclick = () => {
  // .value legge il testo scritto dentro l'input in QUESTO momento.
  // Va letto qui dentro, al momento del click: se lo leggessimo fuori da questa
  // funzione, prenderemmo il valore che c'era quando la pagina si è caricata (vuoto).
  console.log("inputNome -> ", inputNome);
  console.log("inputNome.value -> ", inputNome.value);

  const nome = inputNome.value;

  // Se l'utente non ha scritto nulla, mostriamo un messaggio diverso.
  if (nome === "") {
    risultato.innerHTML = "Scrivi prima il tuo nome!";
    return; // usciamo subito dalla funzione, non serve continuare
  }

  // innerHTML scrive dentro il div: possiamo usare anche tag HTML, non solo testo.
  risultato.innerHTML = `Ciao <strong>${nome}</strong>, benvenuto!`;



  //render(nome);
  /*
  const template = "ciao mi chiamo %NOME %COGNOME";
  risultato.innerHTML = template
                          .replace("%NOME", nome)
                          .replace("%COGNOME", cognome);
  */
  /*
  const template = "Ciao NOME, benvenuto!";
  const messaggio = template.replace("NOME", nome);
  risultato.innerHTML = messaggio;
  */
};

