// Inicia a instância do scrollama
const scroller = scrollama();

// Instruções para quando entrar num step
function entrou(resposta) {
  // Identifca seção atual
  const secao = resposta.element.dataset.secao;

  if (secao === "1" && local) {
    map.flyTo({
      center: local,
      zoom: 18,
    });
  }
}

function saiu(resposta) {
  if (resposta.index === 0 && resposta.direction === "up") {
    // Reinicia a posição
    map.flyTo({
      center: brasil,
      zoom: 3,
    });
  }
}

// Configura a instância do scrollama e passa funções
scroller
  .setup({
    step: ".step",
  })
  .onStepEnter(entrou)
  .onStepExit(saiu);
