//Consegna: form con nome e voto. Ogni submit aggiunge una riga a una
//tabella, con la cella dell'esito colorata di verde "Promosso" o
//rosso "Bocciato" in base al voto. Un pulsante "Svuota" cancella
//tutta la tabella.
//Concetti: array di dizionari, render() che ricrea la tabella, template.replace

const nome = document.querySelector("#nome");
const voto = document.querySelector("#voto");
const button = document.querySelector("#button");
const svuota = document.querySelector("#svuota");
const output = document.querySelector("#output");

const dati = [];

const render = () => {

  const template = `
    <tr>
      <td>%NOME</td>
      <td>%VOTO</td>
      <td style="color: %COLORE">%ESITO</td>
    </tr>
  `;

  const righe = dati.map((elemento) => {
    const promosso = elemento.voto >= 6;
    let colore;
    let testo;
    if (promosso) {
      colore = "green";
      testo = "Promosso";
    } else {
      colore = "red";
      testo = "Bocciato";
    }
    return template
      .replace("%NOME", elemento.nome)
      .replace("%VOTO", elemento.voto)
      .replace("%COLORE", colore)
      .replace("%ESITO", testo);
  });

  output.innerHTML = righe.join("");
};


button.onclick = () => {
  const nomeValue = nome.value;
  const votoValue = voto.value;

  if (nomeValue !== "") {
    dati.push({
      nome: nomeValue,
      voto: votoValue
    });

    nome.value = "";
    voto.value = "";

    render(); 
  }
};

svuota.onclick = () => {
  dati.length = 0; 
  render();
};