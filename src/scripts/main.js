import Swiper, { Navigation, Pagination} from 'swiper'
Swiper.use([Navigation, Pagination])

const mainSwiper = new Swiper('.swiper-container', {
  slidesPerView: 1
})
