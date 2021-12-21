function swiperHomeHero(){
    let swiper = new Swiper(".swiperHomeHero", {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
}

function swiperNoticias(){
  let swiper = new Swiper(".swiperNoticias", {
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

function swiperProductos(){
  let swiper = new Swiper(".swiperProductos", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

swiperHomeHero();
swiperProductos();
swiperNoticias();