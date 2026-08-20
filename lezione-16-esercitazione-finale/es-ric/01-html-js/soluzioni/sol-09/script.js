// SOL-09 - PIN a 4 cifre

const inputCifra1 = document.querySelector("#inputCifra1");
const inputCifra2 = document.querySelector("#inputCifra2");
const inputCifra3 = document.querySelector("#inputCifra3");
const inputCifra4 = document.querySelector("#inputCifra4");
const btnImposta = document.querySelector("#btnImposta");
const btnVerifica = document.querySelector("#btnVerifica");
const istruzioni = document.querySelector("#istruzioni");
const messaggio = document.querySelector("#messaggio");

// variabili di stato: rappresentano "in che fase siamo" e sopravvivono tra un click e l'altro
let pinSalvato = null;
let tentativiRimasti = 3;

function leggiCifre() {
  return inputCifra1.value + inputCifra2.value + inputCifra3.value + inputCifra4.value;
}

function svuotaInput() {
  inputCifra1.value = "";
  inputCifra2.value = "";
  inputCifra3.value = "";
  inputCifra4.value = "";
}

function mostraMessaggio(testo, classeAlert) {
  messaggio.style.display = "block";
  messaggio.className = `alert ${classeAlert}`;
  messaggio.innerText = testo;
}

function disabilitaTutto() {
  inputCifra1.disabled = true;
  inputCifra2.disabled = true;
  inputCifra3.disabled = true;
  inputCifra4.disabled = true;
  btnVerifica.disabled = true;
}

// FASE 1: impostazione del PIN
btnImposta.onclick = function () {
  pinSalvato = leggiCifre();
  svuotaInput();

  btnImposta.style.display = "none";
  btnVerifica.style.display = "inline-block";
  istruzioni.innerText = "Ora reinserisci il PIN per sbloccare (hai 3 tentativi)";
};

// FASE 2: verifica del PIN
btnVerifica.onclick = function () {
  const tentativo = leggiCifre();

  if (tentativo === pinSalvato) {
    mostraMessaggio("PIN corretto! Sbloccato.", "alert-success");
    disabilitaTutto();
    return;
  }

  tentativiRimasti = tentativiRimasti - 1;

  if (tentativiRimasti <= 0) {
    mostraMessaggio("Troppi tentativi errati. Bloccato.", "alert-danger");
    disabilitaTutto();
  } else {
    mostraMessaggio(`PIN errato. Tentativi rimasti: ${tentativiRimasti}`, "alert-warning");
    svuotaInput();
  }
};
