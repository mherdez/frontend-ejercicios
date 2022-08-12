const isMultiplo = (numero, base) => numero % base === 0

const fizzbuzz = ( num ) => {
  if( num === 0 ) return num
  if( isMultiplo(num, 3) && isMultiplo(num, 5) ) return 'fizzbuzz'
  if( isMultiplo(num, 3) ) return 'fizz'
  if( isMultiplo(num, 5) ) return 'buzz'
  return num
}


const lista = ( limite ) => {
  for (let i = 1; i <= limite; i++) {
    console.log(`${ i }: ${ fizzbuzz(i) }`)
  }
}

lista(40);




module.exports = fizzbuzz;