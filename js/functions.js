function swiperHomeHero(){
    let swiper = new Swiper(".swiperHomeHero", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
}

swiperHomeHero();