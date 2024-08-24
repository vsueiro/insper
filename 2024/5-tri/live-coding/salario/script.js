let dados = [
  {
    grupo: 5,
    limite: 399,
  },
  {
    grupo: 10,
    limite: 660,
  },
  {
    grupo: 20,
    limite: 1298,
  },
  {
    grupo: 30,
    limite: 1320,
  },
  {
    grupo: 40,
    limite: 1500,
  },
  {
    grupo: 50,
    limite: 1804,
  },
  {
    grupo: 60,
    limite: 2035,
  },
  {
    grupo: 70,
    limite: 2650,
  },
  {
    grupo: 80,
    limite: 3553,
  },
  {
    grupo: 90,
    limite: 5603,
  },
  {
    grupo: 95,
    limite: 9505,
  },
  {
    grupo: 99,
    limite: 20309,
  },
];

// Inverte a ordem dos dados para facilitar a busca
dados.reverse();

function calcular() {
  // Pega o salário da pessoa
  let salario = Number(entrada.value);

  // Acha o grupo que ganha menos que a pessoa
  let resultado = dados.find((dado) => salario > dado.limite);

  if (resultado) {
    saida.textContent = resultado.grupo + "%";
    barra.style.width = resultado.grupo + "%";
  } else {
    saida.textContent = "…%";
    barra.style.width = 0;
  }

  // saida.textContent = resultado ? resultado.grupo : "…";
}

// Quando digita valor, calcula
entrada.oninput = calcular;
