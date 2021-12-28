function menuMobile(){
  const btnMenu = document.querySelector('.header .nav-mobile .link-menu');
  const contMenu = document.querySelector('.header .nav_desktop');

  btnMenu.addEventListener('click', (e) => {
    contMenu.classList.toggle('activo');
  })
}


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
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });
}

function swiperProductos(){
  let swiper = new Swiper(".swiperProductos", {
    slidesPerView: 1,
    spaceBetween: 6,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
}

menuMobile();
swiperHomeHero();
swiperProductos();
swiperNoticias();