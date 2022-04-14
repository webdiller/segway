import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import segwayPlaceholder from '@/base/segway-placeholder.png';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { disableTopSlider } from 'store/slices/elementInViewSlice';

export default function TopSwiper({ items }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { topSlider } = useSelector(state => state.elementInView);
  const { currentPosition } = useSelector(state => state.topSwiper);

  const swiperWithAllSegways = useRef(null);
  const parentSwiper = useRef(null);

  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (window.innerWidth <= 768 && inView && topSlider) {
      let myInterval;
      myInterval = setInterval(() => {
        if (document.readyState === 'complete') {
          clearInterval(myInterval);
          try {
            swiperWithAllSegways.current.slideNext();
            setTimeout(() => {
              try {
                swiperWithAllSegways.current.slidePrev();
              } catch (error) { }
            }, 450);
          } catch (error) { }
          finally {
            dispatch(disableTopSlider(false))
          }
        }
      });
    }
  }, [swiperWithAllSegways, inView, topSlider, dispatch]);

  useEffect(() => {
    parentSwiper.current.slideTo(currentPosition, 600, null);
  }, [currentPosition])

  return (
    <>
      <div ref={ref} className="top-swiper">
        <div className="top-swiper__all-swipers">

          <div className="container top-swiper__container">
            <Swiper className="top-swiper__parent-swiper"
              spaceBetween={10}
              slidesPerView={1}
              loop={false}
              allowTouchMove={false}
              onInit={(swiper) => (parentSwiper.current = swiper)}>

              {/* kickscooters */}
              <SwiperSlide className="top-swiper__parent-slide">
                <div className="top-swiper__main-container">
                  <Swiper
                    className="top-swiper__swiper"
                    ref={swiperWithAllSegways}
                    modules={[Navigation, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={4}
                    loop={false}
                    freeMode={true}
                    navigation={{
                      prevEl: '.top-swiper__nav_prev',
                      nextEl: '.top-swiper__nav_next'
                    }}
                    breakpoints={{
                      768: {
                        allowTouchMove: false
                      }
                    }}
                    onInit={(swiper) => swiperWithAllSegways.current = swiper}>
                    {items.segways.map(({ id, name, shortNameWithoutPrefix, imgSmallPath, pageLinkName, excludeForMap, pageLinkForMatch }) => {
                      if (!excludeForMap) {
                        const currentUrl = router.asPath.split('/')[2];
                        let isMatch = null
                        if (currentUrl) {
                          isMatch = currentUrl.includes(pageLinkForMatch)
                        }
                        return (
                          <SwiperSlide key={id} className={isMatch ? "top-swiper__item accent" : "top-swiper__item"}>
                            <Link href={`${pageLinkName ? `/kickscooters/${pageLinkName}` : '/'}`}>
                              <a className="top-swiper__link">
                                <div className="top-swiper__img-wrapper">
                                  <Image quality={40} objectFit="contain" className="top-swiper__img" src={imgSmallPath} alt={name} width={80} height={80} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                                </div>
                                <p className="top-swiper__name">{shortNameWithoutPrefix}</p>
                              </a>
                            </Link>
                          </SwiperSlide>
                        )
                      }
                    })}
                  </Swiper>

                  <div className="top-swiper__navigation">
                    <button aria-label="swipe to left slider" className="top-swiper__nav top-swiper__nav_prev">
                      <BsChevronCompactLeft className="top-swiper__icon" />
                    </button>
                    <button aria-label="swipe to right slider" className="top-swiper__nav top-swiper__nav_next">
                      <BsChevronCompactRight className="top-swiper__icon" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              {/* gokarts */}
              <SwiperSlide className="top-swiper__parent-slide">
                <div className="top-swiper__main-container">
                  <Swiper
                    className="top-swiper__swiper"
                    ref={swiperWithAllSegways}
                    modules={[Navigation, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={4}
                    loop={false}
                    freeMode={true}
                    navigation={{
                      prevEl: '.top-swiper__nav_prev',
                      nextEl: '.top-swiper__nav_next'
                    }}
                    breakpoints={{
                      768: {
                        allowTouchMove: false
                      }
                    }}
                    onInit={(swiper) => swiperWithAllSegways.current = swiper}>
                    {items.gokarts.map(({ id, name, nameWithoutBrand, imgSmallPath, pageLinkName, excludeForMap, pageLinkForMatch }) => {
                      if (!excludeForMap) {
                        const currentUrl = router.asPath.split('/')[2];
                        let isMatch = null
                        if (currentUrl) {
                          isMatch = currentUrl.includes(pageLinkForMatch)
                        }
                        return (
                          <SwiperSlide key={id} className={isMatch ? "top-swiper__item accent" : "top-swiper__item"}>
                            <Link href={`${pageLinkName ? `/gokarts/${pageLinkName}` : '/'}`}>
                              <a className="top-swiper__link">
                                <div className="top-swiper__img-wrapper">
                                  <Image quality={40} objectFit="contain" className="top-swiper__img" src={imgSmallPath} alt={name} width={80} height={80} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                                </div>
                                <p className="top-swiper__name">{nameWithoutBrand}</p>
                              </a>
                            </Link>
                          </SwiperSlide>
                        )
                      }
                    })}
                  </Swiper>

                  <div className="top-swiper__navigation">
                    <button aria-label="swipe to left slider" className="top-swiper__nav top-swiper__nav_prev">
                      <BsChevronCompactLeft className="top-swiper__icon" />
                    </button>
                    <button aria-label="swipe to right slider" className="top-swiper__nav top-swiper__nav_next">
                      <BsChevronCompactRight className="top-swiper__icon" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>

        </div>
      </div>
    </>
  );
}
