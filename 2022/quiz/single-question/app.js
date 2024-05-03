// Declara variáveis globais
let quiz   = document.querySelector( '.quiz' )
let result = document.querySelector( '.result' )
let answer = document.querySelector( '.answer' )
let image  = document.querySelector( 'img' )

// Cria função para checar resposta
function checkAnswer( event ) {

  // Desativa clique no quiz
  quiz.classList.add( 'inactive' )

  // Cria variável que representa a alternativa clicada
  let alternative = event.target

  // Aplica classe “clicada” para estilizar via CSS
  alternative.classList.add( 'clicked' )

  // Se <li> clicada contém classe “correct”
  if ( alternative.classList.contains( 'correct' ) ) {

    // Troca o texto do resultado por “Acertou :)”
    result.textContent = 'Acertou :)'

    // Aplica cor de “acertou”
    result.style.color = 'Turquoise'

    // Mostra gatinho
    image.style.display = 'initial'

  } else {

    // Troca o texto do resultado por Errou :(”
    result.textContent = 'Errou :('

    // Aplica cor de “errou”
    result.style.color = 'DeepPink'

  }

  // Mostra .answer
  answer.style.display = 'initial'

}

// Seleciona todas as <li>
let alternatives = document.querySelectorAll( 'li' )

// Para cada <li>
for ( let alternative of alternatives ) {

  // Ouve o evento de click e roda a função
  alternative.addEventListener( 'click', checkAnswer )

}