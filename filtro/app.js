// Define lista de objetos, um para cada região
let dados = [
  {
    "regiao": "Todo o Brasil",
    "gatos": 19,
    "cachorros": 46
  },
  {
    "regiao": "Norte",
    "gatos": 25,
    "cachorros": 52
  },
  {
    "regiao": "Nordeste",
    "gatos": 24,
    "cachorros": 38
  },
  {
    "regiao": "Sudeste",
    "gatos": 15,
    "cachorros": 44
  },
  {
    "regiao": "Sul",
    "gatos": 21,
    "cachorros": 57
  },
  {
    "regiao": "Centro-Oeste",
    "gatos": 17,
    "cachorros": 56
  }
]

// Seleciona todas as <li> da página
let itens = document.querySelectorAll( 'li' )

// Seleciona o elemento <select>
let seletor = document.querySelector( 'select' )

// Quando a opção do seletor mudar, dispara uma funcão
seletor.addEventListener( 'change', redimensionaBarras )

// Define a função que muda o comprimento das barras
function redimensionaBarras() {

  // Identifica o animal que a pessoa selecionou
  let animal = seletor.value
  
  // Para cada região…
  for ( let dado of dados ) {

    // Guarde a região atual
    let regiao = dado.regiao

    // Para cada <li>…
    for ( let item of itens ) {

      // Selecione seu respectivo elemento com nome da região
      let rotulo = item.querySelector( '.rotulo' )

      // Se o texto desse elemento for igual ao da região que está nos meus dados
      if ( rotulo.textContent == regiao ) {
        
        // Seleciona os respectivos elementos .barra e .percentual
        let barra = item.querySelector( '.barra' )
        let percentual = item.querySelector( '.percentual' )

        // Guarda o valor dado.gatos ou dado.cachorros, dependendo da opção selecionada
        let valor = dado[ animal ]

        // Calcula o comprimento para as barras (o valor 4 é arbitrário)
        let largura = valor * 4
        
        // Aplica o comprimento à barra
        barra.style.width = largura + 'px' 

        // Adiciona o percentual, como texto
        percentual.textContent = valor + '%'

      }

    }

  }

}

// Desenha o gráfico assim que a página for carregada
redimensionaBarras()