const initToursSlider = () => {
  const mainSliderElement = document.querySelector('[data-tours-slider]');
  const prevButton = document.querySelector('[data-tours-slider-button-prev]');
  const nextButton = document.querySelector('[data-tours-slider-button-next]');

  return new window.Swiper(mainSliderElement, {
    // Optional parameters
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
        initialSlide: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
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
};

export {initToursSlider};
