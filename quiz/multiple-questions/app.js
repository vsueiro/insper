// Seleciona todos os quizzes da página
let quizzes = document.querySelectorAll( '.quiz' )

// Inicia um contador de acertos
let correctAnswers = 0

// Calcula o total de quizzes na página
let totalAnswers = quizzes.length

// Coloca o número de acertos possíveis no resultado geral
document.querySelector( '.total' ).textContent = totalAnswers

// Para cada quiz na página
for ( let quiz of quizzes ) {

  // Selecione todas as RESPECTIVAS alternativas
  let alternatives = quiz.querySelectorAll( 'li' )

  // Para cada uma…
  for ( let alternative of alternatives ) {

    // Ouça pelo evento de clique e cheque resposta
    alternative.addEventListener( 'click', checkAnswer )

  }

}

// Cria função para checar resposta
function checkAnswer( event ) {

  // Cria variável que representa a alternativa clicada
  let alternative = event.target

  // Cria variável que representa o RESPECTIVO quiz
  let quiz = alternative.closest( '.quiz' )

  // Cria variável que representa o RESPECTIVO resultado
  let result = quiz.querySelector( '.result' )

  // Cria variável que representa a RESPECTIVA resposta
  let answer = quiz.querySelector( '.answer' )

  // Cria variável que representa a RESPECTIVA imagem
  let image = quiz.querySelector( 'img' )

  // Desativa clique no quiz
  quiz.classList.add( 'inactive' )

  // Checha se alternativa tem a classe “.correct”
  let correct = alternative.classList.contains( 'correct' )

  // Aplica classe “clicada” para estilizar via CSS
  alternative.classList.add( 'clicked' )

  // Se acertou…
  if ( correct ) {

    // Troca o texto do resultado por “Acertou :)”
    result.textContent = 'Acertou :)'

    // Aplica cor de “acertou”
    result.style.color = 'Turquoise'

    // Mostra o RESPECTIVO gatinho
    image.style.display = 'initial'

    // Contabiliza acerto (incrementa)
    correctAnswers++

  }
  
  // Se errou…  
  else {

    // Troca o texto do resultado por Errou :(”
    result.textContent = 'Errou :('

    // Aplica cor de “errou”
    result.style.color = 'DeepPink'

  }

  // Mostrar detalhes da RESPECTIVA resposta (.answer)
  answer.style.display = 'initial'

  // Atualiza resultado geral
  document.querySelector( 'output' ).textContent = correctAnswers

}