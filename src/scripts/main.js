const mainSwiper = document.querySelector('.swiper-main')
const previewSwiper = document.querySelector('.swiper-preview')


const previewSlider = new Swiper(previewSwiper, {
  slidesPerView: 3,
  direction: 'vertical',
  spaceBetween: 30,
  slideToClickedSlide: true,
  freeMode: true,
  loop: true,
  centeredSlides: true,
  loopedSlides: 3
})

const mainSlider = new Swiper(mainSwiper, {
  slidesPerView: 1,
  width: 900,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  thumbs: {
    swiper: previewSlider
  },
  loopedSlides: 3
})