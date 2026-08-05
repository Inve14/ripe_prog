// ============================================================
// Esempio 01 - fetch GET semplice
// ============================================================
// Obiettivo: al click del pulsante, chiedere la lista di utenti
// a una API pubblica e mostrarla in una tabella Bootstrap.

// "aggancio" gli elementi HTML tramite il loro id
const btnCarica = document.getElementById("btnCarica");
const tabellaUtenti = document.getElementById("tabellaUtenti");

// URL della API: è una GET, quindi non serve nessun body/metodo speciale
const URL_UTENTI = "https://jsonplaceholder.typicode.com/users";

// colleghiamo la funzione al click del pulsante
// la funzione è "async" perché al suo interno useremo "await"
btnCarica.onclick = async () => {

  // 1° await: fetch(url) fa partire la richiesta HTTP GET e
  // aspetta che il server risponda. Il risultato NON sono ancora
  // i dati, ma un oggetto "Response" (status, headers, body grezzo).
  const response = await fetch(URL_UTENTI);

  // 2° await: response.json() legge il body della risposta e lo
  // trasforma da testo JSON a un vero array/oggetto JavaScript.
  const utenti = await response.json();

  // buona pratica: stampare sempre il risultato per capire come
  // è fatto, prima di scrivere il codice che lo usa
  console.log(utenti);

  // adesso che abbiamo i dati, li disegniamo nella tabella
  render(utenti);
};

// funzione che trasforma l'array di utenti in righe HTML
const render = (utenti) => {
  // riga di intestazione della tabella
  let html = `
    <tr>
      <th>ID</th>
      <th>Nome</th>
      <th>Email</th>
    </tr>
  `;

  // per ogni utente ricevuto dalla API, creo una riga di tabella
  utenti.forEach((utente) => {
    html += `
      <tr>
        <td>${utente.id}</td>
        <td>${utente.name}</td>
        <td>${utente.email}</td>
      </tr>
    `;
  });

  // inserisco tutto l'HTML costruito dentro la tabella
  tabellaUtenti.innerHTML = html;
};
