
const sumar = require('./sumar')

describe( 'Pruebas a la funcion Sumar.js', () => {

  test( 'Se espera que 1 + 2 sea igual a 3', () => {
    expect( sumar(1, 2) ).toBe( 3 )
  } )

  test( 'Se espera que 0 + 1 sea igual a 1', () => {
    expect( sumar(0, 1) ).toBe( 1 )
  } )

  test( 'Se espera que 0 + 0 sea igual a 0', () => {
    expect( sumar(0, 0) ).toBe( 0 )
  } )

  test( 'Se espera que -10 + 1 sea igual a -9', () => {
    expect( sumar(-10, 1) ).toBe( -9 )
  } )

  test( 'Se espera que -10 + -1 sea igual a -11', () => {
    expect( sumar(-10, -1) ).toBe( -11 )
  } )

})