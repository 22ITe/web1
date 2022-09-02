//==========DATA-WEB-FILMS=========
var films=[];

films[0] = {
    img: 'https://tse4.mm.bing.net/th?id=OIP.smixRJoauY453-ZKwz7AbwHaL3&pid=Api&P=0',
    title: 'Đấu Phá Thương Khung'
}

films[1] = {
    img: 'https://tse2.mm.bing.net/th?id=OIP.pBnVYdyV7vzIBN4VsroKbwHaKe&pid=Api&P=0',
    title: 'Vân Vận - Vân Chi'
}

//========FUNCTION=================
function addfilm(value) {
    var filmitem = document.createElement('div');
    filmitem.className = 'container__film-body';
    filmitem.innerHTML= `
        <a class="container__film-body-heading" href="xemphim.html">
            <img src="${value.img}" alt="" class="container__film-body-img">
        </a>
        <a class="container__film-body-title" href="xemphim.html">
            <h3 class="container__film-body-text">${value.title}</h3>
         </a>
    `;
    containerFilm.appendChild(filmitem);
}

//=========SOURCE CODE=============

  //list-Films
  var containerFilm = document.querySelector('.container__film');
  if (containerFilm) {for (var value of films) {
      addfilm(value);
  }}

//kho phim



