// Carregar os dados
// Inverter a ordem dos dados


// Seleciona o elemento <input>
let entrada = document.querySelector( 'input' )

// Dispara a função validar cada vez que o usuário digitar
entrada.addEventListener( 'input', validar )

// Define função de validação
function validar() {

  // Pega a string que foi digitada
  let salario = entrada.value 
  
  // Força a conversão para número inteiro
  salario = parseInt( salario )

  // Se valor for maior que 0
  if ( salario > 0 ) {
    calcular( salario )
  }

}

// Define função que encontra faixa salarial
function calcular( salario ) {

  // Para cada faixa salarial
    // Se salario for maior que limite inferior
      // Mostro a categoria atual
      // Paro de checar

}

function mostrar() {

}