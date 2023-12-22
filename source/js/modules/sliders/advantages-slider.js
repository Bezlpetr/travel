import Swiper from '../../vendor/swiper';

// сначала пишем необходимый брейкпоинт
let desktop = window.matchMedia('(min-width: 1200px)');

const initAdvantagesSlider = () => {
  let swiperAdvantages = null;
  if (desktop.matches) {
    const mainSliderElement = document.querySelector('[data-advantages-slider]');
    const prevButton = document.querySelector('[data-advantages-slider-button-prev]');
    const nextButton = document.querySelector('[data-advantages-slider-button-next]');
    swiperAdvantages = new Swiper(mainSliderElement, {
      // Optional parameters
      loop: true,
      autoHeight: true,
      // Navigation arrows
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      slidesPerView: 3.58,
      spaceBetween: 30,
      initialSlide: 2,
      centeredSlides: 'true',
    });
  } else {
  // если слайдер не в брейкпоинте, то уничтожаем его
    swiperAdvantages.destroy();
  }
  return swiperAdvantages;
};

export {initAdvantagesSlider};
