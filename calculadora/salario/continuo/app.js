let file = 'pnad-renda-2020.json'
let salaries = []

fetch( file )
  .then( response => response.json() )
  .then( data => salaries = data.reverse() )

function validate() {

  const value = parseInt( input.value )
  
  if ( isNaN( value ) || value < 0 )
    clear()
  else
    calculate( value )

}

function calculate( value ) {

  for ( let salary of salaries ) {
    if ( value > salary.lowerLimit ) {
      show( salary.from )
      resizeBin( salary )
      break
    }
  }

}

function show( percentile ) {
  output.textContent = percentile + '%'
  fill.style.width = percentile + '%'
}

function resizeBin( salary ) {
  let size = salary.to - salary.from
  bin.style.width = size + '%'
}

function clear() {
  output.textContent = '…%'
  fill.removeAttribute( 'style' )
  bin.removeAttribute( 'style' )
}

input.addEventListener( 'input', validate )