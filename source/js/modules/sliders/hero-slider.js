import Swiper from '../../vendor/swiper';

const initHeroSlider = () => {
  const mainSliderElement = document.querySelector('[data-hero-slider]');

  const swiperHero = new Swiper(mainSliderElement, {
    // Optional parameters
    loop: true,

    // Pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 1200px
      1200: {
        allowTouchMove: false,
      },
      // when window width is >= 768px
      768: {
        allowTouchMove: true,
      },
      // when window width is >= 0px
      0: {
        allowTouchMove: true,
      },
    },
  });
  return swiperHero;
};

export {initHeroSlider};
