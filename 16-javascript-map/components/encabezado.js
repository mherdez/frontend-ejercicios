

function encabezado( titulo = 'Carrito de compras' ) {

  const h1 = document.createElement('h1');
  h1.textContent = titulo;
  h1.style.textAlign = 'Center'
  h1.style.margin = '80px auto';
  h1.style.color = 'white'
  h1.style.fontFamily = 'sans-serif'
  h1.style.border = '2px solid white'
  h1.style.padding = '20px'

  const h1Style = h1.style;
  h1Style.backgroundColor = 'gray'
  h1Style.width = '80%'
  h1Style.borderRadius = '10px';

  return h1
}
