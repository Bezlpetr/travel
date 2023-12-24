import Swiper from '../../vendor/swiper';

const initGallerySlider = () => {
  const mainSliderElement = document.querySelector('[data-gallery-slider]');
  const prevButton = document.querySelector('[data-gallery-slider-button-prev]');
  const nextButton = document.querySelector('[data-gallery-slider-button-next]');

  const swiperGallery = new Swiper(mainSliderElement, {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 2,
    spaceBetween: 5,
    initialSlide: 5,
    // observer: true,
    loopAddBlankSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
  return swiperGallery;
};

export {initGallerySlider};
