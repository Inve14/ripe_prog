// ============================================================
// ESEMPIO 2 - Cache Remota: solo LETTURA (GET)
// ============================================================
// Obiettivo: capire come si legge un valore già salvato, e soprattutto
// come si distingue una chiave TROVATA da una chiave ASSENTE.

const inputChiave = document.querySelector("#inputChiave");
const btnLeggi = document.querySelector("#btnLeggi");
const esito = document.querySelector("#esito");

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

// l'indirizzo per LEGGERE (sì, anche questa è una POST!)
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

btnLeggi.onclick = async () => {
  const chiave = inputChiave.value;

  console.log("Sto cercando la chiave:", chiave);

  const response = await fetch(URL_GET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": TOKEN
    },
    // qui nel body basta la chiave che vogliamo cercare, non c'è
    // nessun "value" perché non stiamo salvando nulla
    body: JSON.stringify({
       key: chiave 
      })

    /*
    body: JSON.stringify({
      key: chiave,
      value: JSON.stringify(valore)
    })
    */
  });

  const data = await response.json();
  console.log("Risposta grezza del server:", data);

  // QUESTO è il punto più delicato di tutto l'esempio:
  // - se la chiave ESISTE, data.result è una STRINGA di testo
  //   (es. "\"blu\"") che dobbiamo "riaprire" con JSON.parse
  // - se la chiave NON esiste, data.result è invece un OGGETTO
  //   con dentro un messaggio di errore (es. { message: "Does not exist" })
  //
  // per questo controlliamo il TIPO di data.result, non il suo contenuto
    const valore = JSON.parse(data.result);
    console.log("Valore ritrovato:", valore);
    esito.innerHTML = `<span class="text-success">Trovato! Il valore è: <strong>${valore}</strong></span>`;
};
