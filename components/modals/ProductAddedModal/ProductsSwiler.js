import Image from 'next/image';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcPrevious, FcNext } from 'react-icons/fc';
import imagePlaceholder from '@/base/circle-placeholder.svg';
import iconCheckForAccesoeriesSlider from '@/base/icon-check-bold.svg'
import { useDispatch } from 'react-redux';
import { pushProduct } from 'store/slices/productCartSlice';
import classNames from 'classnames';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ProductSwiler({ title, customClasses, accessoeries }) {

  const dispatch = useDispatch()

  const addItemToCartWithAnimation = (e, item) => {
    dispatch(pushProduct(item))
    e.target.classList.add('added');
    setTimeout(() => {
      e.target.classList.remove('added');
    }, 600);
  };

  return (
    <div className={classNames('product-cart-slider', classNames(customClasses))}>
      <div className="product-cart-slider__container">
        {title && <p className="text text_25 product-cart-slider__title">{title}</p>}
        <div className="product-cart-slider__swiper-wrapper">
          <div className="product-cart-slider__swiper">
            <Swiper
              modules={[Navigation, FreeMode]}
              spaceBetween={0}
              slidesPerView="auto"
              loop={false}
              freeMode={true}
              allowTouchMove={true}
              navigation={{
                prevEl: '.product-cart-slider__nav_prev',
                nextEl: '.product-cart-slider__nav_next'
              }}
            >

              {accessoeries.map((item) => {
                const { id, name, price, imgPath } = item;
                return (
                  <SwiperSlide onClick={(e) => addItemToCartWithAnimation(e, item)} key={id} className="product-cart-slider__item">
                    <div className="product-cart-slider__img-main-wrapper">
                      <div className="product-cart-slider__img-wrapper">
                        <Image
                          objectFit="contain"
                          layout="fill"
                          src={imgPath}
                          alt={name}
                          placeholder="blur"
                          blurDataURL={imagePlaceholder}
                        />
                      </div>
                      <div className="product-cart-slider__overlay">
                        <p className="product-cart-slider__overlay-text">Added to card</p>
                        <div className="product-cart-slider__overlay-icon">
                          <Image src={iconCheckForAccesoeriesSlider} alt="icon" />
                        </div>
                      </div>
                    </div>
                    <p className="product-cart-slider__name">{name}</p>
                    <p className="product-cart-slider__price">${price}</p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="product-cart-slider__navigation">
              <div aria-label="swipe to left accessoeries" className="product-cart-slider__nav product-cart-slider__nav_prev">
                <FcPrevious className="product-cart-slider__nav-icon" />
              </div>
              <div aria-label="swipe to right accessoeries" className="product-cart-slider__nav product-cart-slider__nav_next">
                <FcNext className="product-cart-slider__nav-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
