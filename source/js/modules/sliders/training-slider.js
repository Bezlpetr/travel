import Swiper from '../../vendor/swiper';

const initTrainingSlider = () => {
  const mainSliderElement = document.querySelector('[data-training-slider]');
  const prevButton = document.querySelector('[data-training-slider-button-prev]');
  const nextButton = document.querySelector('[data-training-slider-button-next]');

  const swiperTraining = new Swiper(mainSliderElement, {
    // Optional parameters
    loop: false,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false,
        initialSlide: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        allowTouchMove: true,
        initialSlide: 1,
      },
      // when window width is >= 0px
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
        initialSlide: 3,
      },
    },
  });
  return swiperTraining;
};

export {initTrainingSlider};
