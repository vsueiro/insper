// Seleciona elemento HTML com classe "fantasma"
const fantasma = document.querySelector(".fantasma");

// Inicia a instância do scrollama
const scroller = scrollama();

// Instruções para quando entrar num step
function entrou(resposta) {
  // Move o fantasma horizontalmente
  fantasma.style.left = resposta.element.dataset.x;

  // Mover o fantasma verticalmente
  fantasma.style.top = resposta.element.dataset.y;

  // Faz o fantasma crescer ou diminuir
  fantasma.style.scale = resposta.element.dataset.z;
}

function saiu(resposta) {
  if (resposta.index === 0 && resposta.direction === "up") {
    // Reinicia a posição
    fantasma.style.left = "50%";
    fantasma.style.top = "50%";
    fantasma.style.scale = "1";
  }
}

// Configura a instância do scrollama e passa funções
scroller
  .setup({
    step: ".step",
  })
  .onStepEnter(entrou)
  .onStepExit(saiu);
