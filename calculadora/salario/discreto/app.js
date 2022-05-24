let entrada = document.querySelector( 'input' )
let saida = document.querySelector( 'output' )
let preenchimento = document.querySelector( '.preenchimento' )
let baldes = document.querySelector( '.baldes' )

let arquivo = 'pnad-renda-2020.json'
let salarios = []

fetch( arquivo )
  .then( resposta => resposta.json() )
  .then( dados => {

    salarios = dados
    criarBaldes( salarios )
    salarios.reverse()

  } )

function criarBaldes( salarios ) {
  for ( let salario of salarios ) {
    let tamanho = salario.ate - salario.de
    let balde = document.createElement( 'div' )
    balde.style.width = tamanho + '%'
    baldes.appendChild( balde )
  }
}

function destacarBalde( numero ) {

  let baldes = document.querySelectorAll( '.baldes > div' )
  let indice = 0

  for ( let balde of baldes ) {

    balde.classList.remove( 'voce', 'ativo' )

    if ( indice < numero )
      balde.classList.add( 'ativo' )

    if ( indice === numero )
      balde.classList.add( 'voce' )

    indice++
  }

}
 
function validar() {

  let valor = parseInt( entrada.value )
  
  if ( isNaN( valor ) || valor < 0 )
    limpar()
  else
    calcular( valor )

}

function mostrar( percentil ) {
  saida.textContent = percentil + '%'
}

function calcular( valor ) {

  let indice = 0

  for ( let salario of salarios ) {

    if ( valor > salario.limiteInferior ) {

      let percentil = salario.de
      let numero = salarios.length - indice - 1

      if ( numero === 0 ) {
        limpar()
      } else {
        destacarBalde( numero )
        mostrar( percentil )
      }

      break

    }
    indice++
  }

}

function limpar() {

  saida.textContent = '…%'

  let baldes = document.querySelectorAll( '.baldes > div' )
  let indice = 0

  for ( let balde of baldes ) {
    balde.classList.remove( 'voce', 'ativo' )
    indice++
  }

}

entrada.addEventListener( 'input', validar )