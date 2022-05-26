// Carregar os dados
let salarios = [
  {
    "quantil": 0,
    "limiteInferior": 0
  },
  {
    "quantil": 5,
    "limiteInferior": 146
  },
  {
    "quantil": 10,
    "limiteInferior": 252
  },
  {
    "quantil": 20,
    "limiteInferior": 396
  },
  {
    "quantil": 30,
    "limiteInferior": 527
  },
  {
    "quantil": 40,
    "limiteInferior": 673
  },
  {
    "quantil": 50,
    "limiteInferior": 836
  },
  {
    "quantil": 60,
    "limiteInferior": 1035
  },
  {
    "quantil": 70,
    "limiteInferior": 1263
  },
  {
    "quantil": 80,
    "limiteInferior": 1682
  },
  {
    "quantil": 90,
    "limiteInferior": 2646
  },
  {
    "quantil": 95,
    "limiteInferior": 4082
  },
  {
    "quantil": 99,
    "limiteInferior": 9832
  }
]

// Inverter a ordem dos dados
salarios.reverse()



// Seleciona o elemento <input>
let entrada = document.querySelector( 'input' )

// Seleciona o elemento <output>
let saida = document.querySelector( 'output' )




// Dispara a função validar cada vez que o usuário digitar
entrada.addEventListener( 'input', validar )

// Define função de validação
function validar() {

  // Pega a string que foi digitada
  let valor = entrada.value 
  
  // Força a conversão para número inteiro
  valor = parseInt( valor )

  // Se valor for maior que 0
  if ( valor > 0 ) {
    calcular( valor )
    
  }
  
  // Se não for um valor válido
  else {
    limpar()
  }

}

// Define função que encontra faixa salarial
function calcular( valor ) {

  // Para cada faixa salarial
  for ( let salario of salarios ) {

    // Se valor for maior que limite inferior
    if ( valor > salario.limiteInferior ) {

      // Mostro a categoria atual
      let quantil = salario.quantil
      mostrar( quantil )

      // Paro de checar
      break
    }
    
  }   

}

// Define função que mostra o percentual na tela
function mostrar( quantil ) {

  saida.textContent = quantil + '%'

}

// Define função que remove o percentual antigo
function limpar() {

  saida.textContent = '…%'

}