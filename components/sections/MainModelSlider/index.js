import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import {useMediaQuery} from '@/hooks/useMediaQuery';

import arrowLeft from '@/base/icon-arrow-left.svg';
import arrowRight from '@/base/icon-arrow-right.svg';

import mainModelSliderLogo from '@/base/main-model-slider-logo.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    id: 0,
    src: '/main-model-slider-1.jpg',
    srcSmall: '/main-model-slider-1-sm.jpg'
  },
  {
    id: 1,
    src: '/main-model-slider-1.jpg',
    srcSmall: '/main-model-slider-1-sm.jpg'
  },
  {
    id: 2,
    src: '/main-model-slider-1.jpg',
    srcSmall: '/main-model-slider-1-sm.jpg'
  },
  {
    id: 3,
    src: '/main-model-slider-1.jpg',
    srcSmall: '/main-model-slider-1-sm.jpg'
  },
]

export default function MainModelSlider() {

  let mediaQuery = useMediaQuery(`(max-width: 991px)`);

  return (
    <div className='main-model-slider'>
      <div className="main-model-slider__container">

        <Swiper
          modules={[Navigation, Pagination]}
          className="main-model-slider__slider"
          spaceBetween={0}
          slidesPerView={1}
          speed={600}
          loop={true}
          navigation={{
            prevEl: '.main-model-slider__nav_left',
            nextEl: '.main-model-slider__nav_right'
          }}
          pagination={{
            clickable: true,
            el: '.main-model-slider__pagination'
          }}
        >
          {images.map(({ id, src, srcSmall }) => {
            return (
              <SwiperSlide key={id} className="main-model-slider__slide">
                <Image
                  src={!mediaQuery ? src : srcSmall}
                  quality={100}
                  width={1376}
                  height={391}
                  objectFit="cover"
                  className="main-model-slider__image"
                  alt="Segway image in slider"
                  layout="fill"
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

        <div className="container main-model-slider__content">
          <div className="main-model-slider__content-logo">
            <Image src={mainModelSliderLogo} alt="Main model slider logo" />
          </div>
          <p className="main-model-slider__content-text">Authorized <br /> reseller</p>
        </div>

        <div className="main-model-slider__pagination"></div>

      </div>
    </div >
  )
}
