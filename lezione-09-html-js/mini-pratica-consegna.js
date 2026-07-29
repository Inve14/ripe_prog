// MINI PRATICA - CONSEGNA
// Registro studenti con media in tempo reale.
//
// La pagina (mini-pratica-consegna.html) ha già pronti questi elementi, con questi id:
//   #inputNome    -> input testo, nome dello studente
//   #inputVoto    -> input number, voto dello studente
//   #btnAggiungi  -> pulsante che aggiunge lo studente
//   #lista        -> <ul> dove mostrare l'elenco degli studenti
//   #media        -> <div> dove mostrare la media aggiornata
//
// DA FARE (scrivete voi tutto il codice, da zero, in questo file):
//
// 1. Selezionare con querySelector tutti gli elementi elencati sopra.
//
// 2. Creare un array vuoto, es. "studenti", che conterrà un dizionario
//    per ogni studente aggiunto: { nome: ..., voto: ... }.
//
// 3. Scrivere una funzione render() che:
//    - ricostruisce da zero il contenuto di #lista, un <li> per ogni
//      studente nell'array, nel formato "Nome — Voto" (es. "Luca — 7");
//    - calcola la media di tutti i voti nell'array (attenzione al caso
//      in cui l'array sia vuoto: la media non si può calcolare, gestitelo
//      mostrando un messaggio tipo "Nessuno studente ancora");
//    - scrive la media dentro #media, con un paio di cifre decimali.
//
// 4. Agganciare un evento onclick al pulsante #btnAggiungi che:
//    - legge nome e voto dagli input (voto va convertito in numero: quale
//      funzione tra parseInt e parseFloat è più adatta per un voto?);
//    - controlla che i dati siano validi (nome non vuoto, voto non NaN)
//      prima di procedere;
//    - aggiunge un nuovo dizionario { nome, voto } all'array studenti;
//    - svuota gli input per il prossimo inserimento;
//    - richiama render() per aggiornare lista e media a schermo.
//
// Suggerimento: seguite il pattern Evento -> Azione -> Reazione visto
// negli esempi di oggi, e ricordate che .value degli input va sempre
// letto dentro la funzione collegata al click, mai fuori.



const nomeStudente = document.querySelector("#inputNome");
const votoStudente = document.querySelector("#inputVoto");
const btnAggiungi = document.querySelector("#btnAggiungi");
const lista = document.querySelector("#lista");
const media = document.querySelector("#media");

let studenti = [];

//reazione
function render() {
    lista.innerHTML="";
    media.innerHTML="";

    studenti.forEach((studente) => {
        lista.innerHTML += `<li> <strong> Nome </strong> -> ${studente.nome}.  <strong> Voto </strong> -> ${studente.voto} </li>  `;
    });
    /*
    for (let i = 0; i < studenti.length; i++) {
        lista.innerHTML += `<li> <strong> Nome </strong> -> ${studenti[i].nome}.  <strong> Voto </strong> -> ${studenti[i].voto} </li>  `;        
    }
    */

    let somma = 0;
    for (let index = 0; index < studenti.length; index++) {
        somma += studenti[index].voto;
    }
    media.innerHTML = `media -> ${somma/studenti.length}`;
}

//azione
btnAggiungi.onclick = function() {
    const nome = nomeStudente.value;
    const voto = parseFloat(votoStudente.value);

    if(nome =="" || isNaN(voto)){
        return;
    }

    studenti.push({nome: nome, voto: voto});

    nomeStudente.value = "";
    votoStudente.value = "";
    render();
}