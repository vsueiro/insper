let file = 'pnad-renda-2020.json'
let salaries = []

fetch( file )
  .then( response => response.json() )
  .then( data => {

    salaries = data
    createBins( salaries )
    salaries.reverse()

  } )

function createBins( salaries ) {
  for ( let salary of salaries ) {
    let size = salary.to - salary.from
    let bin = document.createElement( 'div' )
    bin.style.width = size + '%'
    bins.appendChild( bin )
  }
}

function highlightBin( number ) {

  let all = document.querySelectorAll( '#bins > div' )
  let index = 0

  for ( let bin of all ) {

    bin.classList.remove( 'you', 'on' )

    if ( index < number )
      bin.classList.add( 'on' )

    if ( index === number )
      bin.classList.add( 'you' )

    index++
  }

}
 
function validate() {

  const value = parseInt( input.value )
  
  if ( isNaN( value ) || value < 0 )
    clear()
  else
    calculate( value )

}

function show( percentile ) {
  output.textContent = percentile + '%'
}

function calculate( value ) {

  let index = 0

  for ( let salary of salaries ) {

    if ( value > salary.lowerLimit ) {

      let percentile = salary.from
      let number = salaries.length - index - 1

      if ( number === 0 ) {
        clear()
      } else {
        highlightBin( number )
        show( percentile )
      }

      break

    }
    index++
  }

}

function clear() {
  output.textContent = '…%'

  let all = document.querySelectorAll( '#bins > div' )
  let index = 0

  for ( let bin of all ) {
    bin.classList.remove( 'you', 'on' )
    index++
  }

}

input.addEventListener( 'input', validate )