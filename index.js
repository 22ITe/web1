//==========DATA-WEB-FILMS=========
var films=[];
var id = -1;

films[id = id + 1 ] = {
    img: 'https://tse3.mm.bing.net/th?id=OIP.0c5ux-mGf7jz_LisBeGKpgAAAA&pid=Api&P=0',
    title: 'Đấu Phá Thương Khung -Phần 1'
}

films[id = id + 1 ] = {
    img: 'https://tse2.mm.bing.net/th?id=OIP.yLHQ7WGHitcjqAYOlw1rzAHaKe&pid=Api&P=0',
    title: 'Đấu Phá Thương Khung -Phần 2'
}

films[id = id + 1 ] = {
    img: 'https://tse1.mm.bing.net/th?id=OIP.QN0-yTxpT1Q29MeXtRy2hAAAAA&pid=Api&P=0',
    title: 'Đấu Phá Thương Khung -Phần 3'
}

films[id = id + 1 ] = {
    img: 'https://tse1.mm.bing.net/th?id=OIP.0cPQGrNvZ1dore8ls4QU5gHaKY&pid=Api&P=0',
    title: 'Đấu Phá Thương Khung -Phần 4'
}

films[id = id + 1 ] = {
    img: 'https://tse1.mm.bing.net/th?id=OIP.YmX5LXpvRuOvHhjmLqP-ygHaKZ&pid=Api&P=0',
    title: 'Đấu Phá Thương Khung -OAV 3'
}

films[id = id + 1 ] = {
    img: 'https://tse1.mm.bing.net/th?id=OIP.OOsm9NT2-WZBBFwjr5vMJQHaLX&pid=Api&P=0',
    title: 'Đấu Phá Thương Khung -Phần 5'
}

//========FUNCTION=================
//list-Films
// function addfilm(value) {
//     var filmitem = document.createElement('div');
//     filmitem.className = 'container__film-body';
//     filmitem.innerHTML= `
//         <a class="container__film-body-heading" href="xemphim.html">
//             <img src="${value.img}" alt="" class="container__film-body-img">
//         </a>
//         <a class="container__film-body-title" href="xemphim.html">
//             <h3 class="container__film-body-text">${value.title}</h3>
//          </a>
//     `;
//     containerFilm.appendChild(filmitem);
// }

//========================BASE VAR======================
const container = document.querySelector('.container')

//=========SOURCE CODE=============

//list-Films
// var containerFilm = document.querySelector('.container__film');
// if (containerFilm) {for (var value of films) {
//       addfilm(value);
// }}

//kho phim
var khophim = document.querySelector('.nav__list-item-khophim');
khophim.onclick = function () {
    var promise = new Promise ( (resolve) => resolve() );

    promise
        .then( () => {
            // var containerFilm_body = document.createElement('div');
            // containerFilm_body.className = 'container__film grid__row';
            // container.appendChild(containerFilm_body);
            container.innerHTML =  `<div class="container__film grid__row"></div>`
        })
        .then( () => {
            var containerFilm = document.querySelector('.container__film');
            if (containerFilm) {for (var value = films.length - 1; value >= 0; value--) {
                var filmitem = document.createElement('div');
                filmitem.className = 'container__film-body';
                filmitem.innerHTML= `
                    <a class="container__film-body-heading" href="./kho-phim/xemphim.html">
                        <img src="${films[value].img}" alt="" class="container__film-body-img">
                    </a>
                    <a class="container__film-body-title" href="./kho-phim/xemphim.html">
                        <h3 class="container__film-body-text">${films[value].title}</h3>
                    </a>
                `;
                containerFilm.appendChild(filmitem);
            }}
        })
}



