const button = ( { text = 'Btn', bgColor, textColor = 'black'} ) => {

  const btn = document.createElement('button')
  btn.innerHTML = text;

  const btnStyle = btn.style;
  btnStyle.backgroundColor = bgColor;
  btnStyle.color = textColor;
  btnStyle.padding = '10px 30px';
  btnStyle.margin = '10px';
  btnStyle.fontSize = '20px';
  btnStyle.borderRadius = '10px';
  btnStyle.boxShadow = '0 5px 10px rgba(0,0,0,.5)';


  return btn
}