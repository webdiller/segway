import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import arrowLeft from '@/base/icon-arrow-left.svg';
import arrowRight from '@/base/icon-arrow-right.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const images = [
  {
    id: 0,
    src: '/main-model-slider-1.jpg',
    srcSmall: '/main-model-slider-1-sm.jpg',
    alt: "authorized reseller"
  },
  {
    id: 1,
    src: '/main-model-slider-2.jpg',
    srcSmall: '/main-model-slider-2-sm.jpg',
    alt: "Free 1 day shipping within California."
  },
  {
    id: 2,
    src: '/main-model-slider-3.jpg',
    srcSmall: '/main-model-slider-3-sm.jpg',
    alt: "Pay as you ride. Select Affirm for affordable monthly paymants"
  },
  {
    id: 3,
    src: '/main-model-slider-4.jpg',
    srcSmall: '/main-model-slider-4-sm.jpg',
    alt: "Segway Protective Gear Set as a gift. The cost of a protection kit when buying a scooter is $ 0 instead of $ $29.99"
  },
]

export default function MainModelSlider() {

  let mediaQuery = useMediaQuery(`(max-width: 991px)`);

  return (
    <div className='main-model-slider'>
      <div className="main-model-slider__container">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="main-model-slider__slider"
          spaceBetween={0}
          slidesPerView={1}
          speed={600}
          loop={true}
          autoplay={{
            delay: 5000
          }}
          navigation={{
            prevEl: '.main-model-slider__nav_left',
            nextEl: '.main-model-slider__nav_right'
          }}
          pagination={{
            clickable: true,
            el: '.main-model-slider__pagination'
          }}
        >
          {images.map(({ id, src, srcSmall, alt }) => {
            return (
              <SwiperSlide key={id} className="main-model-slider__slide">
                <Image
                  src={!mediaQuery ? src : srcSmall}
                  quality={100}
                  width={!mediaQuery ? 1376 : 375}
                  height={!mediaQuery ? 388 : 273}
                  layout="responsive"
                  objectFit="contain"
                  className="main-model-slider__image"
                  alt={alt}
                />
              </SwiperSlide>
            )
          })}

        </Swiper>

        <div className="container main-model-slider__navigation">
          <div className="main-model-slider__nav main-model-slider__nav_left">
            <Image src={arrowLeft} alt="icon" />
          </div>
          <div className="main-model-slider__nav main-model-slider__nav_right">
            <Image src={arrowRight} alt="icon" />
          </div>
        </div>

        {/* Контент для картинок */}
        {/* <div className="container main-model-slider__content">
          <div className="main-model-slider__content-logo">
            <Image src={mainModelSliderLogo} alt="Main model slider logo" />
          </div>
          <p className="main-model-slider__content-text">Authorized <br /> reseller</p>
        </div> */}

        <div className="main-model-slider__pagination"></div>

      </div>
    </div >
  )
}
