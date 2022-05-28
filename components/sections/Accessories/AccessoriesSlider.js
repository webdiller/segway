import { Scrollbar, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import circlePlaceholder from '@/base/circle-placeholder.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { pushProduct } from 'store/slices/productCartSlice';
import { productModalActiveSet } from 'store/slices/productModalSlice';
import { disableAccessoriesSlider } from 'store/slices/elementInViewSlice';
import UsePreorderModalHook from 'store/hooks/UsePreorderModalHook';
import { filterProductByStatus } from '@/helpers/filterProductByStatus';

export default function AccessoriesSlider({ items }) {
  const dispatch = useDispatch();
  const { accessoriesSlider } = useSelector(state => state.elementInView)

  const { requestAPreorderModalHandler } = UsePreorderModalHook()

  const buttonElement = useRef(null);
  const [hidenOtherAccessories, setHiddenOtherAccessories] = useState(true);

  const onClickHandler = (item, e) => {
    dispatch(pushProduct(item));
    e.target.classList.add('ui-btn_added');
    e.target.focus();
    dispatch(productModalActiveSet(true));
    setTimeout(() => {
      e.target.classList.remove('ui-btn_added');
      e.target.blur();
    }, 3000);
  };

  const onToggleHiddenOthersetAccessories = () => {
    setHiddenOtherAccessories((prev) => !prev);
  };

  const swiperRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (document.readyState === 'complete' && window.innerWidth <= 768 && inView && accessoriesSlider) {
      try {
        swiperRef.current.slideNext();
        setTimeout(() => {
          try {
            swiperRef.current.slidePrev();
          } catch (error) { }
        }, 450);
      } catch (error) { }
      finally {
        dispatch(disableAccessoriesSlider(false))
      }
    }
  }, [swiperRef, inView, accessoriesSlider, dispatch]);

  return (
    <div ref={ref} className={hidenOtherAccessories ? 'accessories-slider accessories-slider_hide-other-accessories' : 'accessories-slider'}>
      <div id="accessories" className="container accessories-slider__container">
        <p className="title accessories-slider__title">Accessories</p>
        <div className="accessories-slider__swiper">
          <Swiper
            ref={swiperRef}
            modules={[Scrollbar, FreeMode]}
            slidesPerView={2.1}
            spaceBetween={15}
            speed={1200}
            loop={false}
            freeMode={true}
            scrollbar={{
              el: '.accessories-slider__swiper-scrollbar',
              draggable: true
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
                allowTouchMove: false
              }
            }}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}>
            {filterProductByStatus(items).map((item) => {
              const { id, status, type, imgPath, nameWrap, description, price } = item;
              let itemClass = "swiper-slide accessories-slider__item";
              if (status == 'out-of-stock') itemClass = "swiper-slide accessories-slider__item blackout"
              return (
                <SwiperSlide key={id} className={itemClass}>
                  <div className="accessories-slider__item-wrapper">
                    <div className="accessories-slider__img-wrapper">
                      <Image objectFit="contain" className="accessories-slider__img" src={imgPath} alt="NineboT Engine Speaker" layout="fill" placeholder="blur" blurDataURL={circlePlaceholder} />
                    </div>
                    <p className="text text_25 accessories-slider__name">{nameWrap}</p>
                    <p className="text text_13 text_grey2 accessories-slider__description">
                      <span className="accessories-slider__description-text">{description}</span>
                    </p>
                    {type === 'accessory' ? (
                      <div className="accessories-slider__prices">
                        <p className="accessories-slider__price-current">${price}</p>
                      </div>
                    ) : (
                      <div className="accessories-slider__prices">
                        <p className="accessories-slider__price-current">${price}</p>
                        <span className='accessories-slider__price-separator'>or</span>
                        <div className="accessories-slider__price-period">
                          <p className="accessories-slider__price-period-key">$7</p>
                          <p className="accessories-slider__price-period-value">/ month</p>
                        </div>
                      </div>)
                    }
                    {status == 'out-of-stock' ? (
                      <button onClick={(e) => requestAPreorderModalHandler(item.name, item.pageLinkNameWithCategory)} className="ui-btn ui-btn_fill-black accessories-slider__add-cart">
                        <span>REQUEST</span>
                      </button>
                    ) : (
                      <button onClick={(e) => onClickHandler(item, e)} className="ui-btn accessories-slider__add-cart">
                        <span>ADD TO CART</span>
                      </button>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="accessories-slider__swiper-scrollbar"></div>
        <div className="accessories-slider__bottom">
          <button ref={buttonElement} onClick={onToggleHiddenOthersetAccessories} className={items.length <= 9 ? 'hide ui-btn accessories-slider__bottom-link' : 'ui-btn accessories-slider__bottom-link'}>
            <span>{hidenOtherAccessories ? 'See more' : 'See less'} </span>
          </button>
        </div>
      </div>
    </div>
  );
}
