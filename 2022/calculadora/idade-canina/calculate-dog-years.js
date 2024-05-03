/*

Rules:

First dog year = 15 human years
Following dog year = 9 human years
Each following dog years = 5 human years

Source: https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/

*/

function dogYearsToHumanYears( dogYears ) {

  // Begin counting human years
  let humanYears = 0

  // Round up
  dogYears = Math.ceil( dogYears ) 

  // First dog year
  if ( dogYears >= 1 ) {
    humanYears += 15
    dogYears--
  }

  // Following dog year
  if ( dogYears >= 1 ) {
    humanYears += 9
    dogYears--
  }

  // Following dog years
  if ( dogYears >= 1 ) {

    while ( dogYears >= 1 ) {
      humanYears += 5
      dogYears--
    }

  }

  return humanYears

}


/* Simpler (and less precise) version */
function dogYearsToHumanYears( dogYears ) {
  
  return dogYears * 7

}