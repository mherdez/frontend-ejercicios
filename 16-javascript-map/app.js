// const body = document.querySelector('body');

// body.style.textAlign = 'center'

// body.appendChild( encabezado('Super 10') );
// body.appendChild( navbar() );

let p = document.querySelectorAll('p')

// p[0].textContent = '1. ' + p[0].textContent
// p[1].textContent = '2. ' + p[1].textContent
// p[2].textContent = '3. ' + p[2].textContent
// p[3].textContent = '4. ' + p[3].textContent

// p.forEach( (el, i) => {
//   el.textContent = `${i+1}. ${el.textContent}`
// });
console.log(p)

const pArr = [...p].map( (el, i) => {                 // USO DEL SPREAT OPERATOR
  return el.textContent = `${i+1}. ${el.textContent}`
});

console.log(p, pArr)
