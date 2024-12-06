const etapas = {
  inicio: {
    imagem: "inicio-crise-convulsiva.gif",
    narracao: "lala.mp3",
    situacao: "Início da crise convulsiva",
    alt: "",
    acoes: [
      {
        texto: "Ligar para SAMU (192)",
        direciona: "cabeca",
      },
      {
        texto: "Prestar primeiros socorros",
        direciona: "calma",
      },
    ],
  },

  cabeca: {
    imagem: "pessoa-bate-cabeca.gif",
    situacao: "…",
    alt: "",
    acoes: [
      {
        texto: "Seguir instruções do SAMU",
        direciona: "calma",
      },
    ],
  },

  calma: {
    imagem: "pessoa-caida.gif",
    situacao: "…",
    alt: "",
    acoes: [
      {
        texto: "Afastar objetos",
        direciona: "lateralizar",
      },
    ],
  },
};

function mostrar(nome) {
  const etapa = etapas[nome];

  let botoes = "";

  for (let acao of etapa.acoes) {
    botoes += `<button onclick="mostrar('${acao.direciona}')">
      ${acao.texto}
    </button>`;
  }

  narrativa.innerHTML = `
    <img src="${etapa.imagem}" alt="" />
    <p>${etapa.situacao}</p>
    <div>
      ${botoes}
    </div>
  `;
}

mostrar("inicio");
