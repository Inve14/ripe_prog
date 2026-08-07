// ============================================================
// ESEMPIO 3 - Cache Remota: tutto insieme (SET + GET in sequenza)
// ============================================================
// Obiettivo: vedere il giro COMPLETO in un solo click, per dimostrare
// che il valore rimane davvero salvato sul server: prima lo mandiamo
// (SET), poi lo richiediamo indietro (GET), come se la pagina fosse
// stata chiusa e riaperta nel frattempo.

const inputChiave = document.querySelector("#inputChiave");
const inputValore = document.querySelector("#inputValore");
const btnProva = document.querySelector("#btnProva");
const esito = document.querySelector("#esito");

const TOKEN = "c6498f6b-ccb2-4ad5-9375-8ce35d3498bc";
const URL_SET = "https://ws.cipiaceinfo.it/cache/set";
const URL_GET = "https://ws.cipiaceinfo.it/cache/get";

btnProva.onclick = async () => {
  const chiave = inputChiave.value;
  const valore = inputValore.value;

  esito.innerHTML = `<span class="text-muted">Salvataggio in corso...</span>`;

  // ------------------------------------------------------------
  // PASSO 1: SALVO il valore (stessa fetch dell'esempio 1)
  // ------------------------------------------------------------
  console.log("1) Salvo:", chiave, "=", valore);

  const responseSet = await fetch(URL_SET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": TOKEN
    },
    body: JSON.stringify({
      key: chiave,
      value: JSON.stringify(valore)
    })
  });
  const dataSet = await responseSet.json();
  console.log("   Risposta SET:", dataSet);

  // ------------------------------------------------------------
  // PASSO 2: RILEGGO subito lo stesso valore (stessa fetch dell'esempio 2)
  // ------------------------------------------------------------
  // Lo facciamo apposta DOPO aver aspettato la fine del salvataggio
  // (grazie all'await sopra): così siamo sicuri che quando arriva
  // qui, il dato è già stato scritto sul server.
  console.log("2) Rileggo la chiave:", chiave);

  const responseGet = await fetch(URL_GET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": TOKEN
    },
    body: JSON.stringify({ key: chiave })
  });
  const dataGet = await responseGet.json();
  console.log("   Risposta GET:", dataGet);

  // stesso controllo dell'esempio 2: result stringa = trovato
  if (typeof dataGet.result === "string") {
    const valoreRiletto = JSON.parse(dataGet.result);
    esito.innerHTML = `
      <span class="text-success">
        Fatto! Ho salvato "<strong>${valore}</strong>" e riletto proprio
        "<strong>${valoreRiletto}</strong>" — il giro ha funzionato!
      </span>
    `;
  } else {
    esito.innerHTML = `<span class="text-danger">Qualcosa è andato storto: la chiave non risulta trovata.</span>`;
  }
};
