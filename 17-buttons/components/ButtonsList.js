
const ButtonsList = ( buttons ) => {
  return buttons.map( button => {
    const btn = Button( button );
    buttonsContainer.appendChild( btn )

    btn.addEventListener( 'mouseover', () => {
      box.style.backgroundColor = btn.textContent
    })
    return btn
  })
}