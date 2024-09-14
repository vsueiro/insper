// Seleciona elemento HTML com classe "sticky"
const grafico = document.querySelector(".grafico");

// Inicia a instância do scrollama
const scroller = scrollama();

// Instruções para quando entrar num step
function entrou(resposta) {
  const ordem = resposta.index + 1;

  // Muda para o gráfico correspondente
  grafico.src = `media/grafico-${ordem}.svg`;
}

function saiu(resposta) {
  if (resposta.index === 0 && resposta.direction === "up") {
    // Muda para o gráfico original
    grafico.src = `media/grafico.svg`;
  }
}

// Configura a instância do scrollama e passa funções
scroller
  .setup({
    step: ".step",
  })
  .onStepEnter(entrou)
  .onStepExit(saiu);
