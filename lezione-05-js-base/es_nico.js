// --- Esercizio 1 ---
// Consegna: stampa tutti i numeri da 1 a 10 usando un ciclo for.
console.log("ESERCIZIO 1");
for ( let i=1; i<=10; i++) {
    console.log(i);
}




// --- Esercizio 2 ---
// Consegna: data la lista di numeri qui sotto, stampa solo quelli pari.
console.log("ESERCIZIO 2");
const numeriEs2 = [3, 8, 11, 14, 20, 7, 2, 9, 120];
for(let i=0; i<numeriEs2.length ;i++) {
    if(numeriEs2[i]%2==0){
        //pari
        console.log(numeriEs2[i]);
    }
}


// --- Esercizio 3 ---
// Consegna: 
// scrivi una funzione che riceve un nome e stampa "Ciao [nome]!"
console.log("ESERCIZIO 3");
function ciao(nome) {
    console.log("ciao " + nome);
}
const nome_utente = "Nico";
ciao(nome_utente);



// Consegna: data la lista di voti qui sotto, trova il voto più alto.
const votiEs4 = [6, 8, 5, 9, 7, 10, 4];
console.log("ESERCIZIO 4");
//ordine decrescente, più semplice perchè basta prendere il primo valore "0"
//const voti = [...votiEs4].sort((x, y) => y-x);
//console.log(voti[0]);
//ordine crescente, più difficile perchè dobbiamo prendere l'ultimo valore
const voti = [...votiEs4].sort((x, y) => x-y);
console.log(voti[voti.length - 1]);
