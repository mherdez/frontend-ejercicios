
const Card = (
  { photo = 'https://thumbs.dreamstime.com/b/icono-an%C3%B3nimo-de-la-cara-del-perfil-persona-gris-silueta-avatar-masculino-defecto-placeholder-foto-aislado-en-el-fondo-blanco-107327860.jpg',
  name = 'Cliente afiliado',
  origin = '',
  job = '',
  company ='',
  text ='' }
  ) => {

if( text ) {
  return `
  <div class="card">
    <div class="card-photo">
      <img src="${ photo }" alt="">
    </div>
    <div class="card-desc">
      <h2>
        <span class="card-desc-strong">${ name }</span> en ${ origin }
      </h2>
      <h3>${ job } en <span class="card-desc-strong">${ company }</span></h3>
        <p>
          ${ text }
        </p>
    </div>
  </div>
  `;
}
return ''
}




