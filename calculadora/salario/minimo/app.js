let entrada = document.querySelector( 'input' )
let saida = document.querySelector( 'output' )
let preenchimento = document.querySelector( '.preenchimento' )

let salarios = [
  {
    "de": 5,
    "ate": 10,
    "limiteInferior": 146
  },
  {
    "de": 10,
    "ate": 20,
    "limiteInferior": 252
  },
  {
    "de": 20,
    "ate": 30,
    "limiteInferior": 396
  },
  {
    "de": 30,
    "ate": 40,
    "limiteInferior": 527
  },
  {
    "de": 40,
    "ate": 50,
    "limiteInferior": 673
  },
  {
    "de": 50,
    "ate": 60,
    "limiteInferior": 836
  },
  {
    "de": 60,
    "ate": 70,
    "limiteInferior": 1035
  },
  {
    "de": 70,
    "ate": 80,
    "limiteInferior": 1263
  },
  {
    "de": 80,
    "ate": 90,
    "limiteInferior": 1682
  },
  {
    "de": 90,
    "ate": 95,
    "limiteInferior": 2646
  },
  {
    "de": 95,
    "ate": 99,
    "limiteInferior": 4082
  },
  {
    "de": 99,
    "ate": 100,
    "limiteInferior": 9832
  }
]

salarios.reverse()

entrada.addEventListener( 'input', validar )

function validar() {

  let valor = parseInt( entrada.value )
  
  if ( valor > 0 )
    calcular( valor )
  else
    limpar()

}

function calcular( valor ) {

  limpar()

  for ( let salario of salarios ) {

    if ( valor > salario.limiteInferior ) {
      mostrar( salario.de )
      break
    }

  }

}

function mostrar( percentil ) {
  saida.textContent = percentil + '%'
  preenchimento.style.width = percentil + '%'
}

function limpar() {
  saida.textContent = '…%'
  preenchimento.style.width = '0%'
}