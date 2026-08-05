// ============================================================
// TEORIA - AJAX e fetch()
// ============================================================
// Fino ad ora abbiamo scritto pagine che, per cambiare i dati,
// dovevano essere ricaricate (o i dati erano già scritti a mano
// nel codice JavaScript). Con AJAX impariamo come JavaScript può
// "andare a prendere" dati da un server mentre la pagina resta
// aperta, senza mai ricaricarla.
//
// Esegui questo file con: node teoria-ajax.js


// ------------------------------------------------------------
// 1. Cos'è AJAX e perché serve
// ------------------------------------------------------------
// AJAX sta per "Asynchronous JavaScript and XML" (il nome è
// vecchio, oggi si usa quasi sempre JSON al posto di XML, ma il
// nome AJAX è rimasto).
//
// Il modello "classico" di un sito web è questo:
//   1. il browser chiede una pagina con un URL
//   2. il server risponde con l'HTML (e CSS, JS, immagini...)
//   3. il browser mostra tutto e la connessione con il server si chiude
//
// Se voglio dati nuovi, devo ricaricare tutta la pagina da capo.
// È lento e "sfarfalla" (la pagina sparisce e ricompare).
//
// Con AJAX invece:
//   1. il browser scarica la pagina UNA VOLTA (HTML, CSS, JS)
//   2. quando serve, JavaScript apre da solo una connessione al
//      server SOLO per chiedere i dati che servono
//   3. il server risponde (di solito con JSON)
//   4. JavaScript aggiorna solo un pezzo della pagina, senza
//      ricaricarla
//
// Grazie ad AJAX esistono le "RIA" (Rich Internet Application),
// cioè applicazioni web che si comportano quasi come app
// installate: Gmail, Google Docs, Instagram, Netflix...

console.log("--- 1. AJAX ---");
console.log("Pagina classica: ricarico tutto per ogni dato nuovo.");
console.log("Pagina con AJAX: la pagina resta aperta, solo i dati cambiano.");


// ------------------------------------------------------------
// 2. Cos'è una API e come funziona
// ------------------------------------------------------------
// Una API (Application Programming Interface) è il "contratto"
// che un server mette a disposizione per farsi chiedere dati o
// far fare operazioni da un altro programma (nel nostro caso, il
// nostro JavaScript).
//
// Il meccanismo è sempre client → server:
//   - il CLIENT (il nostro browser/JavaScript) fa una richiesta
//   - il SERVER la riceve, la elabora e manda una risposta
//
// Una API REST (il tipo più comune oggi) definisce per ogni
// funzionalità:
//   - un URL (l'indirizzo a cui chiedere)
//   - un metodo HTTP (GET, POST, PUT, DELETE...)
//   - eventuali header richiesti (es. autenticazione, formato dati)
//   - la struttura della richiesta (cosa devo mandare, es. nel body)
//   - la struttura della risposta (cosa mi torna indietro)
//
// Le API REST scambiano quasi sempre dati in formato JSON, che è
// comodissimo perché è (quasi) identico a un oggetto JavaScript.

console.log("\n--- 2. API ---");
console.log("Client chiede -> Server elabora -> Server risponde (di solito in JSON)");


// ------------------------------------------------------------
// 3. Il problema dell'asincronia: perché non puoi leggere subito
//    la risposta
// ------------------------------------------------------------
// JavaScript è un linguaggio "monothread": esiste UN SOLO flusso
// di esecuzione alla volta, non può fare due cose davvero nello
// stesso istante.
//
// Chiedere dati a un server, però, richiede tempo (magari mezzo
// secondo, magari 3 secondi se la connessione è lenta). Se
// JavaScript si "fermasse" ad aspettare la risposta, la pagina si
// bloccherebbe: niente click, niente scroll, niente animazioni,
// finché il server non risponde. Sarebbe pessimo per l'utente.
//
// Per questo il browser gestisce le richieste in modo
// ASINCRONO: JavaScript "lancia" la richiesta e nel frattempo
// continua a fare altro (restare pronto per i click, disegnare la
// pagina, eccetera). Quando il server finalmente risponde, il
// browser "avvisa" JavaScript e fa eseguire il codice che deve
// gestire quella risposta.
//
// Esempio semplice con setTimeout (che simula un'attesa, come
// farebbe una richiesta di rete):

const callback = () => {
  console.log("Arrivata la risposta! (dopo 1 secondo)");
};
setTimeout(callback, 1000);
console.log("\n--- 3. Asincronia ---");
console.log("Nel frattempo il codice continua subito qui...");
// NB: se lanci questo file, vedrai stampato PRIMA il messaggio
// "il codice continua subito qui" e SOLO DOPO 1 secondo il
// messaggio "Arrivata la risposta!". Questo dimostra che
// JavaScript non si ferma ad aspettare: il codice sotto
// setTimeout viene eseguito subito, la callback solo più tardi.
//
// Il problema pratico è: se io voglio USARE il dato che arriva
// dal server, non posso semplicemente scriverlo nella riga dopo
// il fetch, perché a quel punto la risposta non è ancora arrivata!


// ------------------------------------------------------------
// 4. La soluzione: async/await spiegato con una metafora semplice
// ------------------------------------------------------------
// Immagina di ordinare al bar: dici al barista cosa vuoi (la
// richiesta), lui inizia a prepararlo (l'operazione asincrona),
// ma tu non resti fermo impalato a fissarlo: puoi controllare il
// telefono, parlare con un amico... Però quando il barista dice
// "il tuo caffè è pronto", tu vai a prenderlo per poterlo bere:
// non puoi bere un caffè che non esiste ancora.
//
// "await" è esattamente questo: "aspetta qui finché il risultato
// non è pronto, POI vai avanti con la riga dopo". Non blocca tutto
// il browser (il resto della pagina resta reattivo), ma dice al
// TUO codice "fermati a questo punto finché non hai il risultato".
//
// "await" si può usare SOLO dentro una funzione marcata come
// "async". Non si può usare await direttamente nello script
// principale, quindi spesso si scrive una funzione async che si
// auto-esegue subito:

(async () => {
  console.log("\n--- 4. async/await ---");
  console.log("Ordino il caffè (parte l'operazione asincrona)...");

  // creiamo una finta "richiesta" che impiega tempo, come farebbe
  // fetch quando chiede dati a un server
  const ordinaCaffe = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Caffè pronto!");
      }, 500);
    });
  };

  const risultato = await ordinaCaffe(); // mi fermo QUI finché non è pronto
  console.log(risultato); // questa riga parte solo DOPO che il caffè è pronto
})();


// ------------------------------------------------------------
// 5. fetch() base: come si usa, cosa restituisce
// ------------------------------------------------------------
// fetch() è la funzione che JavaScript mette a disposizione per
// fare richieste HTTP (cioè per parlare con un server/API).
//
// fetch(url) fa partire la richiesta e restituisce una Promise,
// cioè una "promessa" che prima o poi arriverà un risultato.
// Per questo va sempre usata con await.
//
// ATTENZIONE: quello che fetch() restituisce NON è ancora il
// dato che ci interessa (es. la lista di utenti), ma un oggetto
// "Response" che rappresenta la risposta HTTP grezza (status,
// headers, e un body ancora da "leggere" e trasformare).
//
// Esempio (codice di esempio, non eseguito qui perché servirebbe
// una vera connessione internet):
/*
(async () => {
  const response = await fetch("https://api.esempio.it/utenti");
  console.log(response); // oggetto Response: status, headers...
})();
*/

console.log("\n--- 5. fetch() ---");
console.log("fetch(url) restituisce una Promise che risolve in un oggetto Response.");
console.log("Response contiene status, headers e un body ancora da leggere.");


// ------------------------------------------------------------
// 6. I due await obbligatori: uno per fetch(), uno per .json()
// ------------------------------------------------------------
// Quasi tutte le API rispondono con dati in formato JSON, ma il
// body della Response non arriva già "pronto" come oggetto
// JavaScript: bisogna leggerlo e convertirlo. Per questo servono
// DUE passaggi asincroni, quindi DUE await:
//
//   1° await -> aspetto che arrivi la risposta HTTP (fetch)
//   2° await -> aspetto che il body venga letto e trasformato
//               da testo JSON a oggetto JavaScript (.json())
//
// Esempio (codice di esempio):
/*
(async () => {
  const response = await fetch("https://api.esempio.it/utenti"); // 1° await
  const data = await response.json();                             // 2° await
  console.log(data); // ORA data è un vero oggetto/array JavaScript
})();
*/

console.log("\n--- 6. I due await ---");
console.log("1) await fetch(url)        -> ottengo la Response");
console.log("2) await response.json()   -> ottengo i dati veri, usabili in JS");


// ------------------------------------------------------------
// 7. GET vs POST: quando si usa quale, cosa cambia nel codice
// ------------------------------------------------------------
// GET: si usa per CHIEDERE/LEGGERE dati, senza modificare nulla
//   sul server. È il metodo di default di fetch(), quindi basta
//   scrivere fetch(url). I parametri, se servono, di solito si
//   mettono direttamente nell'URL (es. ?nome=Mario).
//
// POST: si usa per MANDARE dati al server (creare un nuovo
//   elemento, fare login, salvare qualcosa, fare una ricerca
//   complessa...). Serve specificare:
//   - method: 'POST'
//   - headers: di solito { 'Content-Type': 'application/json' }
//     per dire al server "ti sto mandando JSON"
//   - body: i dati da mandare, convertiti in testo JSON con
//     JSON.stringify(...)
//
// Esempio GET (codice di esempio):
/*
const response = await fetch("https://api.esempio.it/utenti");
*/
//
// Esempio POST (codice di esempio):
/*
const response = await fetch("https://api.esempio.it/utenti", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nome: "Paolo", cognome: "Rossi", eta: 25 })
});
*/

console.log("\n--- 7. GET vs POST ---");
console.log("GET  -> leggo dati, nessun body, e' il default di fetch(url)");
console.log("POST -> mando dati, servono method + headers + body (JSON.stringify)");


// ------------------------------------------------------------
// 8. La struttura di una HTTP request: request line, headers, body
// ------------------------------------------------------------
// Ogni richiesta HTTP (quella che fetch() costruisce per noi
// "dietro le quinte") è fatta di tre parti:
//
// 1) RIGA INIZIALE (request line): contiene il METODO (GET, POST,
//    PUT, DELETE...), l'URL a cui ci si collega e la versione del
//    protocollo HTTP.
//    Esempio concettuale:  GET /utenti?nome=Mario HTTP/1.1
//
// 2) HEADERS: coppie chiave-valore con informazioni aggiuntive,
//    per esempio il formato dei dati inviati (Content-Type), un
//    eventuale token di autenticazione (Authorization), i cookie.
//
// 3) BODY: i dati veri e propri inviati al server. Presente
//    tipicamente in POST/PUT, quasi mai in GET.
//
// La struttura di un URL, per completezza:
//   http[s]://[sottodominio.]dominio.estensione[:porta]/percorso[?chiave1=valore1&chiave2=valore2]
// Esempio: http://www.miosito.it/utenti?nome=Mario&eta=20
//
// E la RISPOSTA HTTP, sempre in tre parti:
// 1) STATUS LINE: un codice che indica l'esito (200 OK,
//    404 Not Found, 401 Unauthorized, 500 Errore server...)
// 2) HEADERS: informazioni sul servizio, cookie, regole di sicurezza
// 3) BODY: il contenuto vero e proprio della risposta (spesso JSON)

console.log("\n--- 8. Struttura HTTP request/response ---");
console.log("Request:  request line (metodo+URL) + headers + body");
console.log("Response: status line (es. 200 OK)   + headers + body");


// ------------------------------------------------------------
// 9. URL template con .replace() per inserire parametri dinamici
// ------------------------------------------------------------
// Spesso l'URL di una API contiene una parte "fissa" e una parte
// che dipende da cosa cerca l'utente (una parola, un ingrediente,
// un id...). Un pattern molto comodo è scrivere un URL "modello"
// (template) con un segnaposto, e poi sostituirlo con il valore
// vero usando .replace().

const template = "https://api.esempio.it/dizionario/%WORD";

const parola = "ciao";
const urlFinale = template.replace("%WORD", parola);

console.log("\n--- 9. URL template ---");
console.log("Template: " + template);
console.log("URL finale dopo replace: " + urlFinale);

// Nella pratica dentro un onclick sarebbe così (codice di esempio):
/*
submit.onclick = async () => {
  const parola = input.value;
  const urlFinale = template.replace("%WORD", parola);
  const response = await fetch(urlFinale);
  const data = await response.json();
  console.log(data);
};
*/


// ------------------------------------------------------------
// 10. Come leggere la struttura di un JSON di risposta con
//     console.log
// ------------------------------------------------------------
// Quando riceviamo dati da una API, il primo passo NON è scrivere
// subito il codice che li usa: è stampare tutto con console.log
// per capire com'è fatto l'oggetto/array che ci è arrivato!
//
// Esempio: immaginiamo che una API risponda con questo JSON
// (qui lo scriviamo a mano per simulare una risposta):

const rispostaSimulata = {
  utenti: [
    { id: 1, nome: "Mario", email: "mario@esempio.it" },
    { id: 2, nome: "Lucia", email: "lucia@esempio.it" }
  ],
  totale: 2
};

console.log("\n--- 10. Leggere la struttura di un JSON ---");
console.log(rispostaSimulata);
// Da qui capisco che:
// - rispostaSimulata.utenti è un ARRAY di oggetti
// - ogni utente ha le chiavi id, nome, email
// - rispostaSimulata.totale è un numero
// Quindi per stampare il nome del primo utente scriverò:
console.log(rispostaSimulata.utenti[0].nome); // "Mario"
// E per scorrerli tutti userò forEach/map, come già sappiamo fare
// sugli array di dizionari:
rispostaSimulata.utenti.forEach((utente) => {
  console.log(utente.id + " - " + utente.nome + " - " + utente.email);
});

// REGOLA D'ORO: davanti a una API nuova, la prima cosa da fare è
// sempre console.log(data) per capire la forma dei dati, PRIMA di
// scrivere il codice che li usa.
