// <div class="card-container">

const CardList = () => {

  const cardContainer = document.createElement('div')
  cardContainer.classList.add('card-container')

  users.map( user => {
    cardContainer.appendChild( Card( user ) );
  })

  return cardContainer
}