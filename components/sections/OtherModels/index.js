import {Scrollbar, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import {useRef} from 'react';
import Link from 'next/link';
import circlePlaceholder from '@/base/circle-placeholder.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default function OtherModels({items}) {
  const swiperRef = useRef(null);
  const filteredModels = [items[0], items[1], items[2], items[3], items[4], items[5], items[6]]
  return (
    <div className="other-models">
      <div className="container other-models__container">
        <p className="title title_fz-20 other-models__title">OTHER MODELS</p>
        <div className="other-models__subtitle">Check out the entire line of Segway scooters</div>
        <div ref={swiperRef} className="other-models__swiper">
          <Swiper
            modules={[Scrollbar, FreeMode]}
            slidesPerView={1.8}
            freeMode={true}
            spaceBetween={10}
            loop={false}
            allowTouchMove={true}
            scrollbar={{
              el: '.other-models__swiper-scrollbar',
              draggable: true
            }}
            onReachEnd={(e) => {
              // TODO: доделать
              // swiperRef.current.classList.add('reached')
            }}
            breakpoints={{
              480: {
                loop: false,
                slidesPerView: 2.2,
                spaceBetween: 10,
                allowTouchMove: true
              },
              576: {
                loop: false,
                slidesPerView: 3,
                spaceBetween: 10,
                allowTouchMove: true
              },
              768: {
                loop: false,
                spaceBetween: 0,
                allowTouchMove: false,
                centeredSlides: false
              }
            }}
            onInit={(el) => {
              try {
                if (window.innerWidth <= 768) {
                  el.slideNext();
                }
              } catch (error) {}
            }}>
            {filteredModels.map(({id, name, price, imgPath}) => (
              <SwiperSlide key={id} className="swiper-slide other-models__item">
                <div className="other-models__item-wrapper">
                  <Link href="#">
                    <a className="other-models__link">
                      <div className="other-models__img-wrapper">
                        <Image objectFit="contain" className="other-models__img" src={imgPath} alt={name} layout="fill" placeholder="blur" blurDataURL={circlePlaceholder} />
                      </div>
                      <p className="text text_25 other-models__name">{name}</p>
                      <div className="other-models__price">
                        <p className="text text_uppercase other-models__price-value">{price}</p>
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="ui-btn other-models__see-more">
                      <span>SEE MORE</span>
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide className="swiper-slide swiper-slide_form other-models__form">
              <p className="other-models__form-title">DIDN’T FIND A MODEL?</p>
              <p className="text other-models__form-text">Leave your contact details and we will help you with the choice</p>
              <input placeholder="+7 (___) ___-__-__" type="text" className="other-models__form-input" />
              <Link href="#">
                <a className="ui-btn other-models__see-more">
                  <span>SEE MORE</span>
                </a>
              </Link>
            </SwiperSlide>

            {/* Заглушки (чтобы отцентрировать слайд с формой) */}
            <SwiperSlide className="swiper-slide other-models__item other-models__item_hide">
              <div className="other-models__item-wrapper">
                <p className="text text_25 other-models__name"></p>
                <div className="other-models__price">
                  <p className="text text_uppercase other-models__price-value"></p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="other-models__swiper-scrollbar"></div>
      </div>
    </div>
  );
}
