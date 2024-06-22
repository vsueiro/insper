// Obter os dados
async function carregarDados() {
  let url =
    "https://sheets.vsueiro.com/api/read?id=1xprmvCwcCppKDuNNPIdkJeCs8LCnk8wmPqevJsgmg-M&range=Atividade%20Creche%20Insper";

  let resposta = await fetch(url);
  let dados = await resposta.json();

  desenharGrafico(dados);
}

// Desenhar gráfico
function desenharGrafico(dados) {
  // Monitoria categoria atual
  let anterior = undefined;

  // Para cada item dos dados
  for (let item of dados) {
    // Pega emoji
    let emoji = "<span>" + item.emoji + "</span>";
    let atual = item.categoria;

    // Se mudou a categoria
    if (anterior !== atual) {
      // Adiciona quebra de linha
      emoji = "<br><br>" + emoji;
    }

    // Atualiza valor da categoria anterior
    anterior = atual;

    // Bote o emoji no parágrafo
    creche.innerHTML += emoji;
  }
}

carregarDados();
