import Link from 'next/link'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper';
import classNames from 'classnames';

import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { setCustomSlider } from 'store/slices/elementInViewSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function CategorySlider({ customClassNames, title, products, typeItemName, typeScrollBar, allowTouchMove = true, keySlider }) {

  const dispatch = useDispatch()

  const swiperRef = useRef()
  const { ref, inView } = useInView({ threshold: 0.5 });

  const { otherSliders } = useSelector(state => state.elementInView)

  useEffect(() => {
    if (otherSliders[keySlider] === undefined) {
      dispatch(setCustomSlider({ sliderName: keySlider, payload: true }))
    }
  }, [otherSliders, keySlider, dispatch])

  useEffect(() => {
    if (inView && otherSliders[keySlider] && allowTouchMove) {
      try {
        setTimeout(() => {
          try {
            swiperRef.current.slideNext();
          } catch (error) { }
          setTimeout(() => {
            try {
              swiperRef.current.slidePrev();
            } catch (error) { }
            setTimeout(() => {
              try {
                dispatch(setCustomSlider({ sliderName: keySlider, payload: false }))
              } catch (error) { }
            }, 700);
          }, 700);
        }, 600);
      } catch (error) {
        console.log('error while handle swipe');
      }
    }
  }, [inView, otherSliders, keySlider])

  return (
    <div ref={ref} className={classNames('category-slider', classNames(customClassNames))}>
      <div className="container category-slider__container">
        <p className="title category-slider__title">{title}</p>
        <Swiper
          ref={swiperRef}
          className="category-slider__swiper"

          modules={[Scrollbar, FreeMode]}

          slidesPerView="auto"
          freeMode={true}
          speed={600}
          loop={false}
          centeredSlides={false}
          allowTouchMove={allowTouchMove}

          scrollbar={{
            el: '.category-slider__scrollbar',
            draggable: true
          }}

          onInit={(swiper => {
            swiperRef.current = swiper
          })}
        >
          {products.map(({ id, type, excludeForMap, nameWrap, nameWithoutBrand, imgPath, pageLinkName, pageLinkNameWithCategory }) => {
            const classForName = typeItemName === 'accessories' ? 'category-slider__name category-slider__name_accessory' : 'category-slider__name'
            if (!excludeForMap) {
              return (
                <SwiperSlide key={id} className="category-slider__item">

                  <div className="category-slider__img-with-content">
                    <Link href={pageLinkNameWithCategory || pageLinkName}>
                      <a className="category-slider__overlay-link"></a>
                    </Link>
                    <div className="category-slider__image">
                      <Image
                        src={imgPath}
                        quality={100}
                        objectFit="contain"
                        layout='fill'
                        alt="Segway image in slider"
                      />
                    </div>
                    <p className={`text text_25 ${classForName}`}>{nameWithoutBrand || nameWrap}</p>
                    {type === 'accessory' ? (
                      <div className="text category-slider__prices">
                        <p className="category-slider__price">$899.99</p>
                      </div>
                    ) : (
                      <div className="text category-slider__prices">
                        <p className="category-slider__price">$899.99</p>
                        <span className="category-slider__price-separator">or</span>
                        <p className="category-slider__price category-slider__price_alt">$7 / <span>month</span></p>
                      </div>
                    )}
                  </div>

                  <Link href={pageLinkNameWithCategory || pageLinkName}>
                    <a className="ui-btn category-slider__see-more">
                      <span>SEE MORE</span>
                    </a>
                  </Link>
                </SwiperSlide>
              )
            }
          })}
          <div className={typeScrollBar === 'white' ? "category-slider__scrollbar category-slider__scrollbar_white" : "category-slider__scrollbar"}></div>
        </Swiper>
      </div>
    </div>
  )
}
