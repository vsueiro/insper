import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let dados = [];

const entrada = document.querySelector("input");
const saida = document.querySelector("output");

async function carregar() {
  dados = await d3.csv("pnad-brasil-2023.csv", d3.autoType);
  dados.reverse();

  entrada.oninput = validar;
}

function validar() {
  const salario = Number(entrada.value);

  calcular(salario);
}

function calcular(salario) {
  const resultado = dados.find((dado) => salario > dado.limite);

  mostrar(resultado);
}

function mostrar(resultado) {
  if (resultado === undefined) {
    saida.textContent = "…";
  } else {
    saida.textContent = resultado.grupo;
  }
}

carregar();
