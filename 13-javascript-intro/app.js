
const isPalindromo = (texto) =>
texto
  .split('')
  .reverse()
  .join('')
  .toLowerCase()
  .normalize('NFD')
  .replace(/[ \u0300-\u036f\s,:.]+/g, '')
  .trim() ===
texto
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f \s,:.]+/g, '')
  .trim();


const frase = 'Ligar es ser ágil';

console.log(`${frase} es -> ${isPalindromo(frase)}`)
// console.log(isPalindromo('pop'))






// const isPalindromo = ( palabra ) => palabra.split('').reverse().join('') === palabra;

// const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo', ];
// const diasDeLaSemana = dias.map( dia => `${dia} esta nublado` )

// console.log(diasDeLaSemana)


// const diasDeLaSemana = dias.forEach( dia => console.log(dia) );

// dias.forEach( (dia) => { console.log( dia )} )


// for( let dia of dias) {
//   console.log(dia)
// }

  // for( let dia in dias) {
  //   console.log(dias[dia])
  // }


// for(let i = 0; i < dias.length; i++ ) {
//   console.log(dias[i])
// }


// for(let i = 0; i <= 6; i++ ) {
//   console.log(dias[i])
// }

// const numeros = [1,2,3];
// const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo', ]

// const deTodo = ['cadena', 12, true, {nombre: 'ana', edad: 10}, [1,2,3]]


// const usuario = {
// 	nombre: '',
//   edad: 0,
//   aprobado: false,
// };

// usuario.nombre = 'Anastasia';
// usuario.edad = 20;
// usuario.aprobado = true

// const sumar = ( n1 = 0, n2 = 0 ) => n1 + n2;

// function restar( n1, n2 ) {
//   return n1 - n2;
// }

// function restar(n1, n2) {
//   return 'has sido hackeado'
// }

// const saludar = (nombre = 'terricola') => console.log(`Saludos ${nombre}`);
//   saludar()

  // const saludar = (nombre) => console.log(`Hola ${nombre}`);

  // const saludar = (nombre) => {
  //   console.log(`Hola ${nombre}`);
  // }


  // function saludar(nombre) {
  //   console.log(
  //     ( nombre )
  //     ? `Hola ${ nombre }, como has estado`
  //     : 'No hay saludo'
  //   )
  // }


  // function saludar(nombre) {
  //   let saludo = ( nombre )
  //                ? `Hola ${ nombre }, como has estado`
  //                : 'No hay saludo'
  //   console.log(saludo)
  // }

// function saludar(nombre) {
//   if(nombre) {
//     console.log('Hola ' + nombre + " como estas") // js basico
//     console.log(`Hola ${ nombre }, como has estado`) // js moderno
//   } else {
//     console.log('No hay saludo')
//   }
// }












// function saludar() {
//   console.log('Hola mundo')
// }

// saludar()

// false
// undefined
// null
// 0 (cero)
// NaN
// la cadena vacía ("") ('') (``)

// if( `` ) {
//   console.log('es verdadero')
// } else {
//   console.log('es falso')
// }

// i= 0
// do {
//   console.log(i)
//   i += 3
// } while ( i <= 10);


// let i = 0
// while( i <= 10 ) {
//   console.log(i)
//   i += 2;
// }

// for( let i = 0; i <= 10; i++) {
//   console.log(i)
// }

// if (true) {
//   console.log('is true')
// } else {
//   console.log('is false')
// }

// const string = 'Cadena de caracteres'
// console.log(string)

// const string = '12' + 1 // concatena el 1
// console.log(string)

// const numero = 12;
// console.log(numero)

// const boleano = true
// console.log(boleano)

// let noDefinida;
// console.log(noDefinida)

// let variableNula = null
// console.log(variableNula)


// Constantes y Variables
// let nombreUsuario1 = 'Manuel';
// console.log(nombreUsuario1);

// nombreUsuario1 = 'Jose';
// console.log(nombreUsuario1);

// const nombreUsuario2 = 'Manuel';
// console.log(nombreUsuario2);

// // nombreUsuario2 = 'Jose';
// console.log(nombreUsuario2);

// Soy un comentario de una linea
/* Soy un comentario
de varias
lineas */
// console.log('hola mundo desde app.js desde la consola');
// console.log('otro comentario');