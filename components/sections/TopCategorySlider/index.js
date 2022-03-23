import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import { useEffect, useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function TopCategorySlider() {

  const [offset, setOffset] = useState(0);
  const topSwiperActionsRoot = useRef(null);

  useEffect(() => {
    const onScrollEvent = (e) => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', onScrollEvent);
    return () => {
      window.removeEventListener('scroll', onScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (offset > 0) {
      topSwiperActionsRoot.current.classList.add('stik-to-top')
    } else {
      topSwiperActionsRoot.current.classList.remove('stik-to-top')
    }
  }, [offset])

  return (
    <div ref={topSwiperActionsRoot} className='top-category-slider'>
      <div className="container top-category-slider__container">
        <Swiper
          className="top-category-slider__swiper"
          modules={[FreeMode]}
          loop={false}
          slidesPerView="auto"
          freeMode={true}
          allowTouchMove={false}>
          <SwiperSlide className="top-category-slider__item">
            <Link href="/kickscooters"><a className="text text_25 top-category-slider__link">Ninebot kickscooter</a></Link>
          </SwiperSlide>
          <SwiperSlide className="top-category-slider__item">
            <Link href="/gocarts"><a className="text text_25 top-category-slider__link">Ninebot gocart</a></Link>
          </SwiperSlide>
          <SwiperSlide className="top-category-slider__item">
            <Link href="/accessories"><a className="text text_25 top-category-slider__link">Accessories</a></Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
