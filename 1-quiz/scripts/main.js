let buttons = document.querySelectorAll( 'button' )

for ( let button of buttons ) {
  button.addEventListener( 'click', check )
}

function check( event ) {

  let button = event.target

  if ( button.classList.contains( 'correct' ) )
    alert( 'Correct!' )
  else
    alert( 'Try again :(' )

}
