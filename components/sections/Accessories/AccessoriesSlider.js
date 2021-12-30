import {useCart} from 'react-use-cart';
import {Scrollbar, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import UiLink from '@/ui/UiLink';
import circlePlaceholder from '@/base/circle-placeholder.svg';
import {useDispatch} from 'react-redux';
import {setProductModal} from '../../../store/actions/productModal';
import 'swiper/css';
import 'swiper/css/scrollbar';
import {useEffect, useRef, useState} from 'react';
import {useInView} from 'react-intersection-observer';

export default function AccessoriesSlider({items}) {
  const {addItem} = useCart();
  const dispatch = useDispatch();

  const onClickHandler = (id, e) => {
    addItem(id);
    e.target.classList.add('ui-btn_added');
    e.target.focus();
    dispatch(setProductModal(true));
    setTimeout(() => {
      e.target.classList.remove('ui-btn_added');
      e.target.blur();
    }, 3000);
  };

  const swiperRef = useRef(null);
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(() => {
    if (document.readyState === 'complete' && window.innerWidth <= 768 && inView) {
      try {
        swiperRef.current.slideNext();
        setTimeout(() => {
          try {
            swiperRef.current.slidePrev();
          } catch (error) {}
        }, 350);
      } catch (error) {}
    }
  }, [swiperRef, inView]);

  const [speed, setSeed] = useState(1200);

  return (
    <div ref={ref} className="accessories-slider">
      <div id="accessories" className="container accessories-slider__container">
        <p className="title accessories-slider__title">Accessories</p>
        <div className="accessories-slider__swiper">
          <Swiper
            ref={swiperRef}
            modules={[Scrollbar, FreeMode]}
            slidesPerView={2.1}
            spaceBetween={15}
            speed={speed}
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
            {items.map((item) => {
              const {id, name, nameWrap, description, price, imgPathWithCircle} = item;
              return (
                <SwiperSlide key={id} className="swiper-slide accessories-slider__item">
                  <div className="accessories-slider__item-wrapper">
                    <div className="accessories-slider__img-wrapper">
                      <Image objectFit="contain" className="accessories-slider__img" src={imgPathWithCircle} alt="NineboT Engine Speaker" layout="fill" placeholder="blur" blurDataURL={circlePlaceholder} />
                    </div>
                    <p className="text text_25 accessories-slider__name">{nameWrap}</p>
                    <p className="text text_13 text_grey2 accessories-slider__description">
                      <span className="accessories-slider__description-text">{description}</span>
                    </p>
                    <div className="accessories-slider__price">
                      <p className="text text_16 accessories-slider__price-key">Price:</p>
                      <p className="text text_uppercase accessories-slider__price-value">${price}</p>
                    </div>
                    <button onClick={(e) => onClickHandler(item, e)} className="ui-btn accessories-slider__add-cart">
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="accessories-slider__swiper-scrollbar"></div>
        <div className="accessories-slider__bottom">
          <UiLink href="#" classNameLink="ui-link ui-link_type-1 accessories-slider__bottom-link" innerText="SEE MORE" />
        </div>
      </div>
    </div>
  );
}
