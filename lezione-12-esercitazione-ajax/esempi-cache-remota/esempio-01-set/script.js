// ============================================================
// ESEMPIO 1 - Cache Remota: solo SALVATAGGIO (SET)
// ============================================================
// Obiettivo: capire, un pezzo alla volta, cosa serve per salvare una
// coppia chiave/valore nell'"armadietto condiviso" della Cache Remota.

// aggancio gli elementi della pagina
const inputChiave = document.querySelector("#inputChiave");
const inputValore = document.querySelector("#inputValore");
const btnSalva = document.querySelector("#btnSalva");
const esito = document.querySelector("#esito");

// il TOKEN è la nostra "tessera d'accesso" all'armadietto: NON è la
// chiave del dato, è quello che dice al server chi siamo noi
const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";

// l'indirizzo per SALVARE
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";

btnSalva.onclick = async () => {
  // leggo cosa ha scritto lo studente
  const chiave = inputChiave.value;
  const valore = inputValore.value;

  console.log("Sto per salvare:", chiave, "=", valore);

  // fetch con method "POST": stiamo MANDANDO dati, non solo leggendo
  const response = await fetch(URL_SET, {
    method: "POST",

    // headers = le "informazioni di contorno" della richiesta:
    // - Content-Type dice al server "quello che ti mando è testo JSON"
    // - "key" è il campo (un po' infelice come nome) dove va il TOKEN
    headers: {
      "Content-Type": "application/json",
      "key": TOKEN
    },

    // body = i dati veri, sempre come STRINGA (per questo JSON.stringify).
    // Notare i DUE JSON.stringify: uno prepara il "valore" da solo,
    // uno trasforma l'intero oggetto { key, value } in testo
    body: JSON.stringify({
      key: chiave,
      value: JSON.stringify(valore)
    })
  });

  // due await, come in ogni fetch: uno per la richiesta, uno per leggere
  // la risposta e trasformarla in un oggetto JavaScript
  const data = await response.json();

  console.log("Risposta del server:", data); // { result: "Ok" } se è andato tutto bene

  esito.innerHTML = `<span class="text-success">Salvato! (${chiave} = ${valore})</span>`;
};
