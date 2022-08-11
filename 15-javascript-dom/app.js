
// SELECCION DE ELEMENTO DEL NODO PRINCIPAL A TRAVES DEL SELECTOR (<> # .)
const root = document.querySelector('#root');

// CREACION DE UN ELEMENTO
const divTitle = document.createElement('div');

// AÑADIENDO LA CLASE CONTAINER
divTitle.classList.add('container')

// CREACION DEL TITULO
const titulo = document.createElement('h1');

// MODIFICANDO EL CONTENIDO DEL TEXTO
titulo.textContent = 'Javascript DOM'

// AÑADIENDO LA PROPIEDAD COLOR AL TEXTO
titulo.style.color = 'coral'

// INSERTANDO LOS HIJOS AL PADRE ROOT
divTitle.appendChild( titulo )
root.appendChild( divTitle )


// --------- DIV CARD-CONTAINER ---------------

const divCardContainer = document.createElement('div')
divCardContainer.classList.add('card-container')

root.appendChild( divCardContainer )

const clientes = [
  {
    // photo: 'https://www.freecodecamp.org/espanol/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png',
    photo: `https://randomuser.me/api/portraits/women/${ Math.floor( Math.random() * 100 + 1 ) }.jpg`,
    // name : 'Emma Bostian',
    origin: 'Suecia',
    job  : 'Ingeniera de Software',
    company: 'Spotify',
    text : '"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
  },
  {
    // photo: 'https://www.freecodecamp.org/espanol/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png',
    photo: `https://randomuser.me/api/portraits/women/${ Math.floor( Math.random() * 100 + 1 ) }.jpg`,
    name : 'Shawn Wang',
    origin: 'Singapur',
    job  : 'Ingeniero de Software',
    company: 'Amazon',
    text : '"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
  },
  {
    // photo: 'https://www.freecodecamp.org/espanol/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png',
    photo: `https://randomuser.me/api/portraits/women/${ Math.floor( Math.random() * 100 + 1 ) }.jpg`,
    name : 'Sarah Chima',
    origin: 'Singapur',
    job  : 'Ingeniero de Software',
    company: 'Amazon',
    text : 's de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software'
  },
  {
    photo: `https://randomuser.me/api/portraits/women/${ Math.floor( Math.random() * 100 + 1 ) }.jpg`,
    name : 'Sarah Chima',
    origin: 'Singapur',
    job  : 'Ingeniero de Software',
    company: 'Amazon',
    text : 's de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software'
  }
];


clientes.forEach( persona => {
  divCardContainer.innerHTML += Card( persona )
})
