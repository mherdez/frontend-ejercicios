
const Title = ( label ) => {

  const h1 =  document.createElement('h1');
  h1.textContent = label;
  h1.classList.add('title');

  return h1;
}