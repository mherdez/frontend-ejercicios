
const fizzbuzz = require('./fizzbuzz');

describe('Pruebas de la funcion FizzBuzz', () => {

  test('Se espera que 1 deba ser 1', () => {

    const num = 1;
    const expected = fizzbuzz(num);
    const result = 1;

    expect( expected ).toBe( result )
  })

  test('Se espera que 3 deba ser fizz', () => {

    const num = 3;
    const expected = fizzbuzz(num);
    const result = 'fizz';

    expect( expected ).toBe( result )
  })

  test('Se espera que los múltiplos de 3 deban ser fizz', () => {

    const num = 6;
    const expected = fizzbuzz(num);
    const result = 'fizz';

    expect( expected ).toBe( result )
  })

  test('Se espera que los múltiplos de 9 deban ser fizz', () => {

    const num = 9;
    const expected = fizzbuzz(num);
    const result = 'fizz';

    expect( expected ).toBe( result )
  })

  test('Se espera que 5 deba ser buzz', () => {

    const num = 5;
    const expected = fizzbuzz(num);
    const result = 'buzz';

    expect( expected ).toBe( result )
  })

  test('Se espera que 10 deba ser buzz', () => {

    const num = 10;
    const expected = fizzbuzz(num);
    const result = 'buzz';

    expect( expected ).toBe( result )
  })

  test('Se espera que 15 deba ser fizzbuzz', () => {

    const num = 15;
    const expected = fizzbuzz(num);
    const result = 'fizzbuzz';

    expect( expected ).toBe( result )
  })

  test('Se espera que -1 deba ser -1', () => {

    const num = -1;
    const expected = fizzbuzz(num);
    const result = -1;

    expect( expected ).toBe( result )
  })

  test('Se espera que 0 deba ser 0', () => {

    const num = 0;
    const expected = fizzbuzz(num);
    const result = 0;

    expect( expected ).toBe( result )
  })

})