let entrada = document.querySelector( 'input' )
let saida = document.querySelector( 'output' )
let preenchimento = document.querySelector( '.preenchimento' )
let balde = document.querySelector( '.balde' )

let arquivo = 'pnad-renda-2020.json'
let salarios = []

fetch( arquivo )
  .then( resposta => resposta.json() )
  .then( dados => salarios = dados.reverse() )

function validar() {

  let valor = parseInt( entrada.value )
  
  if ( isNaN( valor ) || valor < 0 )
    limpar()
  else
  calcular( valor )

}

function calcular( valor ) {

  limpar()

  for ( let salario of salarios ) {

    if ( valor > salario.limiteInferior ) {
      mostrar( salario.de )
      ajustarBalde( salario )
      break
    }

  }

}

function mostrar( percentil ) {
  saida.textContent = percentil + '%'
  preenchimento.style.width = percentil + '%'
}

function ajustarBalde( salario ) {
  let tamanho = salario.ate - salario.de
  balde.style.width = tamanho + '%'
}

function limpar() {
  saida.textContent = '…%'
  preenchimento.removeAttribute( 'style' )
  balde.removeAttribute( 'style' )
}

entrada.addEventListener( 'input', validar )