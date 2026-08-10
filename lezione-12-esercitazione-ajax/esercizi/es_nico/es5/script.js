const inputChiave = document.querySelector("#inputChiave");
const btnLeggi = document.querySelector("#btnLeggi");
const esito = document.querySelector("#esito");


const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";


btnLeggi.onclick = async () => {


    const chiave = inputChiave.value;


    const response = await fetch(URL_GET, {


        method: "POST",


        headers: {


            "Content-Type": "application/json",


            "key": TOKEN
        },




        body: JSON.stringify({ key: chiave })


    });


    const data = await response.json();


    console.log(data);



    const valore = JSON.parse(data.result);
    esito.innerHTML = `<span class="text-success">Valore trovato: <strong>${valore}</strong></span>`;

};
