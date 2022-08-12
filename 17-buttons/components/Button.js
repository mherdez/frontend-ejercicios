

const Button = ( label = 'White' ) => {

  let isBlack = true;

  if( label.indexOf('-') >= 0 ) {
    label = label.replaceAll('-', '')
    isBlack = false
  }

  const button = document.createElement('button');
  button.textContent = label;

  const btnStl = button.style;
  btnStl.backgroundColor = label;
  btnStl.color = ( isBlack ) ? 'black' : 'white';
  btnStl.padding = '5px 20px';
  btnStl.fontSize = '8px';

  return button
}

