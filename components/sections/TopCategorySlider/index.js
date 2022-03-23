import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import 'swiper/css';
import { setPositionSlide } from 'store/slices/topSwiperSlice';

export default function TopCategorySlider() {

  const router = useRouter()
  const dispatch = useDispatch()

  const [offset, setOffset] = useState(0);
  const topSwiperActionsRoot = useRef(null);
  const swiperRef = useRef()

  useEffect(() => {
    const currentRoute = router.asPath;
    if (currentRoute.startsWith('/kickscooters')) {
      dispatch(setPositionSlide(0))
    }
    else if (currentRoute.startsWith('/gocarts')) {
      dispatch(setPositionSlide(1))
    }
    else if (currentRoute.startsWith('/accessories')) {
      dispatch(setPositionSlide(2))
    }
  }, [router, dispatch])

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
    <>
      <div ref={topSwiperActionsRoot} className='top-category-slider'>
        <div className="container top-category-slider__container">
          <Swiper
            className="top-category-slider__swiper"
            modules={[FreeMode]}

            spaceBetween={0}
            slidesPerView={"auto"}
            freeMode={true}
            loop={false}
            allowTouchMove={true}

            onInit={(swiper) => {
              swiperRef.current = swiper
            }}>

            <SwiperSlide className={router.asPath.startsWith('/kickscooters') ? 'text text_25 top-category-slider__item active' : 'text text_25 top-category-slider__item'}>
              <Link href="/kickscooters" passHref >Ninebot kickscooter</Link>
            </SwiperSlide>

            <SwiperSlide className={router.asPath.startsWith('/gocarts') ? 'text text_25 top-category-slider__item active' : 'text text_25 top-category-slider__item'}>
              <Link href="/gocarts" passHref >NINEBOT GOCART</Link>
            </SwiperSlide>

            <SwiperSlide className={router.asPath.startsWith('/accessories') ? 'text text_25 top-category-slider__item active' : 'text text_25 top-category-slider__item'}>
              <Link href="/accessories" passHref >Accessories</Link>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
      <div className="top-category-slider-separator"></div>
    </>
  )
}
