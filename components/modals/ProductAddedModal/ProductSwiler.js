import Image from 'next/image';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcPrevious, FcNext } from 'react-icons/fc';
import imagePlaceholder from '@/base/circle-placeholder.svg';
import iconCheckForAccesoeriesSlider from '@/base/icon-check-bold.svg'

export default function ProductSwiler({ accessoeries, handler }) {
  return (
    <div className="product-cart-slider">
      <div className="product-cart-slider__container">
        <p className="text text_25 product-cart-slider__title">Accessories</p>
        <div className="product-cart-slider__swiper-wrapper">
          <div className="product-cart-slider__swiper">
            <Swiper
              modules={[Navigation, FreeMode]}
              spaceBetween={10}
              slidesPerView={2}
              loop={false}
              freeMode={true}
              navigation={{
                prevEl: '.product-cart-slider__nav_prev',
                nextEl: '.product-cart-slider__nav_next'
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 16
                }
              }}
            >

              {accessoeries.map((item) => {
                const { id, name, nameWrap, description, price, imgPath } = item;
                return (
                  <SwiperSlide onClick={(e) => handler(e, item)} key={id} className="product-cart-slider__item">
                    <div className="product-cart-slider__img-main-wrapper">
                      <div className="product-cart-slider__img-wrapper">
                        <Image objectFit="contain" width="152" height="155" layout="responsive" src={imgPath} alt={name} className="product-cart-slider__img" placeholder="blur" blurDataURL={imagePlaceholder} />
                      </div>
                      <div className="product-cart-slider__overlay">
                        <p className="product-cart-slider__overlay-text">Added to card</p>
                        <div className="product-cart-slider__overlay-icon">
                          <Image className="product-cart-slider__overlay-icon" src={iconCheckForAccesoeriesSlider} alt="icon" />
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
