// Cria lista com todos os botões da página
let botoes = document.querySelectorAll(".botao");

// Para cada botão da página
for (let botao of botoes) {
  // Quando clicar no botao
  botao.onclick = function () {
    adicionaUm(botao);
  };
}

function adicionaUm(botao) {
  // Acha o span dentro do botão
  let span = botao.querySelector("span");

  // Lê o valor atual
  let contador = span.textContent;

  // Adiciona um
  contador++;

  // Escreve novamente
  span.textContent = contador;
}

/*
// Funciona para 1 único botão

let contador = 0;

function adicionaUm() {
  contador++;

  span.textContent = contador;
}

botao.onclick = adicionaUm;
*/
