//ES-07 - Maggiore e minore
//consegna: quattro input numerici e un pulsante. Al click, mostra il
//valore maggiore e il valore minore tra i quattro inseriti.
//Concetti: array, sort, valori vuoti gestiti con || 0

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

let valore_max = 0;
let valore_min = 0;

const render = () => {
  const template = "numero più alto -> %VALORE_MAX  </br> numero più basso -> %VALORE_MIN";
  output.innerHTML = template.replace("%VALORE_MAX", valore_max)
                             .replace("%VALORE_MIN", valore_min);
};

button.onclick = () => {
  const n1 = num1.value;
  const n2 = num2.value;
  const n3 = num3.value;
  const n4 = num4.value;

  const valori = [n1, n2, n3, n4];

  valori.sort((a, b) => a - b);

  valore_min = valori[0];

  valori.sort((a, b) => b - a);

  valore_max = valori[0]

  render();
};