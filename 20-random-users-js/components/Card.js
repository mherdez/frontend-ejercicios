
/* <div class="card">
<img class="card-photo" src="https://randomuser.me/api/portraits/women/21.jpg" alt="">
<h2 class="card-name">Karem</h2>
</div> */

const Card = ( user ) => {

  let id, name, photo;

  if( user ) {
    id = user.id;
    name = user.name;
    photo = `https://randomuser.me/api/portraits/women/${id}.jpg`;
  } else {
    id = 0;
    name = 'Anónima'
    photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LXiwXj0_7JcBQPGxdYfc8qE2l5i7VrIrKjh2utzksDhZvlIc0YsZeYN82BrXZiSUBt4&usqp=CAU'
  }

  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('card-photo');
  img.src = photo
  img.alt = 'Photo woman'

  card.appendChild(img);

  const h2 = document.createElement('h2');
  h2.classList.add('card-name');
  h2.textContent = name

  card.appendChild(h2);

  return card;
}