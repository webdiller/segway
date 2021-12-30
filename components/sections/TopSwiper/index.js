import {Navigation, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useRef, useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import segwayPlaceholder from '@/base/segway-placeholder.png';
import topSwiperAccessory from '@/base/top-swiper-accessory.png';
import {useInView} from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/scrollbar';

/** Свайпер в шапке с самокатами */
export default function TopSwiper({items}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const {ref, inView} = useInView({threshold: 0.5});
  const swiperRef = useRef(null);
  const [fistInit, setFirstInit] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768 && inView && fistInit) {
      let myInterval;
      myInterval = setInterval(() => {
        if (document.readyState === 'complete') {
          clearInterval(myInterval)
          try {
            swiperRef.current.slideNext();
            setTimeout(() => {
              try {
                swiperRef.current.slidePrev();
              } catch (error) {}
            }, 350);
          } catch (error) {}
        }
      })
    }
  }, [swiperRef, inView, fistInit]);

  return (
    <div ref={ref} className="top-swiper">
      <div className="container top-swiper__container">
        <div className="top-swiper__swiper">
          <Swiper
            ref={swiperRef}
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
            onSlideChange={(el) => {
              setActiveIndex(el.activeIndex);
            }}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}>
            {items.segways.adultSegways.map(({id, name, shortName, imgPath, accent, ...props}) => (
              <SwiperSlide key={id} className={accent ? 'top-swiper__item accent' : 'top-swiper__item'}>
                <Link href="#">
                  <a className="top-swiper__link">
                    <div className="top-swiper__img-wrapper">
                      <Image quality={40} objectFit="contain" className="top-swiper__img" src={imgPath} alt={name} width={80} height={80} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                    </div>
                    <p className="top-swiper__name">{shortName}</p>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
            {items.segways.kidsSegways.map(({id, name, shortName, imgPath, ...props}) => (
              <SwiperSlide key={id} className="top-swiper__item">
                <Link href="#">
                  <a className="top-swiper__link">
                    <div className="top-swiper__img-wrapper">
                      <Image objectFit="contain" className="top-swiper__img" src={imgPath} alt={name} width={80} height={80} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                    </div>
                    <p className="top-swiper__name">{shortName}</p>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
            <SwiperSlide key="99999" className="top-swiper__item">
              <Link href="#accessories">
                <a className="top-swiper__link">
                  <div className="top-swiper__img-wrapper">
                    <Image objectFit="contain" className="top-swiper__img" src={topSwiperAccessory} alt="Accessories" width={80} height={80} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                  </div>
                  <p className="top-swiper__name">Accessories</p>
                </a>
              </Link>
            </SwiperSlide>
          </Swiper>

          <div className={activeIndex !== 0 ? 'top-swiper__navigation' : 'top-swiper__navigation disabled'}>
            <button className="top-swiper__nav top-swiper__nav_prev">
              <BsChevronCompactLeft className="top-swiper__icon" />
            </button>
            <button className="top-swiper__nav top-swiper__nav_next">
              <BsChevronCompactRight className="top-swiper__icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
