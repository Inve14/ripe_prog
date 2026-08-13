// ES-07 — Contatore
//
// CONSEGNA:
// Pulsante "+" e "-". Mostra il numero.
// Non scende sotto 0 e non sale sopra 10. Usa render().
//

// Scrivi qui il tuo codice

const valore = document.querySelector("#valore");
const btnsomma = document.querySelector("#btnsomma");
const btnsottrai = document.querySelector("#btnsottrai");

let risultato = 0;

const render = () =>{
    valore.innerText = risultato;
}

btnsomma.onclick = () => {
    if(risultato<10){
      risultato++;   
    }
    render();
}

btnsottrai.onclick = () => {
    if(risultato>0){
     risultato--;   
    }
    render();
}

