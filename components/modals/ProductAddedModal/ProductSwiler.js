import Image from 'next/image';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcPrevious, FcNext } from 'react-icons/fc';
import imagePlaceholder from '@/base/circle-placeholder.svg';
import iconCheckForAccesoeriesSlider from '@/base/icon-check-bold.svg'

export default function ProductSwiler({ accessoeries, handler }) {
  return (
    <div className="product-modal__accessoeries">
      <p className="text text_25 product-modal__accessoeries-title">Accessories</p>
      <div className="product-modal__accessoeries-swiper-wrapper">
        <div className="product-modal__accessoeries-swiper">
          <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={10}
            slidesPerView={2}
            loop={false}
            freeMode={true}
            navigation={{
              prevEl: '.product-modal__nav_prev',
              nextEl: '.product-modal__nav_next'
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
                <SwiperSlide onClick={(e) => handler(e, item)} key={id} className="product-modal__accessoeries-item">
                  <div className="product-modal__accessoeries-img-main-wrapper">
                    <div className="product-modal__accessoeries-img-wrapper">
                      <Image objectFit="contain" width="152" height="155" layout="responsive" src={imgPath} alt={name} className="product-modal__accessoeries-img" placeholder="blur" blurDataURL={imagePlaceholder} />
                    </div>
                    <div className="product-modal__accessoeries-overlay">
                      <p className="product-modal__accessoeries-overlay-text">Added to card</p>
                      <div className="product-modal__accessoeries-overlay-icon">
                        <Image className="product-modal__accessoeries-overlay-icon" src={iconCheckForAccesoeriesSlider} alt="icon" />
                      </div>
                    </div>
                  </div>
                  <p className="product-modal__accessoeries-name">{name}</p>
                  <p className="product-modal__accessoeries-price">${price}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="product-modal__navigation">
            <div aria-label="swipe to left accessoeries" className="product-modal__nav product-modal__nav_prev">
              <FcPrevious className="product-modal__nav-icon" />
            </div>
            <div aria-label="swipe to right accessoeries" className="product-modal__nav product-modal__nav_next">
              <FcNext className="product-modal__nav-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
