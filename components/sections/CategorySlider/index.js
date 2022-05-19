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
import { pushProduct } from 'store/slices/productCartSlice';
import { productModalActiveSet } from 'store/slices/productModalSlice';

export default function CategorySlider({ customClassNames, title, products, typeScrollBar, allowTouchMove = true, keySlider, addToCartOnClick = false }) {

  const dispatch = useDispatch()

  const onClickHandler = (item, e) => {
    dispatch(pushProduct(item));
    
    if (e.target.tagName !== 'DIV') {
      e.target.classList.add('ui-btn_added');
      e.target.focus();
    }

    dispatch(productModalActiveSet(true));
    setTimeout(() => {
      e.target.classList.remove('ui-btn_added');
      e.target.blur();
    }, 3000);
  };

  const swiperRef = useRef()
  const { ref, inView } = useInView({ threshold: 0.5 });

  const { otherSliders } = useSelector(state => state.elementInView)

  useEffect(() => {
    try {
      if (otherSliders[keySlider] === undefined) {
        dispatch(setCustomSlider({ sliderName: keySlider, payload: true }))
      }
    } catch (error) {
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
  }, [dispatch, inView, otherSliders, keySlider, allowTouchMove])

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
          {products.map((item) => {
            const { id, type, excludeForMap, nameWrap, nameWithoutBrand, imgPath, pageLinkName, pageLinkNameWithCategory, price } = item;
            if (!excludeForMap) {
              return (
                <SwiperSlide key={id} className={type === 'accessory' ? "category-slider__item category-slider__item_accessory" : "category-slider__item category-slider__item"}>

                  <div className="category-slider__img-with-content">
                    {addToCartOnClick ? (
                      <div onClick={(e) => onClickHandler(item, e)} className="category-slider__overlay-link"></div>
                    ) : (
                      <Link href={pageLinkNameWithCategory || pageLinkName}>
                        <a href={pageLinkNameWithCategory || pageLinkName} className="category-slider__overlay-link"></a>
                      </Link>
                    )}
                    <div className="category-slider__image">
                      <Image
                        src={imgPath}
                        quality={100}
                        objectFit="contain"
                        layout='fill'
                        alt="Segway image in slider"
                      />
                    </div>
                    <p className="text text_25 category-slider__name">{nameWithoutBrand || nameWrap}</p>

                    {type === 'accessory' ? (
                      <div className="category-slider__prices">
                        <p className="category-slider__price-current">${price}</p>
                      </div>
                    ) : (
                      <div className="category-slider__prices">
                        <p className="category-slider__price-current">${price}</p>
                        <span className='category-slider__price-separator'>or</span>
                        <div className="category-slider__price-period">
                          <p className="category-slider__price-period-key">$7</p>
                          <p className="category-slider__price-period-value">/ month</p>
                        </div>
                      </div>)
                    }
                  </div>

                  {addToCartOnClick ? (
                    <button onClick={(e) => onClickHandler(item, e)} className="ui-btn category-slider__see-more">
                      <span>ADD TO CART</span>
                    </button>
                  ) : (
                    <Link href={pageLinkNameWithCategory || pageLinkName}>
                      <a href={pageLinkNameWithCategory || pageLinkName} className="ui-btn category-slider__see-more">
                        <span>SEE MORE</span>
                      </a>
                    </Link>
                  )}

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
