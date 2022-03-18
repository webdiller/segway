
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import segwayPlaceholder from '@/base/segway-placeholder.png';
import topSwiperAccessory from '@/base/top-swiper-accessory.png';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { disableTopSlider } from 'store/slices/elementInViewSlice';

export default function TopSwiper({ items }) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const actionSwiper = useRef(null);
  const swiperWithAllSegways = useRef(null);
  const parentSwiper = useRef(null);
  const router = useRouter();

  const dispatch = useDispatch()
  const { topSlider } = useSelector(state => state.elementInView)

  const slideToHandle = (event, id) => {
    actionSwiper.current.slideTo(id, 600, null);
    parentSwiper.current.slideTo(id, 600, null);
    const htmlItems = event.target.parentElement.children;
    for (let item of htmlItems) {
      item.classList.remove('swiper-slide-active');
    }
    event.target.classList.add('swiper-slide-active');
  };

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

  return (
    <div ref={ref} className="top-swiper">
      <div className="top-swiper__actions">
        <Swiper
          className="top-swiper__actions-swiper"
          modules={[FreeMode]}
          spaceBetween={0}
          slidesPerView="auto"
          freeMode={true}
          loop={false}
          breakpoints={{
            991: {
              freeMode: false,
              slidesPerView: 2
            }
          }}
          onInit={(swiper) => (actionSwiper.current = swiper)}>
          <SwiperSlide onClick={(event) => slideToHandle(event, 0)} tag="button" className="top-swiper__actions-slide">
            Ninebot kickscooter
          </SwiperSlide>
          <SwiperSlide onClick={(event) => slideToHandle(event, 1)} tag="button" className="top-swiper__actions-slide">
            Ninebot gokart
          </SwiperSlide>
          <SwiperSlide onClick={(event) => slideToHandle(event, 2)} tag="button" className="top-swiper__actions-slide">
            Accessories
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="top-swiper__all-swipers">
        <div className="container top-swiper__container">
          <Swiper className="top-swiper__parent-swiper" spaceBetween={10} slidesPerView={1} loop={false} allowTouchMove={false} onInit={(swiper) => (parentSwiper.current = swiper)}>
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
                  onInit={(swiper) => {
                    swiperWithAllSegways.current = swiper;
                  }}>
                  {items.segways.adultSegways.map(({ id, name, shortName, imgSmallPath, pageLinkName, excludeForMap }) => {
                    if (!excludeForMap) {
                      const isMatch = router.asPath.split('/')[2] === pageLinkName;
                      return (
                        <SwiperSlide key={id} className={isMatch ? 'top-swiper__item accent' : 'top-swiper__item'}>
                          <Link href={`${pageLinkName ? `/kickscooters/${pageLinkName}` : '/'}`}>
                            <a className="top-swiper__link">
                              <div className="top-swiper__img-wrapper">
                                <Image quality={40} objectFit="contain" className="top-swiper__img" src={imgSmallPath} alt={name} width={80} height={80} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                              </div>
                              <p className="top-swiper__name">{shortName}</p>
                            </a>
                          </Link>
                        </SwiperSlide>
                      )
                    }
                  })}
                  {items.segways.kidsSegways.map(({ id, name, shortName, imgSmallPath, pageLinkName, excludeForMap }) => {
                    if (!excludeForMap) {
                      const isMatch = router.asPath.includes(pageLinkName);
                      return (
                        <SwiperSlide key={id} className={isMatch ? 'top-swiper__item accent' : 'top-swiper__item'}>
                          <Link href={`${pageLinkName ? `/kickscooters/${pageLinkName}` : '/'}`}>
                            <a className="top-swiper__link">
                              <div className="top-swiper__img-wrapper">
                                <Image objectFit="contain" className="top-swiper__img" src={imgSmallPath} alt={name} width={80} height={80} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                              </div>
                              <p className="top-swiper__name">{shortName}</p>
                            </a>
                          </Link>
                        </SwiperSlide>
                      )
                    }
                  })}
                  <SwiperSlide key="99999" className="top-swiper__item">
                    <Link href="/accessories">
                      <a className="top-swiper__link">
                        <div className="top-swiper__img-wrapper">
                          <Image objectFit="contain" className="top-swiper__img" src={topSwiperAccessory} alt="Accessories" width={80} height={80} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                        </div>
                        <p className="top-swiper__name">Accessories</p>
                      </a>
                    </Link>
                  </SwiperSlide>
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

            <SwiperSlide className="top-swiper__parent-slide">
              <div className="top-swiper__main-container">
                <Swiper
                  className="top-swiper__swiper"
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
                  }}>
                  {items.gocarts.map(({ id, name, shortName, imgSmallPath, pageLinkName }) => {
                    return (
                      <SwiperSlide key={id} className={router.asPath.includes(pageLinkName) ? 'top-swiper__item accent' : 'top-swiper__item'}>
                        <Link href={`${pageLinkName ? `/gocarts/${pageLinkName}` : '/'}`}>
                          <a className="top-swiper__link">
                            <div className="top-swiper__img-wrapper">
                              <Image quality={40} objectFit="contain" className="top-swiper__img" src={imgSmallPath} alt={name} width={80} height={80} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                            </div>
                            <p className="top-swiper__name">{shortName}</p>
                          </a>
                        </Link>
                      </SwiperSlide>
                    );
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

            <SwiperSlide className="top-swiper__parent-slide">
              <div className="top-swiper__main-container">
                <Swiper
                  className="top-swiper__swiper"
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
                  }}>
                  {items.segways.kidsSegways.map(({ id, name, shortName, imgSmallPath, pageLinkName }) => (
                    <SwiperSlide key={id} className={router.asPath.includes(pageLinkName) ? 'top-swiper__item accent' : 'top-swiper__item'}>
                      <Link href="/">
                        <a className="top-swiper__link">
                          <div className="top-swiper__img-wrapper">
                            <Image quality={40} objectFit="contain" className="top-swiper__img" src={imgSmallPath} alt={name} width={80} height={80} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                          </div>
                          <p className="top-swiper__name">{shortName}</p>
                        </a>
                      </Link>
                    </SwiperSlide>
                  ))}
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
  );
}
