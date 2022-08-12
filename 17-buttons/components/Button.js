

const Button = ( label = 'White' ) => {

  const button = document.createElement('button');
  button.textContent = label;

  const btnStl = button.style;
  btnStl.backgroundColor = label;
  btnStl.color = 'black';
  btnStl.padding = '5px 20px';
  btnStl.fontSize = '8px';

  return button
}