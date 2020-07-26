const mainSwiper = document.querySelector('.swiper-main')
const previewSwiper = document.querySelector('.swiper-preview')
const sliderPopular = document.querySelector('.swiper-popular')


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
  loop: true,
  navigation: {
    nextEl: '.main-button-next',
    prevEl: '.main-button-prev',
  },
  spaceBetween: 30,
  thumbs: {
    swiper: previewSlider
  },
  loopedSlides: 3
})

const popularSlider = new Swiper(sliderPopular, {
  
})