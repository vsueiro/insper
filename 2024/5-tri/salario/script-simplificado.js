const input = document.querySelector("#input");
const output = document.querySelector("#output");

const dados = [
  {
    grupo: 99,
    limite: 20309,
  },
  {
    grupo: 95,
    limite: 9505,
  },
  {
    grupo: 90,
    limite: 5603,
  },
  {
    grupo: 80,
    limite: 3553,
  },
  {
    grupo: 70,
    limite: 2650,
  },
  {
    grupo: 60,
    limite: 2035,
  },
  {
    grupo: 50,
    limite: 1804,
  },
  {
    grupo: 40,
    limite: 1500,
  },
  {
    grupo: 30,
    limite: 1320,
  },
  {
    grupo: 20,
    limite: 1298,
  },
  {
    grupo: 10,
    limite: 660,
  },
  {
    grupo: 5,
    limite: 399,
  },
];

function calcular() {
  const salario = Number(input.value);
  const resultado = dados.find((dado) => salario > dado.limite);

  if (resultado) {
    output.textContent = resultado.grupo;
    barra.style.width = resultado.grupo + "%";
  } else {
    output.textContent = "…";
    barra.style.width = 0;
  }
}

input.oninput = calcular;
