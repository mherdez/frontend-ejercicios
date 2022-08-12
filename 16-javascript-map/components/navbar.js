

const buttons = [
  {
    text      : 'Botón 1',
    bgColor   : 'lightcoral',
    textColor : 'white',
  },
  {
    text      : 'Botón 2',
    bgColor   : 'skyblue',
    textColor : 'white',
  },
  {
    text      : 'Botón 3',
    bgColor   : 'mediumseagreen',
    textColor : 'white',
  },
  {
    text      : 'Botón 4',
    bgColor   : 'yellow',
    textColor : 'red',
  },
]


const navbar = () => {

  const navbar = document.createElement('div')

  navbar.appendChild(button(buttons[0]))
  navbar.appendChild(button(buttons[1]))
  navbar.appendChild(button(buttons[2]))
  navbar.appendChild(button(buttons[3]))

  return navbar
}
