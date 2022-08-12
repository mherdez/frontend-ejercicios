
const buttonsContainer = document.querySelector('#buttons-container');
const box = document.querySelector('.box')

const btn1 = Button('LightCoral')
const btn2 = Button('LightGreen')
const btn3 = Button('LightSkyBlue')

buttonsContainer.appendChild( btn1 )
buttonsContainer.appendChild( btn2 )
buttonsContainer.appendChild( btn3 )

btn1.addEventListener( 'mouseover', () => {
  box.style.backgroundColor = btn1.textContent
})

btn2.addEventListener( 'mouseover', () => {
  box.style.backgroundColor = btn2.textContent
})

btn3.addEventListener( 'mouseover', () => {
  box.style.backgroundColor = btn3.textContent
})













// buttonsContainer.appendChild( Button('LightCoral') )
// buttonsContainer.appendChild( Button('LightGreen') )
// buttonsContainer.appendChild( Button('LightSkyBlue') )
// buttonsContainer.appendChild( Button('SandyBrown') )