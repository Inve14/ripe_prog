const formStudente = document.querySelector("#formStudente");
const inputNome    = document.querySelector("#inputNome");
const inputVoto    = document.querySelector("#inputVoto");
const corpoTabella = document.querySelector("#corpoTabella");
const btnSvuota    = document.querySelector("#btnSvuota");

let studenti = [];

const template = `
    <tr>
        <td>%NOME</td>
        <td>%VOTO</td>
        <td><span class="badge %CLASSE">%ESITO</span></td>
    </tr>
`;

function render() {
    corpoTabella.innerHTML = "";

    studenti.forEach((studente) => {
        const promosso    = studente.voto >= 6;
        const classeBadge = promosso ? "bg-success" : "bg-danger";
        const testoBadge  = promosso ? "Promosso"   : "Bocciato";

        corpoTabella.innerHTML += template
            .replace("%NOME",   studente.nome)
            .replace("%VOTO",   studente.voto)
            .replace("%CLASSE", classeBadge)
            .replace("%ESITO",  testoBadge);
    });
}

formStudente.onsubmit = function (event) {
    event.preventDefault();

    const nome = inputNome.value;
    const voto = parseFloat(inputVoto.value);

    if (nome === "" || isNaN(voto)) return;

    studenti.push({ nome: nome, voto: voto });

    inputNome.value = "";
    inputVoto.value = "";

    render();
};

btnSvuota.onclick = function () {
    studenti = [];
    render();
};