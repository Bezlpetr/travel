import Swiper from '../../vendor/swiper';

const initReviewsSlider = () => {
  const mainSliderElement = document.querySelector('[data-reviews-slider]');
  const prevButton = document.querySelector('[data-reviews-slider-button-prev]');
  const nextButton = document.querySelector('[data-reviews-slider-button-next]');

  const swiperReviews = new Swiper(mainSliderElement, {
    // Optional parameters
    loop: true,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 1.61,
        spaceBetween: 120,
        allowTouchMove: false,
        initialSlide: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1.19,
        spaceBetween: 30,
        allowTouchMove: true,
        initialSlide: 1,
      },
      // when window width is >= 0px
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
        initialSlide: 1,
      },
    },
  });
  return swiperReviews;
};

export {initReviewsSlider};
