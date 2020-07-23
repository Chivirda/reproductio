import Swiper, { Navigation, Pagination} from 'swiper'
Swiper.use([Navigation, Pagination])

const mainSwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  width: 900,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  spaceBetween: 30
})
